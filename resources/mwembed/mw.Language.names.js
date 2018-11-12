/**
* This could be replaced with a dynamic resource loader resource
*/

( function () {

	if ( !mw.Language ) {
		mw.Language = {};
	}
	/* eslint-disable quotes, quote-props */
	/**
	 * List of all languages mediaWiki supports ( Avoid an api call to get this same info )
	 * http://commons.wikimedia.org/w/api.php?action=query&meta=siteinfo&siprop=languages&format=jsonfm
	 */
	mw.Language.names = {
		"aa": "Qaf\u00e1r af",
		"ab": "\u0410\u04a7\u0441\u0443\u0430",
		"ace": "Ac\u00e8h",
		"af": "Afrikaans",
		"ak": "Akan",
		"aln": "Geg\u00eb",
		"als": "Alemannisch",
		"am": "\u12a0\u121b\u122d\u129b",
		"an": "Aragon\u00e9s",
		"ang": "Anglo-Saxon",
		"ar": "\u0627\u0644\u0639\u0631\u0628\u064a\u0629",
		"arc": "\u0710\u072a\u0721\u071d\u0710",
		"arn": "Mapudungun",
		"arz": "\u0645\u0635\u0631\u0649",
		"as": "\u0985\u09b8\u09ae\u09c0\u09af\u09bc\u09be",
		"ast": "Asturianu",
		"av": "\u0410\u0432\u0430\u0440",
		"avk": "Kotava",
		"ay": "Aymar aru",
		"az": "Az\u0259rbaycan",
		"ba": "\u0411\u0430\u0448\u04a1\u043e\u0440\u0442",
		"bar": "Boarisch",
		"bat-smg": "\u017demait\u0117\u0161ka",
		"bcc": "\u0628\u0644\u0648\u0686\u06cc \u0645\u06a9\u0631\u0627\u0646\u06cc",
		"bcl": "Bikol Central",
		"be": "\u0411\u0435\u043b\u0430\u0440\u0443\u0441\u043a\u0430\u044f",
		"be-tarask": "\u0411\u0435\u043b\u0430\u0440\u0443\u0441\u043a\u0430\u044f (\u0442\u0430\u0440\u0430\u0448\u043a\u0435\u0432\u0456\u0446\u0430)",
		"be-x-old": "\u0411\u0435\u043b\u0430\u0440\u0443\u0441\u043a\u0430\u044f (\u0442\u0430\u0440\u0430\u0448\u043a\u0435\u0432\u0456\u0446\u0430)",
		"bg": "\u0411\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438",
		"bh": "\u092d\u094b\u091c\u092a\u0941\u0930\u0940",
		"bi": "Bislama",
		"bm": "Bamanankan",
		"bn": "\u09ac\u09be\u0982\u09b2\u09be",
		"bo": "\u0f56\u0f7c\u0f51\u0f0b\u0f61\u0f72\u0f42",
		"bpy": "\u0987\u09ae\u09be\u09b0 \u09a0\u09be\u09b0/\u09ac\u09bf\u09b7\u09cd\u09a3\u09c1\u09aa\u09cd\u09b0\u09bf\u09af\u09bc\u09be \u09ae\u09a3\u09bf\u09aa\u09c1\u09b0\u09c0",
		"bqi": "\u0628\u062e\u062a\u064a\u0627\u0631\u064a",
		"br": "Brezhoneg",
		"bs": "Bosanski",
		"bug": "\u1a05\u1a14 \u1a15\u1a18\u1a01\u1a17",
		"bxr": "\u0411\u0443\u0440\u044f\u0430\u0434",
		"ca": "Catal\u00e0",
		"cbk-zam": "Chavacano de Zamboanga",
		"cdo": "M\u00ecng-d\u0115\u0324ng-ng\u1e73\u0304",
		"ce": "\u041d\u043e\u0445\u0447\u0438\u0439\u043d",
		"ceb": "Cebuano",
		"ch": "Chamoru",
		"cho": "Choctaw",
		"chr": "\u13e3\u13b3\u13a9",
		"chy": "Tsets\u00eahest\u00e2hese",
		"ckb": "Soran\u00ee / \u06a9\u0648\u0631\u062f\u06cc",
		"ckb-latn": "\u202aSoran\u00ee (lat\u00een\u00ee)\u202c",
		"ckb-arab": "\u202b\u06a9\u0648\u0631\u062f\u06cc (\u0639\u06d5\u0631\u06d5\u0628\u06cc)\u202c",
		"co": "Corsu",
		"cr": "N\u0113hiyaw\u0113win / \u14c0\u1426\u1403\u152d\u140d\u140f\u1423",
		"crh": "Q\u0131r\u0131mtatarca",
		"crh-latn": "\u202aQ\u0131r\u0131mtatarca (Latin)\u202c",
		"crh-cyrl": "\u202a\u041a\u044a\u044b\u0440\u044b\u043c\u0442\u0430\u0442\u0430\u0440\u0434\u0436\u0430 (\u041a\u0438\u0440\u0438\u043b\u043b)\u202c",
		"cs": "\u010cesky",
		"csb": "Kasz\u00ebbsczi",
		"cu": "\u0421\u043b\u043e\u0432\u0463\u0301\u043d\u044c\u0441\u043a\u044a / \u2c14\u2c0e\u2c11\u2c02\u2c21\u2c10\u2c20\u2c14\u2c0d\u2c1f",
		"cv": "\u0427\u04d1\u0432\u0430\u0448\u043b\u0430",
		"cy": "Cymraeg",
		"da": "Dansk",
		"de": "Deutsch",
		"de-at": "\u00d6sterreichisches Deutsch",
		"de-ch": "Schweizer Hochdeutsch",
		"de-formal": "Deutsch (Sie-Form)",
		"diq": "Zazaki",
		"dk": "Dansk (deprecated:da)",
		"dsb": "Dolnoserbski",
		"dv": "\u078b\u07a8\u0788\u07ac\u0780\u07a8\u0784\u07a6\u0790\u07b0",
		"dz": "\u0f47\u0f7c\u0f44\u0f0b\u0f41",
		"ee": "E\u028begbe",
		"el": "\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac",
		"eml": "Emili\u00e0n e rumagn\u00f2l",
		"en": "English",
		"en-gb": "British English",
		"eo": "Esperanto",
		"es": "Espa\u00f1ol",
		"et": "Eesti",
		"eu": "Euskara",
		"ext": "Estreme\u00f1u",
		"fa": "\u0641\u0627\u0631\u0633\u06cc",
		"ff": "Fulfulde",
		"fi": "Suomi",
		"fiu-vro": "V\u00f5ro",
		"fj": "Na Vosa Vakaviti",
		"fo": "F\u00f8royskt",
		"fr": "Fran\u00e7ais",
		"frc": "Fran\u00e7ais cadien",
		"frp": "Arpetan",
		"fur": "Furlan",
		"fy": "Frysk",
		"ga": "Gaeilge",
		"gag": "Gagauz",
		"gan": "\u8d1b\u8a9e",
		"gan-hans": "\u8d63\u8bed(\u7b80\u4f53)",
		"gan-hant": "\u8d1b\u8a9e(\u7e41\u9ad4)",
		"gd": "G\u00e0idhlig",
		"gl": "Galego",
		"glk": "\u06af\u06cc\u0644\u06a9\u06cc",
		"gn": "Ava\u00f1e'\u1ebd",
		"got": "\ud800\udf32\ud800\udf3f\ud800\udf44\ud800\udf39\ud800\udf43\ud800\udf3a",
		"grc": "\u1f08\u03c1\u03c7\u03b1\u03af\u03b1 \u1f11\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u1f74",
		"gsw": "Alemannisch",
		"gu": "\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0",
		"gv": "Gaelg",
		"ha": "\u0647\u064e\u0648\u064f\u0633\u064e",
		"hak": "Hak-k\u00e2-fa",
		"haw": "Hawai`i",
		"he": "\u05e2\u05d1\u05e8\u05d9\u05ea",
		"hi": "\u0939\u093f\u0928\u094d\u0926\u0940",
		"hif": "Fiji Hindi",
		"hif-deva": "\u092b\u093c\u0940\u091c\u0940 \u0939\u093f\u0928\u094d\u0926\u0940",
		"hif-latn": "Fiji Hindi",
		"hil": "Ilonggo",
		"ho": "Hiri Motu",
		"hr": "Hrvatski",
		"hsb": "Hornjoserbsce",
		"ht": "Krey\u00f2l ayisyen",
		"hu": "Magyar",
		"hy": "\u0540\u0561\u0575\u0565\u0580\u0565\u0576",
		"hz": "Otsiherero",
		"ia": "Interlingua",
		"id": "Bahasa Indonesia",
		"ie": "Interlingue",
		"ig": "Igbo",
		"ii": "\ua187\ua259",
		"ik": "I\u00f1upiak",
		"ike-cans": "\u1403\u14c4\u1483\u144e\u1450\u1466",
		"ike-latn": "inuktitut",
		"ilo": "Ilokano",
		"inh": "\u0413\u0406\u0430\u043b\u0433\u0406\u0430\u0439 \u011eal\u011faj",
		"io": "Ido",
		"is": "\u00cdslenska",
		"it": "Italiano",
		"iu": "\u1403\u14c4\u1483\u144e\u1450\u1466/inuktitut",
		"ja": "\u65e5\u672c\u8a9e",
		"jbo": "Lojban",
		"jut": "Jysk",
		"jv": "Basa Jawa",
		"ka": "\u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d8",
		"kaa": "Qaraqalpaqsha",
		"kab": "Taqbaylit",
		"kg": "Kongo",
		"ki": "G\u0129k\u0169y\u0169",
		"kiu": "Kurmanc\u00ee",
		"kj": "Kwanyama",
		"kk": "\u049a\u0430\u0437\u0430\u049b\u0448\u0430",
		"kk-arab": "\u202b\u0642\u0627\u0632\u0627\u0642\u0634\u0627 (\u062a\u0674\u0648\u062a\u06d5)\u202c",
		"kk-cyrl": "\u202a\u049a\u0430\u0437\u0430\u049b\u0448\u0430 (\u043a\u0438\u0440\u0438\u043b)\u202c",
		"kk-latn": "\u202aQazaq\u015fa (lat\u0131n)\u202c",
		"kk-cn": "\u202b\u0642\u0627\u0632\u0627\u0642\u0634\u0627 (\u062c\u06c7\u0646\u06af\u0648)\u202c",
		"kk-kz": "\u202a\u049a\u0430\u0437\u0430\u049b\u0448\u0430 (\u049a\u0430\u0437\u0430\u049b\u0441\u0442\u0430\u043d)\u202c",
		"kk-tr": "\u202aQazaq\u015fa (T\u00fcrk\u00efya)\u202c",
		"kl": "Kalaallisut",
		"km": "\u1797\u17b6\u179f\u17b6\u1781\u17d2\u1798\u17c2\u179a",
		"kn": "\u0c95\u0ca8\u0ccd\u0ca8\u0ca1",
		"ko": "\ud55c\uad6d\uc5b4",
		"ko-kp": "\ud55c\uad6d\uc5b4 (\uc870\uc120)",
		"kr": "Kanuri",
		"kri": "Krio",
		"krj": "Kinaray-a",
		"ks": "\u0915\u0936\u094d\u092e\u0940\u0930\u0940 - (\u0643\u0634\u0645\u064a\u0631\u064a)",
		"ksh": "Ripoarisch",
		"ku": "Kurd\u00ee / \u0643\u0648\u0631\u062f\u06cc",
		"ku-latn": "\u202aKurd\u00ee (lat\u00een\u00ee)\u202c",
		"ku-arab": "\u202b\u0643\u0648\u0631\u062f\u064a (\u0639\u06d5\u0631\u06d5\u0628\u06cc)\u202c",
		"kv": "\u041a\u043e\u043c\u0438",
		"kw": "Kernowek",
		"ky": "\u041a\u044b\u0440\u0433\u044b\u0437\u0447\u0430",
		"la": "Latina",
		"lad": "Ladino",
		"lb": "L\u00ebtzebuergesch",
		"lbe": "\u041b\u0430\u043a\u043a\u0443",
		"lez": "\u041b\u0435\u0437\u0433\u0438",
		"lfn": "Lingua Franca Nova",
		"lg": "Luganda",
		"li": "Limburgs",
		"lij": "L\u00edguru",
		"lmo": "Lumbaart",
		"ln": "Ling\u00e1la",
		"lo": "\u0ea5\u0eb2\u0ea7",
		"loz": "Silozi",
		"lt": "Lietuvi\u0173",
		"lv": "Latvie\u0161u",
		"lzh": "\u6587\u8a00",
		"mai": "\u092e\u0948\u0925\u093f\u0932\u0940",
		"map-bms": "Basa Banyumasan",
		"mdf": "\u041c\u043e\u043a\u0448\u0435\u043d\u044c",
		"mg": "Malagasy",
		"mh": "Ebon",
		"mhr": "\u041e\u043b\u044b\u043a \u041c\u0430\u0440\u0438\u0439",
		"mi": "M\u0101ori",
		"mk": "\u041c\u0430\u043a\u0435\u0434\u043e\u043d\u0441\u043a\u0438",
		"ml": "\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02",
		"mn": "\u041c\u043e\u043d\u0433\u043e\u043b",
		"mo": "\u041c\u043e\u043b\u0434\u043e\u0432\u0435\u043d\u044f\u0441\u043a\u044d",
		"mr": "\u092e\u0930\u093e\u0920\u0940",
		"ms": "Bahasa Melayu",
		"mt": "Malti",
		"mus": "Mvskoke",
		"mwl": "Mirand\u00e9s",
		"my": "\u1019\u103c\u1014\u103a\u1019\u102c\u1018\u102c\u101e\u102c",
		"myv": "\u042d\u0440\u0437\u044f\u043d\u044c",
		"mzn": "\u0645\u064e\u0632\u0650\u0631\u0648\u0646\u064a",
		"na": "Dorerin Naoero",
		"nah": "N\u0101huatl",
		"nan": "B\u00e2n-l\u00e2m-g\u00fa",
		"nap": "Nnapulitano",
		"nb": "\u202aNorsk (bokm\u00e5l)\u202c",
		"nds": "Plattd\u00fc\u00fctsch",
		"nds-nl": "Nedersaksisch",
		"ne": "\u0928\u0947\u092a\u093e\u0932\u0940",
		"new": "\u0928\u0947\u092a\u093e\u0932 \u092d\u093e\u0937\u093e",
		"ng": "Oshiwambo",
		"niu": "Niu\u0113",
		"nl": "Nederlands",
		"nn": "\u202aNorsk (nynorsk)\u202c",
		"no": "\u202aNorsk (bokm\u00e5l)\u202c",
		"nov": "Novial",
		"nrm": "Nouormand",
		"nso": "Sesotho sa Leboa",
		"nv": "Din\u00e9 bizaad",
		"ny": "Chi-Chewa",
		"oc": "Occitan",
		"om": "Oromoo",
		"or": "\u0b13\u0b21\u0b3c\u0b3f\u0b06",
		"os": "\u0418\u0440\u043e\u043d\u0430\u0443",
		"pa": "\u0a2a\u0a70\u0a1c\u0a3e\u0a2c\u0a40",
		"pag": "Pangasinan",
		"pam": "Kapampangan",
		"pap": "Papiamentu",
		"pcd": "Picard",
		"pdc": "Deitsch",
		"pdt": "Plautdietsch",
		"pfl": "Pf\u00e4lzisch",
		"pi": "\u092a\u093e\u093f\u0934",
		"pih": "Norfuk / Pitkern",
		"pl": "Polski",
		"pms": "Piemont\u00e8is",
		"pnb": "\u067e\u0646\u062c\u0627\u0628\u06cc",
		"pnt": "\u03a0\u03bf\u03bd\u03c4\u03b9\u03b1\u03ba\u03ac",
		"ps": "\u067e\u069a\u062a\u0648",
		"pt": "Portugu\u00eas",
		"pt-br": "Portugu\u00eas do Brasil",
		"qu": "Runa Simi",
		"rif": "Tarifit",
		"rm": "Rumantsch",
		"rmy": "Romani",
		"rn": "Kirundi",
		"ro": "Rom\u00e2n\u0103",
		"roa-rup": "Arm\u00e3neashce",
		"roa-tara": "Tarand\u00edne",
		"ru": "\u0420\u0443\u0441\u0441\u043a\u0438\u0439",
		"ruq": "Vl\u0103he\u015fte",
		"ruq-cyrl": "\u0412\u043b\u0430\u0445\u0435\u0441\u0442\u0435",
		"ruq-latn": "Vl\u0103he\u015fte",
		"rw": "Kinyarwanda",
		"sa": "\u0938\u0902\u0938\u094d\u0915\u0943\u0924",
		"sah": "\u0421\u0430\u0445\u0430 \u0442\u044b\u043b\u0430",
		"sc": "Sardu",
		"scn": "Sicilianu",
		"sco": "Scots",
		"sd": "\u0633\u0646\u068c\u064a",
		"sdc": "Sassaresu",
		"se": "S\u00e1megiella",
		"sei": "Cmique Itom",
		"sg": "S\u00e4ng\u00f6",
		"sh": "Srpskohrvatski / \u0421\u0440\u043f\u0441\u043a\u043e\u0445\u0440\u0432\u0430\u0442\u0441\u043a\u0438",
		"shi": "Ta\u0161l\u1e25iyt",
		"si": "\u0dc3\u0dd2\u0d82\u0dc4\u0dbd",
		"simple": "Simple English",
		"sk": "Sloven\u010dina",
		"sl": "Sloven\u0161\u010dina",
		"sli": "Schl\u00e4sch",
		"sm": "Gagana Samoa",
		"sma": "\u00c5arjelsaemien",
		"sn": "chiShona",
		"so": "Soomaaliga",
		"sq": "Shqip",
		"sr": "\u0421\u0440\u043f\u0441\u043a\u0438 / Srpski",
		"sr-ec": "\u0421\u0440\u043f\u0441\u043a\u0438 (\u045b\u0438\u0440\u0438\u043b\u0438\u0446\u0430)",
		"sr-el": "Srpski (latinica)",
		"srn": "Sranantongo",
		"ss": "SiSwati",
		"st": "Sesotho",
		"stq": "Seeltersk",
		"su": "Basa Sunda",
		"sv": "Svenska",
		"sw": "Kiswahili",
		"szl": "\u015al\u016fnski",
		"ta": "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd",
		"tcy": "\u0ca4\u0cc1\u0cb3\u0cc1",
		"te": "\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41",
		"tet": "Tetun",
		"tg": "\u0422\u043e\u04b7\u0438\u043a\u04e3",
		"tg-cyrl": "\u0422\u043e\u04b7\u0438\u043a\u04e3",
		"tg-latn": "tojik\u012b",
		"th": "\u0e44\u0e17\u0e22",
		"ti": "\u1275\u130d\u122d\u129b",
		"tk": "T\u00fcrkmen\u00e7e",
		"tl": "Tagalog",
		"tn": "Setswana",
		"to": "lea faka-Tonga",
		"tokipona": "Toki Pona",
		"tp": "Toki Pona (deprecated:tokipona)",
		"tpi": "Tok Pisin",
		"tr": "T\u00fcrk\u00e7e",
		"ts": "Xitsonga",
		"tt": "\u0422\u0430\u0442\u0430\u0440\u0447\u0430/Tatar\u00e7a",
		"tt-cyrl": "\u0422\u0430\u0442\u0430\u0440\u0447\u0430",
		"tt-latn": "Tatar\u00e7a",
		"tum": "chiTumbuka",
		"tw": "Twi",
		"ty": "Reo M\u0101`ohi",
		"tyv": "\u0422\u044b\u0432\u0430 \u0434\u044b\u043b",
		"udm": "\u0423\u0434\u043c\u0443\u0440\u0442",
		"ug": "Uyghurche\u200e / \u0626\u06c7\u064a\u063a\u06c7\u0631\u0686\u06d5",
		"ug-arab": "\u0626\u06c7\u064a\u063a\u06c7\u0631\u0686\u06d5",
		"ug-latn": "Uyghurche\u200e",
		"uk": "\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430",
		"ur": "\u0627\u0631\u062f\u0648",
		"uz": "O'zbek",
		"ve": "Tshivenda",
		"vec": "V\u00e8neto",
		"vep": "Vepsan kel'",
		"vi": "Ti\u1ebfng Vi\u1ec7t",
		"vls": "West-Vlams",
		"vo": "Volap\u00fck",
		"vro": "V\u00f5ro",
		"wa": "Walon",
		"war": "Winaray",
		"wo": "Wolof",
		"wuu": "\u5434\u8bed",
		"xal": "\u0425\u0430\u043b\u044c\u043c\u0433",
		"xh": "isiXhosa",
		"xmf": "\u10db\u10d0\u10e0\u10d2\u10d0\u10da\u10e3\u10e0\u10d8",
		"yi": "\u05d9\u05d9\u05b4\u05d3\u05d9\u05e9",
		"yo": "Yor\u00f9b\u00e1",
		"yue": "\u7cb5\u8a9e",
		"za": "Vahcuengh",
		"zea": "Ze\u00eauws",
		"zh": "\u4e2d\u6587",
		"zh-classical": "\u6587\u8a00",
		"zh-cn": "\u202a\u4e2d\u6587(\u4e2d\u56fd\u5927\u9646)\u202c",
		"zh-hans": "\u202a\u4e2d\u6587(\u7b80\u4f53)\u202c",
		"zh-hant": "\u202a\u4e2d\u6587(\u7e41\u9ad4)\u202c",
		"zh-hk": "\u202a\u4e2d\u6587(\u9999\u6e2f)\u202c",
		"zh-min-nan": "B\u00e2n-l\u00e2m-g\u00fa",
		"zh-mo": "\u202a\u4e2d\u6587(\u6fb3\u9580)\u202c",
		"zh-my": "\u202a\u4e2d\u6587(\u9a6c\u6765\u897f\u4e9a)\u202c",
		"zh-sg": "\u202a\u4e2d\u6587(\u65b0\u52a0\u5761)\u202c",
		"zh-tw": "\u202a\u4e2d\u6587(\u53f0\u7063)\u202c",
		"zh-yue": "\u7cb5\u8a9e",
		"zu": "isiZulu"
	};

}() );
