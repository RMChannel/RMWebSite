let p=0;
let p1s=1500;
let p2s=1500;
let p3s=1500;
let p4s=1500;
let ta,pa;
const error= new Audio('sounds/error.mp3');
const press= new Audio('sounds/presssound.mp3');
const cash= new Audio('sounds/cash.mp3');
const lost= new Audio('sounds/lost.mp3');
const name = [ "Vicolo Stretto", "Vicolo Corto","Stazione SUD","Bastioni Gran Sasso","Viale Monterosa","Viale Vesuvio","Via Accademia","Societa' Elettrica","Corso Ateneo","Piazza Universita'","Stazione OVEST","Via Verdi","Corso Raffaello","Piazza Dante","Via Marcolo Polo","Corso Magellano","Largo Colombo","Stazione NORD","Viale Costantino","Viale Traiano","Societa' Acqua Potabile","Piazza Giulio Cesare","Via Roma","Corso Impero","Largo Augusto","Stazione EST","Viale Dei Giardini","Parco della Vittoria" ];
const casavalore = [ 50,50,0,50,50,50,100,0,100,100,0,100,100,100,150,150,150,0,150,150,0,150,200,200,200,0,200,200 ];
const valipoteca = [ 30,30,100,50,50,60,60,70,75,70,80,100,90,90,100,110,110,120,100,130,75,140,150,160,100,175,200 ];
let proprieta;

function playerassing() {
    press.play();
    p=document.getElementById("numberinsert").value;
    if (p<2 || p>4) {
        error.play();
        alert("Errore:1\nNumero giocatori inserito incorretto, riprovare");
    }
    else {
        game();
    }
}

function reloadplayers() {
    const p1=document.getElementById("p1");
    const p2=document.getElementById("p2");
    const p3=document.getElementById("p3");
    const p4=document.getElementById("p4");
    p1.innerText="P1:"+p1s+"€";
    p2.innerText="P2:"+p2s+"€";
    if (p>2) {
        document.getElementById("p3").style.display="block";
        document.getElementById("via3").style.display="inline-block";
        document.getElementById("tassep3").style.display="inline-block";
        document.getElementById("acquisto3").style.display="inline-block"; 
        p3.innerText="P3:"+p3s+"€";
    }
    if (p==4) {
        document.getElementById("p4").style.display="block";
        document.getElementById("via4").style.display="inline-block";
        document.getElementById("tassep4").style.display="inline-block";
        document.getElementById("acquisto4").style.display="inline-block";        
        p4.innerText="P4:"+p4s+"€";
    }
}

function hideall() {
    document.getElementById("functions").style.display="block";
    document.getElementById("Via").style.display="none";
    document.getElementById("tassemenu1").style.display="none";
    document.getElementById("tassemenu2").style.display="none";
    document.getElementById("acquistomenu2").style.display="none";
    document.getElementById("acquistomenu").style.display="none";
}

function Via() {
    press.play();
    hideall();
    document.getElementById("functions").style.display="none";
    document.getElementById("Via").style.display="block";
}

function Via1() {
    p1s=p1s+200;
    cash.play();
    hideall();
    reloadplayers();
}

function Via2() {
    p2s=p2s+200;
    cash.play();
    hideall();
    reloadplayers();
}

function Via3() {
    p3s=p3s+200;
    cash.play();
    hideall();
    reloadplayers();
}

function Via4() {
    p4s=p4s+200;
    cash.play();
    hideall();
    reloadplayers();
}

function tasse() {
    press.play();
    hideall();
    document.getElementById("functions").style.display="none";
    document.getElementById("tassemenu1").style.display="block";
}

function taf1() {
    ta=1;
    tassesel();
}

function taf2() {
    ta=2;
    tassesel();
}

function taf3() {
    ta=3;
    tassesel();
}

function taf4() {
    ta=4;
    tassesel();
}

function tassesel() {
    press.play();
    document.getElementById("tassemenu1").style.display="none";
    document.getElementById("tassemenu2").style.display="block";
}

function tafp1() {
    if (ta==1) {
        p1s-=100;
    }
    else if (ta==2) {
        p2s-=100;
    }
    else if (ta==3) {
        p3s-=100;
    }
    else if (ta==4) {
        p4s-=100;
    }
    lost.play();
    hideall();
    reloadplayers();
}

function tafp2() {
    if (ta==1) {
        p1s-=200;
    }
    else if (ta==2) {
        p2s-=200;
    }
    else if (ta==3) {
        p3s-=200;
    }
    else if (ta==4) {
        p4s-=200;
    }
    lost.play();
    hideall();
    reloadplayers();
}

function acquisto() {
    press.play();
    hideall();
    document.getElementById("functions").style.display="none";
    document.getElementById("acquistomenu").style.display="block";
}

function acquisto1() {
    press.play();
    pa=1;
    document.getElementById("acquistomenu").style.display="none";
    document.getElementById("acquistomenu2").style.display="flex";
}

function acquisto2() {
    press.play();
    pa=2;
    document.getElementById("acquistomenu").style.display="none";
    document.getElementById("acquistomenu2").style.display="flex";
}

function acquisto3() {
    press.play();
    pa=3;
    document.getElementById("acquistomenu").style.display="none";
    document.getElementById("acquistomenu2").style.display="flex";
}

function acquisto4() {
    press.play();
    pa=4;
    document.getElementById("acquistomenu").style.display="none";
    document.getElementById("acquistomenu2").style.display="flex";
}

function game() {
    document.getElementById("selplayer").style.display="none";
    let game=true;
    document.getElementById("menu").style.display="block";
    reloadplayers();
}