const cards=['car', 'duck', 'pc', 'phone', 'razzo', 'truck'];
const deck=[...cards, ...cards];
const grid=document.getElementById('griglia');
const winread=document.getElementById('win');
const error2=document.getElementById('errors');
let pick=[];
let errorsc=0;
deck.sort(function() {
    return 0.5 - Math.random();
});
for (let i=0; i<deck.length; i++) {
    const card=document.createElement('div');
    const cardn=deck[i];
    card.classList.add('card');
    card.setAttribute('data-name', cardn);
    card.addEventListener('click', flip);
    grid.appendChild(card);
}

function flip(e) {
    const card=e.target;
    if (card.classList.contains('flipped')) return;
    card.classList.add(card.getAttribute('data-name'), 'flipped');
    pick.push(card);
    if (pick.length === 2) {
        control();
    }
}

function control() {
    const card1=pick[0];
    const card2=pick[1];
    const card1name=card1.getAttribute('data-name');
    const card2name=card2.getAttribute('data-name');
    if (card1name==card2name) {
        console.log(('match'));
        win();
    }
    else {
        errorsc++;
        error2.innerText=errorsc;
        setTimeout(() => {
            card1.classList.remove(card1name, 'flipped');
            card2.classList.remove(card2name, 'flipped');
        }, 500);
    }
    pick=[];
}

function win() {
    const flipped=document.querySelectorAll('.flipped');
    console.log(flipped);
    if(flipped.length===deck.length) {
        winread.innerText='Hai Vinto';
    }
}