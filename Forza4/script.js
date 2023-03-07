const cells=document.querySelectorAll('.cell');
const winsound=new Audio("win.mp3")
let firstrun=false
let turn=0
game=true
text=document.getElementById("text")
const cellcontrol=[];
for (let i=0; i<cells.length; i++) {
    let cell=cells[i]
    cellcontrol.push("n")
    cell.addEventListener('click', function() {
        if (game) {
            input=i
            if (firstrun) {
                clearInterval(animation)
                text.style.color=color+"1.0)"
                cell1.style.color=color+"1.0)"
            }
            cellfunct()
            if (controlvictory()) {
                winsound.play()
                text.style.style="font-size: 20px;"
                string="Il giocatore "
                if (winner=="r") {
                    string+="Rosso"
                    notcolor="rgba(255,0,0,1)"
                }
                else {
                    string+="Giallo"
                    notcolor="rgba(255,200,0,1)"
                }
                string+=" ha vinto!"
                
                text.innerHTML=string
                game=false
            }
        }
    })    
}




var cell1
var color
var notcolor
function cellfunct() {
    console.log(input);
    error=false
    firstrun=true
    while (input<35) {
        input+=7
    }
    control=true
    while (control) {
        if (cellcontrol[input]=="n") control=false
        else if (input<7 && cellcontrol[input]!="n") {
            alert("Errore")
            error=true
            break;
        }
        else {
            input-=7
        }
    }
    if (turn==0 && !error) {
        text.innerText="Turno del giocatore Giallo"
        cellcontrol[input]="r"
        turn=1
        color="rgba(255,0,0,"
        notcolor="rgba(255,200,0,"
    }
    else if (turn==1 && !error) {
        text.innerText="Turno del giocatore Rosso"
        cellcontrol[input]="y"
        turn=0
        color="rgba(255,200,0,"
        notcolor="rgba(255,0,0,"
    }
    cell1=cells[input]
    cell1.innerText="0"
    let i=0
    animation=setInterval(() => {
        if (i==10) {
            text.style.color=notcolor+"1.0)"
            cell1.style.color=color+"1.0)"
            clearInterval(animation)
        }
        else {
            text.style.color=notcolor+"0."+i+")"
            cell1.style.color=color+"0."+i+")"
        }
        i+=1
    }, 100);
}

var winner
function controlvictory() {
    //Controllo Orizzontale
    i=0
    while (i<42) {
        control=0
        temp="n"
        for (i2=0; i2<7; i2++) {
            if (cellcontrol[i]!="n") {
                if (temp==cellcontrol[i]) control++
                else {
                    control=1
                    temp=cellcontrol[i]
                }
            }
            else {
                if (temp="r") {
                }
                control=0
            }
            if (control==4) {
                winner=temp
                return true
            }
            i+=1
        }
    }
    //Controllo Verticale
    i=0
    while (i<7) {
        control=1
        temp="n"
        for (i2=i; i2<42; i2+=7) {
            if (cellcontrol[i2]!="n") {
                if (temp==cellcontrol[i2]) control++
                else {
                    control=1
                    temp=cellcontrol[i2]
                }
            }
            if (control==4) {
                winner=temp
                return true
            }
        }
        i+=1
    }
    //Controllo obliquo da basso-sinistra a alto-destra
    if (((cellcontrol[14]=="r") || (cellcontrol[14]=="y")) && (cellcontrol[14]==cellcontrol[22]) && (cellcontrol[22]==cellcontrol[30]) && (cellcontrol[30]==cellcontrol[38])) {
        winner=cellcontrol[14]
        return true
    }
    if (((cellcontrol[3]=="r") || (cellcontrol[3]=="y")) && (cellcontrol[3]==cellcontrol[11]) && (cellcontrol[11]==cellcontrol[19]) && (cellcontrol[19]==cellcontrol[27])) {
        winner=cellcontrol[3]
        return true
    }
    control=1
    temp="n"
    for (i=0; i<41; i+=8) {
        if (cellcontrol[i]!="n") {
            if (temp==cellcontrol[i]) {
                control++
            }
            else {
                control=1
                temp=cellcontrol[i]
            }
        }
        else {
            control=1
        }
        if (control==4) {
            winner=temp
            return true
        }
    }
    control=1
    temp="n"
    for (i=7; i<41; i+=8) {
        if (cellcontrol[i]!="n") {
            if (temp==cellcontrol[i]) {
                control++
            }
            else {
                control=1
                temp=cellcontrol[i]
            }
        }
        else {
            control=1
        }
        if (control==4) {
            winner=temp
            return true
        }
    }
    control=1
    temp="n"
    for (i=1; i<42; i+=8) {
        if (cellcontrol[i]!="n") {
            if (temp==cellcontrol[i]) {
                control++
            }
            else {
                control=1
                temp=cellcontrol[i]
            }
        }
        else {
            control=1
        }
        if (control==4) {
            winner=temp
            return true
        }
    }
    control=1
    temp="n"
    for (i=2; i<41; i+=8) {
        if (cellcontrol[i]!="n") {
            if (temp==cellcontrol[i]) {
                control++
            }
            else {
                control=1
                temp=cellcontrol[i]
            }
        }
        else {
            control=1
        }
        if (control==4) {
            winner=temp
            return true
        }
    }
    //Controllo obliquo basso-destra a alto-sinistra
    if (((cellcontrol[20]=="r") || (cellcontrol[20]=="y")) && (cellcontrol[20]==cellcontrol[26]) && (cellcontrol[26]==cellcontrol[32]) && (cellcontrol[32]==cellcontrol[38])) {
        winner=cellcontrol[20]
        return true
    }
    if (((cellcontrol[3]=="r") || (cellcontrol[3]=="y")) && (cellcontrol[3]==cellcontrol[9]) && (cellcontrol[9]==cellcontrol[15]) && (cellcontrol[15]==cellcontrol[21])) {
        winner=cellcontrol[3]
        return true
    }
    control=1
    temp="n"
    for (i=13; i<41; i+=6) {
        if (cellcontrol[i]!="n") {
            if (temp==cellcontrol[i]) {
                control++
            }
            else {
                control=1
                temp=cellcontrol[i]
            }
        }
        else {
            control=1
        }
        if (control==4) {
            winner=temp
            return true
        }
    }
    control=1
    temp="n"
    for (i=6; i<41; i+=6) {
        if (cellcontrol[i]!="n") {
            if (temp==cellcontrol[i]) {
                control++
            }
            else {
                control=1
                temp=cellcontrol[i]
            }
        }
        else {
            control=1
        }
        if (control==4) {
            winner=temp
            return true
        }
    }
    control=1
    temp="n"
    for (i=5; i<41; i+=6) {
        if (cellcontrol[i]!="n") {
            if (temp==cellcontrol[i]) {
                control++
            }
            else {
                control=1
                temp=cellcontrol[i]
            }
        }
        else {
            control=1
        }
        if (control==4) {
            winner=temp
            return true
        }
    }
    control=1
    temp="n"
    for (i=4; i<29; i+=6) {
        if (cellcontrol[i]!="n") {
            if (temp==cellcontrol[i]) {
                control++
            }
            else {
                control=1
                temp=cellcontrol[i]
            }
        }
        else {
            control=1
        }
        if (control==4) {
            winner=temp
            return true
        }
    }
    return false
}