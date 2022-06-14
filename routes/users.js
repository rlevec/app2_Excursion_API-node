import express from "express";

const router = express.Router();

const users = [
{
"id": "rec6d6T3q5EBIdCfD",
"name": "Brijuni",
"info": "Brijuni imaju bogatu povijest: prvi, zasada nama poznati tragovi ljudskog djelovanja na Brijunima, sežu u treće tisućljeće prije Krista, kada su na Brijunima živjeli etnički nepoznati stanovnici koji su se bavili ratarstvom, stočarstvom, lovom i ribolovom, a oružje i oruđe izrađivali su od kamena, kostiju i pruća... Za vrijeme velike Egejske seobe naroda u prvom tisućljeću prije Krista na Brijune dolazi ilirsko pleme Histri, po kojima je kasnije Istra i dobila ime. Nakon kojih su došli Rimljani, a od 6. do 8. st. otočjem je (kao i Istrom) vladao Bizant. Na Brijunima postoje mnogi kulturno-povijesni ostaci od kojih su najpoznatiji i najsačuvaniji: rimski ladanjski dvorac iz I.-II. st. s termama, Venerinim hramom, zatim Bizantski kastrum, te bazilika Sv. Marije iz V.-VI. stoljeća, crkva Sv. Germana iz 15. stoljeća.",
"image": "https://i.imgur.com/o5FW77j.jpg",
"price": "220"
},
{
"id": "recIwxrvU9HfJR3B4",
"name": "Krka",
"info": "Rijeka Krka izvire u podnožju planine Dinare, 3,5 km sjeveroistočno od Knina, podno 22 metarskog Topoljskog buka ili Krčića, kojeg stvara pritok Krčić. Krčić ljeti presušuje. Utječe u Jadransko more kraj Šibenika. Ukupna duljina rijeke, s potopljenim dijelom ušća, iznosi 72,5 km, od čega 49 km čini slatkovodni vodotok, a 23,5 km bočati. Površina porječja je 2.650 km2.[1] Srednji godišnji protok Krke preko Skradinskog buka je oko 55 m3/s, a dnevni protok varira od 5 do približno 565 m3/s",
"image": "https://i.imgur.com/W0RTdAv.jpg",
"price": "280"
},
{
"id": "recJLWcHScdUtI3ny",
"name": "Mljet",
"info": "Mljet se nalazi u dubrovačkom arhipelagu i njegov je najveći otok. Površina mu iznosi 100,4 km2. Izduženog je oblika jer je dug 37 kilometara, a širok samo 3 kilometra. Od poluotoka Pelješca ga dijeli Mljetski kanal. Proteže se u smjeru sjeverozapad – jugoistok. Smatra se najšumovitijim otokom na Jadranu, više od 70% površine je pokriveno šumama, a unutar nacionalnog parka pokrivenost prelazi i 90%, zbog toga i ima nadimak najzeleniji otok Hrvatske. Mljet pripada mediteranskom klimatskom području pa su ljeta suha i duga, dok su zime kišovite i blage",
"image": "https://i.imgur.com/UCM1EoM.jpg",
"price": "320"
},
{
"id": "recK2AOoVhIHPLUwn",
"name": "Paklenica",
"info": "Dana 7. srpnja 2017. godine NP Paklenica je, uz Nacionalni park Sjeverni Velebit i Rezervat prirode Hajdučki i Rožanski kukovi, upisan na UNESCO-ov popis mjesta svjetske baštine u Europi kao dio zajedničke svjetske baštine 13 zemalja pod nazivom „Bukove prašume u Karpatima i drugim područjima Europe”. Riječ je o 2031 hektaru šume na lokacijama Suva draga - Klimenta i Oglavinovac - Javornik u Nacionalnom parku Paklenici. Iznimnost predloženih iskonskih bukovih šuma u nacionalnim parkovima Sjevernom Velebitu i Paklenici temelji se na njihovoj izvornosti, geografskom položaju, starosti i veličini.",
"image": "https://i.imgur.com/MJbAzaN.jpg",
"price": "200"
},
{
"id": "receAEzz86KzW2gvH",
"name": "Plitvice",
"info": "Nacionalni park Plitvička jezera osobita je geološka i hidrogeološka krška pojava. Kompleks Plitvičkih jezera proglašen je nacionalnim parkom 8. travnja 1949. godine. To je najveći, najstariji i najposjećeniji hrvatski nacionalni park. Predstavlja šumovit planinski kraj u kojem se nalazi 16 jezera različite veličine, ispunjenima kristalnom modrozelenom vodom. Jezera dobivaju vodu od brojnih rječica i potoka, a međusobno su spojena kaskadama i slapovima. Sedrene barijere, koje su nastale u razdoblju od desetak tisuća godina, jedna su od temeljnih osobitosti Parka.",
"image": "https://i.imgur.com/wZGaLds.jpg",
"price": "350"
},
{
"id": "receOUjz44TdC4svX",
"name": "Sjeverni Velebit",
"info": 'Nacionalni park Sjeverni Velebit, hrvatski nacionalni park, proglašen je 9. lipnja 1999. godine. Dana 17. srpnja 2017. godine NP Sjeverni Velebit je, uz Nacionalni park Paklenica i Rezervat prirode Hajdučki i Rožanski kukovi, upisan na UNESCO-ov popis mjesta svjetske baštine u Europi kao dio zajedničke svjetske baštine 13 zemalja pod nazivom „Bukove prašume u Karpatima i drugim područjima Europe”. Riječ je o 1289 hektara bukove šume koja je u Nacionalnom parku Sjevernom Velebitu u Strogom rezervatu "Hajdučki i Rožanski kukovi". Iznimnost predloženih iskonskih bukovih šuma u nacionalnim parkovima Sjevernom Velebitu i Paklenici temelji se na njihovoj izvornosti, geografskom položaju, starosti i veličini.',
"image": "https://i.imgur.com/CDmmlbs.jpg",
"price": "295"
},
]

router.get('/', (req, res) => {
    res.send(users);
});

export default router
