<?php
	global $wgVideoPlayerSkinModule;
	// Register all the EmbedPlayer modules
	return [
			'jquery.embedPlayer' => [ 'scripts' => 'resources/jquery.embedPlayer.js' ],
			'mw.EmbedPlayer.loader' => [
				'scripts' => 'resources/mw.EmbedPlayer.loader.js',
				'dependencies' => 'jquery.embedPlayer',
			],
			'mw.MediaElement' => [
				'scripts' => 'resources/mw.MediaElement.js',
				'dependencies' => [
					'ext.tmh.OgvJsSupport',
				],
			],
			'mw.MediaPlayer' => [ 'scripts' => 'resources/mw.MediaPlayer.js' ],
			'mw.MediaPlayers' => [
				'scripts' => 'resources/mw.MediaPlayers.js',
				'dependencies' => 'mw.MediaPlayer'
			],
			'mw.MediaSource' => [
				'scripts' => 'resources/mw.MediaSource.js',
				'dependencies' => 'mw.MwEmbedSupport',
			],
			'mw.EmbedTypes' => [
				'scripts' => 'resources/mw.EmbedTypes.js',
				'dependencies' =>  [
					'mw.MediaPlayers',
					'mediawiki.Uri',
					'jquery.client',
				]
			],
			'mw.EmbedPlayer' => [
				'scripts' => [
					'resources/mw.processEmbedPlayers.js',
					'resources/mw.EmbedPlayer.js',
					'resources/skins/mw.PlayerControlBuilder.js',
				],
				'dependencies' => [
					// mwEmbed support module
					'mediawiki.client',
					'mediawiki.UtilitiesTime',
					'mediawiki.Uri',
					'mediawiki.absoluteUrl',
					'mediawiki.jqueryMsg',

					// Browser fullscreen api support:
					'fullScreenApi',

					// Kinda need this
					'mw.MwEmbedSupport',

					// We always end up loading native player
					'mw.EmbedPlayerNative',

					// Sub classes:
					'mw.MediaElement',
					'mw.MediaPlayers',
					'mw.MediaSource',
					'mw.EmbedTypes',

					// jQuery dependencies:
					'jquery.client',
					'jquery.hoverIntent',
					'jquery.cookie',
					'jquery.ui.mouse',
					'jquery.debouncedresize',
					'jquery.embedMenu',
					'jquery.ui.slider',
					'jquery.ui.touchPunch',

					// Set to mw.PlayerSkinKskin or mw.PlayerSkinMvpcf in config
					$wgVideoPlayerSkinModule
				],
				'styles' => 'resources/skins/EmbedPlayer.css',
				'messages' =>[
					"mwe-embedplayer-credit-title",
					"mwe-embedplayer-credit-date",
					"mwe-embedplayer-credit-author",
					"mwe-embedplayer-nocredits",
					"mwe-embedplayer-loading_plugin",
					"mwe-embedplayer-select_playback",
					"mwe-embedplayer-link_back",
					"mwe-embedplayer-error_swap_vid",
					"mwe-embedplayer-add_to_end_of_sequence",
					"mwe-embedplayer-missing_video_stream",
					"mwe-embedplayer-play_clip",
					"mwe-embedplayer-pause_clip",
					"mwe-embedplayer-volume_control",
					"mwe-embedplayer-player_options",
					"mwe-embedplayer-timed_text",
					"mwe-embedplayer-player_fullscreen",
					"mwe-embedplayer-next_clip_msg",
					"mwe-embedplayer-prev_clip_msg",
					"mwe-embedplayer-current_clip_msg",
					"mwe-embedplayer-seek_to",
					"mwe-embedplayer-paused",
					"mwe-embedplayer-download_segment",
					"mwe-embedplayer-download_full_video",
					"mwe-embedplayer-download_full_audio",
					"mwe-embedplayer-download_right_click",
					"mwe-embedplayer-download_clip",
					"mwe-embedplayer-download_text",
					"mwe-embedplayer-download",
					"mwe-embedplayer-share",
					"mwe-embedplayer-credits",
					"mwe-embedplayer-about-library",
					"mwe-embedplayer-about-library-desc",
					"mwe-embedplayer-clip_linkback",
					"mwe-embedplayer-choose_player",
					"mwe-embedplayer-no-player",
					"mwe-embedplayer-share_this_video",
					"mwe-embedplayer-share_this_audio",
					"mwe-embedplayer-video_credits",
					"mwe-embedplayer-no-video_credits",
					"mwe-embedplayer-kaltura-platform-title",
					"mwe-embedplayer-menu_btn",
					"mwe-embedplayer-close_btn",
					"mwe-embedplayer-ogg-player-vlc-player",
					"mwe-embedplayer-ogg-player-oggNative",
					"mwe-embedplayer-ogg-player-mp3Native",
					"mwe-embedplayer-ogg-player-aacNative",
					"mwe-embedplayer-ogg-player-h264Native",
					"mwe-embedplayer-ogg-player-webmNative",
					"mwe-embedplayer-ogg-player-vp9Native",
					"mwe-embedplayer-ogg-player-oggPlugin",
					"mwe-embedplayer-ogg-player-vlcAppPlayer",
					"mwe-embedplayer-ogg-player-IEWebMPrompt",
					"mwe-embedplayer-ogg-player-ogvJsPlayer",
					"mwe-embedplayer-ogg-player-quicktime-mozilla",
					"mwe-embedplayer-ogg-player-quicktime-activex",
					"mwe-embedplayer-ogg-player-flowplayer",
					"mwe-embedplayer-ogg-player-kplayer",
					"mwe-embedplayer-ogg-player-selected",
					"mwe-embedplayer-ogg-player-omtkplayer",
					"mwe-embedplayer-for_best_experience",
					"mwe-embedplayer-download-warn",
					"mwe-embedplayer-fullscreen-tip",
					"mwe-embedplayer-fullscreen-tip-osx",
					"mwe-embedplayer-do_not_warn_again",
					"mwe-embedplayer-playerSelect",
					"mwe-embedplayer-read_before_embed",
					"mwe-embedplayer-embed_site_or_blog",
					"mwe-embedplayer-embed_wiki",
					"mwe-embedplayer-related_videos",
					"mwe-embedplayer-seeking",
					"mwe-embedplayer-buffering",
					"mwe-embedplayer-video-h264",
					"mwe-embedplayer-video-webm",
					"mwe-embedplayer-video-flv",
					"mwe-embedplayer-video-ogg",
					"mwe-embedplayer-video-audio",
					"mwe-embedplayer-audio-mpeg",
					"mwe-embedplayer-video-3gp",
					"mwe-embedplayer-video-mpeg",
					"mwe-embedplayer-video-msvideo",
					"mwe-embedplayer-missing-source",
					"mwe-embedplayer-vlcapp-intro",
					"mwe-embedplayer-vlcapp-vlcapplinktext",
					"mwe-embedplayer-vlcapp-downloadapp",
					"mwe-embedplayer-vlcapp-openvideo",
					"mwe-embedplayer-vlcapp-downloadvideo",
					"mwe-embedplayer-vlcapp-vlcapppopup",
					"mwe-embedplayer-iewebmprompt-intro",
					"mwe-embedplayer-iewebmprompt-linktext",
					"mwe-embedplayer-iewebmprompt-outro",
				],
			],

			'mw.EmbedPlayerKplayer'	=> [ 'scripts' => 'resources/mw.EmbedPlayerKplayer.js' ],
			'mw.EmbedPlayerGeneric'	=> [ 'scripts' => 'resources/mw.EmbedPlayerGeneric.js' ],
			'mw.EmbedPlayerNative'	=> [ 'scripts' => 'resources/mw.EmbedPlayerNative.js' ],
			'mw.EmbedPlayerVLCApp'	=> [
				'scripts' => 'resources/mw.EmbedPlayerVLCApp.js',
				'dependencies' => [ 'mediawiki.Uri' ]
			],
			'mw.EmbedPlayerIEWebMPrompt' => [
				'scripts' => 'resources/mw.EmbedPlayerIEWebMPrompt.js',
				'styles' => 'resources/mw.EmbedPlayerIEWebMPrompt.css',
			],
			'mw.EmbedPlayerOgvJs' => [
				'scripts' => 'resources/mw.EmbedPlayerOgvJs.js',
				'dependencies' => [
					'jquery.spinner',
					'ext.tmh.OgvJsSupport',
				],
			],
			'mw.EmbedPlayerImageOverlay' => [ 'scripts' => 'resources/mw.EmbedPlayerImageOverlay.js' ],

			'mw.EmbedPlayerVlc' => [ 'scripts' => 'resources/mw.EmbedPlayerVlc.js' ],

			'mw.PlayerSkinKskin' => [
				'scripts' => 'resources/skins/kskin/mw.PlayerSkinKskin.js',
				'styles' => 'resources/skins/kskin/PlayerSkinKskin.css'
			],

			'mw.PlayerSkinMvpcf' => [
				'scripts' => 'resources/skins/mvpcf/mw.PlayerSkinMvpcf.js',
				'styles' => 'resources/skins/mvpcf/PlayerSkinMvpcf.css'
			],
	];
?>
