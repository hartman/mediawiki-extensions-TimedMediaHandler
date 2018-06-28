/**
 * Selector based embedPlayer processing
 *
 * @param {Function=}
 *      callback Optional Function to be called once video interfaces
 *      are ready
 *
 */

( function ( mw, $ ) {
	'use strict';

	mw.processEmbedPlayers = function ( playerSet, callback ) {
		var addedPlayersFlag,
			// The player id list container
			playerIdList = [];

		mw.log( 'processEmbedPlayers:: playerSet: ', playerSet );

		// Check if the selected player set is ready if ready issue the parent callback
		function areSelectedPlayersReady() {
			var playersLoaded = true;
			$.each( playerIdList, function ( inx, playerId ) {
				if ( !$( '#' + playerId )[ 0 ].playerReadyFlag ) {
					playersLoaded = false;
					return false;
				}
			} );
			if ( playersLoaded ) {
				if ( callback ) {
					callback();
				}
			}
		}

		/**
		 * Adds a player element for the embedPlayer to rewrite
		 *
		 * uses embedPlayer interface on audio / video elements uses mvPlayList
		 * interface on playlist elements
		 *
		 * Once a player interface is established the following chain of functions
		 * are called;
		 *
		 * self.checkPlayerSources()
		 * self.setupSourcePlayer()
		 * self.updatePlaybackInterface()
		 * self.selectedPlayer.load()
		 * self.showPlayer()
		 *
		 * @param {Element}
		 *      playerElement DOM element to be swapped
		 */
		function addPlayerElement( playerElement ) {
			var waitForMeta, ranPlayerSwapFlag;
			mw.log( 'EmbedPlayer:: addElement:: ' + playerElement.id );

			// Be sure to "stop" the target ( Firefox 3x keeps playing
			// the video even though its been removed from the DOM )
			if ( playerElement.pause ) {
				playerElement.pause();
			}

			// Allow modules to override the wait for metadata flag:
			$( mw ).trigger( 'EmbedPlayerWaitForMetaCheck', playerElement );

			// DOM *could* load height, width and duration eventually, in some browsers
			// By default, don't bother waiting for this.
			waitForMeta = false;

			// if a plugin has told us not to waitForMeta, don't
			if ( playerElement.waitForMeta !== false ) {
				// Check if we should wait for metadata, after all
				// eslint-disable-next-line no-use-before-define
				waitForMeta = waitForMetaCheck( playerElement );
			}

			ranPlayerSwapFlag = false;

			// Local callback to runPlayer swap once playerElement has metadata
			function runPlayerSwap() {
				var playerInterface, inDomPlayer;
				// Don't run player swap twice
				if ( ranPlayerSwapFlag ) {
					return;
				}
				ranPlayerSwapFlag = true;
				mw.log( 'processEmbedPlayers::runPlayerSwap::' + $( playerElement ).attr( 'id' ) );

				playerInterface = new mw.EmbedPlayer( playerElement );
				// eslint-disable-next-line no-use-before-define
				inDomPlayer = swapEmbedPlayerElement( playerElement, playerInterface );

				// IE/Edge with WebM components re-triggers autoplay after removal as well.
				if ( playerElement.pause ) {
					playerElement.pause();
				}

				// Trigger the EmbedPlayerNewPlayer for embedPlayer interface
				mw.log( 'processEmbedPlayers::trigger:: EmbedPlayerNewPlayer ' + inDomPlayer.id );

				// Allow plugins to add bindings to the inDomPlayer
				$( mw ).trigger( 'EmbedPlayerNewPlayer', inDomPlayer );

				// Add a player ready binding:
				$( inDomPlayer ).on( 'playerReady.swap', function () {
					$( inDomPlayer ).off( 'playerReady.swap' );
					areSelectedPlayersReady();
				} );

				//
				// Allow modules to block player build out
				//
				// this is needed in cases where you need to do an asynchronous
				// player interface setup. like iframes asynchronous announcing its ready for
				// bindings that can affect player setup.
				mw.log( 'EmbedPlayer::addPlayerElement :trigger startPlayerBuildOut:' + inDomPlayer.id );
				$( inDomPlayer ).triggerQueueCallback( 'startPlayerBuildOut', function () {
				// Issue the checkPlayerSources call to the new player
				// interface: make sure to use the element that is in the DOM:
					inDomPlayer.checkPlayerSources();
				} );
			}

			if ( waitForMeta && mw.config.get( 'EmbedPlayer.WaitForMeta' ) ) {
				mw.log( 'processEmbedPlayers::WaitForMeta ( video missing height (' +
					$( playerElement ).attr( 'height' ) + '), width (' +
					$( playerElement ).attr( 'width' ) + ') or duration: ' +
					$( playerElement ).attr( 'duration' )
				);
				$( playerElement ).on( 'loadedmetadata', runPlayerSwap );

				// Time-out of 5 seconds ( maybe still playable but no timely metadata )
				setTimeout( runPlayerSwap, 5000 );
				return;
			} else {
				runPlayerSwap();
				return;
			}
		}

		/**
		 * Check if we should wait for metadata.
		 *
		 * @return 	true if the size is "likely" to be updated by waiting for metadata
		 * 			false if the size has been set via an attribute or is already loaded
		 */
		function waitForMetaCheck( playerElement ) {
			var waitForMeta = false;

			// Don't wait for metadata for non html5 media elements
			if ( !playerElement ) {
				return false;
			}
			if ( !playerElement.tagName || ( playerElement.tagName.toLowerCase() !== 'audio' && playerElement.tagName.toLowerCase() !== 'video' ) ) {
				return false;
			}
			// If we don't have a native player don't wait for metadata
			if (
				!mw.EmbedTypes.getMediaPlayers().isSupportedPlayer( 'oggNative' ) &&
				!mw.EmbedTypes.getMediaPlayers().isSupportedPlayer( 'mp3Native' ) &&
				!mw.EmbedTypes.getMediaPlayers().isSupportedPlayer( 'webmNative' ) &&
				!mw.EmbedTypes.getMediaPlayers().isSupportedPlayer( 'h264Native' ) &&
				!mw.EmbedTypes.getMediaPlayers().isSupportedPlayer( 'appleVdnPlayer' )
			) {
				return false;
			}

			// CSS video defaults ( firefox )
			if (
				$( playerElement ).css( 'width' ) === '300px' &&
				$( playerElement ).css( 'height' ) === '150px'
			) {
				waitForMeta = true;
			} else {
				// Check if we should wait for duration:
				if (
					$( playerElement ).attr( 'duration' ) ||
					$( playerElement ).attr( 'durationHint' ) ||
					$( playerElement ).attr( 'data-durationhint' )
				) {
					// height, width and duration set; do not wait for meta data:
					return false;
				} else {
					waitForMeta = true;
				}
			}

			// Firefox ~ sometimes~ gives -1 for unloaded media
			if ( $( playerElement ).attr( 'width' ) === -1 || $( playerElement ).attr( 'height' ) === -1 ) {
				waitForMeta = true;
			}

			// Google Chrome / safari gives 0 width height for unloaded media
			if (
				$( playerElement ).attr( 'width' ) === 0 ||
				$( playerElement ).attr( 'height' ) === 0
			) {
				waitForMeta = true;
			}

			// Firefox default width height is ~sometimes~ 150 / 300
			if ( playerElement.height === 150 && playerElement.width === 300 ) {
				waitForMeta = true;
			}

			// Make sure we have a src attribute or source child
			// ( i.e not a video tag to be dynamically populated or looked up from
			// xml resource description )
			if ( waitForMeta &&
			(
				$( playerElement ).attr( 'src' ) ||
				$( playerElement ).find( 'source[src]' ).length !== 0
			)
			) {
				// Detect src type ( if no type set )
				return true;
			} else {
				// playerElement is not likely to update its meta data ( no src )
				return false;
			}
		}

		/**
		 * swapEmbedPlayerElement
		 *
		 * Takes a video element as input and swaps it out with an embed player interface
		 *
		 * @param {Element}
		 *      targetElement Element to be swapped
		 * @param {Object}
		 *      playerInterface Interface to swap into the target element
		 */
		function swapEmbedPlayerElement( targetElement, playerInterface ) {
			var method, dataAttributes, $spinner,
				// Create a new element to swap the player interface into
				swapPlayerElement = document.createElement( 'div' );

			mw.log( 'processEmbedPlayers::swapEmbedPlayerElement: ' + targetElement.id );

			// Add a class that identifies all embedPlayers:
			$( swapPlayerElement ).addClass( 'mwEmbedPlayer' );

			// Get properties / methods from playerInterface:
			for ( method in playerInterface ) {
				if ( method !== 'readyState' ) { // readyState crashes IE ( don't include )
					swapPlayerElement[ method ] = playerInterface[ method ];
				}
			}
			// copy over css text:
			swapPlayerElement.style.cssText = targetElement.style.cssText;
			// player element must always be relative to host video and image layout
			swapPlayerElement.style.position = 'relative';

			// Copy any data attributes from the target player element over to the swapPlayerElement
			dataAttributes = mw.config.get( 'EmbedPlayer.DataAttributes' );
			if ( dataAttributes ) {
				$.each( dataAttributes, function ( attrName ) {
					if ( $( targetElement ).data( attrName ) ) {
						$( swapPlayerElement ).data( attrName, $( targetElement ).data( attrName ) );
					}
				} );
			}
			// Check for Persistent native player ( should keep the video embed around )
			if (
				playerInterface.isPersistentNativePlayer() ||
				// Also check for native controls on a video or audio tag
				(
					playerInterface.useNativePlayerControls() &&
					( targetElement.nodeName === 'video' || targetElement.nodeName === 'audio' )
				)
			) {

				$( targetElement )
					.attr( 'id', playerInterface.pid )
					.addClass( 'nativeEmbedPlayerPid' )
					.show()
					.after(
						$( swapPlayerElement ).css( 'display', 'none' )
					);

			} else {
				$( targetElement ).replaceWith( swapPlayerElement );
			}

			// If we don't already have a loadSpiner add one:
			if ( $( '#loadingSpinner_' + playerInterface.id ).length === 0 && $.client.profile().name !== 'firefox' ) {
				if ( playerInterface.useNativePlayerControls() || playerInterface.isPersistentNativePlayer() ) {
					$spinner = $( targetElement )
						.getAbsoluteOverlaySpinner();
				} else {
					$spinner = $( swapPlayerElement ).getAbsoluteOverlaySpinner();
				}
				$spinner.attr( 'id', 'loadingSpinner_' + playerInterface.id );
			}
			return swapPlayerElement;
		}

		// Add a loader for <div> embed player rewrites:
		$( playerSet ).each( function ( index, playerElement ) {
			var posterSrc, width, height;

			// Make sure the playerElement has an id:
			if ( !$( playerElement ).attr( 'id' ) ) {
				$( playerElement ).attr( 'id', 'mwe_vid' + ( index ) );
			}
			// Add the player Id to the playerIdList
			playerIdList.push( $( playerElement ).attr( 'id' ) );

			// If we are dynamically embedding on a "div" check if we can
			// add a poster image behind the loader:
			if (
				playerElement.nodeName.toLowerCase() === 'div' &&
				$( playerElement ).attr( 'poster' )
			) {
				posterSrc = $( playerElement ).attr( 'poster' );

				// Set image size:
				width = $( playerElement ).width();
				height = $( playerElement ).height();
				if ( !width ) {
					width = '100%';
				}
				if ( !height ) {
					height = '100%';
				}

				mw.log( 'EmbedPlayer:: set loading background: ' + posterSrc );
				$( playerElement ).append(
					$( '<img>' )
						.attr( 'src', posterSrc )
						.css( {
							position: 'absolute',
							width: width,
							height: height
						} )
				);
			}
		} );

		// Make sure we have user preference setup for setting preferences on video selection
		addedPlayersFlag = false;
		mw.log( 'processEmbedPlayers:: Do: ' + $( playerSet ).length + ' players ' );
		// Add each selected element to the player manager:
		$( playerSet ).each( function ( index, playerElement ) {
			// Make sure the video tag was not generated by our library:
			if ( $( playerElement ).hasClass( 'nativeEmbedPlayerPid' ) ) {
				$( '#loadingSpinner_' + $( playerElement ).attr( 'id' ) ).remove();
				mw.log( 'processEmbedPlayers::$.embedPlayer skip embedPlayer gennerated video: ' + playerElement );
			} else {
				addedPlayersFlag = true;
				// Add the player
				addPlayerElement( playerElement );
			}
		} );
		if ( !addedPlayersFlag ) {
			// Run the callback directly if no players were added
			if ( callback ) {
				callback();
			}
		}
	};

}( mediaWiki, jQuery ) );
