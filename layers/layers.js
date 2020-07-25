ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([-164.088967, -120.956386, 213.911033, 101.296756]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_PAISESDELMUNDO_1 = new ol.format.GeoJSON();
var features_PAISESDELMUNDO_1 = format_PAISESDELMUNDO_1.readFeatures(json_PAISESDELMUNDO_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PAISESDELMUNDO_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PAISESDELMUNDO_1.addFeatures(features_PAISESDELMUNDO_1);
var lyr_PAISESDELMUNDO_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PAISESDELMUNDO_1, 
                style: style_PAISESDELMUNDO_1,
                interactive: true,
    title: 'PAISES DEL MUNDO<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_0.png" /> Afghanistan<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_1.png" /> Albania<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_2.png" /> Algeria<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_3.png" /> American Samoa<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_4.png" /> Andorra<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_5.png" /> Angola<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_6.png" /> Anguilla<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_7.png" /> Antarctica<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_8.png" /> Antigua and Barbuda<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_9.png" /> Argentina<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_10.png" /> Armenia<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_11.png" /> Aruba<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_12.png" /> Australia<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_13.png" /> Austria<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_14.png" /> Azerbaijan<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_15.png" /> Bahamas, The<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_16.png" /> Bahrain<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_17.png" /> Baker Island<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_18.png" /> Bangladesh<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_19.png" /> Barbados<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_20.png" /> Belgium<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_21.png" /> Belize<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_22.png" /> Benin<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_23.png" /> Bermuda<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_24.png" /> Bhutan<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_25.png" /> Bolivia<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_26.png" /> Bosnia and Herzegovina<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_27.png" /> Botswana<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_28.png" /> Bouvet Island<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_29.png" /> Brazil<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_30.png" /> British Indian Ocean Territory<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_31.png" /> British Virgin Islands<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_32.png" /> Brunei<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_33.png" /> Bulgaria<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_34.png" /> Burkina Faso<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_35.png" /> Burundi<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_36.png" /> Byelarus<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_37.png" /> Cambodia<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_38.png" /> Cameroon<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_39.png" /> Canada<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_40.png" /> Cape Verde<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_41.png" /> Cayman Islands<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_42.png" /> Central African Republic<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_43.png" /> Chad<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_44.png" /> Chile<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_45.png" /> China<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_46.png" /> Christmas Island<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_47.png" /> Cocos (Keeling) Islands<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_48.png" /> Colombia<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_49.png" /> Comoros<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_50.png" /> Congo<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_51.png" /> Cook Islands<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_52.png" /> Costa Rica<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_53.png" /> Croatia<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_54.png" /> Cuba<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_55.png" /> Cyprus<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_56.png" /> Czech Republic<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_57.png" /> Denmark<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_58.png" /> Djibouti<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_59.png" /> Dominica<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_60.png" /> Dominican Republic<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_61.png" /> Ecuador<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_62.png" /> Egypt<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_63.png" /> El Salvador<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_64.png" /> Equatorial Guinea<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_65.png" /> Eritrea<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_66.png" /> Estonia<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_67.png" /> Ethiopia<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_68.png" /> Falkland Islands (Islas Malvinas)<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_69.png" /> Faroe Islands<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_70.png" /> Federated States of Micronesia<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_71.png" /> Fiji<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_72.png" /> Finland<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_73.png" /> France<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_74.png" /> French Guiana<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_75.png" /> French Polynesia<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_76.png" /> French Southern & Antarctic Lands<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_77.png" /> Gabon<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_78.png" /> Gambia, The<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_79.png" /> Gaza Strip<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_80.png" /> Georgia<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_81.png" /> Germany<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_82.png" /> Ghana<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_83.png" /> Gibraltar<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_84.png" /> Glorioso Islands<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_85.png" /> Greece<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_86.png" /> Greenland<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_87.png" /> Grenada<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_88.png" /> Guadeloupe<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_89.png" /> Guam<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_90.png" /> Guatemala<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_91.png" /> Guernsey<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_92.png" /> Guinea<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_93.png" /> Guinea-Bissau<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_94.png" /> Guyana<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_95.png" /> Haiti<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_96.png" /> Heard Island & McDonald Islands<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_97.png" /> Honduras<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_98.png" /> Howland Island<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_99.png" /> Hungary<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_100.png" /> Iceland<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_101.png" /> India<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_102.png" /> Indonesia<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_103.png" /> Iran<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_104.png" /> Iraq<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_105.png" /> Ireland<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_106.png" /> Israel<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_107.png" /> Italy<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_108.png" /> Ivory Coast<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_109.png" /> Jamaica<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_110.png" /> Jan Mayen<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_111.png" /> Japan<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_112.png" /> Jarvis Island<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_113.png" /> Jersey<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_114.png" /> Johnston Atoll<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_115.png" /> Jordan<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_116.png" /> Juan De Nova Island<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_117.png" /> Kazakhstan<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_118.png" /> Kenya<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_119.png" /> Kiribati<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_120.png" /> Kuwait<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_121.png" /> Kyrgyzstan<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_122.png" /> Laos<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_123.png" /> Latvia<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_124.png" /> Lebanon<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_125.png" /> Lesotho<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_126.png" /> Liberia<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_127.png" /> Libya<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_128.png" /> Liechtenstein<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_129.png" /> Lithuania<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_130.png" /> Luxembourg<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_131.png" /> Macau<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_132.png" /> Macedonia<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_133.png" /> Madagascar<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_134.png" /> Malawi<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_135.png" /> Malaysia<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_136.png" /> Maldives<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_137.png" /> Mali<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_138.png" /> Malta<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_139.png" /> Man, Isle of<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_140.png" /> Marshall Islands<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_141.png" /> Martinique<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_142.png" /> Mauritania<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_143.png" /> Mauritius<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_144.png" /> Mayotte<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_145.png" /> Mexico<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_146.png" /> Midway Islands<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_147.png" /> Moldova<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_148.png" /> Monaco<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_149.png" /> Mongolia<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_150.png" /> Montenegro<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_151.png" /> Montserrat<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_152.png" /> Morocco<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_153.png" /> Mozambique<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_154.png" /> Myanmar (Burma)<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_155.png" /> Namibia<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_156.png" /> Nauru<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_157.png" /> Nepal<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_158.png" /> Netherlands<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_159.png" /> Netherlands Antilles<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_160.png" /> New Caledonia<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_161.png" /> New Zealand<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_162.png" /> Nicaragua<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_163.png" /> Niger<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_164.png" /> Nigeria<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_165.png" /> Niue<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_166.png" /> Norfolk Island<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_167.png" /> North Korea<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_168.png" /> Northern Mariana Islands<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_169.png" /> Norway<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_170.png" /> Oman<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_171.png" /> Pacific Islands (Palau)<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_172.png" /> Pakistan<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_173.png" /> Panama<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_174.png" /> Papua New Guinea<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_175.png" /> Paracel Islands<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_176.png" /> Paraguay<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_177.png" /> Peru<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_178.png" /> Philippines<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_179.png" /> Pitcairn Islands<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_180.png" /> Poland<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_181.png" /> Portugal<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_182.png" /> Puerto Rico<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_183.png" /> Qatar<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_184.png" /> Reunion<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_185.png" /> Romania<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_186.png" /> Russia<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_187.png" /> Rwanda<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_188.png" /> San Marino<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_189.png" /> Sao Tome and Principe<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_190.png" /> Saudi Arabia<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_191.png" /> Senegal<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_192.png" /> Serbia<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_193.png" /> Seychelles<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_194.png" /> Sierra Leone<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_195.png" /> Singapore<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_196.png" /> Slovakia<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_197.png" /> Slovenia<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_198.png" /> Solomon Islands<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_199.png" /> Somalia<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_200.png" /> South Africa<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_201.png" /> South Georgia and the South Sandwich Is<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_202.png" /> South Korea<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_203.png" /> Spain<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_204.png" /> Spratly Islands<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_205.png" /> Sri Lanka<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_206.png" /> St. Helena<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_207.png" /> St. Kitts and Nevis<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_208.png" /> St. Lucia<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_209.png" /> St. Pierre and Miquelon<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_210.png" /> St. Vincent and the Grenadines<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_211.png" /> Sudan<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_212.png" /> Suriname<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_213.png" /> Svalbard<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_214.png" /> Swaziland<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_215.png" /> Sweden<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_216.png" /> Switzerland<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_217.png" /> Syria<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_218.png" /> Taiwan<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_219.png" /> Tajikistan<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_220.png" /> Tanzania, United Republic of<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_221.png" /> Thailand<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_222.png" /> Togo<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_223.png" /> Tokelau<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_224.png" /> Tonga<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_225.png" /> Trinidad and Tobago<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_226.png" /> Tunisia<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_227.png" /> Turkey<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_228.png" /> Turkmenistan<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_229.png" /> Turks and Caicos Islands<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_230.png" /> Tuvalu<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_231.png" /> Uganda<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_232.png" /> Ukraine<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_233.png" /> United Arab Emirates<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_234.png" /> United Kingdom<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_235.png" /> United States<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_236.png" /> Uruguay<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_237.png" /> Uzbekistan<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_238.png" /> Vanuatu<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_239.png" /> Venezuela<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_240.png" /> Vietnam<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_241.png" /> Virgin Islands<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_242.png" /> Wake Island<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_243.png" /> Wallis and Futuna<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_244.png" /> West Bank<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_245.png" /> Western Sahara<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_246.png" /> Western Samoa<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_247.png" /> Yemen<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_248.png" /> Zaire<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_249.png" /> Zambia<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_250.png" /> Zimbabwe<br />\
    <img src="styles/legend/PAISESDELMUNDO_1_251.png" /> <br />'
        });
var format_Machupicchu_2 = new ol.format.GeoJSON();
var features_Machupicchu_2 = format_Machupicchu_2.readFeatures(json_Machupicchu_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Machupicchu_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Machupicchu_2.addFeatures(features_Machupicchu_2);
var lyr_Machupicchu_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Machupicchu_2, 
                style: style_Machupicchu_2,
                interactive: true,
                title: '<img src="styles/legend/Machupicchu_2.png" /> Machupicchu'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_PAISESDELMUNDO_1.setVisible(true);lyr_Machupicchu_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_PAISESDELMUNDO_1,lyr_Machupicchu_2];
lyr_PAISESDELMUNDO_1.set('fieldAliases', {'FIPS_CNTRY': 'FIPS_CNTRY', 'GMI_CNTRY': 'GMI_CNTRY', 'CNTRY_NAME': 'CNTRY_NAME', 'SOVEREIGN': 'SOVEREIGN', 'POP_CNTRY': 'POP_CNTRY', 'SQKM_CNTRY': 'SQKM_CNTRY', 'SQMI_CNTRY': 'SQMI_CNTRY', 'CURR_TYPE': 'CURR_TYPE', 'CURR_CODE': 'CURR_CODE', 'LANDLOCKED': 'LANDLOCKED', 'COLOR_MAP': 'COLOR_MAP', 'PAISES': 'PAISES', });
lyr_Machupicchu_2.set('fieldAliases', {'FIPS_CNTRY': 'FIPS_CNTRY', 'GMI_CNTRY': 'GMI_CNTRY', 'CNTRY_NAME': 'CNTRY_NAME', 'SOVEREIGN': 'SOVEREIGN', 'POP_CNTRY': 'POP_CNTRY', 'SQKM_CNTRY': 'SQKM_CNTRY', 'SQMI_CNTRY': 'SQMI_CNTRY', 'CURR_TYPE': 'CURR_TYPE', 'CURR_CODE': 'CURR_CODE', 'LANDLOCKED': 'LANDLOCKED', 'COLOR_MAP': 'COLOR_MAP', 'PAISES': 'PAISES', 'IMagen': 'IMagen', });
lyr_PAISESDELMUNDO_1.set('fieldImages', {'FIPS_CNTRY': 'Hidden', 'GMI_CNTRY': 'Hidden', 'CNTRY_NAME': 'Hidden', 'SOVEREIGN': 'Hidden', 'POP_CNTRY': 'Hidden', 'SQKM_CNTRY': 'Hidden', 'SQMI_CNTRY': 'Hidden', 'CURR_TYPE': 'Hidden', 'CURR_CODE': 'Hidden', 'LANDLOCKED': 'Hidden', 'COLOR_MAP': 'Hidden', 'PAISES': 'UniqueValues', });
lyr_Machupicchu_2.set('fieldImages', {'FIPS_CNTRY': 'Hidden', 'GMI_CNTRY': 'Hidden', 'CNTRY_NAME': 'Hidden', 'SOVEREIGN': 'Hidden', 'POP_CNTRY': 'Hidden', 'SQKM_CNTRY': 'Hidden', 'SQMI_CNTRY': 'Hidden', 'CURR_TYPE': 'Hidden', 'CURR_CODE': 'Hidden', 'LANDLOCKED': 'Hidden', 'COLOR_MAP': 'Hidden', 'PAISES': 'Hidden', 'IMagen': 'ExternalResource', });
lyr_PAISESDELMUNDO_1.set('fieldLabels', {'PAISES': 'no label', });
lyr_Machupicchu_2.set('fieldLabels', {'IMagen': 'no label', });
lyr_Machupicchu_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});