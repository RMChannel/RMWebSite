const grid=document.querySelector('#griglia');
const size=15;
const rxc=size*size;
const scorel=document.getElementById('Score');
const winning=document.getElementById('Winning');
const difficult1=document.getElementById('facile');
const difficult2=document.getElementById('difficile');
const error= new Audio("error.mp3");
const start2= new Audio("into.mp3");
const fire= new Audio("fire.mp3");
const morte= new Audio("exp.mp3");
const gameover= new Audio("gameover.mp3");
const win= new Audio("win.mp3")
let restart=0;
let score=0;
let ivariabile=0;
let time=500;
let control=0;
let play=false;
scorel.innerText=score;
const blocks=[];
let aliens= [];
let alienskilled=[];
for (let i=0; i<rxc; i++) {
    const block=document.createElement('div');
    blocks.push(block);
    grid.appendChild(block);
}

function checkwin() {
    if (alienskilled.length===aliens.length) {
        win.play();
        winning.innerText='HAI VINTO!';
        play=false;
        clearInterval(alienmove2);
    }
}

function checklose() {
    for (let i=0; i<aliens.length; i++) {
        if (!alienskilled.includes(aliens[i]) && aliens[i]>=space22) {
            if (play) {
                gameover.play();
                winning.innerText='GAME OVER';
                play=false;
                clearInterval(alienmove2);
            }
        }
    }
}

function drawaliens() {
    for (let i=0; i<aliens.length; i++) {
        if (!alienskilled.includes(i)) {
            blocks[aliens[i]].classList.add('alien');
        }
    }
}

function removealiens() {
    for (let i=0; i< aliens.length; i++) {
        blocks[aliens[i]].classList.remove('alien');
    }
}
let step=1;
let direction='avanti';
function movement() {
    removealiens();
    const left=aliens[0]%size===0;
    const right=aliens[ivariabile]%size===14;
    if (direction==='avanti' && right) {
        for (let i=0; i < aliens.length; i++) {
            aliens[i]=aliens[i]+size+1;
            step=-1;
            direction='indietro';
        }
    }
    else if (direction==='indietro' && left) {
        for (let i=0; i<aliens.length; i++) {
            aliens[i]=aliens[i]+size-1;
            step=1;
            direction='avanti';       
        }
    }
    for (let i=0;i<aliens.length; i++) {
        aliens[i]=aliens[i]+step;
    }
    drawaliens();
}
drawaliens();


function alienmove2() {
    checklose();
    movement();
}

let space22=217;
blocks[space22].classList.add('ship');

document.addEventListener('keydown', spacemove);
document.addEventListener('keydown', shoot);

function spacemove(event) {
    const left=space22%size===0;
    const right=space22%size===14;
    blocks[space22].classList.remove('ship');
    if (event.code==='ArrowLeft' && !left && play===true) {
        space22--;
    }
    else if (event.code==='ArrowRight' && !right && play===true) {
        space22++;;
    }
    blocks[space22].classList.add('ship');
}

function shoot(event) {
    if (event.code === 'ControlLeft' && play===true) {
        fire.play();
        let laserid=space22-15;
        let laserval=null;
        blocks[laserid].classList.add('laser');
        function movelaser() {
            blocks[laserid].classList.remove('laser');
            laserid=laserid-size;
            if (laserid<0) {
                clearInterval(laserval);
                return;
            }
            blocks[laserid].classList.add('laser');
            if (blocks[laserid].classList.contains('alien')) {
                morte.play();
                control++;
                if (control%5==0) {
                    time=time-1;
                    clearInterval(alienmove2);
                    setInterval(alienmove2,time);
                }
                score=score+100;
                scorel.innerText=score;
                clearInterval(laserval);
                blocks[laserid].classList.remove('alien','laser');
                blocks[laserid].classList.add('explosion');
                setTimeout(() => {
                    blocks[laserid].classList.remove('explosion');
                }, 1000);
                const killed=aliens.indexOf(laserid);
                alienskilled.push(killed);
                checkwin();
            }
        }
        laserval=setInterval(movelaser,200);
    }
}

function start() {
    alienskilled=[];
    let restart2=1;
    console.log(difficult1.checked);
    if (restart===1) {
        error.play();
        alert('Riavvia il gioco per rigiocare');
    }
    else if (difficult1.checked) {
        removealiens();
        aliens=[2,3,4,5,6,7,8,9,10,11,17,18,19,20,21,22,23,24,25,26];
        ivariabile=19;
        restart2=0;
    }
    else if (difficult2.checked) {
        removealiens();
        aliens=[2,3,4,5,6,7,8,9,10,11,17,18,19,20,21,22,23,24,25,26,32,33,34,35,36,37,38,39,40,41];
        ivariabile=29;
        restart2=0;
        }
    else {
        error.play();
        alert('Nessuna difficoltà selezionata, si prega di selezionarla dal menu sottostante e avviare il gioco');
    }
    if (restart===0 && restart2===0) {
        restart2=1;
        setTimeout(() => {
            play=true;
            setInterval(alienmove2,time);
            winning.innerText='';
            }, 6500);
            winning.innerText='Preparati';
            start2.play();
            restart=1;
    }
}

function realrestart() {
    location.reload();
}