let p=0;
let p1s=1500;
let p2s=1500;
let p3s=1500;
let p4s=1500;
let ta,pa,ca,check2;
let ppa=0;
let temp2="a";
const error= new Audio('sounds/error.mp3');
const press= new Audio('sounds/presssound.mp3');
const cash= new Audio('sounds/cash.mp3');
const lost= new Audio('sounds/lost.mp3');
const albergo= new Audio('sounds/albergo sound.mp3')
const price=[ 60,60,100,100,120,140,140,160,180,180,200,220,220,240,260,260,280,300,300,320,350,400,150,150,200,200,200,200 ];
const casavalore = [ 50,50,50,50,50,100,100,100,100,100,100,150,150,150,150,150,150,200,200,200,200,200 ];
const valipoteca = [ 30,30,50,50,60,60,70,70,80,90,90,100,110,110,120,130,140,150,160,175,200,75,75,100,100,100,100 ];
let proprieta= [];
let casaproprieta= [];
let lvlcasa= [];
let ipoteca= [];

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
        document.getElementById("ipo3").style.display="inline-block";  
        p3.innerText="P3:"+p3s+"€";
    }
    if (p==4) {
        document.getElementById("p4").style.display="block";
        document.getElementById("via4").style.display="inline-block";
        document.getElementById("tassep4").style.display="inline-block";
        document.getElementById("acquisto4").style.display="inline-block"; 
        document.getElementById("visu4").style.display="inline-block";  
        document.getElementById("pc4").style.display="inline-block";
        document.getElementById("ipo4").style.display="inline-block";       
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
    document.getElementById("visualmenu3").style.display="none";
    document.getElementById("exitvis").style.display="none";
    document.getElementById("potenziacasa1").style.display="none";
    document.getElementById("potenziacasa2").style.display="none";
    document.getElementById("exitpote").style.display="none";
    document.getElementById("potenziacasa3").style.display="none";
    document.getElementById("backvis").style.display="none";
    document.getElementById("ipoteca1").style.display="none";
    document.getElementById("ipoteca2").style.display="none";
    document.getElementById("ipoteca3").style.display="none";
    document.getElementById("ipoteca4").style.display="none";
    let i=0;
    while (i<28) {
        let temp=i.toString();
        document.getElementById(temp).style.display="none";
        temp+="p";
        document.getElementById(temp).style.display="none";
        temp+="a";
        document.getElementById(temp).style.display="none";
        temp+="v";
        document.getElementById(temp).style.display="none";
        temp+="i";
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

function Via2() {
    if (pa==1) p1s+=200;
    else if (pa==2) p2s+=200;
    else if (pa==3) p3s+=200;
    else if (pa==4) p4s+=200;
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

function propshow() {
    document.getElementById("acquistomenu").style.display="none";
    document.getElementById("acquistomenu2").style.display="block";
    press.play();
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
    reloadplayers();
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
    if (temp2!="a") {
        document.getElementById(temp2).style.display="none";
    }
    document.getElementById("visualmenu1").style.display="none";
    document.getElementById("visualmenu2").style.display="block";
    document.getElementById("visualmenu3").style.display="none";
    document.getElementById("exitvis").style.display="inline";
    document.getElementById("backvis").style.display="none";
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

function visu3() {
    let text;
    press.play();
    document.getElementById("visualmenu2").style.display="none";
    document.getElementById("visualmenu3").style.display="block";
    document.getElementById("backvis").style.display="inline";
    temp2=ta+"pav";
    document.getElementById(temp2).style.display="inline";
    text="Livello casa: "+lvlcasa[ta]+"\nIpoteca:";
    if (ipoteca[ta]) text+="Si";
    else text+="No";
    document.getElementById("description").innerText=text;
}

function potenziactive() {
    press.play();
    hideall();
    document.getElementById("functions").style.display="none";
    document.getElementById("potenziacasa1").style.display="block";
}

function potenziaselect() {
    press.play();
    let soldi;
    soldi=(lvlcasa[ta]-ca)*casavalore[ta];
    lvlcasa[ta]=ca;
    if (pa==1) {
        if((soldi<0) && ((soldi*-1)>p1s)) {
            error.play();
            lvlcasa[ta]=(soldi/casavalore[ta])+ca;
            alert("Errore 5\nNon hai abbastanza soldi");
            reset();
            return;
        }
        else {
            p1s+=soldi;
        }
    }
    else if (pa==2) {
        if((soldi<0) && ((soldi*-1)>p2s)) {
            error.play();
            lvlcasa[ta]=(soldi/casavalore[ta])+ca;
            alert("Errore 5\nNon hai abbastanza soldi");
            reset();
            return;
        }
        else {
            p2s+=soldi;
        }
    }
    else if (pa==3) {
        if((soldi<0) && ((soldi*-1)>p3s)) {
            error.play();
            lvlcasa[ta]=(soldi/casavalore[ta])+ca;
            alert("Errore 5\nNon hai abbastanza soldi");
            reset();
            return;
        }
        else {
            p3s+=soldi;
        }
    }
    else if (pa==4) {
        if((soldi<0) && ((soldi*-1)>p4s)) {
            error.play();
            lvlcasa[ta]=(soldi/casavalore[ta])+ca;
            alert("Errore 5\nNon hai abbastanza soldi");
            reset();
            return;
        }
        else {
            p4s+=soldi;
        }
    }
    if (lvlcasa[ta]==5) {
        albergo.play();
    }
    else {
        cash.play();
    }
    reset();
}

function controllo() {
    press.play();
    let check=false;
    let i=0;
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
    if (ipoteca[ta]==true) {
        error.play();
        alert("Errore: 5\nLa tua proprietà è ipotecata");
    }
    else if (check==false) {
        error.play();
        alert("Errore: 3\nNon hai un gruppo di proprietà adatto o la proprietà selezionata non è potenziabile");
    }
    else {
        document.getElementById("potenziacasa2").style.display="none";
        document.getElementById("potenziacasa3").style.display="block";
        document.getElementById("powerstatus").innerHTML="Attuale potenziamento: "+lvlcasa[ta];
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

function Ipoteca() {
    press.play();
    hideall();
    document.getElementById("functions").style.display="none";
    document.getElementById("ipoteca1").style.display="block";
}

function ipotecavisu() {
    let i=0;
    let check=false;
    document.getElementById("ipoteca1").style.display="none";
    document.getElementById("ipoteca2").style.display="block";
    if (pa==1) {
        while (i<28) {
            if (proprieta[i]==1) {
                check=true;
                let temp=i.toString();
                temp+="pavi";
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
                temp+="pavi";
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
                temp+="pavi";
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
                temp+="pavi";
                document.getElementById(temp).style.display="inline";
            }
            i++;
        }
    }
    if (check==false) {
        error.play();
        alert("Errore: 6\nNon hai nessuna proprietà");
        reset();
    }
}

function ipoteca2() {
    document.getElementById("ipoteca2").style.display="none";
    if (ipoteca[ta]==false) {
        var temp3=document.getElementById("28pavi");
        document.getElementById("ipoteca3").style.display="flex";
    }
    else {
        var temp3=document.getElementById("29pavi");
        document.getElementById("ipoteca4").style.display="flex";
    }
    let temp=ta.toString();
    temp+="pavi";
    temp3.src=document.getElementById(temp).src;
    temp3.style.display="inline";
    temp3.style.width="200px";
    temp3.style.height="350px";
    temp3.style.cursor="pointer";
}

function confermipoteca() {
    cash.play();
    if (check2) {
        ipoteca[ta]=true;
        if (pa==1) p1s+=valipoteca[ta];
        else if (pa==2) p2s+=valipoteca[ta];
        else if (pa==3) p3s+=valipoteca[ta];
        else p4s+=valipoteca[ta];
    }
    else {
        ipoteca[ta]=false;
        if (pa==1) p1s-=(valipoteca[ta]+(valipoteca[ta]/10));
        else if (pa==2) p2s-=(valipoteca[ta]+(valipoteca[ta]/10));
        else if (pa==3) p3s-=(valipoteca[ta]+(valipoteca[ta]/10));
        else p4s-=(valipoteca[ta]+(valipoteca[ta]/10));
    }
    reloadplayers();
    hideall();
}

function game() {
    let i=0;
    while (i<28) {
        proprieta[i]=0;
        casaproprieta[i]=0;
        lvlcasa[i]=0;
        ipoteca[i]=false;
        i++;
    }
    document.getElementById("selplayer").style.display="none";
    let game=true;
    document.getElementById("menu").style.display="block";
    reloadplayers();
    hideall();
}