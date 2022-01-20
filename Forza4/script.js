const cells=document.querySelectorAll('.cell');
let turn=0;
let win=0;
let temp=0;
let loop=false;
const cellcontrol=[];
for (let i=0; i<cells.length; i++) {
    let cell=cells[i];
    cell.addEventListener('click', function() {
        loop=false;
        cell=cells[i];
        console.log(i);
        if (loop==false) {
            while (loop==false) {
                console.log(i);
                console.log(loop);
                if (cellcontrol[i]) {
                    i=i-7;
                    loop=true;
                }
                else if (i>34) {
                    loop=true;
                }
                else {
                    i=i+7;
                }
            }
        }
        cell=cells[i];
        if (loop==true) {
            if (temp==0) {
                cell.style.color="red";
                cellcontrol[i]='r';
                temp=1;
            }
            else {
                cell.style.color="yellow";
                cellcontrol[i]='y';
                temp=0;
            } 
            cell.innerText='O';
            CheckVictory();
            loop=false;
            return;
        }
    });
}
/*
function CheckVictory() {
    let z=0;
    let i2=0;
    let i3=0;
    let i4;
    while (i3<7) {
        if (cellcontrol[i2]) {
            i4=cellcontrol[i2];
            z++;
            while (z>0) {

            }
        }
        else {
            i2++;
            i3++;
        }
    }
}*/