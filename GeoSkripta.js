var country = ["Azerbejdzan", "Srbija", "Portugal", "Engelska", "Spanija", "Mali", "Bosna i Hercegovina","Ujedinjeni Arapski Emirati", "UAE"];
var city = ["Beograd", "London", "Milan", "Lazarevac", "Abu Dabi", "Novi Sad"];
var village = ["Petka", "Belanovica", "Sopic", "Arapovac"];
var mountain = ["Kopaonik", "Kilimandzaro", "Zlatibor", "Zlatar", "Tara", "Himalaji"];
var river = ["Dunav", "Sava", "Tisa", "Juzna Morava", "Velika Morava", "Zapadna Morava", "Ibar"];
var plant = ["Banana", "Ruza", "Visibaba", "Maslacak", "Eukaliptus"];
var animal = ["Pacov", "Pas", "Ker", "Macka", "Slon", "Papagaj", "Riba", "Som"];
var item = ["Cekic", "Volan", "Cetkica", "Olovka", "Tastatura", "Upaljac", "Sijalica"];
var countryAnswer, cityAnswer, villageAnswer, mountainAnswer, riverAnswer, plantAnswer, animalAnswer, itemAnswer;
var score = 0;
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
    alert("Uneli ste: "+x);
    $(ID).value = x;
}
function checkAnswer(ID){
    if(ID =='countryInput'){
        countryAnswer = $(ID).value;
        if (country.indexOf(countryAnswer) >= 0) {
            alert("Vaš odgovor ("+countryAnswer+"), je ispravan. Ako ste sigurni potvrdite odgovor klikom na dugme.");
            $("check-country").style.display = "none";
            $("confirm-country").style.display = "block";    
        }
        else{
            alert("Nažalost, ne možemo da prihvatimo odgovor.");
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
function confirmAnswer(ID){
    if(ID =='countryInput'){
        if($(ID).value!=countryAnswer){
            alert("Promenili ste odgovor, molimo vas da ponovo izvršite proveru.")
            $("confirm-country").style.display = "none";
            $("check-country").style.display = "block";
            countryAnswer=null;
            return; 
        }
        alert('Odgovor potvrđen');
        $("countryInput").style.display = "none";
        $("confirm-country").style.display = "none";
        $("ans-country").style.display = "block";
        $("ans-country").innerHTML = countryAnswer; 
    }
    else if(ID =='cityInput'){
        if($(ID).value!=cityAnswer){
            alert("Promenili ste odgovor, molimo vas da ponovo izvršite proveru.")
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
        alert('Odgovor je obrisan');
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