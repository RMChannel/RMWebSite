const cells=document.querySelectorAll('.cell');
const risp=document.getElementById('test');
const winaudio= new Audio('victory.mp3');
let turn=0;
let win=0;
let temp=0;
const cellcontrol=[];
for (let i=0; i<cells.length; i++) {
    const cell=cells[i];
    cell.addEventListener('click', function() {
        if (win==0) {
            win=CheckVictory();
        }
        console.log(turn+' '+win);
        if (cellcontrol[i]) {
            console.log('Cell utilized');
            return;
        }
        else if (win==1) {
            console.log('game negato');
            return;
        }
        turn++;
        temp=turn%2;
        if (temp==0) {
            cell.innerText='O';
            cellcontrol[i]='O';
            temp='O';
        }
        else {
            cell.innerText='X';
            cellcontrol[i]='X';
            temp='X';
        }
        if (CheckVictory()==1) {
            winaudio.play();
            risp.innerText='Giocatore '+temp+' Ha vinto!';
            risp.style.backgroundColor="#00FF00";
            risp.style.color="#FF0000";
        }
        if (turn==9) {
            risp.innerText="Pareggio";
            win=1;
        }
    });
}

function CheckVictory() {
    const combination=[
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i=0; i<8; i++) {
        const combination2=combination[i];
        const a=combination2[0];
        const b=combination2[1];
        const c=combination2[2];
        if (cellcontrol[a] && cellcontrol[a] === cellcontrol[b] && cellcontrol[b] === cellcontrol[c]) {
            return 1;
        }
    }
}

function restart() {
    location.reload();
}