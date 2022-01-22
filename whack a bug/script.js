const scoredisp=document.querySelector('#punteggio');
let score=0;
scoredisp.innerText=score;
const win=document.getElementById('win');

const timerdisp=document.querySelector('#time');
let time=30;
timerdisp.innerText=time;
let speed=500;
const cells=document.querySelectorAll('.cell');

function game() {
    removebug();
    speed=500-(20*score);
    console.log(speed);
    const i= Math.floor(Math.random()*cells.length);
    const cell=cells[i];
    cell.classList.add('bug');
}

const bugmov=setInterval(game, speed);

function removebug() {
    for (let i=0; i<cells.length; i++) {
        const cell=cells[i];
        cell.classList.remove('bug');
    }
}

for (let i=0; i<cells.length; i++) {
    const cell=cells[i];
    cell.addEventListener('click', function() {
        if (cell.classList.contains('bug')) {
            score++;
            scoredisp.innerText=score;
            cell.classList.remove('bug');
            cell.classList.add('bugd');
            setTimeout(() => {
                cell.classList.remove('bugd');
            }, 200);
        }
    });
}

const timer=setInterval(() => {
    if (time===0) {
        clearInterval(timer);
        clearInterval(bugmov);
        alert('GAME OVER\n'+'Punteggio raggiunto= '+score);
    }
    else {
        time--;
        timerdisp.innerText=time;
    }
}, (1000));

function restart() {
    location.reload();
}