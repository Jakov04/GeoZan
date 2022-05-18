const country = ["Afganistan", "Albanija", "Alzir", "Andora", "Angola", "Angvila", "Antigva i Barbuda", "Argentina", "Australija", "Austrija", "Azerbejdzan", "Bahami", "Bahrein", "Banglades", "Barbados", "Belgija", "Belize", "Belorusija", "Benin", "Bermuda", "Bolivija", "Butan", "Bocvana", "Bosna i Hercegovina", "Brazil", "Brunej", "Bugarska", "Burkina Faso", "Burundi", "Centralnoafricka Republika", "Crna Gora", "Cad", "Ceska", "Cile", "Danska", "Dominika", "Dominikanska Republika", "Dzibuti", "Ekvador", "Egipat", "Ekvatorijalna Gvineja", "Eritreja", "Estonija", "Etiopija", "Folklandska ostrva", "Farska ostrva", "Fidzi", "Filipini", "Finska", "Francuska", "Gabon", "Gambija", "Gana", "Gibraltar", "Grcka", "Grenada", "Grenland", "Gruzija", "Gvatemala", "Gvajana", "Gvineja", "Gvineja Bisao", "Haiti", "Honduras", "Holandija", "Hrvatska", "Indija", "Indonezija", "Irak", "Iran", "Irska", "Island", "Italija", "Izrael", "Jamajka", "Japan", "Jemen", "Jermenija", "Jordan", "Juzna Afrika", "Kambodza", "Kamerun", "Kanada", "Kajmanska ostrva", "Katar", "Kazahstan", "Kenija", "Kina", "Kipar", "Kirgistan", "Kolumbija", "Kongo", "Kostarika", "Kuba", "Kuvajt", "Laos", "Litvanija", "Lesoto", "Liban", "Liberija", "Libija", "Lihtenstajn", "Letonija", "Luksemburg", "Madagaskar", "Madjarska", "Makedonija", "Malavi", "Maldivi", "Malezija", "Mali", "Malta", "Maroko", "Marsalska ostrva", "Mauricijus", "Mauritanija", "Meksiko", "Mjanmar", "Mikronezija", "Moldavija", "Monako", "Mongolija", "Mozambik", "Namibija", "Nemacka", "Nikaragva", "Niger", "Nigerija", "Norveska", "Novi Zeland", "Obala Slonovace", "Oman", "Pakistan", "Panama", "Papua Nova Gvineja", "Paragvaj", "Peru", "Poljska", "Portugal", "Portoriko", "Rumunija", "Rusija", "Ruanda", "Salvador", "Samoa", "San Marino", "Saudijska Arabija", "Sejseli", "Senegal", "Severna Koreja", "Sijera Leone", "Singapur", "Sirija", "Sjedinjene Drzave", "Slovacka", "Slovenija", "Solomonska ostrva", "Somalija", "Srbija", "Sudan", "Surinam", "Svaziland", "Sveti Toma i Princip", "Sveti Vincent i Grenadini", "Spanija", "Sri Lanka", "Svedska", "Svajcarska", "Tadzikistan", "Tajland", "Tanzanija", "Togo", "Tonga", "Trinidad i Tobago", "Tunis", "Turska", "Turkmenistan", "Uganda", "Ukrajina", "Ujedinjeni Arapski Emirati", "Ujedinjeno Kraljevstvo", "Urugvaj", "Uzbekistan", "Vanuatu", "Vatikan", "Venecuela", "Vijetnam", "Vels", "Zambija", "Zimbabve"];
const city = ["Beograd", "London", "Milan", "Lazarevac", "Abu Dabi", "Novi Sad"];
const village = ["Petka", "Belanovica", "Sopic", "Arapovac"];
const mountain = ["Kopaonik", "Kilimandzaro", "Zlatibor", "Zlatar", "Tara", "Himalaji"];
const river = ["Dunav", "Sava", "Tisa", "Juzna Morava", "Velika Morava", "Zapadna Morava", "Ibar"];
const plant = ["Banana", "Ruza", "Visibaba", "Maslacak", "Eukaliptus"];
const animal = ["Pacov", "Pas", "Ker", "Macka", "Slon", "Papagaj", "Riba", "Som"];
const item = ["Cekic", "Volan", "Cetkica", "Olovka", "Tastatura", "Upaljac", "Sijalica"];
var countryAnswer, cityAnswer, villageAnswer, mountainAnswer, riverAnswer, plantAnswer, animalAnswer, itemAnswer;
var score = 0;
var slovo = '';
function $(x){
    return document.getElementById(x);
}
function autocorrect(ID){
    var x = $(ID).value;
    x = x.trim();
    var y = x[0].toUpperCase();
    var ostatak = x.slice(1,x.length).toLowerCase();
    x = y+ostatak;
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
}
function randomLetter() {
    var characters = 'ABCDEFGHIJKLMNOPRSTUVZČĆŠŽĐ';
    var charactersLength = characters.length;
    slovo += characters.charAt(Math.floor(Math.random() * charactersLength))
    $("kontenjer").style.display = "flex";
    $("kontenjer2").style.display = "flex";
    $("pocetniKontenjer").style.display = "none";
    $("slovo").innerHTML = "Vaše slovo je: "+slovo;
    
}
function checkAnswer(ID){
    if($(ID).value[0]==slovo||(slovo=="Š"&&$(ID).value[0]=="S")||(slovo=="Č"&&$(ID).value[0]=="C")||(slovo=="Ć"&&$(ID).value[0]=="C")||(slovo=="Đ"&&$(ID).value[0]=="Dj")||(slovo=="Ž"&&$(ID).value[0]=="Z")){
    if(ID =='countryInput'){
        countryAnswer = $(ID).value;
        if (country.indexOf(countryAnswer) >= 0) {
            tata.info('Uneli ste: '+countryAnswer, 'Odgovor je ispravan, ako ste sigurni potvrdite odgovor.', {
                position: 'tm', duration: 2000});
            $("check-country").style.display = "none";
            $("confirm-country").style.display = "block";    
        }
        else{
            tata.error('Uneli ste: '+countryAnswer, 'Odgovor je neispravan, pokušajte ponovo', {
                position: 'tm', duration: 2000});
                countryAnswer= null;
        }
    }
    else if(ID == 'cityInput'){
        cityAnswer = $(ID).value;
        if (city.indexOf(cityAnswer) >= 0) {
            alert("Vaš odgovor ("+cityAnswer+"), je ispravan. Ako ste sigurni potvrdite odgovor klikom na dugme.");
            $("check-city").style.display = "none";
            $("confirm-city").style.display = "block";    
        }
        else{
            alert("Nažalost, ne možemo da prihvatimo odgovor.");
        }
    }
    else if(ID == 'villageInput'){
        villageAnswer = $(ID).value;
        if (village.indexOf(villageAnswer) >= 0) {
            alert("Vaš odgovor ("+villageAnswer+"), je ispravan. Ako ste sigurni potvrdite odgovor klikom na dugme.");
            $("check-village").style.display = "none";
            $("confirm-village").style.display = "block";    
        }
        else{
            alert("Nažalost, ne možemo da prihvatimo odgovor.");
        }
    }
    else if(ID == 'mountainInput'){
        mountainAnswer = $(ID).value;
        if (mountain.indexOf(mountainAnswer) >= 0) {
            alert("Vaš odgovor ("+mountainAnswer+"), je ispravan. Ako ste sigurni potvrdite odgovor klikom na dugme.");
            $("check-mountain").style.display = "none";
            $("confirm-mountain").style.display = "block";    
        }
        else{
            alert("Nažalost, ne možemo da prihvatimo odgovor.");
        }
    }
    else if(ID == 'riverInput'){
        riverAnswer = $(ID).value;
        if (river.indexOf(riverAnswer) >= 0) {
            alert("Vaš odgovor ("+riverAnswer+"), je ispravan. Ako ste sigurni potvrdite odgovor klikom na dugme.");
            $("check-river").style.display = "none";
            $("confirm-river").style.display = "block";    
        }
        else{
            alert("Nažalost, ne možemo da prihvatimo odgovor.");
        }
    }
    }
    else{
        tata.error('Uneli ste reč na pogrešno slovo ', 'Pokušajte ponovo', {
            position: 'tm', duration: 2000});
    } 
}
function confirmAnswer(ID){
    if(ID =='countryInput'){
        if($(ID).value!=countryAnswer){
            tata.warn('Promenili ste odgovor.', 'Izvršite proveru.', {
                position: 'tm', duration: 2000});
            $("confirm-country").style.display = "none";
            $("check-country").style.display = "block";
            countryAnswer=null;
            return; 
        }
        tata.success('Odgovor je potvrđen.', 'Ukoliko želite da promenite odgovor, obrišite ga.', {
            position: 'tm', duration: 2000});
        $("countryInput").style.display = "none";
        $("confirm-country").style.display = "none";
        $("ans-country").style.display = "block";
        $("ans-country").innerHTML = countryAnswer; 
    }
    else if(ID =='cityInput'){
        if($(ID).value!=cityAnswer){
            tata.warn('Promenili ste odgovor.', 'Izvršite proveru.', {
                position: 'tm', duration: 2000});
            $("confirm-city").style.display = "none";
            $("check-city").style.display = "block";
            countryAnswer=null;
            return; 
        }
        alert('Odgovor potvrđen');
        $("cityInput").style.display = "none";
        $("confirm-city").style.display = "none";
        $("ans-city").style.display = "block";
        $("ans-city").innerHTML = cityAnswer; 
    }
    else if(ID =='villageInput'){
        if($(ID).value!=villageAnswer){
            alert("Promenili ste odgovor, molimo vas da ponovo izvršite proveru.")
            $("confirm-village").style.display = "none";
            $("check-village").style.display = "block";
            countryAnswer=null;
            return; 
        }
        alert('Odgovor potvrđen');
        $("villageInput").style.display = "none";
        $("confirm-village").style.display = "none";
        $("ans-village").style.display = "block";
        $("ans-village").innerHTML = villageAnswer; 
    }
    else if(ID =='mountainInput'){
        if($(ID).value!=mountainAnswer){
            alert("Promenili ste odgovor, molimo vas da ponovo izvršite proveru.")
            $("confirm-mountain").style.display = "none";
            $("check-mountain").style.display = "block";
            countryAnswer=null;
            return; 
        }
        alert('Odgovor potvrđen');
        $("mountainInput").style.display = "none";
        $("confirm-mountain").style.display = "none";
        $("ans-mountain").style.display = "block";
        $("ans-mountain").innerHTML = mountainAnswer; 
    }
    else if(ID =='riverInput'){
        if($(ID).value!=riverAnswer){
            alert("Promenili ste odgovor, molimo vas da ponovo izvršite proveru.")
            $("confirm-river").style.display = "none";
            $("check-river").style.display = "block";
            countryAnswer=null;
            return; 
        }
        alert('Odgovor potvrđen');
        $("riverInput").style.display = "none";
        $("confirm-river").style.display = "none";
        $("ans-river").style.display = "block";
        $("ans-river").innerHTML = riverAnswer; 
    }
}
function deleteAnswer(ID){
    if(ID == 'countryInput'){
        countryAnswer = null;
        tata.warn('Odgovor je obrisan.', 'Unesite novi.', {
            position: 'tm', duration: 2000});
        $("check-country").style.display = "block";
        $(ID).style.display = "block";
        $("confirm-country").style.display = "none";
        $("ans-country").style.display = "none";
        $(ID).value = "";
    }
    else if(ID == 'cityInput'){
        cityAnswer = null;
        alert('Odgovor je obrisan');
        $("check-city").style.display = "block";
        $(ID).style.display = "block";
        $("confirm-city").style.display = "none";
        $("ans-city").style.display = "none";
        $(ID).value = "";
    }
    else if(ID == 'villageInput'){
        villageAnswer = null;
        alert('Odgovor je obrisan');
        $("check-village").style.display = "block";
        $(ID).style.display = "block";
        $("confirm-village").style.display = "none";
        $("ans-village").style.display = "none";
        $(ID).value = "";
    }
    else if(ID == 'mountainInput'){
        mountainAnswer = null;
        alert('Odgovor je obrisan');
        $("check-mountain").style.display = "block";
        $(ID).style.display = "block";
        $("confirm-mountain").style.display = "none";
        $("ans-mountain").style.display = "none";
        $(ID).value = "";
    }
    else if(ID == 'riverInput'){
        riverAnswer = null;
        alert('Odgovor je obrisan');
        $("check-river").style.display = "block";
        $(ID).style.display = "block";
        $("confirm-river").style.display = "none";
        $("ans-river").style.display = "none";
        $(ID).value = "";
    }
}
function confirmList(){
    $("kontenjer").style.display = "none";
    $("kontenjer2").style.display = "block";
}
function showList(){
    document.getElementById("p1").innerHTML = "Država: "+countryAnswer;
    document.getElementById("p2").innerHTML = "Grad: "+cityAnswer;
    document.getElementById("p3").innerHTML = "Selo: "+villageAnswer;
    document.getElementById("p4").innerHTML = "Planina: "+mountainAnswer;
    document.getElementById("p5").innerHTML = "Reka: "+riverAnswer;
}