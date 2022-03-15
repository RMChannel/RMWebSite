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
    angoloc.value=0;
}

function calcolo() {
    let la,lb,lc,aa,ab,ac;
    /* CASO TRE LATI */
    if (latoa.value!=0 && latob.value!=0 && latoc.value!=0) {
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
    /* CASO LATO A E ALPHA E BETA */
    else if (latoa.value!=0 && angoloa.value!=0 && angolob.value!=0) {
        aa=angoloa.value;
        ab=angolob.value;
        la=latoa.value;
        ac=180-aa-ab;
        angoloc.value=ac;
        aa=Math.sin((Math.PI*aa)/360);
        ab=Math.sin((Math.PI*ab)/360);
        ac=Math.sin((Math.PI*ac)/360);
        lb=(la*ab)/aa;
        lc=(la*ac)/aa;
        latob.value=lb;
        latoc.value=lc;
    }
    /* CASO LATO A E BETA E GAMMA */
    else if (latoa.value!=0 && angolob.value!=0 && angoloc.value!=0) {
        la=latoa.value;
        ab=angolob.value;
        ac=angoloc.value;
        aa=180-ab-ac;
        angoloa.value=aa;
        aa=Math.sin((Math.PI*aa)/360);
        ab=Math.sin((Math.PI*ab)/360);
        ac=Math.sin((Math.PI*ac)/360);
        lb=(la*ab)/aa;
        lc=(la*ac)/aa;
        latob.value=lb;
        latoc.value=lc;
    }
    /* CASO LATO A E ALPHA E GAMMA */
    else if (latoa.value!=0 && angoloa.value!=0 && angoloc.value!=0) {
        la=latoa.value;
        aa=angoloa.value;
        ac=angoloc.value;
        ab=180-aa-ac;
        angolob.value=ab;
        aa=Math.sin((Math.PI*aa)/360);
        ab=Math.sin((Math.PI*ab)/360);
        ac=Math.sin((Math.PI*ac)/360);
        lb=(la*ab)/aa;
        lc=(la*ac)/aa;
        latob.value=lb;
        latoc.value=lc;
    }
    /* CASO LATO B E ALPHA E BETA */
    else if (latob.value!=0 & angoloa.value!=0 && angolob.value!=0) {
        lb=latob.value;
        aa=angoloa.value;
        ab=angolob.value;
        ac=180-ab-aa;
        angoloc.value=ac;
        aa=Math.sin((Math.PI*aa)/360);
        ab=Math.sin((Math.PI*ab)/360);
        ac=Math.sin((Math.PI*ac)/360);
        la=(lb*aa)/ab;
        lc=(la*ac)/aa;
        latoa.value=la;
        latoc.value=lc;
    }
    /* CASO LATO B E BETA E GAMMA */
    else if (latob.value!=0 && angolob.value!=0 && angoloc.value!=0) {
        lb=latob.value;
        ab=angolob.value;
        ac=angoloc.value;
        aa=180-ab-ac;
        angoloa.value=aa;
        aa=Math.sin((Math.PI*aa)/360);
        ab=Math.sin((Math.PI*ab)/360);
        ac=Math.sin((Math.PI*ac)/360);
        la=(lb*aa)/ab;
        lc=(la*ac)/aa;
        latoa.value=la;
        latoc.value=lc;
    }
    /* CASO LATO B E ALPHA E GAMMA */
    else if (latob.value!=0 && angoloa.value!=0 && angoloc.value!=0) {
        lb=latob.value;
        aa=angoloa.value;
        ac=angoloc.value;
        ab=180-aa-ac;
        angolob.value=ab;
        aa=Math.sin((Math.PI*aa)/360);
        ab=Math.sin((Math.PI*ab)/360);
        ac=Math.sin((Math.PI*ac)/360);
        la=(lb*aa)/ab;
        lc=(la*ac)/aa;
        latoa.value=la;
        latoc.value=lc;
    }
    /* CASO LATO C E ALPHA E BETA */
    else if (latoc.value!=0 && angoloa.value!=0 && angolob.value!=0) {
        lc=latoc.value;
        aa=angoloa.value;
        ab=angolob.value;
        ac=180-aa-ab;
        angoloc.value=ac;
        aa=Math.sin((Math.PI*aa)/360);
        ab=Math.sin((Math.PI*ab)/360);
        ac=Math.sin((Math.PI*ac)/360);
        la=(lc*aa)/ac;
        lb=(la*ab)/aa;
        latoa.value=la;
        latob.value=lb;
    }
    /* CASO LATO C E BETA E GAMMA */
    else if (latoc.value!=0 && angolob.value!=0 && angoloc.value!=0) {
        lc=latoc.value;
        ab=angolob.value;
        ac=angoloc.value;
        aa=180-ab-ac;
        angoloa.value=aa;
        aa=Math.sin((Math.PI*aa)/360);
        ab=Math.sin((Math.PI*ab)/360);
        ac=Math.sin((Math.PI*ac)/360);
        la=(lc*aa)/ac;
        lb=(la*ab)/aa;
        latoa.value=la;
        latob.value=lb;
    }
    /* CASO LATO C E ALPHA E GAMMA */
    else if (latoc.value!=0 && angoloa.value!=0 && angoloc.value!=0) {
        lc=latoc.value;
        aa=angoloa.value;
        ac=angoloc.value;
        ab=180-aa-ac;
        angolob.value=ab;
        aa=Math.sin((Math.PI*aa)/360);
        ab=Math.sin((Math.PI*ab)/360);
        ac=Math.sin((Math.PI*ac)/360);
        la=(lc*aa)/ac;
        lb=(la*ab)/aa;
        latoa.value=la;
        latob.value=lb;
    }
    /* CASO LATO A E C E BETA */
    else if (latoa.value!=0 && latoc.value!=0 && angolob.value!=0) {
        la=latoa.value;
        lc=latoc.value;
        ab=angolob.value;
        ab=(Math.PI*ab)/180;
        ab=Math.cos(ab);
        lb=(la*la)+(lc*lc)-(2*la*lc*ab);
        lb=Math.sqrt(lb);
        latob.value=lb;
        ab=Math.sin((Math.PI*angolob.value)/360);
        aa=(la*ab)/lb;
        aa=Math.asin(aa);
        aa=(360*aa)/Math.PI;
        angoloa.value=aa;
        angoloc.value=180-aa-angolob.value;
    }
    /* CASO LATO A E B E GAMMA */
    else if (latoa.value!=0 && latob.value!=0 && angoloc.value!=0) {
        la=latoa.value;
        lb=latob.value;
        ac=angoloc.value;
        ac=(Math.PI*ac)/180;
        ac=Math.cos(ac);
        lc=(la*la)+(lb*lb)-(2*la*lb*ac);
        lc=Math.sqrt(lc);
        latoc.value=lc;
        ac=Math.sin((Math.PI*angoloc.value)/360);
        aa=(la*ac)/lc;
        aa=Math.asin(aa);
        aa=(360*aa)/Math.PI;
        angoloa.value=aa;
        angolob.value=180-aa-angoloc.value;
    }
    /* CASO LATO B E C E ALPHA */
    else if (latob.value!=0 && latoc.value!=0 && angoloa.value!=0) {
        lb=latob.value;
        lc=latoc.value;
        aa=angoloa.value;
        aa=(Math.PI*aa)/180;
        aa=Math.cos(aa);
        la=(lc*lc)+(lb*lb)-(2*lc*lb*aa);
        la=Math.sqrt(la);
        latoa.value=la;
        aa=Math.sin((Math.PI*angoloa.value)/360);
        ab=(lb*aa)/la;
        ab=Math.asin(ab);
        ab=(360*ab)/Math.PI;
        angolob.value=ab;
        angoloc.value=180-ab-angoloa.value;
    }
    /* CASO LATO B E C E BETA */
    else if (latob.value!=0 && latoc.value!=0 && angolob.value!=0) {
        lb=latob.value;
        lc=latoc.value;
        ab=angolob.value;
        ab=(Math.PI*ab)/180;
        ab=Math.cos(ab);
        la=(lc*lc)+(lb*lb)-(2*lc*lb*ab);
        la=Math.sqrt(la);
        latoa.value=la;
        ab=Math.sin((Math.PI*angolob.value)/360);
        aa=(la*ab)/lb;
        aa=Math.asin(aa);
        aa=(360*aa)/Math.PI;
        angoloa.value=aa;
        angoloc.value=180-aa-angolob.value;
    }
    /* CASO LATO A E B E APLHA */
    else if (latoa.value!=0 && latob.value!=0 && angoloa.value!=0) {
        la=latoa.value;
        lb=latob.value;
        aa=angoloa.value;
        aa=Math.sin((Math.PI*aa)/360);
        ab=(lb/la)*aa;
        ab=Math.asin(ab);
        ab=(360*ab)/Math.PI;
        angolob.value=ab;
        ac=180-ab-angoloa.value;
        angoloc.value=ac;
        ac=Math.sin((Math.PI*ac)/360);
        lc=(la*ac)/aa;
        latoc.value=lc;
    }
    /* CASO LATO A E B E BETA */
    else if (latoa.value!=0 && latob.value!=0 && angolob.value!=0) {
        la=latoa.value;
        lb=latob.value;
        ab=angolob.value;
        ab=Math.sin((Math.PI*ab)/360);
        aa=(la/lb)*ab;
        aa=Math.asin(aa);
        aa=(360*aa)/Math.PI;
        angoloa.value=aa;
        ac=180-aa-angolob.value;
        angoloc.value=ac;
        ac=Math.sin((Math.PI*ac)/360);
        lc=(lb*ac)/ab;
        latoc.value=lc;
    }
    /* CASO LATO A E C E ALPHA */
    else if (latoa.value!=0 && latoc.value!=0 && angoloa.value!=0) {
        la=latoa.value;
        lc=latoc.value;
        aa=angoloa.value;
        aa=Math.sin((Math.PI*aa)/360);
        ac=(lc/la)*aa;
        ac=Math.asin(ac);
        ac=(360*ac)/Math.PI;
        angoloc.value=ac;
        ab=180-ac-angoloa.value;
        angolob.value=ab;
        ab=Math.sin((Math.PI*ab)/360);
        lb=(la*ab)/aa;
        latob.value=lb;
    }
    /* CASO LATO A E C E GAMMA */
    else if (latoa.value!=0 && latoc.value!=0 && angoloc.value!=0) {
        la=latoa.value;
        lc=latoc.value;
        ac=angoloc.value;
        ac=Math.sin((Math.PI*ac)/360);
        aa=(la/lc)*ac;
        aa=Math.asin(aa);
        aa=(360*aa)/Math.PI;
        angoloa.value=aa;
        ab=180-aa-angoloc.value;
        angolob.value=ab;
        ab=Math.sin((Math.PI*ab)/360);
        lb=(lc*ab)/ac;
        latob.value=lb;
    }
    /* CASO LATO B E C E BETA */
    else if (latob.value!=0 && latoc.value!=0 && angolob.value!=0) {
        lb=latob.value;
        lc=latoc.value;
        ab=angolob.value;
        ab=Math.sin((Math.PI*ac)/360);
        ac=(lc/lb)*ab;
        ac=Math.asin(ac);
        ac=(360*ac)/Math.PI;
        angoloc.value=ac;
        aa=180-ab-angoloc.value;
        angoloa.value=aa;
        aa=Math.sin((Math.PI*aa)/360);
        la=(lc*aa)/ac;
        latoa.value=la;
    }
    /* CASO LATO B E C E GAMMA */
    else if (latob.value!=0 && latoc.value!=0 && angoloc.value!=0) {
        lb=latob.value;
        lc=latoc.value;
        ac=angoloc.value;
        ac=Math.sin((Math.PI*ac)/360);
        ab=(lb/lc)*ac;
        ab=Math.asin(ab);
        ab=(360*ab)/Math.PI;
        angolob.value=ab;
        aa=180-ab-angoloc.value;
        angoloa.value=aa;
        aa=Math.sin((Math.PI*aa)/360);
        la=(lc*aa)/ac;
        latoa.value=la;
    }
    /* CASO DATI ERRORE */
    else {
        alert('Errore:\nDati insufficienti')
    }
}