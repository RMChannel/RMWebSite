const materia=document.getElementById("materia");
const timedisp=document.getElementById("timenow");
const temporest=document.getElementById("temporest");
let campanella=0;

setInterval(() => {
    const d=new Date();
    let second=d.getSeconds();
    let minute=d.getMinutes();
    let hour=d.getHours();
    let giorno=d.getDate();
    let hour2=0;
    let minute2=0;
    let second2=0;
    let counthour;
    let timedisplay;
    let timedisplay2="Tempo rimanente=";
    const settimana=["Lunedì","Martedì","Mercoledì","Giovedì","Venerdì","Sabato","Domenica"];
    timedisplay=settimana[giorno];
    if (hour<10) {
        timedisplay=timedisplay+" 0"+hour+":";
    }
    else {
        timedisplay=timedisplay+" "+hour+":";
    }
    if (minute<10) {
        timedisplay=timedisplay+"0"+minute+":";
    }
    else {
        timedisplay=timedisplay+minute+":";
    }
    if (second<10) {
        timedisplay=timedisplay+"0"+second;
    }
    else {
        timedisplay=timedisplay+second;
    }
    timedisp.innerText=timedisplay;
    if (giorno===0) {
        if ((hour===8 && minute>=15) || (hour===9 && minute<=15)) {
            counthour=9;
            materia.innerText="Matematica";
        }
        else if ((hour===9 && minute>=15) || (hour===10 && minute<15)) {
            counthour=10;
            materia.innerText="Storia/Filosofia";
        }
        else if ((hour===10 && minute>=15) || (hour===11 && minute<15)) {
            counthour=11;
            materia.innerText="Scienze";
        }
        else if ((hour===11 && minute>=15) || (hour===12 && minute<15)) {
            counthour=12;
            materia.innerText="Inglese";
        }
        else if ((hour===12 && minute>=15) || (hour===13 && minute<=15)) {
            counthour=13;
            materia.innerText="Informatica";
        }
        else {
            counthour=8;
            materia.innerText="Nessuna materia al momento";
        }
    }
    else if (giorno===1) {
        if ((hour===8 && minute>=15) || (hour===9 && minute<15)) {
            counthour=9;
            materia.innerText="Inglese";
        }
        else if ((hour===9 && minute>=15) || (hour===10 && minute<15)) {
            counthour=10;
            materia.innerText="Storia/Filosofia";
        }
        else if ((hour===10 && minute>=15) || (hour===11 && minute<15)) {
            counthour=11;
            materia.innerText="Educazione Fisica";
        }
        else if ((hour===11 && minute>=15) || (hour===12 && minute<15)) {
            counthour=12;
            materia.innerText="Storia/Filosofia";
        }
        else if ((hour===12 && minute>=15) || (hour===13 && minute<=15)) {
            counthour=13;
            materia.innerText="Italiano";
        }
        else {
            counthour=8;
            materia.innerText="Nessuna materia al momento";
        }
    }
    else if (giorno===2) {
        if ((hour===8 && minute>=15) || (hour===9 && minute<15)) {
            counthour=9;
            materia.innerText="Informatica";
        }
        else if ((hour<=11 && hour>=9 && minute>=15) || (hour>=9 && hour<=11 && minute<15)) {
            counthour=11;
            materia.innerText="Scienze";
        }
        else if ((hour<=13 && hour>=11 && minute>=15) || (hour>=11 && hour<=13 && minute<=15)) {
            counthour=13;
            materia.innerText="Italiano";
        }
        else {
            counthour=8;
            materia.innerText="Nessuna materia al momento";
        }
    }
    else if (giorno===3) {
        if ((hour===8 && minute>=15) || (hour===9 && minute<15)) {
            counthour=9;
            materia.innerText="Arte";
        }
        else if ((hour===9 && minute>=15) || (hour===10 && minute<15)) {
            counthour=10;
            materia.innerText="Inglese";
        }
        else if ((hour<=12 && hour>=10 && minute>=15) || (hour>=10 && hour<=12 && minute<15)) {
            counthour=12;
            materia.innerText="Matematica/Fisica";
        }
        else if ((hour===12 && minute>=15) || (hour===13 && minute<=15)) {
            counthour=13;
            materia.innerText="Religione";
        }
        else {
            counthour=8;
            materia.innerText="Nessuna materia al momento";
        }
    }
    else if (giorno===4) {
        if ((hour>=8 && minute>=15) || (hour>=8 && hour<=10 && minute<15)) {
            counthour=10;
            materia.innerText="Matematica/Fisica";
        }
        else if ((hour===10 && minute>=15) || (hour===11 && minute<15)) {
            counthour=11;
            materia.innerText="Storia/Filosofia";
        }
        else if ((hour===11 && minute>=15) || (hour===12 && minute<15)) {
            counthour=12;
            materia.innerText="Scienze";
        }
        else if ((hour===12 && minute>=15) || (hour===13 && minute<=15)) {
            counthour=13;
            materia.innerText="Educazione Fisica";
        }
        else {
            counthour=8;
            materia.innerText="Nessuna materia al momento";
        }
    }
    else if (giorno===5) {
        if ((hour===8 && minute>=15) || (hour===9 && minute<15)) {
            counthour=9;
            materia.innerText="Arte";
        }
        else if ((hour===9 && minute>=15) || (hour===10 && minute<15)) {
            counthour=10;
            materia.innerText="Scienze";
        }
        else if ((hour===10 && minute>=15) || (hour===11 && minute<15)) {
            counthour=11;
            materia.innerText="Italiano";
        }
        else if ((hour>=11 && minute>=15) || (hour>=11 && hour<=13 && minute<=15)) {
            counthour=13;
            materia.innerText="Matematica/Fisica";
        }
        else {
            counthour=8;
            materia.innerText="Nessuna materia al momento";
        }
    }
    else {
        counthour=8;
        materia.innerText="Oggi è festa";
    }
    second2=60-second;
    if (counthour===8 && hour>=13) {
        hour2=(24-hour)+counthour;
        if (giorno===5) {
            hour2=hour2+24;
        }
    }
    else {
        hour2=counthour-hour-1;
    }
    minute2=74-minute;
    if (minute2>=60) {
        minute2=minute2-60;
        hour2=hour2+1;
    }
    if (second2===60) {
        second2=0;
        minute2++;
    }
    if (hour2<10) {
        timedisplay2=timedisplay2+" 0"+hour2+":";
    }
    else {
        timedisplay2=timedisplay2+" "+hour2+":";
    }
    if (minute2<10) {
        timedisplay2=timedisplay2+"0"+minute2+":";
    }
    else {
        timedisplay2=timedisplay2+minute2+":";
    }
    if (second2<10) {
        timedisplay2=timedisplay2+"0"+second2;
    }
    else {
        timedisplay2=timedisplay2+second2;
    }
    temporest.innerText=timedisplay2; 
}, 1000);

//Da rifinire