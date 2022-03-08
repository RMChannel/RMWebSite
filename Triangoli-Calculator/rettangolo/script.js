const button=document.getElementById('calcola');
const buttonr=document.getElementById('reset');
const latoa=document.getElementById('latoa');
const latob=document.getElementById('latob');
const latoc=document.getElementById('latoc');
const angoloa=document.getElementById('angoloa');
const angolob=document.getElementById('angolob');
const angoloc=document.getElementById('angoloc');

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
    check1=angoloa.value+angoloc.value;
    check2=angolob.value+angoloc.value;
    if (check1>=180 || check2>=180) {
        alert('Errore 2\n Somma angoli errata');
    }
    /* CONTROLLO IMPOSSIBILITA' LATI */
    else if (latoa.value>=latoc.value || latob.value>=latoc.value) {
        alert('Errore 3\n Lato troppo elevato');
    }
    /* CASO ANGOLO ALPHA E IPOTENUSA */
    else if (latoc.value!=0 && angoloa.value!=0) {
        lc=latoc.value;
        aa=angoloa.value;
        ab=90-aa;
        aa=(Math.PI*aa)/180;
        la=Math.sin(aa);
        la=la*lc;
        lb=Math.cos(aa);
        lb=lb*lc;
        latoa.value=la;
        latob.value=lb;
        angolob.value=ab;
    }
    /* CASO ANGOLO BETA E IPOTENUSA */
    else if (latoc.value!=0 && angolob.value!=0) {
        lc=latoc.value;
        ab=angolob.value;
        aa=90-ab;
        ab=(Math.PI*ab)/180;
        lb=Math.sin(ab);
        lb=lb*lc;
        la=Math.cos(ab);
        la=la*lc;
        latoa.value=la;
        latob.value=lb;
        angoloa.value=aa;
    }
    /* CASO ANGOLO ALPHA E CATETO A */
    else if (latoa.value!=0 && angoloa.value!=0) {
        la=latoa.value;
        aa=angoloa.value;
        ab=90-aa;
        aa=(Math.PI*aa)/180;
        lc=la/(Math.sin(aa));
        lb=lc*(Math.cos(aa));
        latoc.value=lc;
        latob.value=lb;
        angolob.value=ab;
    }
    /* CASO ANGOLO ALPHA E CATETO B */
    else if (latob.value!=0 && angoloa.value!=0) {
        lb=latob.value;
        aa=angoloa.value;
        ab=90-aa;
        aa=(Math.PI*aa)/180;
        lc=lb/(Math.cos(aa));
        la=lc*(Math.sin(aa));
        latoc.value=lc;
        latoa.value=la;
        angolob.value=ab;
    }
    /* CASO ANGOLO BETA E CATETO A */
    else if (latoa.value!=0 && angolob.value!=0) {
        la=latoa.value;
        ab=angolob.value;
        aa=90-ab;
        ab=(Math.PI*ab)/180;
        lc=la/(Math.cos(ab));
        lb=lc*(Math.sin(ab));
        latoc.value=lc;
        latob.value=lb;
        angoloa.value=aa;
    }
    /* CASO ANGOLO BETA E CATETO B */
    else if (latob.value!=0 && angolob.value!=0) {
        lb=latob.value;
        ab=angolob.value;
        aa=90-ab;
        ab=(Math.PI*ab)/180;
        lc=lb/(Math.sin(ab));
        la=lc*(Math.cos(ab));
        latoc.value=lc;
        latoa.value=la;
        angoloa.value=aa;
    }
    /* CASO IPOTENUSA E CATETO A */
    else if (latoc.value!=0 && latoa.value!=0) {
        lc=latoc.value;
        la=latoa.value;
        lb=Math.sqrt((lc*lc)-(la*la));
        aa=la/lc;
        aa=(180*aa)/3.14;
        ab=90-aa;
        angoloa.value=aa;
        angolob.value=ab;
        latob.value=lb;
    }
    /* CASO IPOTENUSA E CATETO B */
    else if (latoc.value!=0 && latob.value!=0) {
        lc=latoc.value;
        lb=latob.value;
        la=Math.sqrt((lc*lc)-(lb*lb));
        ab=lb/lc;
        ab=(180*ab)/3.14;
        aa=90-ab;
        angoloa.value=aa;
        angolob.value=ab;
        latoa.value=la;
    }
    /* CASO DUE CATETI */ 
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
        alert('Erorre 1\nDati errati o insufficienti');
    }
}