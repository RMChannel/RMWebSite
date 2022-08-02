let p=0;
let p1s=1500;
let p2s=1500;
let p3s=1500;
let p4s=1500;
const ta1=document.getElementById("tassep1");
const ta2=document.getElementById("tassep2");
const ta3=document.getElementById("tassep3");
const ta4=document.getElementById("tassep4");
let ta=0;
const error= new Audio('sounds/error.mp3');
const press= new Audio('sounds/presssound.mp3');
const cash= new Audio('sounds/cash.mp3');

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
        p3.innerText="P3:"+p3s+"€";
    }
    if (p==4) {
        document.getElementById("p4").style.display="block";
        document.getElementById("via4").style.display="inline-block";
        p4.innerText="P4:"+p4s+"€";
    }
}

function hideall() {
    document.getElementById("functions").style.display="block";
    document.getElementById("Via").style.display="none";
    document.getElementById("tassemenu1").style.display="none";
    
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

ta1.addEventListener("click", ta=1);
ta2.addEventListener("click", ta=2);
ta3.addEventListener("click", ta=3);
ta4.addEventListener("click", ta=4);

function tassesel() {
    press.play();
    console.log(ta4);
}

function game() {
    document.getElementById("selplayer").style.display="none";
    let game=true;
    document.getElementById("menu").style.display="block";
    reloadplayers();
}