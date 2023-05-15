const data = [
  {
    code: "86",
    cn: "中国大陆",
    en: "China",
    py: "ZHONG GUO DA LU"
  },
  {
    code: "852",
    cn: "中国香港",
    en: "Hong Kong",
    py: "ZHONG GUO XIANG GANG"
  },
  {
    code: "853",
    cn: "中国澳门",
    en: "Macao",
    py: "ZHONG GUO AO MEN"
  },
  {
    code: "886",
    cn: "中国台湾",
    en: "Taiwan",
    py: "ZHONG GUO TAI WAN"
  },
  {
    code: "1",
    cn: "加拿大",
    en: "Canada",
    py: "JIA NA DA"
  },
  {
    code: "1",
    cn: "美国",
    en: "United States",
    py: "MEI GUO"
  },
  {
    code: "7",
    cn: "俄罗斯",
    en: "Russia",
    py: "E LUO SI"
  },
  {
    code: "33",
    cn: "法国",
    en: "France",
    py: "FA GUO"
  },
  {
    code: "39",
    cn: "意大利",
    en: "Italy",
    py: "YI DA LI"
  },
  {
    code: "44",
    cn: "英国",
    en: "United Kingdom",
    py: "YING GUO"
  },
  {
    code: "49",
    cn: "德国",
    en: "Germany",
    py: "DE GUO"
  },
  {
    code: "60",
    cn: "马来西亚",
    en: "Malaysia",
    py: "MA LAI XI YA"
  },
  {
    code: "61",
    cn: "澳大利亚",
    en: "Australia",
    py: "AO DA LI YA"
  },
  {
    code: "62",
    cn: "印度尼西亚",
    en: "Indonesia",
    py: "YIN DU NI XI YA"
  },
  {
    code: "63",
    cn: "菲律宾",
    en: "Philippines",
    py: "FEI LV BIN"
  },
  {
    code: "64",
    cn: "新西兰",
    en: "New Zealand",
    py: "XIN XI LAN"
  },
  {
    code: "65",
    cn: "新加坡",
    en: "Singapore",
    py: "XIN JIA PO"
  },
  {
    code: "66",
    cn: "泰国",
    en: "Thailand",
    py: "TAI GUO"
  },
  {
    code: "81",
    cn: "日本",
    en: "Japan",
    py: "RI BEN"
  },
  {
    code: "82",
    cn: "韩国",
    en: "South Korea",
    py: "HAN GUO"
  },
  {
    code: "84",
    cn: "越南",
    en: "Viet Nam",
    py: "YUE NAN"
  },
  {
    code: "91",
    cn: "印度",
    en: "India",
    py: "YIN DU"
  },
  {
    code: "855",
    cn: "柬埔寨",
    en: "Cambodia",
    py: "JIAN PU ZHAI"
  },
  {
    code: "355",
    cn: "阿尔巴尼亚",
    en: "Albania",
    py: "A ER BA NI YA"
  },
  {
    code: "213",
    cn: "阿尔及利亚",
    en: "Algeria",
    py: "A ER JI LI YA"
  },
  {
    code: "93",
    cn: "阿富汗",
    en: "Afghanistan",
    py: "A FU HAN"
  },
  {
    code: "54",
    cn: "阿根廷",
    en: "Argentina",
    py: "A GEN TING"
  },
  {
    code: "971",
    cn: "阿联酋",
    en: "United Arab Emirates",
    py: "A LA BO LIAN HE QIU ZHANG GUO"
  },
  {
    code: "297",
    cn: "阿鲁巴",
    en: "Aruba",
    py: "A LU BA DAO"
  },
  {
    code: "968",
    cn: "阿曼",
    en: "Oman",
    py: "A MAN"
  },
  {
    code: "994",
    cn: "阿塞拜疆",
    en: "Azerbaijan",
    py: "A SAI BAI JIANG"
  },
  {
    code: "247",
    cn: "阿森松",
    en: "Ascension",
    py: "A SEN SONG"
  },
  {
    code: "20",
    cn: "埃及",
    en: "Egypt",
    py: "AI JI"
  },
  {
    code: "251",
    cn: "埃塞俄比亚",
    en: "Ethiopia",
    py: "AI SAI E BI YA"
  },
  {
    code: "353",
    cn: "爱尔兰",
    en: "Ireland",
    py: "AI ER LAN"
  },
  {
    code: "372",
    cn: "爱沙尼亚",
    en: "Estonia",
    py: "AI SHA NI YA"
  },
  {
    code: "376",
    cn: "安道尔",
    en: "Andorra",
    py: "AN DAO ER GONG HE GUO"
  },
  {
    code: "244",
    cn: "安哥拉",
    en: "Angola",
    py: "AN GE LA"
  },
  {
    code: "1264",
    cn: "安圭拉",
    en: "Anguilla",
    py: "AN GUI LA DAO"
  },
  {
    code: "1268",
    cn: "安提瓜和巴布达",
    en: "Antigua and barbuda",
    py: "AN TI GUA HE BA BU DA"
  },
  {
    code: "43",
    cn: "奥地利",
    en: "Austria",
    py: "AO DI LI"
  },
  {
    code: "1246",
    cn: "巴巴多斯",
    en: "Barbados",
    py: "BA BA DUO SI"
  },
  {
    code: "675",
    cn: "巴布亚新几内亚",
    en: "Papua New Guinea",
    py: "BA BU YA XIN JI NEI YA"
  },
  {
    code: "1242",
    cn: "巴哈马",
    en: "Bahamas",
    py: "BA  HA MA"
  },
  {
    code: "92",
    cn: "巴基斯坦",
    en: "Pakistan",
    py: "BA JI SI TAN"
  },
  {
    code: "595",
    cn: "巴拉圭",
    en: "Paraguay",
    py: "BA LA GUI"
  },
  {
    code: "970",
    cn: "巴勒斯坦",
    en: "Palestine",
    py: "BA LE SI TAN"
  },
  {
    code: "973",
    cn: "巴林",
    en: "Bahrain",
    py: "BA LIN"
  },
  {
    code: "507",
    cn: "巴拿马",
    en: "Panama",
    py: "BA NA MA"
  },
  {
    code: "55",
    cn: "巴西",
    en: "Brazil",
    py: "BA XI"
  },
  {
    code: "375",
    cn: "白俄罗斯",
    en: "Belarus",
    py: "BAI E LUO SI"
  },
  {
    code: "1441",
    cn: "百慕大",
    en: "Bermuda",
    py: "BAI MU DA QUN DAO"
  },
  {
    code: "359",
    cn: "保加利亚",
    en: "Bulgaria",
    py: "BAO JIA LI YA"
  },
  {
    code: "229",
    cn: "贝宁",
    en: "Benin",
    py: "BEI NING"
  },
  {
    code: "32",
    cn: "比利时",
    en: "Belgium",
    py: "BI LI SHI"
  },
  {
    code: "354",
    cn: "冰岛",
    en: "Iceland",
    py: "BING DAO "
  },
  {
    code: "1787",
    cn: "波多黎各",
    en: "Puerto Rico",
    py: "BO DUO LI GE"
  },
  {
    code: "48",
    cn: "波兰",
    en: "Poland",
    py: "BO LAN"
  },
  {
    code: "387",
    cn: "波斯尼亚和黑塞哥维那",
    en: "Bosnia and Herzegovina",
    py: "BO SI NI YA HE HEI SAI GE WEI NA"
  },
  {
    code: "591",
    cn: "玻利维亚",
    en: "Bolivia",
    py: "BO LI WEI YA"
  },
  {
    code: "501",
    cn: "伯利兹",
    en: "Belize",
    py: "BO LI ZI"
  },
  {
    code: "267",
    cn: "博茨瓦纳",
    en: "Botswana",
    py: "BO CI WA NA"
  },
  {
    code: "975",
    cn: "不丹",
    en: "Bhutan",
    py: "BU DAN"
  },
  {
    code: "226",
    cn: "布基纳法索",
    en: "Burkina Faso",
    py: "BU JI NA FA SUO"
  },
  {
    code: "257",
    cn: "布隆迪",
    en: "Burundi",
    py: "BU LONG DI"
  },
  {
    code: "850",
    cn: "朝鲜",
    en: "Korea, Democratic Pe",
    py: "CHAO XIAN"
  },
  {
    code: "240",
    cn: "赤道几内亚",
    en: "Equatorial Guinea",
    py: "CHI DAO JI NEI YA"
  },
  {
    code: "45",
    cn: "丹麦",
    en: "Denmark",
    py: "DAN MAI"
  },
  {
    code: "670",
    cn: "东帝汶",
    en: "East Timor",
    py: "DONG DI WEN"
  },
  {
    code: "684",
    cn: "东萨摩亚(美)",
    en: "Samoa Eastern",
    py: "DONG SA MO YA"
  },
  {
    code: "228",
    cn: "多哥",
    en: "Togo",
    py: "DUO GE"
  },
  {
    code: "1809",
    cn: "多米尼加共和国",
    en: "Dominican Republic",
    py: "DUO MI NI JIA GONG HE GUO"
  },
  {
    code: "593",
    cn: "厄瓜多尔",
    en: "Ecuador",
    py: "E GUA DUO ER"
  },
  {
    code: "291",
    cn: "厄立特里亚",
    en: "Eritrea",
    py: "E LI TE LI YA"
  },
  {
    code: "298",
    cn: "法罗群岛",
    en: "Faroe Islands",
    py: "FA LUO QUN DAO"
  },
  {
    code: "689",
    cn: "法属波利尼西亚",
    en: "French Polynesia",
    py: "FA SHU BO LI NI XI YA"
  },
  {
    code: "594",
    cn: "法属圭亚那",
    en: "French Guiana",
    py: "FA SHU GUI YA NA"
  },
  {
    code: "379",
    cn: "梵蒂冈",
    en: "Vatican",
    py: "FAN DI GANG"
  },
  {
    code: "679",
    cn: "斐济",
    en: "Fiji",
    py: "FEI JI"
  },
  {
    code: "358",
    cn: "芬兰",
    en: "Finland",
    py: "FEN LAN"
  },
  {
    code: "238",
    cn: "佛得角",
    en: "Cape Verde",
    py: "FU DE JIAO"
  },
  {
    code: "500",
    cn: "福克兰群岛",
    en: "Falkland Islands",
    py: "FU LAN KE QUN DAO"
  },
  {
    code: "220",
    cn: "冈比亚",
    en: "Gambia",
    py: "GANG BI YA"
  },
  {
    code: "242",
    cn: "刚果共和国",
    en: "Congo",
    py: "GANG GUO"
  },
  {
    code: "57",
    cn: "哥伦比亚",
    en: "Colombia",
    py: "GE LUN BI YA"
  },
  {
    code: "506",
    cn: "哥斯达黎加",
    en: "Costa Rica",
    py: "GE SI DA LI JIA"
  },
  {
    code: "1473",
    cn: "格林纳达",
    en: "Grenada",
    py: "GE LIN NA DA"
  },
  {
    code: "299",
    cn: "格陵兰",
    en: "Greenland",
    py: "GE LIN LAN DAO"
  },
  {
    code: "995",
    cn: "格鲁吉亚",
    en: "Georgia",
    py: "GE LU JI YA "
  },
  {
    code: "53",
    cn: "古巴",
    en: "Cuba",
    py: "GU BA"
  },
  {
    code: "1671",
    cn: "关岛",
    en: "Guam",
    py: "GUAN DAO"
  },
  {
    code: "592",
    cn: "圭亚那",
    en: "Guyana",
    py: "GUI YA NA "
  },
  {
    code: "7",
    cn: "哈萨克斯坦",
    en: "Kazakhstan",
    py: "HA SA KE SI TAN"
  },
  {
    code: "509",
    cn: "海地",
    en: "Haiti",
    py: "HAI DI"
  },
  {
    code: "31",
    cn: "荷兰",
    en: "Netherlands",
    py: "HE LAN"
  },
  {
    code: "599",
    cn: "荷属安第列斯",
    en: "Netherlands Antilles",
    py: "HE SHU AN DE LIE SI"
  },
  {
    code: "382",
    cn: "黑山",
    en: "Montenegro",
    py: "HEI SHAN GONG HE GUO"
  },
  {
    code: "504",
    cn: "洪都拉斯",
    en: "Honduras",
    py: "HONG DU LA SI"
  },
  {
    code: "686",
    cn: "基里巴斯",
    en: "Kiribati",
    py: "JI LI BA SI"
  },
  {
    code: "253",
    cn: "吉布提",
    en: "Djibouti",
    py: "JI BU TI"
  },
  {
    code: "996",
    cn: "吉尔吉斯斯坦",
    en: "Kirgizstan",
    py: "JI ER JI SI SI TAN"
  },
  {
    code: "224",
    cn: "几内亚",
    en: "Guinea",
    py: "JI NEI YA"
  },
  {
    code: "245",
    cn: "几内亚比绍",
    en: "Guinea-bissau",
    py: "JI NEI YA BI SHAO"
  },
  {
    code: "233",
    cn: "加纳",
    en: "Ghana",
    py: "JIA  NA "
  },
  {
    code: "241",
    cn: "加蓬",
    en: "Gabon",
    py: "JIA PENG"
  },
  {
    code: "420",
    cn: "捷克",
    en: "Czech",
    py: "JIE KE"
  },
  {
    code: "263",
    cn: "津巴布韦",
    en: "Zimbabwe",
    py: "JIN BA BU WEI"
  },
  {
    code: "237",
    cn: "喀麦隆",
    en: "Cameroon",
    py: "KA MAI LONG"
  },
  {
    code: "974",
    cn: "卡塔尔",
    en: "Qatar",
    py: "KA TA ER"
  },
  {
    code: "1345",
    cn: "开曼群岛",
    en: "Cayman Islands",
    py: "KAI MAN QUN DAO"
  },
  {
    code: "269",
    cn: "科摩罗",
    en: "Comoros",
    py: "KE MO LUO"
  },
  {
    code: "383",
    cn: "科索沃",
    en: "Kosovo",
    py: "KE SUO WO"
  },
  {
    code: "225",
    cn: "科特迪瓦",
    en: "Coted Ivoire",
    py: "KE TE DI WA"
  },
  {
    code: "965",
    cn: "科威特",
    en: "Kuwait",
    py: "KE WEI TE"
  },
  {
    code: "385",
    cn: "克罗地亚",
    en: "Croatia",
    py: "KE LUO DI YA"
  },
  {
    code: "254",
    cn: "肯尼亚",
    en: "Kenya",
    py: "KEN NI YA"
  },
  {
    code: "682",
    cn: "库克群岛",
    en: "Cook Islands",
    py: "KU KE QUN DAO"
  },
  {
    code: "371",
    cn: "拉脱维亚",
    en: "Latvia",
    py: "LA TUO WEI YA"
  },
  {
    code: "266",
    cn: "莱索托",
    en: "Lesotho",
    py: "LAI SUO TUO"
  },
  {
    code: "856",
    cn: "老挝",
    en: "Lao",
    py: "LAO WO"
  },
  {
    code: "961",
    cn: "黎巴嫩",
    en: "Lebanon",
    py: "LI MA NEN"
  },
  {
    code: "370",
    cn: "立陶宛",
    en: "Lithuania",
    py: "LI TAO WAN"
  },
  {
    code: "231",
    cn: "利比里亚",
    en: "Liberia",
    py: "LI BI LI YA"
  },
  {
    code: "218",
    cn: "利比亚",
    en: "Libya",
    py: "LI BI YA"
  },
  {
    code: "423",
    cn: "列支敦士登",
    en: "Liechtenstein",
    py: "LIE ZHI DUN SHI DENG"
  },
  {
    code: "262",
    cn: "留尼汪（法属）",
    en: "Reunion",
    py: "NI LIU WANG"
  },
  {
    code: "352",
    cn: "卢森堡",
    en: "Luxembourg",
    py: "LU SEN BAO"
  },
  {
    code: "250",
    cn: "卢旺达",
    en: "Rwanda",
    py: "LU WANG DA"
  },
  {
    code: "40",
    cn: "罗马尼亚",
    en: "Romania",
    py: "LUO MA NI YA"
  },
  {
    code: "261",
    cn: "马达加斯加",
    en: "Madagascar",
    py: "MA DA JIA SI JIA"
  },
  {
    code: "960",
    cn: "马尔代夫",
    en: "Maldives",
    py: "MA ER DAI FU"
  },
  {
    code: "356",
    cn: "马耳他",
    en: "Malta",
    py: "MA ER TA"
  },
  {
    code: "265",
    cn: "马拉维",
    en: "Malawi",
    py: "MA LA WEI"
  },
  {
    code: "223",
    cn: "马里",
    en: "Mali",
    py: "MA LI"
  },
  {
    code: "1670",
    cn: "马里亚那群岛",
    en: "Mariana Is",
    py: "MA LI YA NA QUN DAO"
  },
  {
    code: "389",
    cn: "马其顿共和国",
    en: "Macedonia",
    py: "MA QI DUN GONG HE GUO"
  },
  {
    code: "692",
    cn: "马绍尔群岛",
    en: "Marshall Islands",
    py: "MA SHAO ER QUN DAO"
  },
  {
    code: "596",
    cn: "马提尼克",
    en: "Martinique",
    py: "MA TI NI KE"
  },
  {
    code: "262",
    cn: "马约特",
    en: "Mayotte",
    py: "MA YUE TE DAO"
  },
  {
    code: "230",
    cn: "毛里求斯",
    en: "Mauritius",
    py: "MAO LI QIU SI"
  },
  {
    code: "222",
    cn: "毛里塔尼亚",
    en: "Mauritania",
    py: "MAO LI TA NI YA"
  },
  {
    code: "976",
    cn: "蒙古",
    en: "Mongolia",
    py: "MENG GU"
  },
  {
    code: "1664",
    cn: "蒙特塞拉特岛",
    en: "Montserrat Is",
    py: "MENG TE SAI LA TE DAO"
  },
  {
    code: "880",
    cn: "孟加拉国",
    en: "Bangladesh",
    py: "MENG JIA LA GUO"
  },
  {
    code: "51",
    cn: "秘鲁",
    en: "Peru",
    py: "MI LU"
  },
  {
    code: "691",
    cn: "密克罗尼西亚",
    en: "Micronesia",
    py: "MI KE LUO NI XI YA"
  },
  {
    code: "95",
    cn: "缅甸",
    en: "Myanmar",
    py: "MIAN DIAN"
  },
  {
    code: "373",
    cn: "摩尔多瓦",
    en: "Moldova",
    py: "MO ER DUO WA"
  },
  {
    code: "212",
    cn: "摩洛哥",
    en: "Morocco",
    py: "MO LUO GE"
  },
  {
    code: "377",
    cn: "摩纳哥",
    en: "Monaco",
    py: "MO NA GE"
  },
  {
    code: "258",
    cn: "莫桑比克",
    en: "Mozambique",
    py: "MO SANG BI KE"
  },
  {
    code: "52",
    cn: "墨西哥",
    en: "Mexico",
    py: "MO XI GE"
  },
  {
    code: "264",
    cn: "纳米比亚",
    en: "Namibia",
    py: "NA MI BI YA"
  },
  {
    code: "27",
    cn: "南非",
    en: "South Africa",
    py: "NAN FEI"
  },
  {
    code: "672",
    cn: "南极",
    en: "South Pole",
    py: "NAN JI ZHOU"
  },
  {
    code: "381",
    cn: "南斯拉夫",
    en: "Yugoslavia",
    py: "NAN SI LA FU"
  },
  {
    code: "211",
    cn: "南苏丹",
    en: "SOUTH SUDAN",
    py: "NAN SU DAN"
  },
  {
    code: "674",
    cn: "瑙鲁",
    en: "Nauru",
    py: "NAO LU"
  },
  {
    code: "977",
    cn: "尼泊尔",
    en: "Nepal",
    py: "NI BO ER"
  },
  {
    code: "505",
    cn: "尼加拉瓜",
    en: "Nicaragua",
    py: "NI JIA LA GUA"
  },
  {
    code: "227",
    cn: "尼日尔",
    en: "Niger",
    py: "NI RI ER"
  },
  {
    code: "234",
    cn: "尼日利亚",
    en: "Nigeria",
    py: "NI RI LI YA"
  },
  {
    code: "683",
    cn: "纽埃（新西兰属）",
    en: "Niue",
    py: "NIU AI DAO"
  },
  {
    code: "47",
    cn: "挪威",
    en: "Norway",
    py: "NUO WEI"
  },
  {
    code: "680",
    cn: "帕劳群岛",
    en: "Palau",
    py: "PA LAO"
  },
  {
    code: "64",
    cn: "皮特肯群岛",
    en: "Pitcairn",
    py: "PI TE KEN QUN DAO"
  },
  {
    code: "351",
    cn: "葡萄牙",
    en: "Portugal",
    py: "PU TAO YA"
  },
  {
    code: "46",
    cn: "瑞典",
    en: "Sweden",
    py: "RUI DIAN"
  },
  {
    code: "41",
    cn: "瑞士",
    en: "Switzerland",
    py: "RUI SHI"
  },
  {
    code: "503",
    cn: "萨尔瓦多",
    en: "El Salvador",
    py: "SA LONG WA DUO"
  },
  {
    code: "381",
    cn: "塞尔维亚",
    en: "Serbia",
    py: "SAI ER WEI YA"
  },
  {
    code: "232",
    cn: "塞拉利昂",
    en: "Sierra Leone",
    py: "SAI LA LI ANG"
  },
  {
    code: "221",
    cn: "塞内加尔",
    en: "Senegal",
    py: "SAI NEI JIA ER"
  },
  {
    code: "357",
    cn: "塞浦路斯",
    en: "Cyprus",
    py: "SAI PU LU SI"
  },
  {
    code: "248",
    cn: "塞舌尔",
    en: "Seychelles",
    py: "SAI SHE ER"
  },
  {
    code: "966",
    cn: "沙特阿拉伯",
    en: "Saudi Arabia",
    py: "SHA TE A LA BO"
  },
  {
    code: "260",
    cn: "尚比亚",
    en: "Zambia",
    py: "SHANG BI YA"
  },
  {
    code: "590",
    cn: "圣巴泰勒米",
    en: "Saint Barthelemy",
    py: "SHENG BA TAI LE MI"
  },
  {
    code: "239",
    cn: "圣多美和普林西比",
    en: "Sao Tome and Principe",
    py: "SHENG DUO MEI HE PU LIN XI BI"
  },
  {
    code: "1758",
    cn: "圣卢西亚",
    en: "Saint Lucia",
    py: "SHENG LU XI YA"
  },
  {
    code: "590",
    cn: "圣马丁岛",
    en: "Saint Martin",
    py: "SHENG MA DING DAO"
  },
  {
    code: "378",
    cn: "圣马力诺",
    en: "San Marino",
    py: "SHENG MA LI NUO"
  },
  {
    code: "508",
    cn: "圣皮埃尔和密克隆岛",
    en: "Saint Pierre and Miq",
    py: "SHENG PI AI ER HE MI KE LONG QUN DAO"
  },
  {
    code: "1784",
    cn: "圣文森特和格林纳丁斯",
    en: "Saint Vincent and the Grenadines",
    py: "SHENG WEN SEN TE DAO"
  },
  {
    code: "94",
    cn: "斯里兰卡",
    en: "Sri Lanka",
    py: "SI LI LAN KA"
  },
  {
    code: "421",
    cn: "斯洛伐克",
    en: "Slovakia",
    py: "SI LUO FA KE"
  },
  {
    code: "386",
    cn: "斯洛文尼亚",
    en: "Slovenia",
    py: "SI LUO WEN NI YA"
  },
  {
    code: "268",
    cn: "斯威士兰",
    en: "Swaziland",
    py: "SI WEI SHI LAN"
  },
  {
    code: "249",
    cn: "苏丹",
    en: "Sudan",
    py: "SU DAN"
  },
  {
    code: "597",
    cn: "苏里南",
    en: "Suriname",
    py: "SU LI NAN"
  },
  {
    code: "677",
    cn: "所罗门群岛",
    en: "Solomon Islands",
    py: "SUO LUO MEN QUN DAO"
  },
  {
    code: "252",
    cn: "索马里",
    en: "Somalia",
    py: "SUO MA LI"
  },
  {
    code: "992",
    cn: "塔吉克斯坦",
    en: "Tajikistan",
    py: "TA JI KE SI TAN"
  },
  {
    code: "255",
    cn: "坦桑尼亚",
    en: "Tanzania",
    py: "TAN SANG NI YA"
  },
  {
    code: "676",
    cn: "汤加",
    en: "Tonga",
    py: "TANG JIA"
  },
  {
    code: "1868",
    cn: "特立尼达和多巴哥",
    en: "Trinidad and Tobago",
    py: "TE LI NI DA HE DUO BA GE"
  },
  {
    code: "216",
    cn: "突尼斯",
    en: "Tunisia",
    py: "TU NI SI"
  },
  {
    code: "688",
    cn: "图瓦卢",
    en: "Tuvalu",
    py: "TU WA LU"
  },
  {
    code: "90",
    cn: "土耳其",
    en: "Turkey",
    py: "TU ER QI"
  },
  {
    code: "993",
    cn: "土库曼斯坦",
    en: "Turkmenstan",
    py: "TU KU MAN SI TAN"
  },
  {
    code: "690",
    cn: "托克劳群岛",
    en: "Tokelau",
    py: "TUO KE LAO QUN DAO"
  },
  {
    code: "681",
    cn: "瓦利斯和富图纳群岛",
    en: "Wallis And Futuna Is",
    py: "WA LI SI HE FU SHI NA QUN DAO"
  },
  {
    code: "678",
    cn: "瓦努阿图",
    en: "Vanuatu",
    py: "WA NU A TU"
  },
  {
    code: "502",
    cn: "危地马拉",
    en: "Guatemala",
    py: "WEI DI MA LA"
  },
  {
    code: "58",
    cn: "委内瑞拉",
    en: "Venezuela",
    py: "WEI NEI RUI LA"
  },
  {
    code: "673",
    cn: "文莱",
    en: "Brunei",
    py: "WEN LAI"
  },
  {
    code: "256",
    cn: "乌干达",
    en: "Uganda",
    py: "WU GAN DA"
  },
  {
    code: "380",
    cn: "乌克兰",
    en: "Ukraine",
    py: "WU KE LAN"
  },
  {
    code: "598",
    cn: "乌拉圭",
    en: "Uruguay",
    py: "WU LA GUI"
  },
  {
    code: "998",
    cn: "乌兹别克斯坦",
    en: "Uzbekistan",
    py: "WU ZI BIE KE SI TAN"
  },
  {
    code: "34",
    cn: "西班牙",
    en: "Spain",
    py: "XI BAN YA"
  },
  {
    code: "212",
    cn: "西撒哈拉国",
    en: "Western Sahara",
    py: "XI SA HA LA GUO"
  },
  {
    code: "685",
    cn: "西萨摩亚",
    en: "Samoa Western",
    py: "XI SA MO YA"
  },
  {
    code: "30",
    cn: "希腊",
    en: "Greece",
    py: "XI LA "
  },
  {
    code: "687",
    cn: "新喀里多尼亚",
    en: "New Caledonia",
    py: "XIN KA LI DUO NI YA"
  },
  {
    code: "36",
    cn: "匈牙利",
    en: "Hungary",
    py: "XIONG YA LI "
  },
  {
    code: "963",
    cn: "叙利亚",
    en: "Syria",
    py: "XU LI YA"
  },
  {
    code: "1876",
    cn: "牙买加",
    en: "Jamaica",
    py: "YA MAI JIA"
  },
  {
    code: "374",
    cn: "亚美尼亚",
    en: "Armenia",
    py: "YA MEI NI YA"
  },
  {
    code: "967",
    cn: "也门",
    en: "Yemen",
    py: "YE MEN"
  },
  {
    code: "964",
    cn: "伊拉克",
    en: "Iraq",
    py: "YI LA KE"
  },
  {
    code: "98",
    cn: "伊朗",
    en: "Iran",
    py: "YI LANG"
  },
  {
    code: "972",
    cn: "以色列",
    en: "Israel",
    py: "YI SE LIE"
  },
  {
    code: "962",
    cn: "约旦",
    en: "Jordan",
    py: "YUE DAN "
  },
  {
    code: "243",
    cn: "扎伊尔",
    en: "Zaire",
    py: "ZHA YI ER"
  },
  {
    code: "235",
    cn: "乍得",
    en: "Chad",
    py: "ZHA DE"
  },
  {
    code: "350",
    cn: "直布罗陀",
    en: "Gibraltar",
    py: "ZHI BU LUO TUO "
  },
  {
    code: "56",
    cn: "智利",
    en: "Chile",
    py: "ZHI LI"
  },
  {
    code: "236",
    cn: "中非共和国",
    en: "Central Africa Republic",
    py: "ZHONG FEI GONG HE GUO"
  }
];

export default data;