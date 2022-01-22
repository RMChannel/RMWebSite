const road=document.querySelectorAll('#griglia > div');
const scorex=document.getElementById('score');
const win=document.getElementById('win');
const gameover= new Audio('21 Game Over.mp3');
let score=0;
let scoreset=5;
let speed=200;
let reset=true;
scorex.innerText=score;
const duckID=1;
const duck=road[duckID];
duck.classList.add('duck');
function addRock() {
    let rockpsx=road.length-1;
    road[9].classList.add('rock');
    const intervalcycle=setInterval(() => {
        road[rockpsx].classList.remove('rock');
        rockpsx--;
        if (rockpsx<0) {
            clearInterval(intervalcycle);
            score++;
            scorex.innerText=score;
            if (scoreset===score) {
                speed=speed-10;
                scoreset+5;
            }
        }
        if (rockpsx===duckID && !road[rockpsx].classList.contains('duckjump')) {
            gameover.play();
            console.log('crash');
            clearInterval(intervalcycle);
            reset=false;
            win.innerText="Game Over";
            road[rockpsx].classList.remove('duck');
            road[rockpsx].classList.add('rock');
        }
        road[rockpsx].classList.add('rock');
    }, speed); 
}

document.addEventListener('keydown', jump);

function jump(event) {
    if (event.code==='Space' && !event.repeat) {
        duck.classList.add('duckjump');
        setTimeout(() => {
            duck.classList.add('duckjump2');
        }, 400);
        setTimeout(() => {
            duck.classList.remove('duckjump');
            duck.classList.remove('duckjump2');
        }, 500);
    }
}

function jump2() {
    duck.classList.add('duckjump');
    setTimeout(() => {
        duck.classList.add('duckjump2');
    }, 400);
    setTimeout(() => {
        duck.classList.remove('duckjump');
        duck.classList.remove('duckjump2');
    }, 500);
}

function restart() {
    location.reload();
}

function start() {
    let time=0;
    time=500;
    const reset2=setInterval(() => {
        if (reset===false) {
            clearInterval(reset2);
        }
        time=Math.random()*2000;
        if (time<300) {
            time=time+300;
        }
        console.log(time);
        setTimeout(() => {
            addRock();
        }, time);
    }, time);
}