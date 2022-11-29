let p=0;
let p1s=p2s=p3s=p4s=1500;
let p1p=p2p=p3p=p4p=true;
let ta,pa,ca,check2;
let ppa=0;
let temp2="a";
const error= new Audio('sounds/error.mp3');
const press= new Audio('sounds/presssound.mp3');
const cash= new Audio('sounds/cash.mp3');
const lost= new Audio('sounds/lost.mp3');
const albergo= new Audio('sounds/albergo sound.mp3')
const win=new Audio('sounds/win.mp3')
const price=[ 60,60,100,100,120,140,140,160,180,180,200,220,220,240,260,260,280,300,300,320,350,400,150,150,200,200,200,200 ];
const casavalore = [ 50,50,50,50,50,100,100,100,100,100,100,150,150,150,150,150,150,200,200,200,200,200 ];
const valipoteca = [ 30,30,50,50,60,60,70,70,80,90,90,100,110,110,120,130,140,150,160,175,200,75,75,100,100,100,100 ];
const nomiprop=["Vicolo Corto", "Vicolo Stretto", "Bastioni Gran Sasso", "Viale Monterosa", "Viale Vesuvio", "Via Accademia", "Corso Ateneo", "Piazza Università", "Via Verdi", "Corso Raffaello", "Piazza Dante", "Via Marco Polo", "Corso Magellano", "Largo Colombo", "Viale Costantino", "Viale Traiano", "Piazza Giulio Cesare", "Via Roma", "Corso Impero", "Largo Augusto", "Viale Dei Giardini", "Parco Della Vittoria", "Società Elettrica", "Società Acqua Potabile", "Stazione Nord", "Stazione Est", "Stazione Sud", "Stazione Ovest"]
let proprieta= [];
let casaproprieta= [];
let lvlcasa= [];
let ipoteca= [];
let passprigione=[0,0];
const costicasa=[
    [2,10,30,90,160,250],
	[4,20,60,180,320,450],
	[6,30,90,270,400,550],
	[6,30,90,270,400,550],
	[8,40,100,300,450,600],
	[10,50,150,450,625,750],
	[10,50,150,450,625,750],
	[12,60,180,500,700,900],
	[14,70,200,550,750,950],
	[14,70,200,550,750,950],
	[16,80,220,600,800,1000],
	[18,90,250,700,875,1050],
	[18,90,250,700,875,1050],
	[20,100,300,750,925,1100],
	[22,110,330,800,975,1150],
	[22,110,330,800,975,1150],
	[24,120,360,850,1025,1200],
	[26,130,390,900,1100,1275],
	[26,130,390,900,1100,1275],
	[28,150,450,100,1200,1400],
	[35,175,500,100,1300,1500],
	[50,200,600,1400,1700,2000],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [25,50,100,200],
    [25,50,100,200],
    [25,50,100,200],
    [25,50,100,200],
];

let soldi1b=false;
let soldi1=soldi2=0;
let soldi2b=false;
let prop1b=false;
let prop2b=false;
let prop1=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
let prop2=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
let pass1p=false;
let pass1i=false;
let pass2p=false;
let pass2i=false;
let pass1n=0;
let pass2n=0;
phase=0;
buttonpressed=0;
p1accept=false
p2accept=false

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

function controlplayers() {
    icontrol=0
    if (p1p) {
        icontrol+=1
        player=1
    }
    if (p2p) {
        icontrol+=1
        player=2
    }
    if (p3p) {
        icontrol+=1
        player=3
    }
    if (p4p) {
        icontrol+=1
        player=4
    }
    if (icontrol==1) {
        hideall()
        win.play()
        document.getElementById("functions").style.display="none"
        document.getElementById("win").style.display="block"
        document.getElementById("restart").style.display="block"
        document.getElementById("winningtext").innerText="Il giocatore "+player+" ha vinto!!"
        setInterval(() => {
            if (document.getElementById("winningtext").style.color=="black") {
                document.getElementById("winningtext").style.color="white"
            }
            else {
                document.getElementById("winningtext").style.color="black"
            }
        }, 500);
    }
}

function reloadplayers() {
    const p1=document.getElementById("p1");
    const p2=document.getElementById("p2");
    const p3=document.getElementById("p3");
    const p4=document.getElementById("p4");
    p1.innerText="P1:"+p1s+"€";
    p2.innerText="P2:"+p2s+"€";
    if (!p1p) {
        p1.innerText="";
        document.getElementById("p1").style.display="none";
        document.getElementById("via1").style.display="none";
        document.getElementById("tassep1").style.display="none";
        document.getElementById("acquisto1").style.display="none";
        document.getElementById("visu1").style.display="none";
        document.getElementById("pc1").style.display="none";
        document.getElementById("ipo1").style.display="none";
        document.getElementById("affitto11").style.display="none";
        document.getElementById("affitto12").style.display="none";
        document.getElementById("scambio11").style.display="none"; 
        document.getElementById("scambio12").style.display="none";
        document.getElementById("prigione1").style.display="none";
        document.getElementById("bancarotta1p").style.display="none";
    }
    if (!p2p) {
        p2.innerText="";
        document.getElementById("p2").style.display="none";
        document.getElementById("via2").style.display="none";
        document.getElementById("tassep2").style.display="none";
        document.getElementById("acquisto2").style.display="none";
        document.getElementById("visu2").style.display="none";
        document.getElementById("pc2").style.display="none";
        document.getElementById("ipo2").style.display="none";
        document.getElementById("affitto21").style.display="none";
        document.getElementById("affitto22").style.display="none";
        document.getElementById("scambio21").style.display="none"; 
        document.getElementById("scambio22").style.display="none";
        document.getElementById("prigione2").style.display="none";
        document.getElementById("bancarotta2p").style.display="none";
    }
    if (p>2 && p3p) {
        document.getElementById("p3").style.display="block";
        document.getElementById("via3").style.display="inline-block";
        document.getElementById("tassep3").style.display="inline-block";
        document.getElementById("acquisto3").style.display="inline-block";
        document.getElementById("visu3").style.display="inline-block";
        document.getElementById("pc3").style.display="inline-block";
        document.getElementById("ipo3").style.display="inline-block";
        document.getElementById("affitto31").style.display="inline-block";
        document.getElementById("affitto32").style.display="inline-block";
        document.getElementById("scambio31").style.display="inline-block"; 
        document.getElementById("scambio32").style.display="inline-block";
        document.getElementById("prigione3").style.display="inline-block";
        document.getElementById("bancarotta3p").style.display="inline-block";
        p3.innerText="P3:"+p3s+"€";
    }
    else {
        p3.innerText="";
        document.getElementById("p3").style.display="none";
        document.getElementById("via3").style.display="none";
        document.getElementById("tassep3").style.display="none";
        document.getElementById("acquisto3").style.display="none";
        document.getElementById("visu3").style.display="none";
        document.getElementById("pc3").style.display="none";
        document.getElementById("ipo3").style.display="none";
        document.getElementById("affitto31").style.display="none";
        document.getElementById("affitto32").style.display="none";
        document.getElementById("scambio31").style.display="none"; 
        document.getElementById("scambio32").style.display="none";
        document.getElementById("prigione3").style.display="none";
        document.getElementById("bancarotta3p").style.display="none";
    }
    if (p==4 && p4p) {
        document.getElementById("p4").style.display="block";
        document.getElementById("via4").style.display="inline-block";
        document.getElementById("tassep4").style.display="inline-block";
        document.getElementById("acquisto4").style.display="inline-block"; 
        document.getElementById("visu4").style.display="inline-block";  
        document.getElementById("pc4").style.display="inline-block";
        document.getElementById("ipo4").style.display="inline-block"; 
        document.getElementById("affitto41").style.display="inline-block"; 
        document.getElementById("affitto42").style.display="inline-block"; 
        document.getElementById("scambio41").style.display="inline-block"; 
        document.getElementById("scambio42").style.display="inline-block";   
        document.getElementById("prigione4").style.display="inline-block";    
        document.getElementById("bancarotta4p").style.display="inline-block";
        p4.innerText="P4:"+p4s+"€";
    }
    else {
        p4.innerText="";
        document.getElementById("p4").style.display="none";
        document.getElementById("via4").style.display="none";
        document.getElementById("tassep4").style.display="none";
        document.getElementById("acquisto4").style.display="none";
        document.getElementById("visu4").style.display="none";
        document.getElementById("pc4").style.display="none";
        document.getElementById("ipo4").style.display="none";
        document.getElementById("affitto41").style.display="none";
        document.getElementById("affitto42").style.display="none";
        document.getElementById("scambio41").style.display="none"; 
        document.getElementById("scambio42").style.display="none";
        document.getElementById("prigione4").style.display="none";
        document.getElementById("bancarotta4p").style.display="none";
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
    document.getElementById("affitto1").style.display="none";
    document.getElementById("affitto2").style.display="none";
    document.getElementById("affitto3").style.display="none";
    document.getElementById("affitto4").style.display="none";
    document.getElementById("affittoconfirm").style.display="none"
    document.getElementById("scambio1").style.display="none";
    document.getElementById("scambio2").style.display="none";
    document.getElementById("scambio3").style.display="none";
    document.getElementById("scambio4").style.display="none";
    document.getElementById("scambio5").style.display="none";
    document.getElementById("soldiscambio").style.display="none";
    document.getElementById("propscambio").style.display="none";
    document.getElementById("terminatescambio").style.display="none"
    document.getElementById("backfromscambio").style.display="none"
    document.getElementById("prigionediv1").style.display="none"
    document.getElementById("prigionediv2").style.display="none"
    document.getElementById("ottienipassdiv").style.display="none"
    document.getElementById("usepassdiv").style.display="none"
    document.getElementById("pagaprigdiv").style.display="none"
    document.getElementById("bancarottadiv1").style.display="none"
    document.getElementById("bancarottadiv2").style.display="none"
    document.getElementById("bancarottadiv3").style.display="none"
    document.getElementById("passscambio").style.display="none"
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
        temp+="a";
        document.getElementById(temp).style.display="none";
        temp+="b";
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
    if (ta==1 && p1s>=100) {
        p1s-=100;
    }
    else if (ta==2 && p2s>=100) {
        p2s-=100;
    }
    else if (ta==3 && p3s>=100) {
        p3s-=100;
    }
    else if (ta==4 && p4s>=100) {
        p4s-=100;
    }
    else {
        error.play()
        alert("Non hai abbastanza soldi per pagare le tasse, scambia o ipoteca o dichiara bancarotta")
    }
    lost.play();
    hideall();
    reloadplayers();
}

function tafp2() {
    if (ta==1 && p1s>=200) {
        p1s-=200;
        lost.play();
    }
    else if (ta==2 && p2s>=200) {
        p2s-=200;
        lost.play();
    }
    else if (ta==3 && p3s>=200) {
        p3s-=200;
        lost.play();
    }
    else if (ta==4 && p4s>=200) {
        p4s-=200;
        lost.play();
    }
    else {
        error.play()
        alert("Non hai abbastanza soldi per pagare le tasse, scambia o ipoteca o dichiara bancarotta")
    }
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
    if ((pa==1) && (p1s>=price[ppa])) {
        p1s-=price[ppa];
        proprieta[ppa]=pa;
        cash.play();
    }
    else if ((pa==2) && (p2s>=price[ppa])) {
        p2s-=price[ppa];
        proprieta[ppa]=pa;
        cash.play();
    }
    else if ((pa==3) && (p3s>=price[ppa])) {
        p3s-=price[ppa];
        proprieta[ppa]=pa;
        cash.play();
    }
    else if ((pa==4) && (p4s>=price[ppa])) {
        p4s-=price[ppa];
        proprieta[ppa]=pa;
        cash.play();
    }
    else {
        alert("Errore: 8\nNon hai abbastanza soldi per acquistare la proprietà");
        error.play();
    }
    reloadplayers();
    hideall();
}

function reset() {
    press.play();
    hideall();
    reloadplayers();
}

function resetacq() {
    press.play()
    document.getElementById("acquistomenu3").style.display="none"
    document.getElementById("acquistomenu2").style.display="block"
}

function backfromacquista() {
    press.play()
    document.getElementById("acquistomenu2").style.display="none"
    document.getElementById("acquistomenu").style.display="block"
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
    if (ta<22) text="Livello casa: "+lvlcasa[ta]+"\nIpoteca:";
    else text="Ipoteca:"
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
        while (i<22) {
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
        while (i<22) {
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
        while (i<22) {
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
        while (i<22) {
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
        alert("Errore: 4\nNon hai nessuna proprietà potenziabile");
        reset();
    }
}

function Ipoteca() {
    press.play();
    hideall();
    document.getElementById("functions").style.display="none";
    document.getElementById("ipoteca1").style.display="block";
}

function backfromipoteca() {
    press.play()
    document.getElementById("ipoteca2").style.display="none"
    document.getElementById("ipoteca1").style.display="block"
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
    if (check2) {
        ipoteca[ta]=true;
        if (pa==1) p1s+=valipoteca[ta];
        else if (pa==2) p2s+=valipoteca[ta];
        else if (pa==3) p3s+=valipoteca[ta];
        else p4s+=valipoteca[ta];
    }
    else {
        if ((pa==1) && (p1s>=(valipoteca[ta]+(valipoteca[ta]/10)))) {
            p1s-=valipoteca[ta]+(valipoteca[ta]/10);
            cash.play();
        }
        else if ((pa==2) && (p2s>=(valipoteca[ta]+(valipoteca[ta]/10)))) {
            p2s-=valipoteca[ta]+(valipoteca[ta]/10);
            cash.play();
        }
        else if ((pa==3) && (p3s>=(valipoteca[ta]+(valipoteca[ta]/10)))) {
            p3s-=valipoteca[ta]+(valipoteca[ta]/10);
            cash.play();
        }
        else if ((pa==4) && (p4s>=(valipoteca[ta]+(valipoteca[ta]/10)))) {
            p4s-=valipoteca[ta]+(valipoteca[ta]/10);
            cash.play();
        }
        else {
            error.play();
            alert("Errore 7:\nNon hai abbastanza soldi per disipotecare la tua proprietà");
        }
    }
    reloadplayers();
    hideall();
}

function affitto1() {
    press.play();
    hideall();
    document.getElementById("functions").style.display="none";
    document.getElementById("affitto1").style.display="block";
}

function affitto2() {
    press.play();
    document.getElementById("affitto1").style.display="none";
    document.getElementById("affitto2").style.display="block";
    document.getElementById("affitto"+pa+"2").style.display="none"
}

function affitto3() {
    document.getElementById("affitto"+pa+"2").style.display="inline"
    press.play();
    let i=0;
    let check=false;
    if (pa==ca) {
        error.play();
        alert("Errore: 9\nHai selezionato lo stesso giocatore");
        reset();
        return;
    }
    document.getElementById("affitto2").style.display="none";
    document.getElementById("affitto3").style.display="block";
    while (i<28) {
        if (proprieta[i]==ca && ipoteca[i]==0) {
            let temp=i.toString();
            temp+="pavia";
            document.getElementById(temp).style.display="inline";
            check=true;
        }
        i++;
    }
    if (check==false) {
        error.play();
        alert("Errore: 8\nIl giocatore selezionato non ha proprietà disponibili, riprovare");
        reset();
    }
}

function affitto4() {
    press.play()
    document.getElementById("affitto3").style.display="none"
    document.getElementById("affittoconfirm").style.display="block"
    if (ta<25) document.getElementById("propaffittoconfirm").src="Proprieta/ ("+ta+").jpg"
    else document.getElementById("propaffittoconfirm").src="Proprieta/("+ta+").jpg"
}

function affitto41() {
    press.play();
    if (ta<21) {
        if (pa==1) p1s-=costicasa[ta][lvlcasa[ta]];
        else if (pa==2) p2s-=costicasa[ta][lvlcasa[ta]];
        else if (pa==3) p3s-=costicasa[ta][lvlcasa[ta]];
        else if (pa==4) p4s-=costicasa[ta][lvlcasa[ta]];
        if (ca==1) p1s+=costicasa[ta][lvlcasa[ta]];
        else if (ca==2) p2s+=costicasa[ta][lvlcasa[ta]];
        else if (ca==3) p3s+=costicasa[ta][lvlcasa[ta]];
        else if (ca==4) p4s+=costicasa[ta][lvlcasa[ta]];
        reset();
        cash.play();
    }
    else if ((ta==22) || (ta==23)) {
        document.getElementById("affittoconfirm").style.display="none";
        document.getElementById("affitto4").style.display="block";
    }
    else {
        let check1=false;
        let check2=false;
        let check3=false;
        let check4=false;
        if (proprieta[24]==ca) check1=true;
        if (proprieta[25]==ca) check2=true;
        if (proprieta[26]==ca) check3=true;
        if (proprieta[27]==ca) check4=true;
        if (check1 && check2 && check3 && check4) {
            if (pa==1) p1s-=200;
            else if (pa==2) p2s-=200;
            else if (pa==3) p3s-=200;
            else if (pa==4) p4s-=200;
            if (ca==1) p1s+=200;
            else if (ca==2) p2s+=200;
            else if (ca==3) p3s+=200;
            else if (ca==4) p4s+=200;
        }
        else if ((check1 && check2 && check3) || (check1 && check2 && check4) || (check1 && check4 && check3) || (check4 && check2 && check3)) {
            if (pa==1) p1s-=100;
            else if (pa==2) p2s-=100;
            else if (pa==3) p3s-=100;
            else if (pa==4) p4s-=100;
            if (ca==1) p1s+=100;
            else if (ca==2) p2s+=100;
            else if (ca==3) p3s+=100;
            else if (ca==4) p4s+=100;
        }
        else if ((check1 && check2) || (check1 && check3) || (check1 && check4) || (check2 && check1) || (check2 && check3) || (check2 && check4) || (check3 && check1) || (check3 && check2) || (check3 && check4) || (check4 && check1) || (check4 && check2) || (check4 && check3)) {
            if (pa==1) p1s-=50;
            else if (pa==2) p2s-=50;
            else if (pa==3) p3s-=50;
            else if (pa==4) p4s-=50;
            if (ca==1) p1s+=100;
            else if (ca==2) p2s+=50;
            else if (ca==3) p3s+=50;
            else if (ca==4) p4s+=50;
        }
        else {
            if (pa==1) p1s-=25;
            else if (pa==2) p2s-=25;
            else if (pa==3) p3s-=25;
            else if (pa==4) p4s-=25;
            if (ca==1) p1s+=25;
            else if (ca==2) p2s+=25;
            else if (ca==3) p3s+=25;
            else if (ca==4) p4s+=25;
        }
        cash.play();
        reset();
    }
}

function affitto5() {
    let insert=document.getElementById("dadoinsert").value;
    if ((insert<1) || (insert>12)) {
        error.play();
        alert("Errore: 10\nNumero di dadi inserito non valido, riprovare");
        return;
    }
    else if ((proprieta[22]==ca) && (proprieta[23]==ca)) insert*=10;
    else insert*=4;
    if (pa==1) p1s-=insert;
    else if (pa==2) p2s-=insert;
    else if (pa==3) p3s-=insert;
    else if (pa==4) p4s-=insert;
    if (ca==1) p1s+=insert;
    else if (ca==2) p2s+=insert;
    else if (ca==3) p3s+=insert;
    else if (ca==4) p4s+=insert;
    cash.play();
    reset();
}

function backfromaffitto1() {
    press.play()
    document.getElementById("affitto2").style.display="none"
    document.getElementById("affitto1").style.display="block" 
    document.getElementById("affitto"+pa+"2").style.display="inline-block"
}

function backfromaffitto2() {
    press.play()
    document.getElementById("affitto3").style.display="none"
    document.getElementById("affitto2").style.display="block"
}

function backfromaffitto3() {
    press.play()
    document.getElementById("affittoconfirm").style.display="none"
    document.getElementById("affitto3").style.display="block"
}

function scambio() {
    hideall();
    resetscambio()
    document.getElementById("functions").style.display="none";
    document.getElementById("scambio1").style.display="block";
}

function scambio1() {
    press.play();
    document.getElementById("scambio1").style.display="none";
    document.getElementById("scambio2").style.display="block";
    document.getElementById("scambio"+ta+"2").style.display="none";
    document.getElementById("backto1").value="P"+ta
}

function scambio2() {
    document.getElementById("scambio"+ta+"2").style.display="inline";
    phase=1;
    if (ta==pa) {
        error.play();
        alert("Errore: 12\nGiocatori scambio uguali")
        reset();
        return;
    }
    else {    
        press.play();
        document.getElementById("scambio2").style.display="none";
        document.getElementById("scambio3").style.display="block";
        document.getElementById("player1").innerText="Giocatore: "+ta+"\nCosa vuoi proporre?";
        document.getElementById("player2").innerText="Giocatore: "+pa+"\nCosa vuoi proporre?";
    }
}

function scambio3() {
    if (soldi1b==false && prop1b==false && pass1i==false && pass1p==false) {
        error.play();
        alert("Errore: 13\nNon hai proposto nulla");
        return;
    }
    else if (phase==1) {
        document.getElementById("scambio3").style.display="none";
        document.getElementById("scambio4").style.display="block";
        phase=2
    }
    else {
        document.getElementById("scambio4").style.display="none";
        document.getElementById("scambio3").style.display="block";
        phase=1
    }
    press.play();
}

function passscambiochoice() {
    press.play()
    document.getElementById("probabilitàpass").style.display="none"
    document.getElementById("imprevistipass").style.display="none"
    if (phase==1 && passprigione.includes(ta)) {
        document.getElementById("scambio3").style.display="none";
        document.getElementById("passscambio").style.display="block"
        if (passprigione[0]==ta) {
            document.getElementById("probabilitàpass").style.display="block"
        }
        else {
            document.getElementById("imprevistipass").style.display="block"
        }
    }
    else if (phase==2 && passprigione.includes(pa)) {
        document.getElementById("scambio4").style.display="none";
        document.getElementById("passscambio").style.display="block"
        if (passprigione[0]==pa) {
            document.getElementById("probabilitàpass").style.display="block"
        }
        else {
            document.getElementById("imprevistipass").style.display="block"
        }
    }
    else {
        error.play()
        alert("Non hai un Pass gratuito per la prigione")
    }
}

function passscambio() {
    press.play()
    if (phase==1 && ca==0 && !pass1p) {
        document.getElementById("passshowp").style.display="block"
        pass1p=true
    }
    else if (phase==1 && ca==1 && !pass1i) {
        document.getElementById("passshowi").style.display="block"
        pass1i=true
    }
    else if (phase==1 && (pass1p || pass1i)) {
        if (ca==0) {
            document.getElementById("passshowp").style.display="none"
            pass1p=false
        }
        else {
            document.getElementById("passshowi").style.display="none"
            pass1i=false
        }
    }
    else if (phase==2 && ca==0 && !pass2p) {
        document.getElementById("passshowp2").style.display="block"
        pass2p=true
    }
    else if (phase==2 && ca==1 && !pass2i) {
        document.getElementById("passshowi2").style.display="block"
        pass2i=true
    }
    else if (phase==2 && (pass2p || pass2i)) {
        if (ca==0) {
            document.getElementById("passshowp2").style.display="none"
            pass2p=false
        }
        else {
            document.getElementById("passshowi2").style.display="none"
            pass2i=false
        }
    }
    if (phase==1) document.getElementById("scambio3").style.display="block";
    else document.getElementById("scambio4").style.display="block";
    document.getElementById("passscambio").style.display="none"
}

function moneyscambio() {
    press.play();
    document.getElementById("scambio3").style.display="none";
    document.getElementById("scambio4").style.display="none"
    document.getElementById("soldiscambio").style.display="block";
}

function propscambio() {
    press.play()
    document.getElementById("scambio3").style.display="none"
    document.getElementById("scambio4").style.display="none"
    document.getElementById("propscambio").style.display="block";
    let i=0
    if (phase==1) {
        while (i<28) {
            if (proprieta[i]==ta) {
                let temp=i.toString();
                temp+="paviab";
                document.getElementById(temp).style.display="inline";
                check2=true;
           }
            i++;
        }
        if (prop1b) document.getElementById("nopropscambio").style.display=""
        else document.getElementById("nopropscambio").style.display="none"
    }
    else {
        while (i<28) {
            if (proprieta[i]==pa) {
                let temp=i.toString();
                temp+="paviab";
                document.getElementById(temp).style.display="inline";
                check2=true;
           }
            i++;
        }
        if (prop2b) document.getElementById("nopropscambio").style.display=""
        else document.getElementById("nopropscambio").style.display="none"
    }
    if (!check2) {
        error.play()
        alert("Non hai nessuna proprietà disponibile")
        backto()
    }
}

function propscambio2() {
    if (phase==1) {
        if (prop1[ca]!=0) {
            prop1[ca]=0
        }
        else {
            prop1[ca]=ta
        }
        prop1b=true
    }
    else {
        if (prop2[ca]!=0) {
            prop2[ca]=0
        }
        else {
            prop2[ca]=ta
        }
        prop2b=true
    }
    press.play()
    backto()
    check2=false
}

function nopropscambio() {
    i=0
    if (phase==1) {
        prop1b=false
        while (i<28) {
            prop1[i]=0
            i++
        }
    }
    else {
        prop2b=false
        while (i<28) {
            prop2[i]=0
            i++
        }
    }
    backto()
}

function backto() {
    checkpropb=false
    press.play();
    hideall();
    document.getElementById("functions").style.display="none";
    if (phase==1) {
        document.getElementById("scambio3").style.display="block";
        if (soldi1b) {
            document.getElementById("moneyshow").innerText="Soldi proposti="+soldi1+"€"
        }
        else {
            document.getElementById("moneyshow").innerText=""
        }
        if (prop1b) {
            let i=0
            let propn1="Proprietà proposte:"
            while (i<28) {
                if (prop1[i]!=0) {
                    propn1+=(" "+nomiprop[i]+", ")
                    checkpropb=true
                }
                i+=1
            }
            if (checkpropb) {
                document.getElementById("propshow").innerText=propn1
            }
            else {
                document.getElementById("propshow").innerText=""
                prop1b=false
            }
        }
        else {
            document.getElementById("propshow").innerText=""
        }
        
    }
    else if (phase==2) {
        document.getElementById("scambio4").style.display="block";
        if (soldi2b) {
            document.getElementById("moneyshow2").innerText="Soldi proposti="+soldi2+"€"
        }
        else {
            document.getElementById("moneyshow2").innerText=""
        }
        if (prop2b) {
            let i=0
            let propn2="Proprietà proposte:"
            while (i<28) {
                if (prop2[i]!=0) {
                    propn2+=(" "+nomiprop[i]+", ")
                }
                i+=1
                checkpropb=true
            }
            if (checkpropb) {
                document.getElementById("propshow2").innerText=propn2
            }
            else {
                document.getElementById("propshow2").innerText=""
                prop2b=false
            }
        }
    }
}

function soldigo() {
    soldi=parseInt(document.getElementById("moneyinsert").value)
    if (soldi<0) {
        error.play
        alert("Hai inserito un valore non valido, riprovare")
        return
    }
    else if (soldi==0) {
        press.play()
        if (phase==1) {
            soldi1b=false
            soldi1=0
        }
        else {
            soldi2b=false
            soldi2=0
        }
        backto()
    }
    else if (phase==1) {
        if (ta==1) {
            if (soldi>p1s) {
                error.play()
                alert("Hai inserito un numero di soldi maggiore rispetto a quello che hai")
                return
            }
            else {
                soldi1b=true
                soldi1=soldi
            }
        }
        else if (ta==2) {
            if (soldi>p2s) {
                error.play()
                alert("Hai inserito un numero di soldi maggiore rispetto a quello che hai")
                return
            }
            else {
                soldi1b=true
                soldi1=soldi
            }
        }
        else if (ta==3) {
            if (soldi>p3s) {
                error.play()
                alert("Hai inserito un numero di soldi maggiore rispetto a quello che hai")
                return
            }
            else {
                soldi1b=true
                soldi1=soldi
            }
        }
        else if (ta==4) {
            if (soldi>p4s) {
                error.play()
                alert("Hai inserito un numero di soldi maggiore rispetto a quello che hai")
                return
            }
            else {
                soldi1b=true
                soldi1=soldi
            }
        }
    }
    else {
        if (pa==1) {
            if (soldi>p1s) {
                error.play()
                alert("Hai inserito un numero di soldi maggiore rispetto a quello che hai")
                return
            }
            else {
                soldi2b=true
                soldi2=soldi
            }

        }
        else if (pa==2) {
            if (soldi>p2s) {
                error.play()
                alert("Hai inserito un numero di soldi maggiore rispetto a quello che hai")
                return
            }
            else {
                soldi2b=true
                soldi2=soldi
            }
        }
        else if (pa==3) {
            if (soldi>p3s) {
                error.play()
                alert("Hai inserito un numero di soldi maggiore rispetto a quello che hai")
                return
            }
            else {
                soldi2b=true
                soldi2=soldi
            }
        }
        else if (pa==4) {
            if (soldi>p4s) {
                error.play()
                alert("Hai inserito un numero di soldi maggiore rispetto a quello che hai")
                return
            }
            else {
                soldi2b=true
                soldi2=soldi
            }
        }
    }
    if ((soldi1b && phase==1) || (soldi2b && phase==2)) {
        press.play()
        backto()
    }
}

function scambio4() {
    if (((prop1b) || (soldi1b) || (pass1p || pass1i)) && ((prop2b) || (soldi2b) || (pass2i || pass2p))) {
        document.getElementById("backfromscambio").style.display="block"
        document.getElementById("scambio4").style.display="none"
        document.getElementById("scambio5").style.display="flex"
        document.getElementById("playername1").innerText="Giocatore:"+ta
        document.getElementById("playername2").innerText="Giocatore:"+pa
        document.getElementById("p1accept").style.color="Red"
        document.getElementById("p2accept").style.color="Red"
        document.getElementById("terminatescambio").style.display="none"
        if (soldi1b) {
            document.getElementById("soldip1visu").innerText="Soldi proposti:"+soldi1+"€"
        }
        if (soldi2b) {
            document.getElementById("soldip2visu").innerText="Soldi proposti:"+soldi2+"€"
        }
        if (prop1b) {
            let i=0
            let propn1="Proprietà proposte:"
            while (i<28) {
                if (prop1[i]!=0) {
                    propn1+=(" "+nomiprop[i]+", ")
                }
                i+=1
            }
            document.getElementById("prop1visu").innerText=propn1
        }
        if (prop2b) {
            let i=0
            let propn2="Proprietà proposte:"
            while (i<28) {
                if (prop2[i]!=0) {
                    propn2+=(" "+nomiprop[i]+", ")
                }
                i+=1
            }
            document.getElementById("prop2visu").innerText=propn2
        }
        if (pass1p) document.getElementById("pass1visup").innerText="Pass Prigione (Probabilità) proposto"
        if (pass1i) document.getElementById("pass1visui").innerText="Pass Prigione (Imprevisti) proposto"
        if (pass2p) document.getElementById("pass2visup").innerText="Pass Prigione (Probabilità) proposto"
        if (pass2i) document.getElementById("pass2visui").innerText="Pass Prigione (Imprevisti) proposto"
    }
    else {
        error.play()
        alert("Attenzione!\nDati insufficienti per lo scambio")
    }
}

function acceptscambio() {
    if (buttonpressed==1) {
        if (!p1accept) {
            document.getElementById("p1accept").style.color="Green"
            p1accept=true
        }
        else {
            document.getElementById("p1accept").style.color="Red"
            p1accept=false
        }
    }
    else if ((buttonpressed==2)) {
        if (!p2accept) {
            document.getElementById("p2accept").style.color="Green"
            p2accept=true
        }
        else {
            document.getElementById("p2accept").style.color="Red"
            p2accept=false
        }
    }
    if ((p1accept) && (p2accept)) {
        document.getElementById("terminatescambio").style.display="block"
        document.getElementById("backfromscambio").style.display="none"
    }
    else {
        document.getElementById("terminatescambio").style.display="none"
        document.getElementById("backfromscambio").style.display="block"
    }
}

function finalscambio() {
    if (soldi1b) {
        if (ta==1) {
            p1s-=soldi1
        }
        else if (ta==2) {
            p2s-=soldi1
        }
        else if (ta==3) {
            p3s-=soldi1
        }
        else {
            p4s-=soldi1
        }
        if (pa==1) {
            p1s+=soldi1
        }
        else if (pa==2) {
            p2s+=soldi1
        }
        else if (pa==3) {
            p3s+=soldi1
        }
        else {
            p4s+=soldi1
        }
    }
    if (soldi2b) {
        if (pa==1) {
            p1s-=soldi2
        }
        else if (pa==2) {
            p2s-=soldi2
        }
        else if (pa==3) {
            p3s-=soldi2
        }
        else {
            p4s-=soldi2
        }
        if (ta==1) {
            p1s+=soldi2
        }
        else if (ta==2) {
            p2s+=soldi2
        }
        else if (ta==3) {
            p3s+=soldi2
        }
        else {
            p4s+=soldi2
        }
    }
    let i=0
    if (prop1b) {
        while (i<28) {
            if (prop1[i]!=0) {
                proprieta[i]=pa
            }
            i+=1
        }
    }
    if (prop2b) {
        i=0
        while (i<28) {
            if (prop2[i]!=0) {
                proprieta[i]=ta
            }
            i+=1
        }
    }
    if (pass1p) passprigione[0]=pa
    if (pass1i) passprigione[1]=pa
    if (pass2p) passprigione[0]=ta
    if (pass2i) passprigione[1]=ta
    reloadplayers()
    hideall()
    resetscambio()
    albergo.play()
}

function resetscambio() {
    let i=0
    while (i<28) {
        prop1[i]=0
        prop2[i]=0
        i+=1
    }
    soldi=0
    soldi1=0
    soldi2=0
    soldi1b=false
    soldi2b=false
    prop1b=false
    prop2b=false
    document.getElementById("moneyshow").innerText=""
    document.getElementById("moneyshow2").innerText=""
    document.getElementById("propshow").innerText=""
    document.getElementById("propshow2").innerText=""
    document.getElementById("prop1visu").innerText=""
    document.getElementById("prop2visu").innerText=""
    document.getElementById("soldip1visu").innerText=""
    document.getElementById("soldip2visu").innerText=""
    document.getElementById("p1accept").style.color="Red"
    document.getElementById("p2accept").style.color="Red"
    p1accept=false
    p2accept=false
}

function returnscambio() {
    press.play()
    document.getElementById("scambio2").style.display="none"
    document.getElementById("scambio1").style.display="block"
    document.getElementById("scambio"+ta+"2").style.display="inline";
}

function prigione() {
    press.play()
    hideall();
    document.getElementById("functions").style.display="none";
    document.getElementById("prigionediv1").style.display="block";
}
phaseprison=0
function prigione2() {
    press.play()
    document.getElementById("prigionediv1").style.display="none"
    document.getElementById("prigionediv2").style.display="block"
    document.getElementById("usepass").style.display=""
    document.getElementById("ottienipass").style.display=""
    if (((passprigione[0]==ta) && (passprigione[1]==ta))) {
        document.getElementById("ottienipass").style.display="none"
        document.getElementById("usepass").style.display=""
    }
    else if ((passprigione[0]!=0) && (passprigione[1]!=0)) {
        document.getElementById("ottienipass").style.display="none"
        if (passprigione.includes(ta)) document.getElementById("usepass").style.display=""
        else document.getElementById("usepass").style.display="none"
    }
    else if (passprigione.includes(ta)) {
        document.getElementById("ottienipass").style.display=""
        document.getElementById("usepass").style.display=""
    }
    else {
        document.getElementById("ottienipass").style.display=""
        document.getElementById("usepass").style.display="none"
    }
}

function ottienipass() {
    press.play()
    document.getElementById("prigionediv2").style.display="none";
    document.getElementById("ottienipassdiv").style.display="block";
    document.getElementById("probabilitàpass2").style.display=""
    document.getElementById("imprevistipass2").style.display=""
    phaseprison=1
    if (passprigione[0]!=0) {
        document.getElementById("probabilitàpass2").style.display="none"
    }
    if (passprigione[1]!=0) {
        document.getElementById("imprevistipass2").style.display="none"
    }
}

function ottienipass2() {
    press.play()
    if (phaseprison==1) {
        passprigione[pa]=ta
        hideall()
    }
    else {
        passprigione[pa]=0
        document.getElementById("ottienipassdiv").style.display="none";
        document.getElementById("usepassdiv").style.display="block";
        setTimeout(() => {
            hideall()
        }, 4000)
    }
}

function usepass() {
    press.play()
    phaseprison=2
    document.getElementById("prigionediv2").style.display="none";
    document.getElementById("ottienipassdiv").style.display="block";
    document.getElementById("probabilitàpass2").style.display="none"
    document.getElementById("imprevistipass2").style.display="none"
    if (passprigione[0]==ta) {
        document.getElementById("probabilitàpass2").style.display=""
    }
    if (passprigione[1]==ta) {
        document.getElementById("imprevistipass2").style.display=""
    }
}

function pagaprig() {
    press.play()
    if (ta==1) {
        p1s-=125
    }
    else if (ta==2) {
        p2s-=125
    }
    else if (ta==3) {
        p3s-=125
    }
    else {
        p4s-=125
    }
    document.getElementById("prigionediv2").style.display="none";
    document.getElementById("pagaprigdiv").style.display="block";
    setTimeout(() => {
        hideall()
        reloadplayers()
    }, 4000)
}

function bancarotta1() {
    press.play()
    hideall();
    document.getElementById("functions").style.display="none";
    document.getElementById("bancarottadiv1").style.display="block";
}

function bancarotta2() {
    press.play()
    document.getElementById("bancarottadiv1").style.display="none";
    document.getElementById("bancarottadiv2").style.display="block";
}

function bancarotta3() {
    if (pa==1 && p1p) {
        p1p=false
    }
    else if (pa==2 && p2p) {
        p2p=false
    }
    else if (pa==3 && p3p) {
        p3p=false
    }
    else if (pa==4 && p4p) {
        p4p=false
    }
    reloadplayers()
    document.getElementById("bancarottadiv2").style.display="none";
    document.getElementById("bancarottadiv3").style.display="block";
    document.getElementById("textbancarotta").innerText="Il giocatore "+pa+" è in bancarotta";
    setTimeout(() => {
        hideall()
        controlplayers()
    }, 4000)
}

function backtasse() {
    document.getElementById("tassemenu1").style.display="block"
    document.getElementById("tassemenu2").style.display="none"
}

function backprop() {
    document.getElementById("acquistomenu").style.display="block"
    document.getElementById("acquistomenu2").style.display="none"
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
    if (p<4) p4p=false
    if (p<3) p3p=false
    document.getElementById("selplayer").style.display="none";
    document.getElementById("restart").style.display="none"
    document.getElementById("menu").style.display="block";
    reloadplayers();
    hideall();
}