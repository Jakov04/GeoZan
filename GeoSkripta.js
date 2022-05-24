const country = ["Afganistan", "Albanija", "Alzir", "Andora", "Angola", "Antigva i Barbuda", "Argentina", "Australija", "Austrija", "Azerbejdzan", "Bahami", "Bahrein", "Banglades", "Barbados", "Belgija", "Belize", "Belorusija", "Benin", "Bermuda", "Bolivija", "Butan", "Bocvana", "Bosna i Hercegovina", "Brazil", "Brunej", "Bugarska", "Burkina Faso", "Burundi", "Centralnoafricka Republika", "Crna Gora", "Cad", "Ceska", "Cile", "Danska", "Dominika", "Dominikanska Republika", "Dzibuti", "Ekvador", "Egipat", "Ekvatorijalna Gvineja", "Eritreja", "Estonija", "Etiopija", "Engleska", "Folklandska Ostrva", "Farska Ostrva", "Fidzi", "Filipini", "Finska", "Francuska", "Gabon", "Gambija", "Gana", "Gibraltar", "Grcka", "Grenada", "Grenland", "Gruzija", "Gvatemala", "Gvajana", "Gvineja", "Gvineja Bisao", "Haiti", "Honduras", "Holandija", "Hrvatska", "Indija", "Indonezija", "Irak", "Iran", "Irska", "Island", "Italija", "Izrael", "Jamajka", "Japan", "Jemen", "Jermenija", "Jordan", "Juzna Afrika", "Kambodza", "Kamerun", "Kanada", "Kajmanska Ostrva", "Katar", "Kazahstan", "Kenija", "Kina", "Kipar", "Kirgistan", "Kolumbija", "Kongo", "Kostarika", "Kuba", "Kuvajt", "Laos", "Litvanija", "Lesoto", "Liban", "Liberija", "Libija", "Lihtenstajn", "Letonija", "Luksemburg", "Madagaskar", "Madjarska", "Makedonija", "Malavi", "Maldivi", "Malezija", "Mali", "Malta", "Maroko", "Marsalska Ostrva", "Mauricijus", "Mauritanija", "Meksiko", "Mjanmar", "Mikronezija", "Moldavija", "Monako", "Mongolija", "Mozambik", "Namibija", "Nemacka", "Nikaragva", "Niger", "Nigerija", "Norveska", "Novi Zeland", "Obala Slonovace", "Oman", "Pakistan", "Panama", "Papua Nova Gvineja", "Paragvaj", "Peru", "Poljska", "Portugal", "Portoriko", "Rumunija", "Rusija", "Ruanda", "Salvador", "Samoa", "San Marino", "Saudijska Arabija", "Sejseli", "Senegal", "Severna Koreja", "Sijera Leone", "Singapur", "Severna Irska", "Sirija", "Sjedinjene Americke Drzave", "Slovacka", "Slovenija", "Solomonska Ostrva", "Somalija", "Srbija", "Sudan", "Surinam", "Svaziland", "Sveti Toma i Princip", "Sveti Vincent i Grenadini", "Spanija", "Skotska", "Sri Lanka", "Svedska", "Svajcarska", "Tadzikistan", "Tajland", "Tanzanija", "Togo", "Tonga", "Trinidad i Tobago", "Tunis", "Turska", "Turkmenistan", "Uganda", "Ukrajina", "Ujedinjeni Arapski Emirati","Ujedinjeno Kraljevstvo", "Urugvaj", "Uzbekistan", "Vanuatu", "Vatikan", "Venecuela", "Vijetnam", "Vels", "Zambija", "Zimbabve"];
const city = ["Akra", "Arlington", "Apatin", "Antverpen", "Abu Dabi", "Adis Abeba", "Aman", "Ahmedabad", "Alzir", "Arandjelovac", "Abudza", "Alzir", "Amsterdam", "Andora La Velja", "Ankara", "Antananarivo", "Apija", "Abidzan", "Aleksandrija", "Asmara", "Asunsion", "Atina", "Atlanta", "Anahajm", "Ashabad", "Beograd", "Bangkok", "Baku", "Barselona", "Bor", "Banja Luka", "Bajina Basta", "Backa Palanka", "Backa Topola", "Becej", "Bosilegrad", "Bejrut", "Bagdad", "Bamako", "Birmingem", "Bangi", "Brajton", "Bandar Seri Begavan", "Bandzul", "Baster", "Bejrut", "Boston", "Bilbao", "Busan", "Belmopan", "Berlin", "Brizbejn", "Bern", "Belfast", "Brno", "Bec", "Bristol", "Bisau", "Belo Horizonte", "Biskek", "Bogota", "Bafalo", "Baltimor", "Brazavil", "Brazilija", "Bergamo", "Bangalor", "Bratislava", "Bremen", "Barankilja", "Bolonja", "Brisel", "Bridztaun", "Bari", "Budimpesta", "Buenos Ajres", "Bukurest", "Bohum", "Bilefeld", "Bon", "Cirih", "Cetinje", "Celje", "Cacak", "Cikago", "Cernobil", "Cuprija", "Cajetina", "Cunking", "Cenaj", "Dubrovnik", "Doboj", "Daka", "Dablin", "Denver", "Detroit", "Dimitrovgrad", "Despotovac", "Dortmund", "Dakar", "Dubai", "Damask", "Dalas", "Dili", "Drezden", "Dodoma", "Dar Es Salam", "Doha", "Dusanbe", "Dzakarta", "Dzeda", "Dzibuti", "Dzuba", "Dzordztaun", "Dzeksonvil", "Dzajpur", "Dzekson", "Darmstat", "Dizeldorf", "Djakovica", "Djenova", "Djer", "Elbasan", "Esen", "Edinburg", "Evora", "Empoli", "El Paso", "Elce", "Foca", "Fuenlabrada", "Firenca", "Fritaun", "Funafuti", "Fatima", "Finiks", "Frezno", "Frankfurt", "Fortaleza", "Futog", "Filadelfija", "Fes", "Grozni", "Gdanjsk", "Gaborone", "Gvajakil", "Gabala", "Gnjilane", "Glazgov", "Gent", "Gvatemala", "Giza", "Guangdzu", "Gitega", "Geteborg", "Glogovac", "Gornji Milanovac", "Hvar", "Hag", "Hjuston", "Hamburg", "Homs", "Havana", "Hanoj", "Ho Si Min", "Harkov", "Hanover", "Hong Kong", "Harare", "Helsinki", "Hirosima", "Honijara", "Hajderabad", "Honolulu", "Haj Vikom", "Islamabad", "Indjija", "Ivanec", "Ivanjica", "Instanbul", "Ipsvic", "Izmir", "Indianapolis", "Jerevan", "Jerusalim", "Jagodina", "Jork", "Jekaterinburg", "Johanezburg", "Jajce", "Jamusukro", "Jokohama", "Jaren", "Jaunde", "Juzna Tarava", "Kraljevo", "Kairo", "Kanzas Siti", "Krusevac", "Koprivnica", "Katanija", "Kikinda", "Keln", "Knjazevac", "Kolcester", "Kolorado Springs", "Kula", "Kardif", "Koventri", "Kursumlija", "Kragujevac", "Kovin", "Kosovska Mitrovica", "Kosovo Polje", "Knin", "Kluz", "Krupanj", "Kladovo", "Kabul", "Kampala", "Kanbera", "Kazablanka", "Karakas", "Kartum", "Kacanik", "Kastri", "Klivlend", "Katmandu", "Kazanj", "Kigali", "Kijev", "Kingstaun", "Karaci", "Kaljari", "Kingston", "Kordoba", "Kjoto", "Kejptaun", "Kinsasa", "Kito", "Kisinjev", "Konakri", "Kopenhagen", "Kuala Lumpur", "Kuvajt", "Lazarevac", "Ljig", "Lajkovac", "Lima", "London", "Leskovac", "Liverpul", "Lids", "Loznica", "Long Bic", "Las Palmas", "Los Andjeles", "Lisabon", "Lodj", "Lester", "Lahor", "Ljubljana", "Luivil", "La Paz", "Lagos", "Lion", "Luton", "Libervil", "Linkoln", "Lajpcig", "Lilongve", "Lome", "Luanda", "Luksemburg", "Lusaka", "Las Vegas", "Malabo", "Male", "Managva", "Manama", "Maseru", "Maskat", "Madzuro", "Mbabane", "Majdanpek", "Minhen", "Memfis", "Mladenovac", "Meksiko Siti", "Minsk", "Mursija", "Milvoki", "Mogadis", "Monako", "Meshed", "Malaga", "Milan", "Majami", "Monrovija", "Montevideo", "Moroni", "Monterej", "Moskva", "Marakes", "Manhajm", "Madrid", "Maputo", "Medelin", "Mancester", "Marselj", "Montreal", "Manila", "Metkovic", "Mineapolis", "Mostar", "Maribor", "Malme", "Mumbaj", "Nis", "Novi Sad", "Novi Pazar", "Novi Becej", "Nova Varos", "Najrobi", "Nica", "Napulj", "Negotin", "Novosibirsk", "Nasau", "Nirnberg", "Nju Delhi", "Nju Orleans", "Njujork", "Njukasl", "Ngerulmud", "Nejpjido", "Nanking", "Nijamej", "Notingem", "Nikozija", "Niznji Novgorod", "Nju Ark", "Nagoja", "Nant", "Nuaksot", "Nagasaki", "Nukualofa", "Nur Sultan", "Ndzamena", "Nesvil", "Oslo", "Otava", "Omsk", "Okland", "Osaka", "Odesa", "Oklahoma Siti", "Ostin", "Obrenovac", "Orlando", "Orahovac", "Obilic", "Pancevo", "Paracin", "Petrovac", "Pec", "Podujevo", "Priboj", "Prijepolje", "Portland", "Prizren", "Pristina", "Prokuplje", "Plovdiv", "Pozarevac", "Pirot", "Palikir", "Parma", "Palermo", "Panama", "Pitsburg", "Portsmut", "Paramaribo", "Pariz", "Peking", "Pjongjang", "Pnom Pen", "Podgorica", "Port Vila", "Port Luj", "Palma De Maljorka", "Port Morzbi", "Poznanj", "Port o Prens", "Port Ov Spejn", "Porto Novo", "Prag", "Praja", "Pretorija", "Pozega", "Riga", "Rostov Na Donu", "Rim", "Ruma", "Rijeka", "Rio De Zaneiro", "Raska", "Rabat", "Reding", "Rejkjavik", "Rijad", "Riversajd", "Roterdam", "Rosario", "Rozo", "Rangun", "Sisak", "Sombor", "Saragosa", "Sarajevo", "Sakramento", "Svilajnac", "Srebrenica", "Senta", "Sankt Peterburg", "Sidnej", "Solun", "Sjenica", "Srbobran", "Sremski Karlovci", "Stara Pazova", "Surdulica", "Sijetl", "Saitama", "Surabaja", "Sana", "Sasuolo", "Sabac", "Sarlot", "Sid", "Subotica", "Suva Reka", "Smederevo", "Springfild", "Sremska Mitrovica", "Sangaj", "San Marino", "Sendzen", "San Antonio", "San Francisko", "San Diego", "San Salvador", "Sevilja", "San Hose", "Santijago De Cile", "Santo Domingo", "Sinsinati", "Sao Tome", "Sent Dzons", "Sent Dzordziz", "Seul", "Solt Lejk Siti", "Stutgart", "Singapur", "Skoplje", "Sefild", "Sofija", "Sao Paulo", "Sri Dzajavardenepura Kote", "Stokholm", "Suva", "Tirana", "Temerin", "Trstenik", "Tutin", "Topola", "Tunis", "Tokio", "Tianjin", "Trebinje", "Tripoli", "Talin", "Tajpej", "Tihuana", "Taskent", "Torino", "Tuluz", "Temisvar", "Tampa", "Tbilisi", "Takson", "Toronto", "Tegusigalpa", "Teheran", "Timbu", "Uzice", "Uagadugu", "Ulan Bator", "Ub", "Urosevac", "Utreht", "Valjevo", "Velika Plana", "Vrbas", "Vasington", "Vaduc", "Valeta", "Vroclav", "Vranje", "Vuhan", "Varsava", "Vatikan", "Valensija", "Venecija", "Velington", "Vijentijan", "Viktorija", "Vucitrn", "Volgograd", "Vilnjus", "Vindhuk", "Vendzou", "Zrenjanin", "Vrsac", "Varna", "Zajecar", "Zadar", "Zagreb", "Zeneva"];
const village = ["Petka", "Belanovica", "Sopic", "Arapovac"];
const mountain = ["Kopaonik", "Kilimandzaro", "Zlatibor", "Zlatar", "Tara", "Himalaji"];
const river = ["Dunav", "Sava", "Tisa", "Juzna Morava", "Velika Morava", "Zapadna Morava", "Ibar"];
const plant = ["Banana", "Ruza", "Visibaba", "Maslacak", "Eukaliptus"];
const animal = ["Pacov", "Pas", "Ker", "Macka", "Slon", "Papagaj", "Riba", "Som"];
const item = ["Cekic", "Volan", "Cetkica", "Olovka", "Tastatura", "Upaljac", "Sijalica"];
var countryAnswer = cityAnswer = villageAnswer = mountainAnswer = riverAnswer = plantAnswer = animalAnswer = itemAnswer =  null; ;
const input = $('countryInput');
var score = 0;
var slovo, checked = false;
function $(x){
    return document.getElementById(x);
}

function menjaj(){
    x = $('menjaj').value.toUpperCase();
    slovo = x;
    $('menjaj').value="";
    $("slovo").innerHTML = "Vaše slovo je: "+slovo;
}
document.addEventListener("DOMContentLoaded", function(){
    var el = $("countryInput");
    el.addEventListener('input', function(){
        tempAutoCorrect();
        tempCheck();
    });
});
function tempAutoCorrect(){
    x = $("countryInput").value;
    if(x[0]==" "){
        x = x.trim();}
    prvoSlovo = x[0].toUpperCase();
    ostatak = x.slice(1,x.length).toLowerCase();
    x = prvoSlovo+ostatak;
    for(i=0;i<x.length;i++){                           //Š,Đ,Č,Ć,Ž
        if(x[i]=="š"||x[i]=="Š"){
            if(i==0){
                y = "S";
                posle = x.slice(i+1,x.length);
                x = y + posle;
            }   
            else{
                pre=x.slice(0,i);
                posle=x.slice(i+1,x.length);
                y = "s";
                x = pre + y +  posle;
            }
        }
        else if(x[i]=="đ"||x[i]=="Đ"){
            if(i==0){
                y = "Dj";
                posle = x.slice(i+1,x.length);
                x = y + posle;
            }   
            else{
                pre=x.slice(0,i);
                posle=x.slice(i+1,x.length);
                y = "dj";
                x = pre + y +  posle;
            }
        }
        else if(x[i]=="č"||x[i]=="Č"||x[i]=="ć"||x[i]=="Ć"){
            if(i==0){
                y = "C";
                posle = x.slice(i+1,x.length);
                x = y + posle;
            }   
            else{
                pre=x.slice(0,i);
                posle=x.slice(i+1,x.length);
                y = "c";
                x = pre + y +  posle;
            }
        }
        else if(x[i]=="ž"||x[i]=="Ž"){
            if(i==0){
                y = "Z";
                posle = x.slice(i+1,x.length);
                x = y + posle;
            }   
            else{
                pre=x.slice(0,i);
                posle=x.slice(i+1,x.length);
                y = "z";
                x = pre + y +  posle;
            }
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
    $("countryInput").value = x;
    
}
function tempCheck(){
    if(prvoSlovo==slovo){
        x=$("countryInput").value;
        setTimeout(function(){
            if(x=="Sad"||x=="Sjedinjene drzave"||x=="Uae"||x=="Uk"){
                if(x=="Sad"||x=="Sjedinjene drzave"){
                    x = "Sjedinjene Americke Drzave";
                    $("countryInput").value = x;
                    
                }
                else if(x=="Uae"){
                    x = "Ujedinjeni Arapski Emirati";
                    $("countryInput").value = x;
                }
                else{
                    x = "Ujedinjeno Kraljevstvo"
                    $("countryInput").value = x;
                }
            }    
        }, 2000);
        if (country.indexOf(x) >= 0) {
            tata.info('Uneli ste: '+x, 'Odgovor je ispravan, ako ste sigurni potvrdite odgovor.', {position: 'tm', duration: 2000});
            $("confirm-country").style.display = "block";
            $("checkSign1").classList.remove("fa-xmark");
            $("checkSign1").classList.add("fa-check");
            $("confirm-country").style.display = "block";    
            checked = true;
            /*$("checkMark1").style.opacity = 1;
            $("checkSign1").style.opacity = 0;*/
        }
        else{
            /*setTimeout(function(){
                tata.error('Uneli ste: '+x, 'Odgovor je neispravan, pokušajte ponovo', {position: 'tm', duration: 2000});   
            }, 2000);*/
            /*$("checkMark1").style.opacity = 0;
            $("checkSign1").style.opacity = 1;*/
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
    else{
        tata.error('Uneli ste reč na pogrešno slovo ', 'Pokušajte ponovo', {position: 'tm', duration: 2000});
    }
}

function keyInput(ID){
    alert(ID);
    if(event.key == 'Enter') {
            confirmAnswer(ID);}
    else if (event.key == "Backspace"){
        if($(confID).style.display !="none"){
            $(cheID).click();}
    }
}
/*function autocorrect(ID){
    x = $(ID).value;
    x = x.trim();
    y = x[0].toUpperCase();
    ostatak = x.slice(1,x.length).toLowerCase();
    x = y+ostatak;
    prvoSlovo = x[0];
    if(x=="Sad"||x=="Sjedinjene Drzave"||x=="Uae"||x=="Uk"){
        if(x=="Sad"||x=="Sjedinjene Drzave"){
            x = "Sjedinjene Americke Drzave";
        }
        else if(x=="Uae"){
            x = "Ujedinjeni Arapski Emirati";
        }
        else{
            x = "Ujedinjeno Kraljevstvo"
        }
    }
    var z,pre,posle,i,br=0;
    for(i=0;i<x.length;i++){                           //Š,Đ,Č,Ć,Ž
        if(x[i]=="š"||x[i]=="Š"){
            if(i==0){
                y = "S";
                posle = x.slice(i+1,x.length);
                x = y + posle;
            }   
            else{
                pre=x.slice(0,i);
                posle=x.slice(i+1,x.length);
                y = "s";
                x = pre + y +  posle;
            }
        }
        else if(x[i]=="đ"||x[i]=="Đ"){
            if(i==0){
                y = "DJ";
                posle = x.slice(i+1,x.length);
                x = y + posle;
            }   
            else{
                pre=x.slice(0,i);
                posle=x.slice(i+1,x.length);
                y = "dj";
                x = pre + y +  posle;
            }
        }
        else if(x[i]=="č"||x[i]=="Č"||x[i]=="ć"||x[i]=="Ć"){
            if(i==0){
                y = "C";
                posle = x.slice(i+1,x.length);
                x = y + posle;
            }   
            else{
                pre=x.slice(0,i);
                posle=x.slice(i+1,x.length);
                y = "c";
                x = pre + y +  posle;
            }
        }
        else if(x[i]=="ž"||x[i]=="Ž"){
            if(i==0){
                y = "Z";
                posle = x.slice(i+1,x.length);
                x = y + posle;
            }   
            else{
                pre=x.slice(0,i);
                posle=x.slice(i+1,x.length);
                y = "z";
                x = pre + y +  posle;
            }
        }
    }
    for(i=0;i<x.length;i++){                           //Veliko slovo svake nove reči
        if(x[i-1]==" "&&x[i+1]!=" "){
            if(br==0){
                pre=x.slice(0,i);
                posle=x.slice(i+1,x.length);
                z=x[i].toUpperCase();
                x=pre+z+posle;
                br=1;
            }
            else{
                pre=x.slice(0,i);
                posle=x.slice(i+1,x.length);
                z=x[i].toUpperCase();
                x=pre+z+posle;    
            }
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
        while(x[i]==" "&&x[i+1]==" "){
            pre=x.slice(0,i);
            posle=x.slice(i+1,x.length);
            x = pre + posle;
        }
    }
    $(ID).value = x;
}*/

/*function checkAnswer(ID){
    if(prvoSlovo==slovo){
    if(ID =='countryInput'){
        countryAnswer = $(ID).value;
        if (country.indexOf(countryAnswer) >= 0) {
            tata.info('Uneli ste: '+countryAnswer, 'Odgovor je ispravan, ako ste sigurni potvrdite odgovor.', {position: 'tm', duration: 2000});
            $("check-country").style.display = "none";
            $("confirm-country").style.display = "block";    
        }
        else{
            tata.error('Uneli ste: '+countryAnswer, 'Odgovor je neispravan, pokušajte ponovo', {position: 'tm', duration: 2000});
            countryAnswer= null;
        }
    }
    else if(ID == 'cityInput'){
        cityAnswer = $(ID).value;
        if (city.indexOf(cityAnswer) >= 0) {
            tata.info('Uneli ste: '+cityAnswer, 'Odgovor je ispravan, ako ste sigurni potvrdite odgovor.', {position: 'tm', duration: 2000});
            $("check-city").style.display = "none";
            $("confirm-city").style.display = "block";    
        }
        else{
            tata.error('Uneli ste: '+cityAnswer, 'Odgovor je neispravan, pokušajte ponovo', {
                position: 'tm', duration: 2000});
        }
    }
    else if(ID == 'villageInput'){
        villageAnswer = $(ID).value;
        if (village.indexOf(villageAnswer) >= 0) {
            tata.info('Uneli ste: '+villageAnswer, 'Odgovor je ispravan, ako ste sigurni potvrdite odgovor.', {position: 'tm', duration: 2000});
            $("check-village").style.display = "none";
            $("confirm-village").style.display = "block";    
        }
        else{
            tata.error('Uneli ste: '+villageAnswer, 'Odgovor je neispravan, pokušajte ponovo', {position: 'tm', duration: 2000});
        }
    }
    else if(ID == 'mountainInput'){
        mountainAnswer = $(ID).value;
        if (mountain.indexOf(mountainAnswer) >= 0) {
            tata.info('Uneli ste: '+mountainAnswer, 'Odgovor je ispravan, ako ste sigurni potvrdite odgovor.', {position: 'tm', duration: 2000});
            $("check-mountain").style.display = "none";
            $("confirm-mountain").style.display = "block";    
        }
        else{
            tata.error('Uneli ste: '+mountainAnswer, 'Odgovor je neispravan, pokušajte ponovo', {position: 'tm', duration: 2000});
        }
    }
    else if(ID == 'riverInput'){
        riverAnswer = $(ID).value;
        if (river.indexOf(riverAnswer) >= 0) {
            tata.info('Uneli ste: '+riverAnswer, 'Odgovor je ispravan, ako ste sigurni potvrdite odgovor.', {position: 'tm', duration: 2000});
            $("check-river").style.display = "none";
            $("confirm-river").style.display = "block";    
        }
        else{
            tata.error('Uneli ste: '+riverAnswer, 'Odgovor je neispravan, pokušajte ponovo', {position: 'tm', duration: 2000});
        }
    }
    }
    else{
        tata.error('Uneli ste reč na pogrešno slovo ', 'Pokušajte ponovo', {position: 'tm', duration: 2000});
    } 
}*/

function randomLetter() {
    slovo ="";
    characters = 'ABCDEFGHIJKLMNOPRSTUVZČĆŠŽĐ';
    charactersLength = characters.length;
    slovo += characters.charAt(Math.floor(Math.random() * charactersLength))
    $("kontenjer").style.display = "flex";
    $("kontenjer2").style.display = "flex";  
    $("pocetniKontenjer").style.display = "none";
    $("slovo").innerHTML = "Vaše slovo je: "+slovo;
}

function confirmAnswer(ID){
    if(ID =='countryInput'){
        if(checked == true){
            countryAnswer = $(ID).value;
            tata.success('Odgovor je potvrđen.', 'Ukoliko želite da promenite odgovor, obrišite ga.', {position: 'tm', duration: 2000});
            $("countryInput").style.display = "none";
            $("confirm-country").style.display = "none";
            $("delete-country").classList.remove("delete");
            $("ans-country").style.display = "block";
            $("ans-country").innerHTML = countryAnswer; 
            $("checkSign1").style.display = "none";
        }
        else if(prvoSlovo==slovo){
            tata.error('Netačan odgovor', 'Ne možemo da prihvatimo vaš odgovor.', {position: 'tm', duration: 2000});
        }
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
}
function deleteList(){
    $("confirm-country").style.display = $("confirm-city").style.display = $("confirm-village").style.display = $("confirm-mountain").style.display = $("confirm-river").style.display = "none";
    $("check-country").style.display = $("check-city").style.display = $("check-village").style.display = $("check-mountain").style.display = $("check-river").style.display = "block";
    $("countryInput").value = $("cityInput").value = $("villageInput").value = $("mountainInput").value = $("riverInput").value ="";
    $("countryInput").style.display = $("cityInput").style.display = $("villageInput").style.display = $("mountainInput").style.display = $("riverInput").style.display = "block";
    $("ans-country").style.display = $("ans-city").style.display = $("ans-village").style.display = $("ans-mountain").style.display = $("ans-river").style.display = "none";
    countryAnswer = cityAnswer = villageAnswer = mountainAnswer = riverAnswer =  null;   
}
function confirmList(){
    $("pocetniKontenjer").style.display = "none";
    $("kontenjer").style.display = "none";
    $("kontenjer2").style.display = "block";
    $("dugmad").style.display = "none";
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