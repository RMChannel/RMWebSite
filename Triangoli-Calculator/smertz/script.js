const button=document.getElementById('calcola');
const buttonr=document.getElementById('reset');
const latoa=document.getElementById('latoa');
const latob=document.getElementById('latob');
const latoc=document.getElementById('latoc');
const angoloa=document.getElementById('angoloa');
const angolob=document.getElementById('angolob');
const angoloc=document.getElementById('angoloc');
const error= new Audio('../common/error.mp3');

button.addEventListener("click",calcolo);
buttonr.addEventListener("click",reset);

function reset() {
    latoa.value=0;
    latob.value=0;
    latoc.value=0;
    angoloa.value=0;
    angolob.value=0;
    angoloc.value=0;
}

function calcolo() {
    let la,lb,lc,aa,ab,ac,check1,check2,check3;
    /* CONTROLLO ANGOLI */
    check1=Number(angoloa.value)+Number(angolob.value)+Number(angoloc.value);
    if (check1>180) {
        error.play();
        alert('Errore 2:\nSomma degli angoli errata');
    }
    /* CONTROLLO IMPOSSIBILITA' LATI */
    if (latoa.value>latob.value) {
        if (latoc.value>latoa.value) {
            check3=latoc.value;
            check1=Number(latoa.value)+Number(latob.value);
            check2=Number(latoa.value)-Number(latob.value);
        }
        else {
            check3=latoa.value;
            check1=Number(latob.value)+Number(latoc.value);
            check2=Number(latob.value)-Number(latoc.value);
        }
    }
    else {
        check3=latob.value;
        check1=Number(latob.value)+Number(latoa.value);
        check2=Number(latob.value)-Number(latoa.value);
    }
    if (check2<0) {
        check2=check2*-1;
    }
    if ((latoa.value!=0 && latob.value!=0 && latoc.value!=0) && ((check3>check1) || (check3<check2))) {
        error.play();
        alert('Errore 3\n Non rispetta la disuguaglianza triangolare');
    }
    /* CASO TRE LATI */
    else if (latoa.value!=0 && latob.value!=0 && latoc.value!=0) {
        la=latoa.value;
        lb=latob.value;
        lc=latoc.value;
        aa=((lb*lb)+(lc*lc)-(la*la))/(2*lb*lc);
        aa=Math.acos(aa);
        aa=(90*aa)/(Math.PI/2);
        angoloa.value=aa;
        aa=(Math.PI*aa)/360;
        aa=Math.sin(aa);
        ab=(lb*aa)/la;
        ab=Math.asin(ab);
        ab=(360*ab)/Math.PI;
        angolob.value=ab;
        ac=180-ab-angoloa.value;
        angoloc.value=ac;
    }
    /* CASO LATO E DUE ANGOLI */
    if ((latoa.value!=0 || latob.value!=0 || latoc.value!=0) && (angoloa.value!=0 && angolob.value!=0) || (angoloa.value!=0 && angoloc.value!=0) || (angolob.value!=0 && angoloc.value!=0)) {
        if (angoloa.value!=0 && angolob.value!=0) {
            aa=angoloa.value;
            ab=angolob.value;
            ac=180-aa-ab;
        }
        else if (angoloa.value!=0 && angoloc.value!=0) {
            aa=angoloa.value;
            ac=angoloc.value;
            ab=180-aa-ac;
        }
        else {
            ab=angolob.value;
            ac=angoloc.value;
            aa=180-ab-ac;
        }
        angoloa.value=aa;
        angolob.value=ab;
        angoloc.value=ac;
        aa=Math.sin((Math.PI*aa)/360);
        ab=Math.sin((Math.PI*ab)/360);
        ac=Math.sin((Math.PI*ac)/360);
        if (latoa.value!=0) {
            la=latoa.value;
            lb=(la*ab)/aa;
            lc=(la*ac)/aa;
        }
        else if (latob.value!=0) {
            lb=latob.value;
            la=(lb*aa)/ab;
            lc=(la*ac)/aa;
        }
        else {
            lc=latoc.value;
            la=(lc*aa)/ac;
            lb=(la*ab)/aa;    
        }
        latoa.value=la;
        latob.value=lb;
        latoc.value=lc;
    }
    /* CASO DUE LATI E UN ANGOLO */
    else if ((angoloa.value!=0 || angolob.value!=0 || angoloc.value!=0) && (latoa.value!=0 && latob.value!=0) || (latoa.value!=0 && latoc.value!=0) || (latob.value!=0 && latoc.value!=0)) {
        var temp;
        if (latoa.value!=0 && latob.value!=0) {
            la=latoa.value;
            lb=latob.value;
            if (angoloa.value!=0) {
                aa=angoloa.value;
                temp=angoloa.value;
                temp=Math.sin((Math.PI*temp)/360);
                ab=(lb/la)*temp;
                ab=Math.asin(ab);
                ab=(360*ab)/Math.PI;
                ac=180-ab-aa;
                temp=Math.sin((Math.PI*ac)/360);
                lc=(la*temp)/aa;
            }
            else if (angolob.value!=0) {
                ab=angolob.value;
                temp=angolob.value;
                temp=Math.sin((Math.PI*temp)/360);
                aa=(la/lb)*temp;
                aa=Math.asin(aa);
                aa=(360*aa)/Math.PI;
                ac=180-aa-ab;
                temp=Math.sin((Math.PI*ac)/360);
                lc=(lb*temp)/ab;
            }
            else {
                ac=angoloc.value;
                temp=(Math.PI*ac)/180;
                temp=Math.cos(temp);
                lc=Math.sqrt((la*la)+(lb*lb)-(2*la*lb*temp));
                temp=Math.sin((Math.PI*ac)/360);
                ab=(lb*temp)/lc;
                ab=Math.asin(ab);
                ab=(360*ab)/Math.PI;
                aa=180-ab-ac;
            }
        }
        else if (latoa.value!=0 && latoc.value!=0) {
            la=latoa.value;
            lc=latoc.value;
            if (angoloa.value!=0) {
                aa=angoloa.value;
                temp=Math.sin((Math.PI*aa)/360);
                ac=(lc/la)*temp;
                ac=Math.asin(ac);
                ac=(360*ac)/Math.PI;
                ab=180-ac-aa;
                temp=Math.sin((Math.PI*ab)/360);
                lb=(la*temp)/aa;
            }
            else if (angoloc.value!=0) {
                ac=angoloc.value;
                temp=Math.sin((Math.PI*ac)/360);
                aa=(la/lc)*temp;
                aa=Math.asin(aa);
                aa=(360*aa)/Math.PI;
                ab=180-aa-ac;
                temp=Math.sin((Math.PI*ab)/360);
                lb=(lc*temp)/ac;
            }
            else {
                ab=angolob.value;
                temp=(Math.PI*ab)/180;
                temp=Math.cos(temp);
                lb=Math.sqrt((la*la)+(lc*lc)-(2*la*lc*temp));
                temp=Math.sin((Math.PI*ab)/360);
                ac=(lc*temp)/lb;
                ac=Math.asin(ac);
                ac=(360*ac)/Math.PI;
                aa=180-ab-ac;
            }
        }
        else {
            lb=latob.value;
            lc=latoc.value;
            if (angolob.value!=0) {
                ab=angolob.value;
                temp=Math.sin((Math.PI*ac)/360);
                ac=(lc/lb)*temp;
                ac=Math.asin(ac);
                ac=(360*ac)/Math.PI;
                aa=180-ab-ac;
                temp=Math.sin((Math.PI*aa)/360);
                la=(lc*temp)/ac;
            }
            else if (angoloc.value!=0) {
                ac=angoloc.value;
                temp=Math.sin((Math.PI*ac)/360);
                ab=(lb/lc)*temp;
                ab=Math.asin(ab);
                ab=(360*ab)/Math.PI;
                aa=180-ab-ac;
                temp=Math.sin((Math.PI*aa)/360);
                la=(lc*temp)/ac;
            }
            else {
                aa=angoloa.value;
                temp=(Math.PI*aa)/180;
                temp=Math.cos(temp);
                la=Math.sqrt((lb*lb)+(lc*lc)-(2*lb*lc*temp));
                temp=Math.sin((Math.PI*aa)/360);
                ac=(lc*temp)/la;
                ac=Math.asin(ac);
                ac=(360*ac)/Math.PI;
                ab=180-ac-aa;
            }
        }
        latoa.value=la;
        latob.value=lb;
        latoc.value=lc;
        angoloa.value=aa;
        angolob.value=ab;
        angoloc.value=ac;
    }
    /* CASO DATI ERRORE */
    else {
        error.play();
        alert('Errore 1:\nDati insufficienti');
    }
}