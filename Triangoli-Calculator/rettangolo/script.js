const button=document.getElementById('calcola');
const buttonr=document.getElementById('reset');
const latoa=document.getElementById('latoa');
const latob=document.getElementById('latob');
const latoc=document.getElementById('latoc');
const angoloa=document.getElementById('angoloa');
const angolob=document.getElementById('angolob');
const angoloc=document.getElementById('angoloc');
const error= new Audio('error.mp3')

button.addEventListener("click",calcolo);
buttonr.addEventListener("click",reset);

function reset() {
    latoa.value=0;
    latob.value=0;
    latoc.value=0;
    angoloa.value=0;
    angolob.value=0;
}

function calcolo() {
    var la, lb, lc, aa, ab, check1, check2;
    /* CONTROLLI IMPOSSIBILITA' ANGOLI */
    check1=Number(angoloa.value)+Number(angoloc.value);
    check2=Number(angolob.value)+Number(angoloc.value);
    if (check1>=180 || check2>=180) {
        alert('Errore 2\n Somma angoli errata');
        error.play();
    }
    /* CONTROLLO IMPOSSIBILITA' LATI */
    else if ((latoa.value>=latoc.value && latoc.value!=0) || (latob.value>=latoc.value && latoc.value!=0)) {
        alert('Errore 3\n Lato troppo elevato');
        error.play();
    }
    /* CASO HO UN ANGOLO */
    else if (angoloa.value!=0 || angolob.value!=0) {
        la=0;
        lb=0;
        lc=0;
        if (angoloa.value!=0) {
            aa=angoloa.value;
            ab=90-aa;
        }
        else {
            ab=angolob.value;
            aa=90-ab;
        }
        angoloa.value=aa;
        angolob.value=ab;
        /* LATO A */
        if (latoa.value!=0) {
            la=latoa.value;
            aa=(Math.PI*aa)/180;
            lc=la/(Math.sin(aa));
            lb=lc*(Math.cos(aa));
        }
        /* LATO B */
        else if (latob.value!=0) {
            lb=latob.value;
            aa=(Math.PI*aa)/180;
            lc=lb/(Math.cos(aa));
            la=lc*(Math.sin(aa));
        }
        /* LATO C */
        else if (latoc.value!=0) {
            lc=latoc.value;
            aa=(Math.PI*aa)/180;
            la=Math.sin(aa);
            la=la*lc;
            lb=Math.cos(aa);
            lb=lb*lc;
        }
        else {
            alert('Errore 4\nDati errati o insufficienti');
            error.play();
        }
        latoa.value=la;
        latob.value=lb;
        latoc.value=lc;
    }
    /* CASO HO CATETO E IPOTENUSA */
    else if ((latoa.value!=0 || latob.value!=0) && latoc.value!=0) {
        lc=latoc.value;
        if (latoa.value!=0) {
            la=latoa.value;
            lb=Math.sqrt((lc*lc)-(la*la));
            aa=la/lc;
            aa=(180*aa)/3.14;
            ab=90-aa;
        }
        else {
            lb=latob.value;
            la=Math.sqrt((lc*lc)-(lb*lb));
            ab=lb/lc;
            ab=(180*ab)/3.14;
            aa=90-ab;
        }
        latoa.value=la;
        latob.value=lb;
        angoloa.value=aa;
        angolob.value=ab;
    }
    /* CASO HO 2 CATETI */
    else if (latoa.value!=0 && latob.value!=0) {
        la=latoa.value;
        lb=latob.value;
        lc=Math.sqrt((la*la)+(lb*lb));
        aa=Math.asin(la/lc);
        aa=(90*aa)/(Math.PI/2);
        ab=90-aa;
        angoloa.value=aa;
        angolob.value=ab;
        latoc.value=lc;
    }
    else {
        alert('Errore 1\nDati errati o insufficienti');
        error.play();
    }
}