const country = ["Albanija", "Alzir", "Andora", "Angola", "Antigva i Barbuda", "Argentina", "Australija", "Austrija", "Avganistan", "Azerbejdzan", "Bahami", "Bahrein", "Banglades", "Barbados", "Belgija", "Belize", "Belorusija", "Benin", "Bermuda", "Bocvana", "Bolivija", "Bosna i Hercegovina", "Brazil", "Brunej", "Bugarska", "Burkina Faso", "Burundi", "Butan", "Centralnoafricka Republika", "Crna Gora", "Danska", "Demokratska Republika Kongo", "Dr Kongo", "Dominika", "Dominikanska Republika", "Egipat", "Ekvador", "Ekvatorijalna Gvineja", "Engleska", "Eritreja", "Estonija", "Esvatini", "Etiopija", "Farska Ostrva", "Fidzi", "Filipini", "Finska", "Folklandska Ostrva", "Francuska", "Gabon", "Gambija", "Gana", "Gibraltar", "Grcka", "Grenada", "Grenland", "Gruzija", "Gvajana", "Gvatemala", "Gvineja", "Gvineja Bisao", "Haiti", "Holandija", "Honduras", "Hrvatska", "Indija", "Indonezija", "Irak", "Iran", "Irska", "Island", "Istocni Timor", "Italija", "Izrael", "Jamajka", "Japan", "Jemen", "Jermenija", "Jordan", "Juzna Afrika", "Juzna Koreja", "Juzni Sudan", "Kajmanska Ostrva", "Kambodza", "Kamerun", "Kanada", "Katar", "Kazahstan", "Kenija", "Kina", "Kipar", "Kirgistan", "Kiribati", "Kolumbija", "Komori", "Kostarika", "Kuba", "Kuvajt", "Laos", "Lesoto", "Letonija", "Liban", "Liberija", "Libija", "Lihtenstajn", "Litvanija", "Luksemburg", "Madagaskar", "Madjarska", "Malavi", "Maldivi", "Malezija", "Mali", "Malta", "Maroko", "Marsalska Ostrva", "Mauricijus", "Mauritanija", "Meksiko", "Mikronezija", "Mjanmar", "Moldavija", "Monako", "Mongolija", "Mozambik", "Namibija", "Nauru", "Nemacka", "Nepal", "Niger", "Nigerija", "Nikaragva", "Norveska", "Novi Zeland", "Obala Slonovace", "Oman", "Pakistan", "Palau", "Palestina", "Panama", "Papua Nova Gvineja", "Paragvaj", "Peru", "Poljska", "Portoriko", "Portugal", "Republika Kongo", "Ruanda", "Rumunija", "Rusija", "Salvador", "Samoa", "San Marino", "Saudijska Arabija", "Sejseli", "Senegal", "Sent Kits i Nevis", "Severna Irska", "Severna Koreja", "Severna Makedonija", "Sijera Leone", "Singapur", "Sirija", "Sjedinjene Americke Drzave", "Sad", "Sjedinjene Drzave", "Slovacka", "Slovenija", "Solomonska Ostrva", "Somalija", "Srbija", "Sudan", "Surinam", "Sveta Lucija", "Sveti Toma i Princip", "Sveti Vinsent i Grenadini", "Tadzikistan", "Tajland", "Tanzanija", "Togo", "Tonga", "Trinidad i Tobago", "Tunis", "Turkmenistan", "Turska", "Tuvalu", "Uganda", "Ujedinjeni Arapski Emirati", "Uae", "Ujedinjeno Kraljevstvo", "Uk", "Ukrajina", "Urugvaj", "Uzbekistan", "Vanuatu", "Vatikan", "Vels", "Venecuela", "Vijetnam", "Zambija", "Zelenortska Ostrva", "Zimbabve"];
const city = ["Abidzan", "Abu Dabi", "Abudza", "Adis Abeba", "Ahmedabad", "Akra", "Aleksandrija", "Alzir", "Aman", "Amsterdam", "Anahajm", "Andora La Velja", "Ankara", "Antananarivo", "Antverpen", "Apatin", "Apija", "Arandjelovac", "Arlington", "Ashabad", "Asmara", "Asunsion", "Atina", "Atlanta", "Backa Palanka", "Backa Topola", "Bafalo", "Bagdad", "Bajina Basta", "Baku", "Baltimor", "Bamako", "Bandar Seri Begavan", "Bandzul", "Bangalor", "Bangi", "Bangkok", "Banja Luka", "Barankilja", "Bari", "Barselona", "Baster", "Bec", "Becej", "Bejrut", "Belfast", "Belmopan", "Belo Horizonte", "Beograd", "Bergamo", "Berlin", "Bern", "Bilbao", "Bilefeld", "Birmingem", "Bisau", "Biskek", "Bogota", "Bohum", "Bolonja", "Bon", "Bor", "Bosilegrad", "Boston", "Brajton", "Bratislava", "Brazavil", "Brazilija", "Bremen", "Bridztaun", "Brisel", "Bristol", "Brizbejn", "Brno", "Budimpesta", "Buenos Ajres", "Bukurest", "Busan", "Cacak", "Cajetina", "Celje", "Cenaj", "Cernobil", "Cetinje", "Cikago", "Cirih", "Cunking", "Cuprija", "Dablin", "Daka", "Dakar", "Dalas", "Damask", "Dar Es Salam", "Darmstat", "Denver", "Despotovac", "Detroit", "Dili", "Dimitrovgrad", "Dizeldorf", "Djakovica", "Djenova", "Djer", "Doboj", "Dodoma", "Doha", "Dortmund", "Drezden", "Dubai", "Dubrovnik", "Dusanbe", "Dzajpur", "Dzakarta", "Dzeda", "Dzekson", "Dzeksonvil", "Dzibuti", "Dzordztaun", "Dzuba", "Edinburg", "El Paso", "Elbasan", "Elce", "Empoli", "Esen", "Evora", "Fatima", "Fes", "Filadelfija", "Finiks", "Firenca", "Foca", "Fortaleza", "Frankfurt", "Frezno", "Fritaun", "Fuenlabrada", "Funafuti", "Futog", "Gabala", "Gaborone", "Gdanjsk", "Gent", "Geteborg", "Gitega", "Giza", "Glazgov", "Glogovac", "Gnjilane", "Gornji Milanovac", "Grozni", "Guangdzu", "Gvajakil", "Gvatemala", "Hag", "Haj Vikom", "Hajderabad", "Hamburg", "Hanoj", "Hanover", "Harare", "Harkov", "Havana", "Helsinki", "Hirosima", "Hjuston", "Ho Si Min", "Homs", "Hong Kong", "Honijara", "Honolulu", "Hvar", "Indianapolis", "Indjija", "Instanbul", "Ipsvic", "Islamabad", "Ivanec", "Ivanjica", "Izmir", "Jagodina", "Jajce", "Jamusukro", "Jaren", "Jaunde", "Jekaterinburg", "Jerevan", "Jerusalim", "Johanezburg", "Jokohama", "Jork", "Juzna Tarava", "Kabul", "Kacanik", "Kairo", "Kaljari", "Kampala", "Kanbera", "Kanzas Siti", "Karaci", "Karakas", "Kardif", "Kartum", "Kastri", "Katanija", "Katmandu", "Kazablanka", "Kazanj", "Kejptaun", "Keln", "Kigali", "Kijev", "Kikinda", "Kingstaun", "Kingston", "Kinsasa", "Kisinjev", "Kito", "Kjoto", "Kladovo", "Klivlend", "Kluz", "Knin", "Knjazevac", "Kolcester", "Kolorado Springs", "Konakri", "Kopenhagen", "Koprivnica", "Kordoba", "Kosovo Polje", "Kosovska Mitrovica", "Koventri", "Kovin", "Kragujevac", "Kraljevo", "Krupanj", "Krusevac", "Kuala Lumpur", "Kula", "Kursumlija", "Kuvajt", "La Paz", "Lagos", "Lahor", "Lajkovac", "Lajpcig", "Las Palmas", "Las Vegas", "Lazarevac", "Leskovac", "Lester", "Libervil", "Lids", "Lilongve", "Lima", "Linkoln", "Lion", "Lisabon", "Liverpul", "Ljig", "Ljubljana", "Lodj", "Lome", "London", "Long Bic", "Los Andjeles", "Loznica", "Luanda", "Luivil", "Luksemburg", "Lusaka", "Luton", "Madrid", "Madzuro", "Majami", "Majdanpek", "Malabo", "Malaga", "Male", "Malme", "Managva", "Manama", "Mancester", "Manhajm", "Manila", "Maputo", "Marakes", "Maribor", "Marselj", "Maseru", "Maskat", "Mbabane", "Medelin", "Meksiko Siti", "Memfis", "Meshed", "Metkovic", "Milan", "Milvoki", "Mineapolis", "Minhen", "Minsk", "Mladenovac", "Mogadis", "Monako", "Monrovija", "Monterej", "Montevideo", "Montreal", "Moroni", "Moskva", "Mostar", "Mumbaj", "Mursija", "Nagasaki", "Nagoja", "Najrobi", "Nanking", "Nant", "Napulj", "Nasau", "Ndzamena", "Negotin", "Nejpjido", "Nesvil", "Ngerulmud", "Nica", "Nijamej", "Nikozija", "Nirnberg", "Nis", "Niznji Novgorod", "Nju Ark", "Nju Delhi", "Nju Orleans", "Njujork", "Njukasl", "Notingem", "Nova Varos", "Novi Becej", "Novi Pazar", "Novi Sad", "Novosibirsk", "Nuaksot", "Nukualofa", "Nur Sultan", "Obilic", "Obrenovac", "Odesa", "Oklahoma Siti", "Okland", "Omsk", "Orahovac", "Orlando", "Osaka", "Oslo", "Ostin", "Otava", "Palermo", "Palikir", "Palma De Maljorka", "Panama", "Pancevo", "Paracin", "Paramaribo", "Pariz", "Parma", "Pec", "Peking", "Petrovac", "Pirot", "Pitsburg", "Pjongjang", "Plovdiv", "Pnom Pen", "Podgorica", "Podujevo", "Port Luj", "Port Morzbi", "Port o Prens", "Port Ov Spejn", "Port Vila", "Portland", "Porto Novo", "Portsmut", "Pozarevac", "Pozega", "Poznanj", "Prag", "Praja", "Pretorija", "Priboj", "Prijepolje", "Pristina", "Prizren", "Prokuplje", "Rabat", "Rangun", "Raska", "Reding", "Rejkjavik", "Riga", "Rijad", "Rijeka", "Rim", "Rio De Zaneiro", "Riversajd", "Rosario", "Rostov Na Donu", "Roterdam", "Rozo", "Ruma", "Sabac", "Saitama", "Sakramento", "San Antonio", "San Diego", "San Francisko", "San Hose", "San Marino", "San Salvador", "Sana", "Sangaj", "Sankt Peterburg", "Santijago De Cile", "Santo Domingo", "Sao Paulo", "Sao Tome", "Saragosa", "Sarajevo", "Sarlot", "Sasuolo", "Sefild", "Sendzen", "Sent Dzons", "Sent Dzordziz", "Senta", "Seul", "Sevilja", "Sid", "Sidnej", "Sijetl", "Singapur", "Sinsinati", "Sisak", "Sjenica", "Skoplje", "Smederevo", "Sofija", "Solt Lejk Siti", "Solun", "Sombor", "Springfild", "Srbobran", "Srebrenica", "Sremska Mitrovica", "Sremski Karlovci", "Sri Dzajavardenepura Kote", "Stara Pazova", "Stokholm", "Stutgart", "Subotica", "Surabaja", "Surdulica", "Suva", "Suva Reka", "Svilajnac", "Tajpej", "Takson", "Talin", "Tampa", "Taskent", "Tbilisi", "Tegusigalpa", "Teheran", "Temerin", "Temisvar", "Tianjin", "Tihuana", "Timbu", "Tirana", "Tokio", "Topola", "Torino", "Toronto", "Trebinje", "Tripoli", "Trstenik", "Tuluz", "Tunis", "Tutin", "Uagadugu", "Ub", "Ulan Bator", "Urosevac", "Utreht", "Uzice", "Vaduc", "Valensija", "Valeta", "Valjevo", "Varna", "Varsava", "Vasington", "Vatikan", "Velika Plana", "Velington", "Vendzou", "Venecija", "Vijentijan", "Viktorija", "Vilnjus", "Vindhuk", "Volgograd", "Vranje", "Vrbas", "Vroclav", "Vrsac", "Vucitrn", "Vuhan", "Zadar", "Zagreb", "Zajecar", "Zeneva", "Zrenjanin"];
const village = ["Petka", "Belanovica", "Sopic", "Arapovac"];
const mountain = ["Kopaonik", "Kilimandzaro", "Zlatibor", "Zlatar", "Tara", "Himalaji"];
const river = ["Aldan", "Alegeni", "Amazon", "Amu Darja", "Amur", "Angara", "Apurimak", "Aragvaja", "Argun", "Arkanzas", "Begej", "Beli Drim", "Beli Timok", "Biserna reka", "Bosut", "Bramaputra", "Breg", "Brzava", "Budovar", "Cambesi", "Cik", "Crni Timok", "Crvena Reka", "Darling", "Decanska Bistrica", "Djetinja", "Dnjepar", "Donja Tunguska", "Dragovistica", "Drenica", "Drim", "Drina", "Dunav", "Dzeferson", "Erenik", "Eufrat", "Finli", "Gang", "Golijska Moravica", "Gruza", "Hoangho", "Ibar", "Ind", "Iravadi", "Irtis", "Isim", "Jablanica", "Jadar", "Jangcekjang", "Jarcina", "Jasenica", "Jasenicka Reka", "Jegricka", "Jenisej", "Jerez", "Jerma", "Jukon", "Juzna Morava", "Kagera", "Karas", "Katun", "Kazai", "Keres", "Klina", "Kolima", "Kolorado", "Kolubara", "Kolumbija", "Kongo", "Krivaja", "Lab", "Lena", "Lepenac", "Lim", "Lugomir", "Lukavica", "Madeira", "Makenzi", "Mamore", "Mari", "Mekong", "Misisipi", "Misuri", "Mlava", "Mostonga", "Nadela", "Narin", "Nelson", "Nera", "Niger", "Nil", "Nisava", "Nort River", "Ob", "Ohajo", "Olenjok", "Oranje", "Orinoko", "Pandz", "Paragvaj", "Parana", "Pcinja", "Pecka Bistrica", "Pek", "Pilkomajo", "Pis", "Plazovic", "Porecka Reka", "Purus", "Pusta Reka", "Radika", "Ralja", "Rasina", "Raska", "Resava", "Resavica", "Rio Grande", "Rio Negro", "Rzav", "Saluen", "Sao Fransisko", "Saskacevan", "Sat el Arab", "Sava", "Sen Loren", "Severni Salado", "Singu", "Sir Darja", "Sitnica", "Sokobanjska Moravica", "Studenica", "Svrljiski Timok", "Tamis", "Tamnava", "Tarim", "Temstica", "Timok", "Tisa", "Tokantins", "Toplica", "Trgoviski Timok", "Ub", "Ubangi", "Uele", "Ukajali", "Ural", "Uvac", "Velika Morava", "Veternica", "Viljuj", "Visocica", "Vlasina", "Volga", "Zambezi", "Zapadna Morava", "Zapura", "Zlatica", "Zurua"];
const plant = ["Banana", "Ruza", "Visibaba", "Maslacak", "Eukaliptus"];
const animal = ["Pacov", "Pas", "Ker", "Macka", "Slon", "Papagaj", "Riba", "Som"];
const item = ["Cekic", "Volan", "Cetkica", "Olovka", "Tastatura", "Upaljac", "Sijalica"];
var countryAnswer = cityAnswer = villageAnswer = mountainAnswer = riverAnswer = plantAnswer = animalAnswer = itemAnswer =  null;
const input = $('countryInput');
var score = 0;
var slovo, prvoSlovo, checked = false;
function $(x){
    return document.getElementById(x);
}

function start(){
    deleteList();
    $("topnav").style.display = "block";
    $("pocetniKontenjer").style.display = "none";
    $("kontenjer").style.display = "flex";
    $("kontenjer2").style.display = "flex";
    $("dugmad").style.display = "flex";    
    randomLetter();
    $("helpContainer").style.display = "none";
    $("navStart").classList.remove("active");
    $("navSingle").classList.add("active");
    $("navAnswers").classList.remove("active");
    $("navHelp").classList.remove("active");
    $("list").style.display = "none";
}
function randomLetter() {
    slovo ="";
    characters = 'ABCDEFGHIJKLMNOPRSTUVZ'; //+ČĆŠŽ
    charactersLength = characters.length;
    slovo += characters.charAt(Math.floor(Math.random() * charactersLength))
    $("slovo").innerHTML = "Vaše slovo je: "+slovo;
}
function menjaj(br){
    if(event.key=="Enter"||br==1){
        x = $('menjaj').value.toUpperCase();
        slovo = x;
        $('menjaj').value="";
        $("slovo").innerHTML = "Vaše slovo je: "+slovo;}
}
function help(){
    $("pocetniKontenjer").style.display = "none";
    $("kontenjer").style.display = "none";
    $("kontenjer2").style.display = "none";
    $("dugmad").style.display = "none";
    $("helpContainer").style.display = "block";
    $("topnav").style.display = "block";
    $("navStart").classList.remove("active");
    $("navSingle").classList.remove("active");
    $("navAnswers").classList.remove("active");
    $("navHelp").classList.add("active");
}
document.addEventListener("DOMContentLoaded", function(){
    $("countryInput").addEventListener('input', function(){
        autoCorrect('countryInput');
        checkAnswer('countryInput');
    });
    $("cityInput").addEventListener('input', function(){
        autoCorrect('cityInput');
        checkAnswer('cityInput');
    });
    $("villageInput").addEventListener('input', function(){
        autoCorrect('villageInput');
        checkAnswer('villageInput');
    });
    $("mountainInput").addEventListener('input', function(){
        autoCorrect('mountainInput');
        checkAnswer('mountainInput');
    });
    $("riverInput").addEventListener('input', function(){
        autoCorrect('riverInput');
        checkAnswer('riverInput');
    });
});
function autoCorrect(ID){
    x = $(ID).value;
    if(x[0]==" "){
        x = x.trim();}
    prvoSlovo = x[0].toUpperCase();
    ostatak = x.slice(1,x.length).toLowerCase();
    x = prvoSlovo+ostatak;
    for(i=1;i<x.length;i++){                           //Š,Đ,Č,Ć,Ž
        if(x[i]=="š"||x[i]=="Š"){
                pre=x.slice(0,i);
                posle=x.slice(i+1,x.length);
                y = "s";
                x = pre + y +  posle;
            }
        else if(x[i]=="đ"||x[i]=="Đ"){
                pre=x.slice(0,i);
                posle=x.slice(i+1,x.length);
                y = "dj";
                x = pre + y +  posle;
        }
        else if(x[i]=="č"||x[i]=="Č"||x[i]=="ć"||x[i]=="Ć"){
                pre=x.slice(0,i);
                posle=x.slice(i+1,x.length);
                y = "c";
                x = pre + y +  posle;
            }
        else if(x[i]=="ž"||x[i]=="Ž"){
                pre=x.slice(0,i);
                posle=x.slice(i+1,x.length);
                y = "z";
                x = pre + y +  posle;
            }
    }
    for(i=0;i<x.length;i++){                           //Veliko slovo svake nove reči
        if(x[i-1]==" "){
                pre=x.slice(0,i);
                posle=x.slice(i+1,x.length);
                z=x[i].toUpperCase();
                x=pre+z+posle;
        }
    } 
    for(i=0;i<x.length;i++){                           //Malo slovo veznika
        if(x[i-1]==" "&&x[i+1]==" "){
        pre=x.slice(0,i);
        posle=x.slice(i+1,x.length);
        y=x[i].toLowerCase();
        x=pre+y+posle;
        }
    }
    for(i=0;i<x.length;i++){                           //Smanjenje  prevelikog razmaka
        if(x[i]==" "&&x[i+1]==" "){
            pre=x.slice(0,i);
            posle=x.slice(i+1,x.length);
            x = pre + posle;
        }
    }
    $(ID).value = x;
    
}
function checkAnswer(ID){
    if(prvoSlovo==slovo){
        if(ID == 'countryInput'){
            x = $(ID).value;
            if (country.indexOf(x) >= 0) {
                tata.info('Uneli ste: '+x, 'Odgovor je ispravan, ako ste sigurni potvrdite odgovor.', {position: 'tm', duration: 2000});
                $("confirm-country").style.display = "block";
                $("checkSign1").classList.remove("fa-xmark");
                $("checkSign1").classList.add("fa-check");
                $("confirm-country").style.display = "block";    
                checked = true;
            }
            else{
                $("checkSign1").classList.remove("fa-check");
                $("checkSign1").classList.add("fa-xmark");
                $("checkSign1").classList.add("fa-shake");
                $("checkSign1").style.cssText += "--fa-animation-duration: 1s";
                $("confirm-country").style.display = "none";
                checked = false;    
                setTimeout(function(){
                    $("checkSign1").classList.remove("fa-shake");
                }, 1000);
            }
        }
        else if (ID == 'cityInput'){
            x = $(ID).value;
            if (city.indexOf(x) >= 0) {
                tata.info('Uneli ste: '+x, 'Odgovor je ispravan, ako ste sigurni potvrdite odgovor.', {position: 'tm', duration: 2000});
                $("confirm-city").style.display = "block";
                $("checkSign2").classList.remove("fa-xmark");
                $("checkSign2").classList.add("fa-check");  
                checked = true;
            }
            else{
                $("checkSign2").classList.remove("fa-check");
                $("checkSign2").classList.add("fa-xmark");
                $("checkSign2").classList.add("fa-shake");
                $("checkSign2").style.cssText += "--fa-animation-duration: 1s";
                $("confirm-city").style.display = "none";
                checked = false; 
                setTimeout(function(){
                    $("checkSign2").classList.remove("fa-shake");
                }, 1000);
            }
        }
        else if (ID == 'villageInput'){
            x = $(ID).value;
            if (village.indexOf(x) >= 0) {
                tata.info('Uneli ste: '+x, 'Odgovor je ispravan, ako ste sigurni potvrdite odgovor.', {position: 'tm', duration: 2000});
                $("confirm-village").style.display = "block";
                $("checkSign3").classList.remove("fa-xmark");
                $("checkSign3").classList.add("fa-check");  
                checked = true;
            }
            else{
                $("checkSign3").classList.remove("fa-check");
                $("checkSign3").classList.add("fa-xmark");
                $("checkSign3").classList.add("fa-shake");
                $("checkSign3").style.cssText += "--fa-animation-duration: 1s";
                $("confirm-village").style.display = "none";
                checked = false; 
                setTimeout(function(){
                    $("checkSign3").classList.remove("fa-shake");
                }, 1000);
            }
        }
        else if (ID == 'mountainInput'){
            x = $(ID).value;
            if (mountain.indexOf(x) >= 0) {
                tata.info('Uneli ste: '+x, 'Odgovor je ispravan, ako ste sigurni potvrdite odgovor.', {position: 'tm', duration: 2000});
                $("confirm-mountain").style.display = "block";
                $("checkSign4").classList.remove("fa-xmark");
                $("checkSign4").classList.add("fa-check");  
                checked = true;
            }
            else{
                $("checkSign4").classList.remove("fa-check");
                $("checkSign4").classList.add("fa-xmark");
                $("checkSign4").classList.add("fa-shake");
                $("checkSign4").style.cssText += "--fa-animation-duration: 1s";
                $("confirm-mountain").style.display = "none";
                checked = false; 
                setTimeout(function(){
                    $("checkSign4").classList.remove("fa-shake");
                }, 1000);
            }
        }
        else if (ID == 'riverInput'){
            x = $(ID).value;
            if (river.indexOf(x) >= 0) {
                tata.info('Uneli ste: '+x, 'Odgovor je ispravan, ako ste sigurni potvrdite odgovor.', {position: 'tm', duration: 2000});
                $("confirm-river").style.display = "block";
                $("checkSign5").classList.remove("fa-xmark");
                $("checkSign5").classList.add("fa-check");  
                checked = true;
            }
            else{
                $("checkSign5").classList.remove("fa-check");
                $("checkSign5").classList.add("fa-xmark");
                $("checkSign5").classList.add("fa-shake");
                $("checkSign5").style.cssText += "--fa-animation-duration: 1s";
                $("confirm-river").style.display = "none";
                checked = false; 
                setTimeout(function(){
                    $("checkSign5").classList.remove("fa-shake");
                }, 1000);
            }
        }
    }
    else{
        tata.error('Uneli ste reč na pogrešno slovo ', 'Pokušajte ponovo', {position: 'tm', duration: 2000});
                checked = false;
        }
}
function keyInput(ID){
    if(event.key == 'Enter') {
            confirmAnswer(ID);}
    else if(event.key == "Backspace"){
        setTimeout(function(){
            if($(ID).value==""){
                deleteAnswer(ID);
            }
        }, 80)
    }
}
function confirmAnswer(ID){
    if($(ID).value != ""){
        if(ID =='countryInput'){
            if(checked == true){
                if($(ID).value=="Sad"||$(ID).value=="Sjedinjene Drzave"||$(ID).value=="Uae"||$(ID).value=="Uk"||$(ID).value=="Dr Kongo"){
                    if($(ID).value=="Sad"||$(ID).value=="Sjedinjene Drzave"){
                        $(ID).value = "Sjedinjene Americke Drzave";
                    }
                    else if($(ID).value=="Uae"){
                        $(ID).value = "Ujedinjeni Arapski Emirati";
                    }
                    else if($(ID).value=="Uk"){
                        $(ID).value = "Ujedinjeno Kraljevstvo";
                    }
                    else{
                        $(ID).value = "Demokratska Republika Kongo";
                    }
                }
                countryAnswer = $(ID).value;
                tata.success('Odgovor je potvrđen.', 'Ukoliko želite da promenite odgovor, obrišite ga.', {position: 'tm', duration: 2000});
                $("countryInput").style.display = "none";
                $("confirm-country").style.display = "none";
                $("delete-country").classList.remove("delete");
                $("ans-country").style.display = "block";
                $("ans-country").innerHTML = countryAnswer; 
                $("checkSign1").style.display = "none";
                checked = false;
            }
            else if(prvoSlovo==slovo){
                tata.error('Netačan odgovor', 'Ne možemo da prihvatimo vaš odgovor.', {position: 'tm', duration: 2000});
            }
        }
        else if(ID =='cityInput'){
            if(checked == true){
                cityAnswer = $(ID).value;
                tata.success('Odgovor je potvrđen.', 'Ukoliko želite da promenite odgovor, obrišite ga.', {position: 'tm', duration: 2000});
                $("cityInput").style.display = "none";
                $("confirm-city").style.display = "none";
                $("delete-city").classList.remove("delete");
                $("ans-city").style.display = "block";
                $("ans-city").innerHTML = cityAnswer; 
                $("checkSign2").style.display = "none";
                checked = false;
            }
            else if(prvoSlovo==slovo){
                tata.error('Netačan odgovor', 'Ne možemo da prihvatimo vaš odgovor.', {position: 'tm', duration: 2000});
            }
        }
        else if(ID =='villageInput'){
            if(checked == true){
                villageAnswer = $(ID).value;
                tata.success('Odgovor je potvrđen.', 'Ukoliko želite da promenite odgovor, obrišite ga.', {position: 'tm', duration: 2000});
                $("villageInput").style.display = "none";
                $("confirm-village").style.display = "none";
                $("delete-village").classList.remove("delete");
                $("ans-village").style.display = "block";
                $("ans-village").innerHTML = villageAnswer; 
                $("checkSign3").style.display = "none";
                checked = false;
            }
            else if(prvoSlovo==slovo){
                tata.error('Netačan odgovor', 'Ne možemo da prihvatimo vaš odgovor.', {position: 'tm', duration: 2000});
            }
        }
        else if(ID =='mountainInput'){
            if(checked == true){
                mountainAnswer = $(ID).value;
                tata.success('Odgovor je potvrđen.', 'Ukoliko želite da promenite odgovor, obrišite ga.', {position: 'tm', duration: 2000});
                $("mountainInput").style.display = "none";
                $("confirm-mountain").style.display = "none";
                $("delete-mountain").classList.remove("delete");
                $("ans-mountain").style.display = "block";
                $("ans-mountain").innerHTML = mountainAnswer; 
                $("checkSign4").style.display = "none";
                checked = false;
            }
            else if(prvoSlovo==slovo){
                tata.error('Netačan odgovor', 'Ne možemo da prihvatimo vaš odgovor.', {position: 'tm', duration: 2000});
            }
        }
        else if(ID =='riverInput'){
            if(checked == true){
                riverAnswer = $(ID).value;
                tata.success('Odgovor je potvrđen.', 'Ukoliko želite da promenite odgovor, obrišite ga.', {position: 'tm', duration: 2000});
                $("riverInput").style.display = "none";
                $("confirm-river").style.display = "none";
                $("delete-river").classList.remove("delete");
                $("ans-river").style.display = "block";
                $("ans-river").innerHTML = riverAnswer; 
                $("checkSign5").style.display = "none";
                checked = false;
            }
            else if(prvoSlovo==slovo){
                tata.error('Netačan odgovor', 'Ne možemo da prihvatimo vaš odgovor.', {position: 'tm', duration: 2000});
            }
        }
}
    else{
        tata.error('Niste uneli odgovor', 'Molimo unesite odgovor.', {position: 'tm', duration: 2000});
    }
}
function deleteAnswer(ID){
    if(ID == 'countryInput'){
        countryAnswer = null;
        tata.warn('Odgovor je obrisan.', 'Unesite novi.', {position: 'tm', duration: 2000});
        $(ID).style.display = "block";
        $("confirm-country").style.display = "none";
        $("ans-country").style.display = "none";
        $('delete-country').classList.add("delete");
        $("checkSign1").classList.remove("fa-check");
        $("checkSign1").classList.add("fa-xmark")
        $("checkSign1").style.display = "block";
        $(ID).value = "";
    }
    else if(ID == 'cityInput'){
        cityAnswer = null;
        tata.warn('Odgovor je obrisan.', 'Unesite novi.', {position: 'tm', duration: 2000});
        $(ID).style.display = "block";
        $("confirm-city").style.display = "none";
        $("ans-city").style.display = "none";
        $('delete-city').classList.add("delete");
        $("checkSign2").classList.remove("fa-check");
        $("checkSign2").classList.add("fa-xmark")
        $("checkSign2").style.display = "block";
        $(ID).value = "";
    }
    else if(ID == 'villageInput'){
        villageAnswer = null;
        tata.warn('Odgovor je obrisan.', 'Unesite novi.', {position: 'tm', duration: 2000});
        $(ID).style.display = "block";
        $("confirm-village").style.display = "none";
        $("ans-village").style.display = "none";
        $('delete-village').classList.add("delete");
        $("checkSign3").classList.remove("fa-check");
        $("checkSign3").classList.add("fa-xmark")
        $("checkSign3").style.display = "block";
        $(ID).value = "";
    }
    else if(ID == 'mountainInput'){
        mountainAnswer = null;
        tata.warn('Odgovor je obrisan.', 'Unesite novi.', {position: 'tm', duration: 2000});
        $(ID).style.display = "block";
        $("confirm-mountain").style.display = "none";
        $("ans-mountain").style.display = "none";
        $('delete-mountain').classList.add("delete");
        $("checkSign4").classList.remove("fa-check");
        $("checkSign4").classList.add("fa-xmark")
        $("checkSign4").style.display = "block";
        $(ID).value = "";
    }
    else if(ID == 'riverInput'){
        riverAnswer = null;
        tata.warn('Odgovor je obrisan.', 'Unesite novi.', {position: 'tm', duration: 2000});
        $(ID).style.display = "block";
        $("confirm-river").style.display = "none";
        $("ans-river").style.display = "none";
        $('delete-river').classList.add("delete");
        $("checkSign5").classList.remove("fa-check");
        $("checkSign5").classList.add("fa-xmark")
        $("checkSign5").style.display = "block";
        $(ID).value = "";
    }
}
function deleteList(){
    $("confirm-country").style.display = $("confirm-city").style.display = $("confirm-village").style.display = $("confirm-mountain").style.display = $("confirm-river").style.display = "none";
    $("countryInput").value = $("cityInput").value = $("villageInput").value = $("mountainInput").value = $("riverInput").value ="";
    $("countryInput").style.display = $("cityInput").style.display = $("villageInput").style.display = $("mountainInput").style.display = $("riverInput").style.display = "block";
    $("delete-country").classList.add("delete");
    $("delete-city").classList.add("delete");
    $("delete-village").classList.add("delete");
    $("delete-mountain").classList.add("delete");
    $("delete-river").classList.add("delete");
    checked = false;
    $("ans-country").style.display = $("ans-city").style.display = $("ans-village").style.display = $("ans-mountain").style.display = $("ans-river").style.display = "none";
    countryAnswer = cityAnswer = villageAnswer = mountainAnswer = riverAnswer =  null;   
}
function confirmList(){
    $("pocetniKontenjer").style.display = "none";
    $("kontenjer").style.display = "none";
    $("dugmad").style.display = "none";
    $("kontenjer2").style.display = "block";
    $("list").style.display = "block";
    if(countryAnswer!=null){
        score +=10;
    }
    if(cityAnswer!=null){
        score +=10;
    } 
    if(villageAnswer!=null){
        score +=10;
    } 
    if(mountainAnswer!=null){
        score +=10;
    } 
    if(riverAnswer!=null){
        score +=10;
    }  
}
function showList(){
    document.getElementById("p1").innerHTML = "Država: "+countryAnswer;
    document.getElementById("p2").innerHTML = "Grad: "+cityAnswer;
    document.getElementById("p3").innerHTML = "Selo: "+villageAnswer;
    document.getElementById("p4").innerHTML = "Planina: "+mountainAnswer;
    document.getElementById("p5").innerHTML = "Reka: "+riverAnswer;
    document.getElementById("p6").innerHTML = "Imate: "+score+"/50 bodova."
    if(score<30){
        tata.error('Loše', 'Retko si glup lik', {position: 'mm', duration:5000})
    }
    else{
        tata.success('Dobro', 'Nisi toliko glup kao što izgledaš', {position: 'mm', duration:5000})
    }
}

