const main_data_raw = `01.01.2024	1	01	1	01	styczeń	2024	poniedziałek	1		zima	koziorożec	Mieczysława, Mieszka	day_front_20240101_3b87.jpg	215	Światowy Dzień Kaca, Dzień Domeny Publicznej	0,27
02.01.2024	2	02	1	01	styczeń	2024	wtorek	2		zima	koziorożec	Makarego, Izydora, Stefanii	day_front_20240102_bf7d.jpg	214	Światowy Dzień Introwertyka, Dzień Ptysia	0,55
03.01.2024	3	03	1	01	styczeń	2024	środa	3		zima	koziorożec	Daniela, Genowefy, Zdzisławy	day_front_20240103_7232.jpg	213	Dzień Słomki do Picia	0,82
04.01.2024	4	04	1	01	styczeń	2024	czwartek	4		zima	koziorożec	Eugeniusza, Anieli, Rygoberta	day_front_20240104_a5f2.jpg	212	Dzień Spaghetti	1,09
05.01.2024	5	05	1	01	styczeń	2024	piątek	5		zima	koziorożec	Edwardy, Emiliany, Szymona	day_front_20240105_b9c2.jpg	211	Dzień Bitej Śmietany	1,37
06.01.2024	6	06	1	01	styczeń	2024	sobota	6		zima	koziorożec	Kacpra, Baltazara, Melchiora	day_front_20240106_b7e4.jpg	210	Dzień Filatelisty, Dzień Jabłoni, Dzień Fasoli	1,64
07.01.2024	7	07	1	01	styczeń	2024	niedziela	7		zima	koziorożec	Lucjana, Kryspina, Juliana	day_front_20240107_4835.jpg	209	Dzień Dziwaka	1,91
08.01.2024	8	08	2	01	styczeń	2024	poniedziałek	8		zima	koziorożec	Seweryna, Erharda, Wawrzyńca	day_front_20240108_b01a.jpg	208	Dzień Rotacji Ziemi	2,19
09.01.2024	9	09	2	01	styczeń	2024	wtorek	9		zima	koziorożec	Antoniego, Piotra, Adriana	day_front_20240109_0dd2.jpg	207	Dzień Ligi Ochrony Przyrody, Dzień Moreli	2,46
10.01.2024	10	10	2	01	styczeń	2024	środa	10		zima	koziorożec	Jana, Wilhelma, Agatona	day_front_20240110_a846.jpg	206	Dzień Obniżania Kosztów Energii	2,73
11.01.2024	11	11	2	01	styczeń	2024	czwartek	11		zima	koziorożec	Krzesimira, Honoraty	day_front_20240111_c46c.jpg	205	Dzień Wegetarian	3,01
12.01.2024	12	12	2	01	styczeń	2024	piątek	12		zima	koziorożec	Grety, Arkadiusza, Bernarda	day_front_20240112_a49a.jpg	204	Dzień Całowania Złotowłosych	3,28
13.01.2024	13	13	2	01	styczeń	2024	sobota	13		zima	koziorożec	Bogumiły, Weroniki	day_front_20240113_dc1d.jpg	203	Dzień Naklejki, Dzień Gumowej Kaczuszki	3,55
14.01.2024	14	14	2	01	styczeń	2024	niedziela	14		zima	koziorożec	Niny, Feliksa, Hilarego	day_front_20240114_b368.jpg	202	Dzień Ukrytej Miłości, Dzień Osób Nieśmiałych, Światowy Dzień Logiki	3,83
15.01.2024	15	15	3	01	styczeń	2024	poniedziałek	15		zima	koziorożec	Arnolda, Pawła	day_front_20240115_7b78.jpg	201	Dzień Wikipedii, Dzień Bajgla	4,10
16.01.2024	16	16	3	01	styczeń	2024	wtorek	16		zima	koziorożec	Marcelego, Włodzimierza	day_front_20240116_6920.jpg	200	Międzynarodowy Dzień Pikantnych Potraw	4,37
17.01.2024	17	17	3	01	styczeń	2024	środa	17		zima	koziorożec	Rozalindy, Antoniego	day_front_20240117_86b4.jpg	199	Światowy Dzień Pizzy, Museum Selfie Day	4,64
18.01.2024	18	18	3	01	styczeń	2024	czwartek	18		zima	koziorożec	Piotra, Małgorzaty	day_front_20240118_75e4.jpg	198	Dzień Kubusia Puchatka	4,92
19.01.2024	19	19	3	01	styczeń	2024	piątek	19		zima	koziorożec	Henryka, Mariusza	day_front_20240119_c828.jpg	197	Dzień Popcornu, Dzień Puszki	5,19
20.01.2024	20	20	3	01	styczeń	2024	sobota	20		zima	wodnik	Fabiana, Fabiany, Sebastiana	day_front_20240120_a60f.jpg	196	Międzynarodowy Dzień Akceptacji, Dzień Miłośników Sera	5,46
21.01.2024	21	21	3	01	styczeń	2024	niedziela	21		zima	wodnik	Agnieszki, Inez, Epifaniusza	day_front_20240121_06bb.jpg	195	Dzień Wiewiórki, Międzynarodowy Dzień Spodni Dresowych, Światowy Dzień Śniegu	5,74
22.01.2024	22	22	4	01	styczeń	2024	poniedziałek	22		zima	wodnik	Anastazego, Wincentego	day_front_20240122_8602.jpg	194	Dzień Ostrego Sosu	6,01
23.01.2024	23	23	4	01	styczeń	2024	wtorek	23		zima	wodnik	Rajmundy, Ildefonsa, Rajmunda	day_front_20240123_bc90.jpg	193	Dzień bez Opakowań Foliowych, Dzień Pisma Ręcznego	6,28
24.01.2024	24	24	4	01	styczeń	2024	środa	24		zima	wodnik	Felicjana, Tymoteusza, Rafała	day_front_20240124_c72f.jpg	192	Międzynarodowy Dzień Edukacji	6,56
25.01.2024	25	25	4	01	styczeń	2024	czwartek	25		zima	wodnik	Tatiany, Miłosza, Pawła	day_front_20240125_212c.jpg	191	Dzień Sekretarki i Asystentki, Dzień Kryptologii, Dzień Gracza LOTTO	6,83
26.01.2024	26	26	4	01	styczeń	2024	piątek	26		zima	wodnik	Pauli, Tytusa	day_front_20240126_0718.jpg	190	Dzień Drugiej Połówki, Międzynarodowy Dzień Celnictwa	7,10
27.01.2024	27	27	4	01	styczeń	2024	sobota	27		zima	wodnik	Witaliana, Jerzego	day_front_20240127_f7fd.jpg	189	Dzień Pracownika Publicznych Służb Zatrudnienia	7,38
28.01.2024	28	28	4	01	styczeń	2024	niedziela	28		zima	wodnik	Tomasza, Karola	day_front_20240128_1aad.jpg	188	Międzynarodowy Dzień LEGO, Dzień Ochrony Danych Osobowych	7,65
29.01.2024	29	29	5	01	styczeń	2024	poniedziałek	29		zima	wodnik	Bolesławy, Franciszka, Zdzisława, Anieli	day_front_20240129_8113.jpg	187	Międzynarodowy Dzień Puzzli	7,92
30.01.2024	30	30	5	01	styczeń	2024	wtorek	30		zima	wodnik	Martyny, Macieja, Marcina	day_front_20240130_a5dd.jpg	186	Dzień Rogalika	8,20
31.01.2024	31	31	5	01	styczeń	2024	środa	31		zima	wodnik	Marceli, Jana, Ludwiki	day_front_20240131_f206.jpg	185	Międzynarodowy Dzień Iluzjonisty, Międzynarodowy Dzień Zebry	8,47
01.02.2024	32	01	5	02	luty	2024	czwartek	32		zima	wodnik	Brygidy, Sewera	day_front_20240201_0e90.jpg	184	Dzień Gumy do Żucia, Dzień bez Oleju Palmowego	8,74
02.02.2024	33	02	5	02	luty	2024	piątek	33		zima	wodnik	Mirosławy, Kornela, Marii	day_front_20240202_f4cd.jpg	183	Dzień Naleśnika, Dzień Niedźwiedzia, Światowy Dzień Mokradeł	9,02
03.02.2024	34	03	5	02	luty	2024	sobota	34		zima	wodnik	Błażeja, Telimeny, Oskara	day_front_20240203_67f2.jpg	182	Dzień Ciasta Marchewkowego, Międzynarodowy Dzień Golden Retrievera	9,29
04.02.2024	35	04	5	02	luty	2024	niedziela	35		zima	wodnik	Weroniki, Józefa	day_front_20240204_f036.jpg	181	Międzynarodowy Dzień Braterstwa Międzyludzkiego, Światowy Dzień Walki z Rakiem	9,56
05.02.2024	36	05	6	02	luty	2024	poniedziałek	36		zima	wodnik	Adelajdy, Agaty	day_front_20240205_9218.jpg	180	Dzień Meteorologa, Światowy Dzień Nutelli	9,84
06.02.2024	37	06	6	02	luty	2024	wtorek	37		zima	wodnik	Amandy, Doroty	day_front_20240206_3bd6.jpg	179	Dzień Bezpiecznego Internetu, Dzień Boba Marleya	10,11
07.02.2024	38	07	6	02	luty	2024	środa	38		zima	wodnik	Romualda, Ryszarda, Teodora	day_front_20240207_f571.jpg	178	Dzień Najwyższej Izby Kontroli, Światowy Dzień Głośnego Czytania	10,38
08.02.2024	39	08	6	02	luty	2024	czwartek	39		zima	wodnik	Hieronima, Józefiny	day_front_20240208_f154.jpg	177	Święto Służby Więziennej	10,66
09.02.2024	40	09	6	02	luty	2024	piątek	40		zima	wodnik	Poli, Jakuba, Apolonii	day_front_20240209_9c61.jpg	176	Międzynarodowy Dzień Pizzy, Międzynarodowy Dzień Języka Greckiego, Dzień Dojeżdżania Rowerem do Pracy Zimą	10,93
10.02.2024	41	10	6	02	luty	2024	sobota	41		zima	wodnik	Jacka, Elwiry, Jacentego	day_front_20240210_475c.jpg	175	Chiński Nowy Rok, Światowy Dzień Suchych Nasion Roślin Strączkowych	11,20
11.02.2024	42	11	6	02	luty	2024	niedziela	42		zima	wodnik	Marii, Łazarza, Bernadety	day_front_20240211_382d.jpg	174	Europejski Dzień Numeru Alarmowego 112, Światowy Dzień Małżeństwa	11,48
12.02.2024	43	12	7	02	luty	2024	poniedziałek	43		zima	wodnik	Benedykta, Normy, Ludwika	day_front_20240212_692f.jpg	173	Dzień Darwina, Dzień Pisania Piórem, Światowy Dzień Bezy	11,75
13.02.2024	44	13	7	02	luty	2024	wtorek	44		zima	wodnik	Jordany, Jordana	day_front_20240213_a1a5.jpg	172	Światowy Dzień Radia	12,02
14.02.2024	45	14	7	02	luty	2024	środa	45		zima	wodnik	Walentego, Metodego, Cyryla	day_front_20240214_1ef4.jpg	171	Dzień Wiedzy o Wrodzonych Wadach Serca	12,30
15.02.2024	46	15	7	02	luty	2024	czwartek	46		zima	wodnik	Zygfryda, Faustyna, Jowity	day_front_20240215_fc14.jpg	170	Dzień Singla, Światowy Dzień Hipopotama	12,57
16.02.2024	47	16	7	02	luty	2024	piątek	47		zima	wodnik	Daniela, Danuty, Samuela	day_front_20240216_b994.jpg	169	Międzynarodowy Dzień Listonoszy i Doręczycieli Przesyłek	12,84
17.02.2024	48	17	7	02	luty	2024	sobota	48		zima	wodnik	Aleksego, Łukasza, Zbigniewa	day_front_20240217_d23b.jpg	168	Dzień Kota	13,11
18.02.2024	49	18	7	02	luty	2024	niedziela	49		zima	wodnik	Sylwana, Konstancji	day_front_20240218_ac4b.jpg	167	Dzień Plutona, Dzień Baterii	13,39
19.02.2024	50	19	8	02	luty	2024	poniedziałek	50		zima	ryby	Konrady, Marcelego	day_front_20240219_fdeb.jpg	166	Dzień Nauki Polskiej, Światowy Dzień Ochrony Ssaków Morskich	13,66
20.02.2024	51	20	8	02	luty	2024	wtorek	51		zima	ryby	Leona, Zenobiusza	day_front_20240220_86ee.jpg	165	Międzynarodowy Dzień Palących Fajkę	13,93
21.02.2024	52	21	8	02	luty	2024	środa	52		zima	ryby	Roberta, Leny, Feliksa	day_front_20240221_9d30.jpg	164	Międzynarodowy Dzień Przewodnika Turystycznego, Międzynarodowy Dzień Języka Ojczystego	14,21
22.02.2024	53	22	8	02	luty	2024	czwartek	53		zima	ryby	Małgorzaty, Marty	day_front_20240222_73f0.jpg	163	Dzień Myśli Braterskiej, Europejski Dzień Ofiar Przestępstw	14,48
23.02.2024	54	23	8	02	luty	2024	piątek	54		zima	ryby	Izabeli, Polikarpa, Romany	day_front_20240223_309f.jpg	162	Dzień bez Łapówki, Międzynarodowy Dzień Pomocy Potrzebującym	14,75
24.02.2024	55	24	8	02	luty	2024	sobota	55		zima	ryby	Piotra, Macieja, Bogusza	day_front_20240224_c006.jpg	161	Dzień Niespodziewanego Całusa	15,03
25.02.2024	56	25	8	02	luty	2024	niedziela	56		zima	ryby	Justa, Cezarego	day_front_20240225_f760.jpg	160	Dzień Orzechów w Czekoladzie	15,30
26.02.2024	57	26	9	02	luty	2024	poniedziałek	57		zima	ryby	Mirosława, Aleksandra	day_front_20240226_d7c2.jpg	159	Światowy Dzień Pistacji, Dzień Opowiadania Bajek, Dzień Dinozaura	15,57
27.02.2024	58	27	9	02	luty	2024	wtorek	58		zima	ryby	Auksencji, Gabriela	day_front_20240227_ab5e.jpg	158	Międzynarodowy Dzień Niedźwiedzia Polarnego	15,85
28.02.2024	59	28	9	02	luty	2024	środa	59		zima	ryby	Makarego, Romana, Hilarego	day_front_20240228_f448.jpg	157	Dzień Spania w Miejscach Publicznych	16,12
29.02.2024	60	29	9	02	luty	2024	czwartek	60		zima	ryby	Romana, Teofila, Antonii	day_front_20240229_d092.jpg	156	Dzień Tosta, Dzień Chorób Rzadkich	16,39
01.03.2024	61	01	9	03	marzec	2024	piątek	61		zima	ryby	Albina, Dawida, Antonii	day_front_20240301_e3dd.jpg	155	Dzień Doceniania Pracownika, Dzień Zero Dyskryminacji	16,67
02.03.2024	62	02	9	03	marzec	2024	sobota	62		zima	ryby	Halszki, Heleny	day_front_20240302_3e77.jpg	154	Dzień Staroci	16,94
03.03.2024	63	03	9	03	marzec	2024	niedziela	63		zima	ryby	Teresy, Tycjana, Kunegundy	day_front_20240303_a883.jpg	153	Światowy Dzień Dzikiej Przyrody, Międzynarodowy Dzień Pisarzy	17,21
04.03.2024	64	04	10	03	marzec	2024	poniedziałek	64		zima	ryby	Lucjusza, Adrianny, Kazimierza	day_front_20240304_73fd.jpg	152	Dzień Gramatyki, Międzynarodowy Dzień Mistrza Gry, Światowy Dzień Tenisa	17,49
05.03.2024	65	05	10	03	marzec	2024	wtorek	65		zima	ryby	Adriana, Oliwii	day_front_20240305_2a30.jpg	151	Dzień Teściowej, Dzień Dentysty	17,76
06.03.2024	66	06	10	03	marzec	2024	środa	66		zima	ryby	Wiktora, Róży	day_front_20240306_faae.jpg	150	Europejski Dzień Logopedy	18,03
07.03.2024	67	07	10	03	marzec	2024	czwartek	67		zima	ryby	Teresy, Felicyty, Tomasza	day_front_20240307_97d2.jpg	149	Dzień Płatków Śniadaniowych	18,31
08.03.2024	68	08	10	03	marzec	2024	piątek	68		zima	ryby	Jana, Stefana, Beaty	day_front_20240308_50ff.jpg	148	Międzynarodowy Dzień Praw Kobiet	18,58
09.03.2024	69	09	10	03	marzec	2024	sobota	69		zima	ryby	Katarzyny, Franciszki, Dominika	day_front_20240309_e85e.jpg	147	Dzień Statystyki Polskiej, Światowy Dzień DJ-a	18,85
10.03.2024	70	10	10	03	marzec	2024	niedziela	70		zima	ryby	Makarego, Cypriana	day_front_20240310_e256.jpg	146	Międzynarodowy Dzień Peruki, Dzień Mario	19,13
11.03.2024	71	11	11	03	marzec	2024	poniedziałek	71		zima	ryby	Konstantego, Benedykta	day_front_20240311_f9e2.jpg	145	Dzień Sołtysa, Światowy Dzień Hydrauliki	19,40
12.03.2024	72	12	11	03	marzec	2024	wtorek	72		zima	ryby	Innocentego, Bernarda, Grzegorza	day_front_20240312_8516.jpg	144	Światowy Dzień Przeciwko Cenzurze Internetu	19,67
13.03.2024	73	13	11	03	marzec	2024	środa	73		zima	ryby	Patrycji, Krystyny, Bożeny	day_front_20240313_0d44.jpg	143	Dzień Klejnotów	19,95
14.03.2024	74	14	11	03	marzec	2024	czwartek	74		zima	ryby	Matyldy, Jakuba	day_front_20240314_acf7.jpg	142	Dzień Liczby Pi, Dzień Motyli, Dzień Pająka	20,22
15.03.2024	75	15	11	03	marzec	2024	piątek	75		zima	ryby	Klemensa, Ludwiki, Longiny	day_front_20240315_c25a.jpg	141	Europejski Dzień Konsumenta, Dzień Piekarza, Dzień Domeny Internetowej, Światowy Dzień Snu	20,49
16.03.2024	76	16	11	03	marzec	2024	sobota	76		zima	ryby	Gabriela, Izabeli, Hilarego	day_front_20240316_0f63.jpg	140	Dzień Pandy	20,77
17.03.2024	77	17	11	03	marzec	2024	niedziela	77		zima	ryby	Zbigniewa, Patryka, Gertrudy	day_front_20240317_e259.jpg	139	Dzień Łodzi Podwodnej, Dzień Św. Patryka	21,04
18.03.2024	78	18	12	03	marzec	2024	poniedziałek	78		zima	ryby	Edwarda, Krystiana, Cyryla	day_front_20240318_4434.jpg	138	Światowy Dzień Recyklingu, Światowy Dzień Orła	21,31
19.03.2024	79	19	12	03	marzec	2024	wtorek	79		zima	ryby	Bogdana, Józefa	day_front_20240319_0d2e.jpg	137	Dzień Stolarza, Dzień Jedności Kaszubów	21,58
20.03.2024	80	20	12	03	marzec	2024	środa	80		zima	ryby	Anatola, Aleksandry, Klaudii	day_front_20240320_2962.jpg	136	Międzynarodowy Dzień Bez Mięsa, Światowy Dzień Żaby	21,86
21.03.2024	81	21	12	03	marzec	2024	czwartek	81	Początek wiosny	wiosna	baran	Ludomiry, Benedykty, Marzanny	day_front_20240321_acf8.jpg	135	Dzień Wagarowicza, Międzynarodowy Dzień Lasów, Dzień Wierzby, Międzynarodowy Dzień Kolorów	22,13
22.03.2024	82	22	12	03	marzec	2024	piątek	82		wiosna	baran	Lei, Bugusława, Katarzyny	day_front_20240322_7829.jpg	134	Światowy Dzień Wody, Dzień Ochrony Bałtyku, Międzynarodowy Dzień Foki	22,40
23.03.2024	83	23	12	03	marzec	2024	sobota	83		wiosna	baran	Turybiusza, Oktawiana, Pelagii	day_front_20240323_a235.jpg	133	Godzina dla Ziemi (20:30), Światowy Dzień Meteorologii, Dzień Windy	22,68
24.03.2024	84	24	12	03	marzec	2024	niedziela	84		wiosna	baran	Bertrady, Szymona	day_front_20240324_c483.jpg	132	Narodowy Dzień Życia	22,95
25.03.2024	85	25	13	03	marzec	2024	poniedziałek	85		wiosna	baran	Ireneusza, Marii, Marioli	day_front_20240325_85ca.jpg	131	Dzień Czytania Tolkiena, Dzień Gofra	23,22
26.03.2024	86	26	13	03	marzec	2024	wtorek	86		wiosna	baran	Teodora, Larysy	day_front_20240326_b0b1.jpg	130	Międzynarodowy Dzień Szpinaku	23,50
27.03.2024	87	27	13	03	marzec	2024	środa	87		wiosna	baran	Ernesta, Ruperta, Lidii	day_front_20240327_f431.jpg	129	Międzynarodowy Dzień Teatru, Dzień Wolnych Dokumentów	23,77
28.03.2024	88	28	13	03	marzec	2024	czwartek	88		wiosna	baran	Anieli, Jana	day_front_20240328_7892.jpg	128	Międzynarodowy Dzień bez Kłamstwa, Dzień Doceniania Chwastów, Światowy Dzień Fortepianu	24,04
29.03.2024	89	29	13	03	marzec	2024	piątek	89		wiosna	baran	Stefana, Eustachego	day_front_20240329_7a34.jpg	127	Dzień Metalowca	24,32
30.03.2024	90	30	13	03	marzec	2024	sobota	90		wiosna	baran	Mamertyna, Amadeusza	day_front_20240330_f801.jpg	126	Dzień Pośrednika w Obrocie Nieruchomościami	24,59
31.03.2024	91	31	13	03	marzec	2024	niedziela	91	Zmiana czasu na letni	wiosna	baran	Balbiny, Beniamina, Kornelii	day_front_20240331_8c0d.jpg	125	Światowy Dzień Backupu	24,86
01.04.2024	92	01	14	04	kwiecień	2024	poniedziałek	92		wiosna	baran	Zbigniewa, Hugona, Grażyny	day_front_20240401_4887.jpg	124	Międzynarodowy Dzień Ptaków, Dzień Klauna	25,14
02.04.2024	93	02	14	04	kwiecień	2024	wtorek	93		wiosna	baran	Urbana, Franciszka, Wiktora	day_front_20240402_3199.jpg	123	Międzynarodowy Dzień Książki Dla Dzieci, Dzień Niewidzialnej Pracy	25,41
03.04.2024	94	03	14	04	kwiecień	2024	środa	94		wiosna	baran	Sykstusa, Ryszarda	day_front_20240403_b140.jpg	122	Dzień Tęczy	25,68
04.04.2024	95	04	14	04	kwiecień	2024	czwartek	95		wiosna	baran	Wacława, Benedykta, Izydora	day_front_20240404_4c9c.jpg	121	Dzień Bezpańskich Zwierząt, Światowy Dzień Szczura, Międzynarodowy Dzień Marchewki	25,96
05.04.2024	96	05	14	04	kwiecień	2024	piątek	96		wiosna	baran	Jeremiasza, Wincentego, Ireny	day_front_20240405_2fb8.jpg	120	Dzień Karmelu, Dzień Leśnika, Dzień Grzeczności za Kierownicą	26,23
06.04.2024	97	06	14	04	kwiecień	2024	sobota	97		wiosna	baran	Wilhelma, Celestyny, Izoldy	day_front_20240406_8bab.jpg	119	Światowy Dzień Tenisa Stołowego, Międzynarodowy Dzień Walki na Poduszki	26,50
07.04.2024	98	07	14	04	kwiecień	2024	niedziela	98		wiosna	baran	Hermana, Donata	day_front_20240407_3ac1.jpg	118	Międzynarodowy Dzień Bobra, Światowy Dzień Zdrowia	26,78
08.04.2024	99	08	15	04	kwiecień	2024	poniedziałek	99		wiosna	baran	Radosława, Dionizego, Julii	day_front_20240408_df72.jpg	117	Międzynarodowy Dzień Romów, Dzień Miłośników Zoo	27,05
09.04.2024	100	09	15	04	kwiecień	2024	wtorek	100		wiosna	baran	Achacego, Hugo, Mai	day_front_20240409_5399.jpg	116	Międzynarodowy Dzień Jednorożca, Światowy Dzień Gołębia	27,32
10.04.2024	101	10	15	04	kwiecień	2024	środa	101		wiosna	baran	Magdaleny, Michała, Makarego	day_front_20240410_7dbb.jpg	115	Międzynarodowy Dzień Agrafki	27,60
11.04.2024	102	11	15	04	kwiecień	2024	czwartek	102		wiosna	baran	Gemmy, Leony, Filipa	day_front_20240411_e334.jpg	114	Dzień Radia, Dzień Osób z Chorobą Parkinsona, Ogólnopolski Dzień Trzeźwości	27,87
12.04.2024	103	12	15	04	kwiecień	2024	piątek	103		wiosna	baran	Damiana, Julisza, Saby	day_front_20240412_917b.jpg	113	Światowy Dzień Chomika, Dzień Czekolady	28,14
13.04.2024	104	13	15	04	kwiecień	2024	sobota	104		wiosna	baran	Hermenegildy, Marcina, Idy	day_front_20240413_3076.jpg	112	Dzień Scrabble	28,42
14.04.2024	105	14	15	04	kwiecień	2024	niedziela	105		wiosna	baran	Bereniki, Justyny	day_front_20240414_cfb7.jpg	111	Dzień Ludzi Bezdomnych, Dzień Delfina	28,69
15.04.2024	106	15	16	04	kwiecień	2024	poniedziałek	106		wiosna	baran	Mara, Anastazji	day_front_20240415_37a7.jpg	110	Światowy Dzień Trzeźwości, Światowy Dzień Sztuki	28,96
16.04.2024	107	16	16	04	kwiecień	2024	wtorek	107		wiosna	baran	Bernadety, Julii, Benedykta	day_front_20240416_6583.jpg	109	Dzień Włókniarza, Europejski Dzień Kontroli Prędkości	29,23
17.04.2024	108	17	16	04	kwiecień	2024	środa	108		wiosna	baran	Klary, Roberta	day_front_20240417_3119.jpg	108	Dzień Zielarza	29,51
18.04.2024	109	18	16	04	kwiecień	2024	czwartek	109		wiosna	baran	Bogumiły, Bogusławy, Ryszarda	day_front_20240418_1b15.jpg	107	Międzynarodowy Dzień Ochrony Zabytków	29,78
19.04.2024	110	19	16	04	kwiecień	2024	piątek	110		wiosna	baran	Emmy, Jerzego	day_front_20240419_8eba.jpg	106	Dzień Czosnku	30,05
20.04.2024	111	20	16	04	kwiecień	2024	sobota	111		wiosna	byk	Agnieszki, Czesława	day_front_20240420_7a56.jpg	105	Dzień Języka Chińskiego, Międzynarodowy Dzień Wolnej Prasy	30,33
21.04.2024	112	21	16	04	kwiecień	2024	niedziela	112		wiosna	byk	Anzelma, Konrady	day_front_20240421_7ac8.jpg	104	Światowy Dzień Kreatywności i Innowacji	30,60
22.04.2024	113	22	17	04	kwiecień	2024	poniedziałek	113		wiosna	byk	Kai, Wanesy	day_front_20240422_8960.jpg	103	Dzień Ziemi	30,87
23.04.2024	114	23	17	04	kwiecień	2024	wtorek	114		wiosna	byk	Jerzego, Wojciecha	day_front_20240423_687e.jpg	102	Światowy Dzień Książki i Praw Autorskich, Dzień Geografa, Dzień Języka Angielskiego	31,15
24.04.2024	115	24	17	04	kwiecień	2024	środa	115		wiosna	byk	Horacego, Grzegorza	day_front_20240424_aa0a.jpg	101	Europejski Dzień Śniadania, Światowy Dzień Zbiornika do Magazynowania	31,42
25.04.2024	116	25	17	04	kwiecień	2024	czwartek	116		wiosna	byk	Marka, Jarosława	day_front_20240425_ff20.jpg	100	Światowy Dzień Pingwina, Międzynarodowy Dzień Sekretarki	31,69
26.04.2024	117	26	17	04	kwiecień	2024	piątek	117		wiosna	byk	Marcelina, Marzeny	day_front_20240426_4771.jpg	99	Dzień Drogowca i Transportowca	31,97
27.04.2024	118	27	17	04	kwiecień	2024	sobota	118		wiosna	byk	Zyty, Teofila	day_front_20240427_0f25.jpg	98	Światowy Dzień Grafika, Światowy Dzień Tapira, Dzień Florysty	32,24
28.04.2024	119	28	17	04	kwiecień	2024	niedziela	119		wiosna	byk	Pawła, Walerii	day_front_20240428_baa5.jpg	97	Światowy Dzień Pamięci Ofiar Wypadków przy Pracy, Międzynarodowy Dzień Psa Ratowniczego	32,51
29.04.2024	120	29	18	04	kwiecień	2024	poniedziałek	120		wiosna	byk	Roberty, Piotra, Augustyna	day_front_20240429_630b.jpg	96	Międzynarodowy Dzień Tańca	32,79
30.04.2024	121	30	18	04	kwiecień	2024	wtorek	121		wiosna	byk	Katarzyny, Jakuba, Marii	day_front_20240430_4add.jpg	95	Ogólnopolski Dzień Konia, Międzynarodowy Dzień Jazzu, Dzień Uczciwości	33,06
01.05.2024	122	01	18	05	maj	2024	środa	122		wiosna	byk	Anieli, Jeremiego	day_front_20240501_5244.jpg	94	Światowy Dzień Miłości, Święto Konwalii	33,33
02.05.2024	123	02	18	05	maj	2024	czwartek	123		wiosna	byk	Zygmunta, Witomira, Anatola	day_front_20240502_c517.jpg	93	Światowy Dzień Tuńczyka, Dzień Grilla, Światowy Dzień Hasła	33,61
03.05.2024	124	03	18	05	maj	2024	piątek	124		wiosna	byk	Aleksandra, Marii	day_front_20240503_ad42.jpg	92	Dzień Słońca, Dzień Koali, Światowy Dzień Wolności Prasy, Dzień Kosmosu	33,88
04.05.2024	125	04	18	05	maj	2024	sobota	125		wiosna	byk	Michała, Floriana, Moniki	day_front_20240504_a5a3.jpg	91	Dzień Gwiezdnych Wojen, Międzynarodowy Dzień Strażaka, Dzień Hutnika, Dzień bez Komputera	34,15
05.05.2024	126	05	18	05	maj	2024	niedziela	126		wiosna	byk	Gotarda, Ireny, Waldemara	day_front_20240505_4fde.jpg	90	Światowy Dzień Higieny Rąk, Dzień Europy, Światowy Dzień Śmiechu	34,43
06.05.2024	127	06	19	05	maj	2024	poniedziałek	127		wiosna	byk	Jakuba, Filipa, Jana	day_front_20240506_be70.jpg	89	Europejski Dzień Bezpieczeństwa Ruchu Drogowego, Światowy Dzień Powolności	34,70
07.05.2024	128	07	19	05	maj	2024	wtorek	128		wiosna	byk	Gizeli, Róży	day_front_20240507_78d1.jpg	88	Światowy Dzień Astmy, Europejski Dzień e-Aktywności Obywatelskiej	34,97
08.05.2024	129	08	19	05	maj	2024	środa	129		wiosna	byk	Stanisława, Stanisławy	day_front_20240508_6c28.jpg	87	Dzień Bibliotekarza i Bibliotek, Światowy Dzień Osła	35,25
09.05.2024	130	09	19	05	maj	2024	czwartek	130		wiosna	byk	Bożydara, Grzegorza	day_front_20240509_28f6.jpg	86	Dzień Unii Europejskiej, Dzień Okulistów i Okulistyki	35,52
10.05.2024	131	10	19	05	maj	2024	piątek	131		wiosna	byk	Beatrycze, Antoniny	day_front_20240510_594d.jpg	85	Dzień Pracownika Gospodarki Komunalnej, Dzień Zołzy	35,79
11.05.2024	132	11	19	05	maj	2024	sobota	132		wiosna	byk	Ignacego, Mirandy, Franciszka	day_front_20240511_cc11.jpg	84	Światowy Dzień Bez Śmiecenia, Dzień Doradcy Podatkowego, Światowy Dzień Ptaków Wędrownych	36,07
12.05.2024	133	12	19	05	maj	2024	niedziela	133		wiosna	byk	Dominika, Pankracego	day_front_20240512_dde4.jpg	83	Dzień Limeryków, Międzynarodowy Dzień Pielęgniarek	36,34
13.05.2024	134	13	20	05	maj	2024	poniedziałek	134		wiosna	byk	Serwacego, Marii, Roberty	day_front_20240513_4511.jpg	82	Międzynarodowy Dzień Hummusu	36,61
14.05.2024	135	14	20	05	maj	2024	wtorek	135		wiosna	byk	Macieja, Bonifacego	day_front_20240514_ab81.jpg	81	Międzynarodowy Dzień Farmaceuty, Europejski Dzień Równej Emerytury	36,89
15.05.2024	136	15	20	05	maj	2024	środa	136		wiosna	byk	Nadziei, Zofii, Izydora	day_front_20240515_e0b2.jpg	80	Święto Polskiej Muzyki i Plastyki, Międzynarodowy Dzień Rodzin	37,16
16.05.2024	137	16	20	05	maj	2024	czwartek	137		wiosna	byk	Szymona, Andrzeja	day_front_20240516_c7df.jpg	79	Święto Straży Granicznej, Międzynarodowy Dzień Światła	37,43
17.05.2024	138	17	20	05	maj	2024	piątek	138		wiosna	byk	Weroniki, Sławomira	day_front_20240517_a7b9.jpg	78	Międzynarodowy Dzień Telekomunikacji, Światowy Dzień Pieczenia, Dzień Dojazdu Rowerem do Pracy	37,70
18.05.2024	139	18	20	05	maj	2024	sobota	139		wiosna	byk	Eryka, Aleksandry, Feliksa	day_front_20240518_1281.jpg	77	Międzynarodowy Dzień Muzeów, Dzień Mostowca	37,98
19.05.2024	140	19	20	05	maj	2024	niedziela	140		wiosna	byk	Urbana, Iwony, Iwo	day_front_20240519_ad9d.jpg	76	Międzynarodowy Dzień Mycia Samochodów, Dzień Dobrych Uczynków	38,25
20.05.2024	141	20	21	05	maj	2024	poniedziałek	141		wiosna	byk	Kolumby, Bernardyna	day_front_20240520_8335.jpg	75	Światowy Dzień Pszczół, Europejski Dzień Morza	38,52
21.05.2024	142	21	21	05	maj	2024	wtorek	142		wiosna	bliźnięta	Jana Nepomucena, Wiktora, Tymoteusza	day_front_20240521_b660.jpg	74	Międzynarodowy Dzień Herbaty	38,80
22.05.2024	143	22	21	05	maj	2024	środa	143		wiosna	bliźnięta	Ryty, Julii, Emila	day_front_20240522_bb3d.jpg	73	Dzień Pac-Mana, Dzień Praw Zwierząt, Dzień Różnorodności Biologicznej	39,07
23.05.2024	144	23	21	05	maj	2024	czwartek	144		wiosna	bliźnięta	Michała, Iwony, Jana	day_front_20240523_2e4f.jpg	72	Dzień Spedytora, Światowy Dzień Żółwia	39,34
24.05.2024	145	24	21	05	maj	2024	piątek	145		wiosna	bliźnięta	Joanny, Zuzanny	day_front_20240524_bb97.jpg	71	Dzień Cyrylicy, Europejski Dzień Parków Narodowych	39,62
25.05.2024	146	25	21	05	maj	2024	sobota	146		wiosna	bliźnięta	Grzegorza, Magdy	day_front_20240525_225a.jpg	70	Dzień Ręcznika, Dzień Stemplarza, Dzień Teścia	39,89
26.05.2024	147	26	21	05	maj	2024	niedziela	147		wiosna	bliźnięta	Pauliny, Eweliny, Filipa, Angeliki	day_front_20240526_8be8.jpg	69	Dzień Samolotów z Papieru	40,16
27.05.2024	148	27	22	05	maj	2024	poniedziałek	148		wiosna	bliźnięta	Oliwiera, Jana	day_front_20240527_8853.jpg	68	Dzień Samorządu Terytorialnego	40,44
28.05.2024	149	28	22	05	maj	2024	wtorek	149		wiosna	bliźnięta	Augustyna, Jaromira, Justa	day_front_20240528_8cb0.jpg	67	Światowy Dzień Zabawy, Światowy Dzień Hamburgera	40,71
29.05.2024	150	29	22	05	maj	2024	środa	150		wiosna	bliźnięta	Magdaleny, Urszuli, Marii	day_front_20240529_2dc1.jpg	66	Światowy Dzień Zdrowia Układu Pokarmowego, Światowy Dzień Wydry	40,98
30.05.2024	151	30	22	05	maj	2024	czwartek	151		wiosna	bliźnięta	Ferdynanda	day_front_20240530_b7ca.jpg	65	Światowy Dzień Soku	41,26
31.05.2024	152	31	22	05	maj	2024	piątek	152		wiosna	bliźnięta	Petroneli, Anieli, Kamili	day_front_20240531_91da.jpg	64	Dzień Rodzeństwa, Dzień Projektanta Stron Internetowych, Europejski Dzień Sąsiada	41,53
01.06.2024	153	01	22	06	czerwiec	2024	sobota	153		wiosna	bliźnięta	Jakuba, Pameli, Konrada	day_front_20240601_4280.jpg	63	Miesiąc Dumy (1-30 czerwca), Światowy Dzień Mleka, Dzień bez Alkoholu	41,80
02.06.2024	154	02	22	06	czerwiec	2024	niedziela	154		wiosna	bliźnięta	Eugeniusza, Marianny, Marzanny	day_front_20240602_3a0b.jpg	62	Dzień bez Krawata, Dzień Chemika	42,08
03.06.2024	155	03	23	06	czerwiec	2024	poniedziałek	155		wiosna	bliźnięta	Kewina, Leszka	day_front_20240603_bad3.jpg	61	Światowy Dzień Roweru	42,35
04.06.2024	156	04	23	06	czerwiec	2024	wtorek	156		wiosna	bliźnięta	Karola, Franciszka	day_front_20240604_5b87.jpg	60	Dzień Drukarza	42,62
05.06.2024	157	05	23	06	czerwiec	2024	środa	157		wiosna	bliźnięta	Waltera, Walerii, Bonifacego	day_front_20240605_8a60.jpg	59	Światowy Dzień Środowiska, Światowy Dzień Biegania	42,90
06.06.2024	158	06	23	06	czerwiec	2024	czwartek	158		wiosna	bliźnięta	Norberta, Pauliny	day_front_20240606_3676.jpg	58	Dzień Jojo	43,17
07.06.2024	159	07	23	06	czerwiec	2024	piątek	159		wiosna	bliźnięta	Wiesławy, Roberta	day_front_20240607_43a5.jpg	57	Światowy Dzień Bezpieczeństwa Żywnościowego	43,44
08.06.2024	160	08	23	06	czerwiec	2024	sobota	160		wiosna	bliźnięta	Medarda, Seweryna	day_front_20240608_0b58.jpg	56	Dzień Informatyka, Światowy Dzień Oceanów	43,72
09.06.2024	161	09	23	06	czerwiec	2024	niedziela	161		wiosna	bliźnięta	Pelagii, Felicjana	day_front_20240609_6a2a.jpg	55	Dzień Przyjaciela, Dzień Księgowego, Dzień Kaczora Donalda	43,99
10.06.2024	162	10	24	06	czerwiec	2024	poniedziałek	162		wiosna	bliźnięta	Bogumiła, Małgorzaty	day_front_20240610_a2c8.jpg	54	Międzynarodowy Dzień Elektryka	44,26
11.06.2024	163	11	24	06	czerwiec	2024	wtorek	163		wiosna	bliźnięta	Barnaby, Anastazego, Pauli	day_front_20240611_89f6.jpg	53	Międzynarodowy Dzień Rysia	44,54
12.06.2024	164	12	24	06	czerwiec	2024	środa	164		wiosna	bliźnięta	Onufrego, Jana, Mieczysławy	day_front_20240612_f0b8.jpg	52	Dzień Stylisty Paznokci	44,81
13.06.2024	165	13	24	06	czerwiec	2024	czwartek	165		wiosna	bliźnięta	Lucjana, Antoniego	day_front_20240613_0f24.jpg	51	Dzień Dobrych Rad	45,08
14.06.2024	166	14	24	06	czerwiec	2024	piątek	166		wiosna	bliźnięta	Walerego, Metodego, Elizy	day_front_20240614_8284.jpg	50	Międzynarodowy Dzień Kąpieli, Dzień Dziennikarza Obywatelskiego	45,36
15.06.2024	167	15	24	06	czerwiec	2024	sobota	167		wiosna	bliźnięta	Wita, Jolanty	day_front_20240615_b67b.jpg	49	Dzień Wiatru, Ogólnopolski Dzień Dogoterapii	45,63
16.06.2024	168	16	24	06	czerwiec	2024	niedziela	168		wiosna	bliźnięta	Anety, Justyny, Benona, Aliny	day_front_20240616_6806.jpg	48	Międzynarodowy Dzień Rodzinnych Przekazów Pieniężnych	45,90
17.06.2024	169	17	25	06	czerwiec	2024	poniedziałek	169		wiosna	bliźnięta	Laury, Adolfa	day_front_20240617_40b5.jpg	47	Dzień Walki z Pustynnieniem i Suszami, Dzień Czołgisty	46,17
18.06.2024	170	18	25	06	czerwiec	2024	wtorek	170		wiosna	bliźnięta	Elżbiety, Marka, Amandy	day_front_20240618_9c90.jpg	46	Dzień Ewakuacji, Dzień Zrównoważonej Gastronomii, Międzynarodowy Dzień Sushi	46,45
19.06.2024	171	19	25	06	czerwiec	2024	środa	171		wiosna	bliźnięta	Romualda, Protazego, Gerwazego	day_front_20240619_e69e.jpg	45	Światowy Dzień Leniwych Spacerów	46,72
20.06.2024	172	20	25	06	czerwiec	2024	czwartek	172		wiosna	bliźnięta	Florentyny, Bożeny, Bogny	day_front_20240620_0ceb.jpg	44	Światowy Dzień Wi-Fi, Światowy Dzień Uchodźcy, Dzień Pracownika HR	46,99
21.06.2024	173	21	25	06	czerwiec	2024	piątek	173		wiosna	rak	Alojzego, Alicji	day_front_20240621_6b37.jpg	43	Święto Muzyki, Światowy Dzień Żyrafy, Światowy Dzień Selfie, Dzień Deskorolki	47,27
22.06.2024	174	22	25	06	czerwiec	2024	sobota	174	Początek lata	lato	rak	Paulina, Tomasza, Pauliny	day_front_20240622_b424.jpg	42	Światowy Dzień Lasu Deszczowego, Światowy Dzień Smerfa	47,54
23.06.2024	175	23	25	06	czerwiec	2024	niedziela	175		lato	rak	Zenona, Wandy	day_front_20240623_8653.jpg	41	Dzień Olimpijski, Dzień Wędkarza, Dzień Służby Publicznej	47,81
24.06.2024	176	24	25	06	czerwiec	2024	poniedziałek	176		lato	rak	Janiny, Danuty, Jana	day_front_20240624_7ff0.jpg	40	Dzień Chorych na Osteoporozę	48,09
25.06.2024	177	25	26	06	czerwiec	2024	wtorek	177		lato	rak	Prospera, Łucji	day_front_20240625_b0ac.jpg	39	Dzień Żeglarza, Dzień Stoczniowca	48,36
26.06.2024	178	26	26	06	czerwiec	2024	środa	178		lato	rak	Pawła, Jana	day_front_20240626_ab7f.jpg	38	Światowy Dzień Chłodnictwa	48,63
27.06.2024	179	27	26	06	czerwiec	2024	czwartek	179		lato	rak	Marii, Władysława	day_front_20240627_0817.jpg	37	Dzień Ananasa, Dzień Mikro-, Małych i Średnich Przedsiębiorstw	48,91
28.06.2024	180	28	26	06	czerwiec	2024	piątek	180		lato	rak	Ireneusza, Leona	day_front_20240628_5526.jpg	36	Narodowy Dzień Pamięci Poznańskiego Czerwca 1956	49,18
29.06.2024	181	29	26	06	czerwiec	2024	sobota	181		lato	rak	Pawła, Beaty, Piotra	day_front_20240629_68ab.jpg	35	Dzień Rybaka, Dzień Ratownika Wodnego, Dzień Szwagra	49,45
30.06.2024	182	30	26	06	czerwiec	2024	niedziela	182		lato	rak	Lucyny, Emilii, Władysławy	day_front_20240630_bd5e.jpg	34	Międzynarodowy Dzień Asteroidy	49,73
01.07.2024	183	01	26	07	lipiec	2024	poniedziałek	183		lato	rak	Ottona, Haliny, Mariana	day_front_20240701_ec03.jpg	33	Dzień Psa, Międzynarodowy Dzień Owoców	50,00
02.07.2024	184	02	27	07	lipiec	2024	wtorek	184		lato	rak	Jagody, Marii, Urbana	day_front_20240702_170c.jpg	32	Dzień Dziennikarza Sportowego, Międzynarodowy Dzień UFO	50,27
03.07.2024	185	03	27	07	lipiec	2024	środa	185		lato	rak	Tomasza, Jacka, Anatola	day_front_20240703_2858.jpg	31	Międzynarodowy Dzień bez Toreb Foliowych, Dzień Cioci i Wujka	50,55
04.07.2024	186	04	27	07	lipiec	2024	czwartek	186		lato	rak	Malwiny, Teodora	day_front_20240704_330d.jpg	30	Dzień Hot Doga	50,82
05.07.2024	187	05	27	07	lipiec	2024	piątek	187		lato	rak	Atanazego, Karoliny	day_front_20240705_36e6.jpg	29	Dzień Bikini	51,09
06.07.2024	188	06	27	07	lipiec	2024	sobota	188		lato	rak	Dominika, Dominiki, Łucji	day_front_20240706_52cd.jpg	28	Światowy Dzień Pocałunku, Dzień Radcy Prawnego	51,37
07.07.2024	189	07	27	07	lipiec	2024	niedziela	189		lato	rak	Benedykta, Odo	day_front_20240707_b85e.jpg	27	Światowy Dzień Czekolady	51,64
08.07.2024	190	08	27	07	lipiec	2024	poniedziałek	190		lato	rak	Adriana, Prokopa, Elżbiety	day_front_20240708_0483.jpg	26	Dzień Czekolady z Migdałami	51,91
09.07.2024	191	09	28	07	lipiec	2024	wtorek	191		lato	rak	Sylwii, Weroniki, Zenona	day_front_20240709_c410.jpg	25	Dzień Chodzenia do Pracy Inną Drogą, Dzień Kruchych Ciasteczek z Cukrem	52,19
10.07.2024	192	10	28	07	lipiec	2024	środa	192		lato	rak	Filipa, Almy, Amelii	day_front_20240710_3378.jpg	24	Dzień Nikoli Tesli	52,46
11.07.2024	193	11	28	07	lipiec	2024	czwartek	193		lato	rak	Olgi, Piusa	day_front_20240711_5099.jpg	23	Światowy Dzień Ludności	52,73
12.07.2024	194	12	28	07	lipiec	2024	piątek	194		lato	rak	Bruno, Paulina, Witolda	day_front_20240712_7661.jpg	22	Światowy Dzień Kebaba, Dzień Walki i Męczeństwa Wsi Polskiej	53,01
13.07.2024	195	13	28	07	lipiec	2024	sobota	195		lato	rak	Sary, Małgorzaty	day_front_20240713_6e40.jpg	21	Dzień Frytek, Międzynarodowy Dzień Rock'n'Roll	53,28
14.07.2024	196	14	28	07	lipiec	2024	niedziela	196		lato	rak	Marcela, Kamila, Angeliny, Selli	day_front_20240714_7712.jpg	20	Dzień Rekina, Światowy Dzień Szympansa	53,55
15.07.2024	197	15	28	07	lipiec	2024	poniedziałek	197		lato	rak	Roksany, Bonawentury, Włodzimierza, Henryka, Dawida	day_front_20240715_bde0.jpg	19	Dzień bez Telefonu Komórkowego, Światowy Dzień Umiejętności Młodzieży	53,83
16.07.2024	198	16	29	07	lipiec	2024	wtorek	198		lato	rak	Mariki, Marii	day_front_20240716_dd32.jpg	18	Światowy Dzień Węża	54,10
17.07.2024	199	17	29	07	lipiec	2024	środa	199		lato	rak	Anety, Jadwigi, Bogdana	day_front_20240717_b4b1.jpg	17	Światowy Dzień Emoji	54,37
18.07.2024	200	18	29	07	lipiec	2024	czwartek	200		lato	rak	Szymona, Kamila, Emiliana	day_front_20240718_ba75.jpg	16	Dzień Kawioru, Światowy Dzień Słuchania	54,64
19.07.2024	201	19	29	07	lipiec	2024	piątek	201		lato	rak	Makryny, Radomiły	day_front_20240719_e80c.jpg	15	Dzień Czerwonego Kapturka	54,92
20.07.2024	202	20	29	07	lipiec	2024	sobota	202		lato	rak	Czesława, Małgorzaty, Hieronima	day_front_20240720_3d6a.jpg	14	Dzień Księżyca, Międzynarodowy Dzień Szachów	55,19
21.07.2024	203	21	29	07	lipiec	2024	niedziela	203		lato	rak	Wiktora, Daniela	day_front_20240721_7965.jpg	13	Dzień Fast Foodu	55,46
22.07.2024	204	22	29	07	lipiec	2024	poniedziałek	204		lato	rak	Leny, Magdaleny, Mileny	day_front_20240722_9f34.jpg	12	Światowy Dzień Mózgu	55,74
23.07.2024	205	23	30	07	lipiec	2024	wtorek	205		lato	lew	Brygidy, Apolinarii, Bogny	day_front_20240723_a4f8.jpg	11	Dzień Włóczykija	56,01
24.07.2024	206	24	30	07	lipiec	2024	środa	206		lato	lew	Kingi, Krystyny, Krzesimira	day_front_20240724_6868.jpg	10	Dzień Policjanta, Dzień Wirtualnej Miłości	56,28
25.07.2024	207	25	30	07	lipiec	2024	czwartek	207		lato	lew	Jakuba, Krzysztofa	day_front_20240725_e404.jpg	9	Dzień Bezpiecznego Kierowcy	56,56
26.07.2024	208	26	30	07	lipiec	2024	piątek	208		lato	lew	Hanny, Grażyny, Anny	day_front_20240726_d706.jpg	8	Międzynarodowy Dzień Ochrony Ekosystemu i Lasów Namorzynowych, Dzień Rozmów w Windzie	56,83
27.07.2024	209	27	30	07	lipiec	2024	sobota	209		lato	lew	Natalii, Julii	day_front_20240727_58a1.jpg	7	Dzień Chodzenia na Szczudłach, Święto Papieru	57,10
28.07.2024	210	28	30	07	lipiec	2024	niedziela	210		lato	lew	Wiktora, Tiny	day_front_20240728_763f.jpg	6	Światowy Dzień Dziadków i Osób Starszych	57,38
29.07.2024	211	29	30	07	lipiec	2024	poniedziałek	211		lato	lew	Marty, Olafa	day_front_20240729_5726.jpg	5	Światowy Dzień Tygrysa	57,65
30.07.2024	212	30	31	07	lipiec	2024	wtorek	212		lato	lew	Piotra, Julity	day_front_20240730_4b3f.jpg	4	Międzynarodowy Dzień Sernika, Międzynarodowy Dzień Przyjaźni	57,92
31.07.2024	213	31	31	07	lipiec	2024	środa	213		lato	lew	Ignacego, Heleny	day_front_20240731_6745.jpg	3	Dzień Skarbowości	58,20
01.08.2024	214	01	31	08	sierpień	2024	czwartek	214		lato	lew	Justyna, Alfonsa	day_front_20240801_1d1c.jpg	2	Dzień Pamięci Warszawy, Dzień Światowej Sieci Internetowej	58,47
02.08.2024	215	02	31	08	sierpień	2024	piątek	215		lato	lew	Gustawa, Piotra, Kuriny	day_front_20240802_bb35.jpg	1	Dzień Kolorowanek, Międzynarodowy Dzień Piwa	58,74
03.08.2024	216	03	31	08	sierpień	2024	sobota	216		lato	lew	Nikodema, Kamelii, Lidii	day_front_20240803_3eb5.jpg	0	Dzień Arbuza, Dzień Czyszczenia Podłóg, Dzień Musztardy	59,02
04.08.2024	217	04	31	08	sierpień	2024	niedziela	217		lato	lew	Dominika, Prokopa	day_front_20240804_4ce0.jpg	360	Międzynarodowy Dzień Pantery Mglistej	59,29
05.08.2024	218	05	31	08	sierpień	2024	poniedziałek	218		lato	lew	Oswalda, Kasjana	day_front_20240805_96ff.jpg	359	Dzień Ostrygi	59,56
06.08.2024	219	06	32	08	sierpień	2024	wtorek	219		lato	lew	Sławy, Oktawiana, Jakuba	day_front_20240806_5e80.jpg	358	Dzień Świeżego Oddechu	59,84
07.08.2024	220	07	32	08	sierpień	2024	środa	220		lato	lew	Konrada, Doroty, Kajetana, Klaudii	day_front_20240807_2d71.jpg	357	Dzień Pracownika Opieki nad Osobami Starszymi	60,11
08.08.2024	221	08	32	08	sierpień	2024	czwartek	221		lato	lew	Emiliana, Mirona	day_front_20240808_8e1c.jpg	356	Międzynarodowy Dzień Kota, Wielki Dzień Pszczół	60,38
09.08.2024	222	09	32	08	sierpień	2024	piątek	222		lato	lew	Ireny, Romana, Romualda	day_front_20240809_6bae.jpg	355	Dzień Miłośników Książek	60,66
10.08.2024	223	10	32	08	sierpień	2024	sobota	223		lato	lew	Wawrzyńca, Borysa	day_front_20240810_4a34.jpg	354	Światowy Dzień Lwa, Dzień Przewodników i Ratowników Górskich, Dzień Gry w Kręgle	60,93
11.08.2024	224	11	32	08	sierpień	2024	niedziela	224		lato	lew	Zuzanny, Włodzimierza	day_front_20240811_3584.jpg	353	Dzień Konserwatora Zabytków	61,20
12.08.2024	225	12	32	08	sierpień	2024	poniedziałek	225		lato	lew	Lecha, Klary	day_front_20240812_9634.jpg	352	Światowy Dzień Słonia, Międzynarodowy Dzień Młodzieży	61,48
13.08.2024	226	13	33	08	sierpień	2024	wtorek	226		lato	lew	Kasjany, Diany, Hipolita	day_front_20240813_2ffb.jpg	351	Międzynarodowy Dzień Osób Leworęcznych	61,75
14.08.2024	227	14	33	08	sierpień	2024	środa	227		lato	lew	Maksymiliana, Euzebiusza	day_front_20240814_d2dc.jpg	350	Dzień Energetyka, Światowy Dzień Kaligrafii	62,02
15.08.2024	228	15	33	08	sierpień	2024	czwartek	228		lato	lew	Cypriana, Dominika, Emiliana	day_front_20240815_d9f1.jpg	349	Dzień Relaksu	62,30
16.08.2024	229	16	33	08	sierpień	2024	piątek	229		lato	lew	Rocha, Diomedesa	day_front_20240816_aaa3.jpg	348	Dzień Roller Coastera, Dzień Płacenia Gotówką	62,57
17.08.2024	230	17	33	08	sierpień	2024	sobota	230		lato	lew	Anity, Jacka	day_front_20240817_c64c.jpg	347	Dzień Pozytywnie Zakręconych, Dzień Lumpeksu, Dzień Synowej, Międzynarodowy Dzień Geocachingu	62,84
18.08.2024	231	18	33	08	sierpień	2024	niedziela	231		lato	lew	Heleny, Ilony	day_front_20240818_0635.jpg	346	Dzień Ciasta Lodowego, Międzynarodowy Dzień Latarni Morskich	63,11
19.08.2024	232	19	34	08	sierpień	2024	poniedziałek	232		lato	lew	Ezechiela, Bolesława, Julisza	day_front_20240819_8bde.jpg	345	Międzynarodowy Dzień Orangutana, Dzień Fotografii	63,39
20.08.2024	233	20	34	08	sierpień	2024	wtorek	233		lato	lew	Bernarda, Samuela	day_front_20240820_97e8.jpg	344	Światowy Dzień Komara, Dzień Wyznawania Miłości	63,66
21.08.2024	234	21	34	08	sierpień	2024	środa	234		lato	lew	Joanny, Wiktorii, Franciszka	day_front_20240821_ac9b.jpg	343	Światowy Dzień Optymisty	63,93
22.08.2024	235	22	34	08	sierpień	2024	czwartek	235		lato	lew	Marii, Cezarego	day_front_20240822_cb52.jpg	342	Światowy Dzień Mleka Roślinnego, Dzień Pracownika Ochrony, Dzień Jasnowidza	64,21
23.08.2024	236	23	34	08	sierpień	2024	piątek	236		lato	panna	Róży, Apolinarego	day_front_20240823_8313.jpg	341	Międzynarodowy Dzień Pamięci o Handlu Niewolnikami i Jego Zniesieniu	64,48
24.08.2024	237	24	34	08	sierpień	2024	sobota	237		lato	panna	Bartosza, Bartłomieja, Jerzego	day_front_20240824_ce0b.jpg	340	Dzień Zdegradowania Plutona, Międzynarodowa Noc Nietoperzy	64,75
25.08.2024	238	25	34	08	sierpień	2024	niedziela	238		lato	panna	Patrycji, Luizy, Ludwika	day_front_20240825_7db5.jpg	339	Dzień Zupy Błyskawicznej, Dzień Polskiej Żywności	65,03
26.08.2024	239	26	35	08	sierpień	2024	poniedziałek	239		lato	panna	Sandry, Aleksandra, Marii	day_front_20240826_a9a2.jpg	338	Święto Brokatu, Międzynarodowy Dzień Psa	65,30
27.08.2024	240	27	35	08	sierpień	2024	wtorek	240		lato	panna	Cezarego, Józefa, Moniki	day_front_20240827_50b5.jpg	337	Dzień Tira, Międzynarodowy Dzień Gier Książkowych	65,57
28.08.2024	241	28	35	08	sierpień	2024	środa	241		lato	panna	Patrycji, Aleksego, Augustyna	day_front_20240828_ca97.jpg	336	Święto Lotnictwa Polskiego, Dzień Muszki	65,85
29.08.2024	242	29	35	08	sierpień	2024	czwartek	242		lato	panna	Beatrycze, Sabiny	day_front_20240829_695f.jpg	335	Dzień Straży Gminnej	66,12
30.08.2024	243	30	35	08	sierpień	2024	piątek	243		lato	panna	Feliksa, Tekli	day_front_20240830_f314.jpg	334	Międzynarodowy Dzień Pamięci o Osobach Zaginionych, Dzień Taksówkarza	66,39
31.08.2024	244	31	35	08	sierpień	2024	sobota	244		lato	panna	Bohdana, Rajmunda	day_front_20240831_db34.jpg	333	Dzień Blogów	66,67
01.09.2024	245	01	35	09	wrzesień	2024	niedziela	245		lato	panna	Idziego, Bronisława	day_front_20240901_b138.jpg	332	Rozpoczęcie Roku Szkolnego, Święto Wojsk Obrony Przeciwlotniczej	66,94
02.09.2024	246	02	36	09	wrzesień	2024	poniedziałek	246		lato	panna	Stefana, Wilhelma, Juliana	day_front_20240902_e641.jpg	331	Dzień Upamiętniający Koniec II Wojny Światowej w Japonii, Dzień Dobrych Manier w Pracy	67,21
03.09.2024	247	03	36	09	wrzesień	2024	wtorek	247		lato	panna	Izabeli, Gerarda, Szymona	day_front_20240903_d993.jpg	330	Dzień Wieżowca	67,49
04.09.2024	248	04	36	09	wrzesień	2024	środa	248		lato	panna	Rozalii, Stelli	day_front_20240904_84c0.jpg	329	Dzień Orzechów Makadamia, Światowy Dzień Pozyskiwania Talentów	67,76
05.09.2024	249	05	36	09	wrzesień	2024	czwartek	249		lato	panna	Doroty, Wawrzyńca	day_front_20240905_37cb.jpg	328	Międzynarodowy Dzień Dobroczynności	68,03
06.09.2024	250	06	36	09	wrzesień	2024	piątek	250		lato	panna	Beaty, Eugeniusza	day_front_20240906_5531.jpg	327	Dzień Czytania Książek	68,31
07.09.2024	251	07	36	09	wrzesień	2024	sobota	251		lato	panna	Melchiora, Reginy	day_front_20240907_ccb1.jpg	326	Światowy Dzień Brody, Dzień Salami	68,58
08.09.2024	252	08	36	09	wrzesień	2024	niedziela	252		lato	panna	Marii, Adrianny, Radosława	day_front_20240908_a841.jpg	325	Światowy Dzień Fizjoterapii, Dzień Dobrych Wiadomości, Dzień Marzyciela	68,85
09.09.2024	253	09	37	09	wrzesień	2024	poniedziałek	253		lato	panna	Piotra, Sergiusza	day_front_20240909_8974.jpg	324	Dzień Recyklingu Baterii, Dzień Testera Oprogramowania, Dzień Urody	69,13
10.09.2024	254	10	37	09	wrzesień	2024	wtorek	254		lato	panna	Mikołaja, Sebastiana, Łukasza	day_front_20240910_5e12.jpg	323	Światowy Dzień Zapobiegania Samobójstwom, Dzień Piłkarza	69,40
11.09.2024	255	11	37	09	wrzesień	2024	środa	255		lato	panna	Jacka, Prota, Dagny	day_front_20240911_aedd.jpg	322	Dzień Ścielenia Łóżka	69,67
12.09.2024	256	12	37	09	wrzesień	2024	czwartek	256		lato	panna	Gwidona, Marii, Mai	day_front_20240912_c04f.jpg	321	Dzień Programisty, Dzień Brukarza	69,95
13.09.2024	257	13	37	09	wrzesień	2024	piątek	257		lato	panna	Jana Chryzostoma, Filipa	day_front_20240913_047a.jpg	320	Dzień Weterana Służby Granicznej	70,22
14.09.2024	258	14	37	09	wrzesień	2024	sobota	258		lato	panna	Bernarda, Roksany	day_front_20240914_16e1.jpg	319	Dzień Języka Niemieckiego, Światowy Dzień Pierwszej Pomocy	70,49
15.09.2024	259	15	37	09	wrzesień	2024	niedziela	259		lato	panna	Albina, Rolanda, Nikodema	day_front_20240915_a20a.jpg	318	Międzynarodowy Dzień Kropki, Dzień Opakowań	70,77
16.09.2024	260	16	38	09	wrzesień	2024	poniedziałek	260		lato	panna	Kornela, Kamili, Edyty	day_front_20240916_c354.jpg	317	Światowy Dzień Fryzjera, Europejski Tydzień Zrównoważonego Transportu (16-22 września)	71,04
17.09.2024	261	17	38	09	wrzesień	2024	wtorek	261		lato	panna	Roberta, Justyny	day_front_20240917_7e00.jpg	316	Międzynarodowy Dzień Muzyki Country	71,31
18.09.2024	262	18	38	09	wrzesień	2024	środa	262		lato	panna	Ireny, Stanisława	day_front_20240918_c8cf.jpg	315	Międzynarodowy Dzień Geologa, Dzień Pierwszej Miłości, Międzynarodowy Dzień Równej Płacy	71,58
19.09.2024	263	19	38	09	wrzesień	2024	czwartek	263		lato	panna	Teodora, Konstancji, Januarego	day_front_20240919_6948.jpg	314	Dzień Dzikiej Flory, Fauny i Naturalnych Siedlisk	71,86
20.09.2024	264	20	38	09	wrzesień	2024	piątek	264		lato	panna	Filipy, Franciszka	day_front_20240920_eb6b.jpg	313	Dzień Przedszkolaka, Międzynarodowy Dzień Sportu Akademickiego	72,13
21.09.2024	265	21	38	09	wrzesień	2024	sobota	265		lato	panna	Miry, Mateusza	day_front_20240921_9cc0.jpg	312	Dzień Minigolfa, Dzień Gimnastyki, Dzień Europejskiej Współpracy, Dzień Zerowej Emisji	72,40
22.09.2024	266	22	38	09	wrzesień	2024	niedziela	266		lato	panna	Maurycego, Joachima, Tomasza	day_front_20240922_1b59.jpg	311	Światowy Dzień Nosorożca, Dzień Bez Samochodu, Światowy Dzień Rzek	72,68
23.09.2024	267	23	39	09	wrzesień	2024	poniedziałek	267	Początek jesieni	jesień	waga	Bogusława, Tekli	day_front_20240923_6d78.jpg	310	Dzień Spadającego Liścia, Międzynarodowy Dzień Języków Migowych	72,95
24.09.2024	268	24	39	09	wrzesień	2024	wtorek	268		jesień	waga	Gerarda, Gerardy	day_front_20240924_c47c.jpg	309	Dzień Stylistów Rzęs	73,22
25.09.2024	269	25	39	09	wrzesień	2024	środa	269		jesień	waga	Kleofasa, Aurelii	day_front_20240925_e53e.jpg	308	Światowy Dzień Farmaceuty, Światowy Dzień Marzeń, Dzień Budowlańca	73,50
26.09.2024	270	26	39	09	wrzesień	2024	czwartek	270		jesień	waga	Cypriana, Damiana, Justyny	day_front_20240926_783c.jpg	307	Europejski Dzień Języków, Ogólnopolski Dzień Aptekarza	73,77
27.09.2024	271	27	39	09	wrzesień	2024	piątek	271		jesień	waga	Wincentego, Gai	day_front_20240927_7a72.jpg	306	Światowy Dzień Turystyki, Dzień Podziemnego Państwa Polskiego	74,04
28.09.2024	272	28	39	09	wrzesień	2024	sobota	272		jesień	waga	Wacława, Marka	day_front_20240928_c576.jpg	305	Międzynarodowy Dzień Powszechnego Dostępu do Informacji, Światowy Dzień Jabłka	74,32
29.09.2024	273	29	39	09	wrzesień	2024	niedziela	273		jesień	waga	Michaliny, Michała	day_front_20240929_4bb4.jpg	304	Światowy Dzień Serca, Dzień Kuriera i Przewoźnika, Dzień Kawy	74,59
30.09.2024	274	30	40	09	wrzesień	2024	poniedziałek	274		jesień	waga	Grzegorza, Zofii	day_front_20240930_4090.jpg	303	Międzynarodowy Dzień Tłumacza, Dzień Archiwisty, Dzień Zadawania Głupich Pytań	74,86
01.10.2024	275	01	40	10	październik	2024	wtorek	275		jesień	waga	Remigiusza, Danuty	day_front_20241001_2499.jpg	302	Światowy Dzień Wegetarianizmu, Międzynarodowy Dzień Kawy, Dzień Muzyki	75,14
02.10.2024	276	02	40	10	październik	2024	środa	276		jesień	waga	Antoniego, Teofila	day_front_20241002_b1ba.jpg	301	Międzynarodowy Dzień bez Przemocy, Światowy Dzień Zwierząt Hodowlanych	75,41
03.10.2024	277	03	40	10	październik	2024	czwartek	277		jesień	waga	Teresy, Gerarda, Gerardy	day_front_20241003_f309.jpg	300	Dzień Technologii	75,68
04.10.2024	278	04	40	10	październik	2024	piątek	278		jesień	waga	Petroneliusza, Franciszka	day_front_20241004_13ad.jpg	299	Dzień Cynamonowej Bułeczki, Światowy Dzień Zwierząt, Światowy Dzień Uśmiechu	75,96
05.10.2024	279	05	40	10	październik	2024	sobota	279		jesień	waga	Faustyny, Igora, Apolinarego	day_front_20241005_c6dd.jpg	298	Światowy Dzień Nauczyciela, Dzień Tkaczki	76,23
06.10.2024	280	06	40	10	październik	2024	niedziela	280		jesień	waga	Brunona, Artura, Fryderyki	day_front_20241006_5958.jpg	297	Dzień Borsuka, Dzień Polskiej Harcerki	76,50
07.10.2024	281	07	41	10	październik	2024	poniedziałek	281		jesień	waga	Justyny, Marka, Amelii	day_front_20241007_58e1.jpg	296	Światowy Dzień Architektury, Światowy Dzień Habitatu, Światowy Dzień Bawełny	76,78
08.10.2024	282	08	41	10	październik	2024	wtorek	282		jesień	waga	Pelagii, Laurencji, Brygidy	day_front_20241008_d23b.jpg	295	Dzień Pierogów, Światowy Dzień Ośmiornicy	77,05
09.10.2024	283	09	41	10	październik	2024	środa	283		jesień	waga	Dionizego, Arnolda	day_front_20241009_eb94.jpg	294	Światowy Dzień Poczty i Znaczka Pocztowego	77,32
10.10.2024	284	10	41	10	październik	2024	czwartek	284		jesień	waga	Daniela, Franciszka, Pauliny	day_front_20241010_6342.jpg	293	Światowy Dzień Owsianki, Dzień Drzewa, Dzień Gier Planszowych	77,60
11.10.2024	285	11	41	10	październik	2024	piątek	285		jesień	waga	Aldony, Brunona	day_front_20241011_5282.jpg	292	Światowy Dzień Jaja, Dzień Wychodzenia z Szafy	77,87
12.10.2024	286	12	41	10	październik	2024	sobota	286		jesień	waga	Witolda, Maksymiliana	day_front_20241012_6d1b.jpg	291	Światowy Dzień Ptaków Wędrownych, Dzień Bezpiecznego Komputera	78,14
13.10.2024	287	13	41	10	październik	2024	niedziela	287		jesień	waga	Teofila, Edwarda	day_front_20241013_1a1d.jpg	290	Międzynarodowy Dzień Ograniczania Skutków Katastrof, Dzień Sceptyków	78,42
14.10.2024	288	14	42	10	październik	2024	poniedziałek	288		jesień	waga	Fortunaty, Dominika, Alana	day_front_20241014_e526.jpg	289	Światowy Dzień Normalizacji	78,69
15.10.2024	289	15	42	10	październik	2024	wtorek	289		jesień	waga	Jadwigi, Teresy	day_front_20241015_4a49.jpg	288	Światowy Dzień Mycia Rąk	78,96
16.10.2024	290	16	42	10	październik	2024	środa	290		jesień	waga	Gawła, Ambrożego	day_front_20241016_5eb0.jpg	287	Światowy Dzień Żywności, Światowy Dzień Chleba, Światowy Dzień Godności	79,23
17.10.2024	291	17	42	10	październik	2024	czwartek	291		jesień	waga	Małgorzaty, Milawii, Lucyny	day_front_20241017_4177.jpg	286	Dzień Arkusza Kalkulacyjnego, Dzień Walki z Ubóstwem	79,51
18.10.2024	292	18	42	10	październik	2024	piątek	292		jesień	waga	Łukasza, Juliana	day_front_20241018_aac1.jpg	285	Dzień Poczty Polskiej, Światowy Dzień Owoców i Warzyw	79,78
19.10.2024	293	19	42	10	październik	2024	sobota	293		jesień	waga	Piotra, Ziemowita	day_front_20241019_d630.jpg	284	Międzynarodowy Dzień Naprawy, Europejska Noc bez Wypadku	80,05
20.10.2024	294	20	42	10	październik	2024	niedziela	294		jesień	waga	Felicjana, Ireny	day_front_20241020_174c.jpg	283	Międzynarodowy Dzień Krajobrazu, Dzień Nadmiaru Informacji	80,33
21.10.2024	295	21	43	10	październik	2024	poniedziałek	295		jesień	waga	Celiny, Urszuli	day_front_20241021_399c.jpg	282	Dzień Nachosów	80,60
22.10.2024	296	22	43	10	październik	2024	wtorek	296		jesień	waga	Kordiana, Filipa	day_front_20241022_586d.jpg	281	DZIEŃ CAPS LOCKA, Dzień Praw Rodziny, Światowy Dzień Energii	80,87
23.10.2024	297	23	43	10	październik	2024	środa	297		jesień	skorpion	Marleny, Seweryna	day_front_20241023_a1f4.jpg	280	Dzień Kreta, Międzynarodowy Dzień Pantery Śnieżnej	81,15
24.10.2024	298	24	43	10	październik	2024	czwartek	298		jesień	skorpion	Arety, Alojzego, Marcina	day_front_20241024_97c7.jpg	279	Światowy Dzień Kangura, Światowe Dni Origami (24 października - 11 listopada)	81,42
25.10.2024	299	25	43	10	październik	2024	piątek	299		jesień	skorpion	Kryspina, Ingi, Darii	day_front_20241025_0f06.jpg	278	Światowy Dzień Makaronu, Dzień Kundelka, Światowy Dzień Opery	81,69
26.10.2024	300	26	43	10	październik	2024	sobota	300		jesień	skorpion	Łucjana, Dymitra	day_front_20241026_0d9c.jpg	277	Światowy Dzień Donacji i Transplantacji, Światowy Dzień Pływania	81,97
27.10.2024	301	27	43	10	październik	2024	niedziela	301	Zmiana czasu na zimowy	jesień	skorpion	Manfreda, Sabiny, Iwony	day_front_20241027_38dc.jpg	276	Światowy Dzień Dziedzictwa Audiowizualnego, Światowy Dzień Kapłana	82,24
28.10.2024	302	28	44	10	październik	2024	poniedziałek	302		jesień	skorpion	Tadeusza, Szymona	day_front_20241028_5457.jpg	275	Dzień Miłośników Pluszaków, Międzynarodowy Dzień Animacji	82,51
29.10.2024	303	29	44	10	październik	2024	wtorek	303		jesień	skorpion	Wioletty, Narcyza, Teodora	day_front_20241029_f045.jpg	274	Dzień Internetu	82,79
30.10.2024	304	30	44	10	październik	2024	środa	304		jesień	skorpion	Edmunda, Przemysława	day_front_20241030_c05c.jpg	273	Dzień Spódnicy	83,06
31.10.2024	305	31	44	10	październik	2024	czwartek	305		jesień	skorpion	Antonina, Augusty	day_front_20241031_2c47.jpg	272	Światowy Dzień Oszczędzania, Światowy Dzień Miast	83,33
01.11.2024	306	01	44	11	listopad	2024	piątek	306		jesień	skorpion	Seweryna, Andrzeja	day_front_20241101_c1f9.jpg	271	Światowy Dzień Wegan, Dzień Pióra Wiecznego	83,61
02.11.2024	307	02	44	11	listopad	2024	sobota	307		jesień	skorpion	Bohdana, Jerzego	day_front_20241102_e994.jpg	270	Światowy Dzień Numbata	83,88
03.11.2024	308	03	44	11	listopad	2024	niedziela	308		jesień	skorpion	Sylwii, Huberta	day_front_20241103_d8db.jpg	269	Dzień Kanapki, Dzień Gospodyni Domowej, Światowy Dzień Meduzy	84,15
04.11.2024	309	04	45	11	listopad	2024	poniedziałek	309		jesień	skorpion	Karola, Olgierda	day_front_20241104_966a.jpg	268	Dzień Taniego Wina	84,43
05.11.2024	310	05	45	11	listopad	2024	wtorek	310		jesień	skorpion	Sławomira, Elżbiety	day_front_20241105_677f.jpg	267	Światowy Dzień Języka Romskiego, Międzynarodowy Dzień Postaci z Bajek	84,70
06.11.2024	311	06	45	11	listopad	2024	środa	311		jesień	skorpion	Melaniusza, Leonarda	day_front_20241106_0afc.jpg	266	Dzień Saksofonu	84,97
07.11.2024	312	07	45	11	listopad	2024	czwartek	312		jesień	skorpion	Antoniego, Florentego	day_front_20241107_31db.jpg	265	Międzynarodowy Dzień Zarządzania Projektami, Międzynarodowy Dzień Fizyki Medycznej	85,25
08.11.2024	313	08	45	11	listopad	2024	piątek	313		jesień	skorpion	Godfryda, Klaudiusza	day_front_20241108_8a72.jpg	264	Dzień Cappuccino, Europejski Dzień Zdrowego Jedzenia i Gotowania	85,52
09.11.2024	314	09	45	11	listopad	2024	sobota	314		jesień	skorpion	Ursyna, Teodora	day_front_20241109_bc96.jpg	263	Europejski Dzień Wynalazcy	85,79
10.11.2024	315	10	45	11	listopad	2024	niedziela	315		jesień	skorpion	Leny, Leona	day_front_20241110_4534.jpg	262	Dzień Jeża, Dzień Ulicy Sezamkowej, Międzynarodowy Dzień Łamańców Językowych	86,07
11.11.2024	316	11	46	11	listopad	2024	poniedziałek	316		jesień	skorpion	Marcina, Anastazji	day_front_20241111_f525.jpg	261	Dzień Służby Cywilnej, Dzień Singli	86,34
12.11.2024	317	12	46	11	listopad	2024	wtorek	317		jesień	skorpion	Renaty, Witolda	day_front_20241112_941f.jpg	260	Światowy Dzień Drwala, Światowy Dzień Ergonomii	86,61
13.11.2024	318	13	46	11	listopad	2024	środa	318		jesień	skorpion	Liwii, Stanisława, Stanisławy	day_front_20241113_4933.jpg	259	Dzień Biznesmena, Światowy Dzień Dobroci, Dzień Placków Ziemniaczanych	86,89
14.11.2024	319	14	46	11	listopad	2024	czwartek	319		jesień	skorpion	Agaty, Wawrzyńca	day_front_20241114_0c6e.jpg	258	Ogólnopolski Dzień Seniora, Światowy Dzień Jakości, Dzień Czystego Powietrza	87,16
15.11.2024	320	15	46	11	listopad	2024	piątek	320		jesień	skorpion	Leopolda, Alberta	day_front_20241115_dd03.jpg	257	Dzień Uwięzionego Pisarza, Dzień Filantropii	87,43
16.11.2024	321	16	46	11	listopad	2024	sobota	321		jesień	skorpion	Marka, Edmunda	day_front_20241116_4747.jpg	256	Dzień Służby Zagranicznej, Międzynarodowy Dzień Tolerancji	87,70
17.11.2024	322	17	46	11	listopad	2024	niedziela	322		jesień	skorpion	Salomei, Grzegorza, Hugo	day_front_20241117_4e76.jpg	255	Dzień Czarnego Kota, Dzień bez Długów	87,98
18.11.2024	323	18	47	11	listopad	2024	poniedziałek	323		jesień	skorpion	Romana, Tomasza	day_front_20241118_7e78.jpg	254	Dzień Myszki Miki	88,25
19.11.2024	324	19	47	11	listopad	2024	wtorek	324		jesień	skorpion	Seweryna, Elżbiety	day_front_20241119_19d1.jpg	253	Światowy Dzień Toalet, Europejski Tydzień Redukcji Odpadów (19-27 listopada)	88,52
20.11.2024	325	20	47	11	listopad	2024	środa	325		jesień	skorpion	Feliksa, Rafała	day_front_20241120_9a6e.jpg	252	Dzień Absurdu, Dzień Uprzemysłowienia Afryki	88,80
21.11.2024	326	21	47	11	listopad	2024	czwartek	326		jesień	skorpion	Rufusa, Konrada, Janusza	day_front_20241121_e379.jpg	251	Światowy Dzień Życzliwości i Pozdrowień, Światowy Dzień Telewizji, Światowy Dzień Filozofii	89,07
22.11.2024	327	22	47	11	listopad	2024	piątek	327		jesień	strzelec	Cecylii, Marka	day_front_20241122_cd79.jpg	250	Dzień Kredki, Święto Transportu Wojskowego, Dzień Nitkowania	89,34
23.11.2024	328	23	47	11	listopad	2024	sobota	328		jesień	strzelec	Adeli, Klemensa, Felicyty	day_front_20241123_acc7.jpg	249	Dzień Espersso, Dzień Fibonacciego	89,62
24.11.2024	329	24	47	11	listopad	2024	niedziela	329		jesień	strzelec	Flory, Walentego, Jana	day_front_20241124_ecb1.jpg	248	Katarzynki, Dzień Buraka, Dzień Sardynek, Dzień Morsa	89,89
25.11.2024	330	25	48	11	listopad	2024	poniedziałek	330		jesień	strzelec	Erazma, Katarzyny	day_front_20241125_fb23.jpg	247	Dzień Pluszowego Misia, Dzień bez Futra, Dzień Tramwajarza, Dzień Kolejarza	90,16
26.11.2024	331	26	48	11	listopad	2024	wtorek	331		jesień	strzelec	Konrada, Leonarda	day_front_20241126_fa76.jpg	246	Dzień Ciasta, Światowy Dzień Drzewa Oliwnego	90,44
27.11.2024	332	27	48	11	listopad	2024	środa	332		jesień	strzelec	Wirgiliusza, Waleriana	day_front_20241127_854e.jpg	245	Dzień Igieł i Szpilek	90,71
28.11.2024	333	28	48	11	listopad	2024	czwartek	333		jesień	strzelec	Jakuba, Zdzisława	day_front_20241128_ac84.jpg	244	Dzień Pocałunku, Dzień Podłości	90,98
29.11.2024	334	29	48	11	listopad	2024	piątek	334		jesień	strzelec	Saturnina, Błażeji	day_front_20241129_1eca.jpg	243	Dzień Podchorążego, Międzynarodowy Dzień Inżyniera Systemów	91,26
30.11.2024	335	30	48	11	listopad	2024	sobota	335		jesień	strzelec	Andrzeja, Fryderyka	day_front_20241130_491e.jpg	242	Dzień Białych Skarpetek, Dzień bez Zakupów	91,53
01.12.2024	336	01	48	12	grudzień	2024	niedziela	336		jesień	strzelec	Natalii, Eligiusza, Blanki	day_front_20241201_76ce.jpg	241	Dzień Jubilera, Światowy Dzień AIDS, Dzień Numizmatyka	91,80
02.12.2024	337	02	49	12	grudzień	2024	poniedziałek	337		jesień	strzelec	Pauliny, Balbiny, Rafała	day_front_20241202_2467.jpg	240	Dzień Placków, Dzień Gry w Koszykówkę	92,08
03.12.2024	338	03	49	12	grudzień	2024	wtorek	338		jesień	strzelec	Ksawerego, Franciszka	day_front_20241203_33f8.jpg	239	Światowy Dzień Majsterkowicza, Dzień Naftowca i Gazownika	92,35
04.12.2024	339	04	49	12	grudzień	2024	środa	339		jesień	strzelec	Barbary, Krystiana	day_front_20241204_c343.jpg	238	Barbórka, Światowy Dzień Ochrony Dzikich Zwierząt, Dzień Kostki do Gry, Dzień Górnika	92,62
05.12.2024	340	05	49	12	grudzień	2024	czwartek	340		jesień	strzelec	Saby, Kryspiny	day_front_20241205_f586.jpg	237	Światowy Dzień Gleby, Międzynarodowy Dzień Ninja	92,90
06.12.2024	341	06	49	12	grudzień	2024	piątek	341		jesień	strzelec	Mikołaja, Angeliki	day_front_20241206_1664.jpg	236	Dzień Lombardów, Dzień Anioła, Dzień Sztucznego Futra	93,17
07.12.2024	342	07	49	12	grudzień	2024	sobota	342		jesień	strzelec	Marcina, Ambrożego	day_front_20241207_9cdf.jpg	235	Międzynarodowy Dzień Lotnictwa Cywilnego	93,44
08.12.2024	343	08	49	12	grudzień	2024	niedziela	343		jesień	strzelec	Romaryka, Marii	day_front_20241208_2b3b.jpg	234	Dzień Kupca, Międzynarodowy Dzień Palenia Świec	93,72
09.12.2024	344	09	50	12	grudzień	2024	poniedziałek	344		jesień	strzelec	Wiesława, Leokadii, Wiesławy	day_front_20241209_f213.jpg	233	Międzynarodowy Dzień Medycyny Weterynaryjnej, Dzień Lamy	93,99
10.12.2024	345	10	50	12	grudzień	2024	wtorek	345		jesień	strzelec	Julii, Menasa	day_front_20241210_b539.jpg	232	Dzień Praw Człowieka, Dzień Bota, Międzynarodowy Dzień Praw Zwierząt	94,26
11.12.2024	346	11	50	12	grudzień	2024	środa	346		jesień	strzelec	Daniela, Artura, Waldemara	day_front_20241211_c116.jpg	231	Dzień Chruścików, Międzynarodowy Dzień Gór, Międzynarodowy Dzień Tanga	94,54
12.12.2024	347	12	50	12	grudzień	2024	czwartek	347		jesień	strzelec	Adelajdy, Aleksandra, Dagmary	day_front_20241212_993b.jpg	230	Dzień Guzika, Dzień Gwiazdy Betlejemskiej, Międzynarodowy Dzień Neutralności	94,81
13.12.2024	348	13	50	12	grudzień	2024	piątek	348		jesień	strzelec	Łucji, Otylii	day_front_20241213_5651.jpg	229	Dzień Księgarza, Światowy Dzień Skrzypiec, Dzień Pamięci Ofiar Stanu Wojennego	95,08
14.12.2024	349	14	50	12	grudzień	2024	sobota	349		jesień	strzelec	Izydora, Noemi	day_front_20241214_59d5.jpg	228	Dzień Małpy	95,36
15.12.2024	350	15	50	12	grudzień	2024	niedziela	350		jesień	strzelec	Waleriana, Celiny	day_front_20241215_b707.jpg	227	Dzień Ludwika Zamenhofa, Dzień Herbaty	95,63
16.12.2024	351	16	51	12	grudzień	2024	poniedziałek	351		jesień	strzelec	Zdziesławy, Euzebiusza, Aliny	day_front_20241216_f766.jpg	226	Dzień Pokrywania Wszystkiego Czekoladą, Dzień Pojednania	95,90
17.12.2024	352	17	51	12	grudzień	2024	wtorek	352		jesień	strzelec	Floriana, Jolanty	day_front_20241217_9ca4.jpg	225	Dzień bez Przekleństw, Dzień Syropu Klonowego, Dzień Rozmów Twarzą w Twarz	96,17
18.12.2024	353	18	51	12	grudzień	2024	środa	353		jesień	strzelec	Bogusława, Gracjana	day_front_20241218_66bc.jpg	224	Międzynarodowy Dzień Migrantów, Dzień Języka Arabskiego	96,45
19.12.2024	354	19	51	12	grudzień	2024	czwartek	354		jesień	strzelec	Dariusza, Urbana	day_front_20241219_aa2c.jpg	223	Dzień Wiecznie Zielonych Roślin, Dzień Owsianej Babeczki	96,72
20.12.2024	355	20	51	12	grudzień	2024	piątek	355		jesień	strzelec	Dominika, Makarego	day_front_20241220_870e.jpg	222	Dzień Ryby, Dzień Sangrii, Międzynarodowy Dzień Solidarności	96,99
21.12.2024	356	21	51	12	grudzień	2024	sobota	356		jesień	strzelec	Piotra, Tomasza	day_front_20241221_b2ea.jpg	221	Dzień Pamięci Poległych na Misjach	97,27
22.12.2024	357	22	51	12	grudzień	2024	niedziela	357	Początek zimy	zima	koziorożec	Judyty, Honoraty, Zenona	day_front_20241222_401a.jpg	220	Dzień Piernika	97,54
23.12.2024	358	23	52	12	grudzień	2024	poniedziałek	358		zima	koziorożec	Sławomiry, Wiktorii	day_front_20241223_f6e5.jpg	219	Dzień Korzeni Rodzinnych	97,81
24.12.2024	359	24	52	12	grudzień	2024	wtorek	359		zima	koziorożec	Adama, Ewy	day_front_20241224_0f68.jpg	218	Dzień Raju, Dzień Ajerkoniaku	98,09
25.12.2024	360	25	52	12	grudzień	2024	środa	360		zima	koziorożec	Eugenii, Mateusza	day_front_20241225_9eb4.jpg	217	Dzień Tarty Dyniowej	98,36
26.12.2024	361	26	52	12	grudzień	2024	czwartek	361		zima	koziorożec	Szczepana, Dionizego	day_front_20241226_570b.jpg	216	Dzień Cukrowej Laski	98,63
27.12.2024	362	27	52	12	grudzień	2024	piątek	362		zima	koziorożec	Cezarego, Jana, Maksyma	day_front_20241227_ed7c.jpg	215	Dzień Keksa	98,91
28.12.2024	363	28	52	12	grudzień	2024	sobota	363		zima	koziorożec	Teofili, Antoniego	day_front_20241228_2032.jpg	214	Dzień Gry w Karty, Dzień Filmów Krótkometrażowych	99,18
29.12.2024	364	29	52	12	grudzień	2024	niedziela	364		zima	koziorożec	Tomasza, Dominika, Dawida	day_front_20241229_8fc4.jpg	213	Dzień Tykania Zegarów	99,45
30.12.2024	365	30	1	12	grudzień	2024	poniedziałek	365		zima	koziorożec	Eugeniusza, Seweryna	day_front_20241230_cc8a.jpg	212	Dzień Serka Wiejskiego, Przedostatni Dzień Roku	99,73
31.12.2024	366	31	1	12	grudzień	2024	wtorek	366		zima	koziorożec	Sylwestry, Melanii, Sylwestra	day_front_20241231_1349.jpg	211	Ostatni Dzień Roku, Międzynarodowy Dzień Szampana	100,00`;
