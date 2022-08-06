let p=0;
let p1s=1500;
let p2s=1500;
let p3s=1500;
let p4s=1500;
let ta,pa;
let ppa=0;
const error= new Audio('sounds/error.mp3');
const press= new Audio('sounds/presssound.mp3');
const cash= new Audio('sounds/cash.mp3');
const lost= new Audio('sounds/lost.mp3');
const price=[ 60,60,100,100,120,140,140,160,180,180,200,220,220,240,260,260,280,300,300,320,350,400,150,150,200,200,200,200 ];
const casavalore = [ 50,50,50,50,50,100,100,100,100,100,100,150,150,150,150,150,150,200,200,200,200,200 ];
let proprieta= [];
let casaproprieta= [];
let lvlcasa= [];

function playerassing() {
    press.play();
    p=document.getElementById("numberinsert").value;
    if (p<2 || p>4) {
        error.play();
        alert("Errore: 1\nNumero giocatori inserito incorretto, riprovare");
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
        document.getElementById("visu3").style.display="inline-block";
        document.getElementById("pc3").style.display="inline-block";
        p3.innerText="P3:"+p3s+"€";
    }
    if (p==4) {
        document.getElementById("p4").style.display="block";
        document.getElementById("via4").style.display="inline-block";
        document.getElementById("tassep4").style.display="inline-block";
        document.getElementById("acquisto4").style.display="inline-block"; 
        document.getElementById("visu4").style.display="inline-block";  
        document.getElementById("pc4").style.display="inline-block";       
        p4.innerText="P4:"+p4s+"€";
    }
}

function hideall() {
    document.getElementById("functions").style.display="inline";
    document.getElementById("Via").style.display="none";
    document.getElementById("tassemenu1").style.display="none";
    document.getElementById("tassemenu2").style.display="none";
    document.getElementById("acquistomenu").style.display="none";
    document.getElementById("acquistomenu2").style.display="none";
    document.getElementById("acquistomenu3").style.display="none";
    document.getElementById("visualmenu1").style.display="none";
    document.getElementById("visualmenu2").style.display="none";
    document.getElementById("exitvis").style.display="none";
    document.getElementById("potenziacasa1").style.display="none";
    document.getElementById("potenziacasa2").style.display="none";
    document.getElementById("exitpote").style.display="none";
    document.getElementById("potenziacasa3").style.display="none";
    let i=0;
    while (i<28) {
        let temp=i.toString();
        document.getElementById(temp).style.display="none";
        temp+="p";
        document.getElementById(temp).style.display="none";
        i++;
    }
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
    document.getElementById("acquistomenu2").style.display="block";
    propshow();
}

function acquisto2() {
    press.play();
    pa=2;
    document.getElementById("acquistomenu").style.display="none";
    document.getElementById("acquistomenu2").style.display="block";
    propshow();
}

function acquisto3() {
    press.play();
    pa=3;
    document.getElementById("acquistomenu").style.display="none";
    document.getElementById("acquistomenu2").style.display="block";
    propshow();
}

function acquisto4() {
    press.play();
    pa=4;
    document.getElementById("acquistomenu").style.display="none";
    document.getElementById("acquistomenu2").style.display="block";
    propshow();
}

function propshow() {
    let i=0;
    let temp;
    while (i<28) {
        if (proprieta[i]==0) {
            temp=i.toString();
            document.getElementById(temp).style.display="inline";
        }
        i++;
    }
}

function confermaprop() {
    press.play();
    let temp=ppa.toString();
    document.getElementById("acquistomenu2").style.display="none";
    document.getElementById("acquistomenu3").style.display="flex";
    const temp2=document.getElementById(temp);
    var temp3=document.getElementById("28");
    temp3.src=temp2.src;
    temp3.style.display="inline";
    temp3.style.width="200px";
    temp3.style.height="350px";
    temp3.style.cursor="pointer";
}

function acqu() {
    cash.play();
    if (pa==1) {
        p1s-=price[ppa];
    }
    else if (pa==2) {
        p2s-=price[ppa];
    }
    else if (pa==3) {
        p3s-=price[ppa];
    }
    else if (pa==4) {
        p4s-=price[ppa];
    }
    proprieta[ppa]=pa;
    reloadplayers();
    hideall();
}

function reset() {
    press.play();
    hideall();
}

function visuactivate() {
    press.play();
    hideall();
    document.getElementById("functions").style.display="none";
    document.getElementById("visualmenu1").style.display="block";
}

function visu2() {
    press.play();
    let check=false;
    let i=0;
    document.getElementById("visualmenu1").style.display="none";
    document.getElementById("visualmenu2").style.display="block";
    document.getElementById("exitvis").style.display="block";
    if (pa==1) {
        while (i<28) {
            if (proprieta[i]==1) {
                check=true;
                let temp=i.toString();
                temp+="p";
                document.getElementById(temp).style.display="inline";
            }
            i++;
        }
    }
    else if (pa==2) {
        while (i<28) {
            if (proprieta[i]==2) {
                check=true;
                let temp=i.toString();
                temp+="p";
                document.getElementById(temp).style.display="inline";
            }
            i++;
        }
    }
    else if (pa==3) {
        while (i<28) {
            if (proprieta[i]==3) {
                check=true;
                let temp=i.toString();
                temp+="p";
                document.getElementById(temp).style.display="inline";
            }
            i++;
        }
    }
    else {
        while (i<28) {
            if (proprieta[i]==4) {
                check=true;
                let temp=i.toString();
                temp+="p";
                document.getElementById(temp).style.display="inline";
            }
            i++;
        }
    }
    if (check==false) {
        error.play();
        alert("Errore: 2\nNon hai nessuna proprietà");
        reset();
    }
}

function potenziactive() {
    press.play();
    hideall();
    document.getElementById("functions").style.display="none";
    document.getElementById("potenziacasa1").style.display="block";
}

function potenziaselect() {

}

function controllo() {
    let check=false;
    if ((ta==0) || (ta==1)) {
        if ((proprieta[0]==pa) && (proprieta[1]==pa)) {
            check=true;
        }
    }
    else if ((ta==2) || (ta==3) || (ta==4)) {
        if ((proprieta[2]==pa) && (proprieta[3]==pa) && (proprieta[4]==pa)) {
            check=true;
        }
    }
    else if ((ta==5) || (ta==6) || (ta==7)) {
        if ((proprieta[5]==pa) && (proprieta[6]==pa) && (proprieta[7]==pa)) {
            check=true;
        }
    }
    else if ((ta==8) || (ta==9) || (ta==10)) {
        if ((proprieta[8]==pa) && (proprieta[9]==pa) && (proprieta[10]==pa)) {
            check=true;
        }
    }
    else if ((ta==11) || (ta==12) || (ta==13)) {
        if ((proprieta[11]==pa) && (proprieta[12]==pa) && (proprieta[13]==pa)) {
            check=true;
        }
    }
    else if ((ta==14) || (ta==15) || (ta==16)) {
        if ((proprieta[14]==pa) && (proprieta[15]==pa) && (proprieta[16]==pa)) {
            check=true;
        }
    }
    else if ((ta==17) || (ta==18) || (ta==19)) {
        if ((proprieta[17]==pa) && (proprieta[18]==pa) && (proprieta[19]==pa)) {
            check=true;
        }
    }
    else if ((ta==20) || (ta==21)) {
        if ((proprieta[20]==pa) && (proprieta[21]==pa)) {
            check=true;
        }
    }
    if (check==false) {
        error.play();
        alert("Errore: 3\nNon hai un gruppo di proprietà adatto o la proprietà selezionata non è potenziabile");
    }
    else {
        document.getElementById("potenziacasa2").style.display="none";
        document.getElementById("potenziacasa3").style.display="block";
    }
}

function potenziacasa() {
    press.play();
    let check=false;
    let i=0;
    document.getElementById("potenziacasa1").style.display="none";
    document.getElementById("potenziacasa2").style.display="block";
    document.getElementById("exitpote").style.display="block";
    if (pa==1) {
        while (i<28) {
            if (proprieta[i]==1) {
                check=true;
                let temp=i.toString();
                temp+="pa";
                document.getElementById(temp).style.display="inline";
            }
            i++;
        }
    }
    else if (pa==2) {
        while (i<28) {
            if (proprieta[i]==2) {
                check=true;
                let temp=i.toString();
                temp+="pa";
                document.getElementById(temp).style.display="inline";
            }
            i++;
        }
    }
    else if (pa==3) {
        while (i<28) {
            if (proprieta[i]==3) {
                check=true;
                let temp=i.toString();
                temp+="pa";
                document.getElementById(temp).style.display="inline";
            }
            i++;
        }
    }
    else {
        while (i<28) {
            if (proprieta[i]==4) {
                check=true;
                let temp=i.toString();
                temp+="pa";
                document.getElementById(temp).style.display="inline";
            }
            i++;
        }
    }
    if (check==false) {
        error.play();
        alert("Errore: 4\nNon hai nessuna proprietà");
        reset();
    }
}

function game() {
    let i=0;
    while (i<28) {
        proprieta[i]=0;
        casaproprieta[i]=0;
        lvlcasa[i]=0;
        i++;
    }
    document.getElementById("selplayer").style.display="none";
    let game=true;
    document.getElementById("menu").style.display="block";
    reloadplayers();
    hideall();
}