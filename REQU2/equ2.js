const audio= new Audio('xp.mp3');
const error= new Audio('error.mp3')
function test() {
    alert("test");
}
function calcolo() {
    let delta, x1, x2;
    const delt=document.getElementById("delta");
    const rs=document.getElementById("risultato1");
    const rs2=document.getElementById("risultato2");
    let x;
    x=document.getElementById("x1").value;
    let y;
    y=document.getElementById("y1").value;
    let z;
    z=document.getElementById("z1").value;
    if ((x=="") || (y=="") || (z=="")) {
        error.play();
        alert("Errore\nDati insufficienti");
        }
    else {
        audio.play();
        if (x==0) {
            delt.innerText="Non da calcolare";
            x1=-z/y;
            rs.innerText=x1;
            rs2.innerText="Solo un risultato";
        }
        else if (y==0) {
            delt.innerText="Non da calcolare";
            x1=(z/x)*-1;
            x1=Math.sqrt(x1);
            x2=-x1;
            if (isNaN(x1)) {
                rs.innerText="Impossibile";
                rs2.innerText="Impossibile";
            }
            else {
                rs.innerText=x1;
                rs2.innerText=x2;
            }
        }
        else if (z==0) {
            delt.innerText="Non da calcolare";
            x1=0;
            x2=(y/x)*-1;
            rs.innerText=x1;
            rs2.innerText=x2;
        }
        else if ((x==0) & (y==0)) {
            rs.innerText="Impossibile";
            rs2.innerText="Impossibile";
        }
        else if ((x==0) & (z==0)) {
            rs.innerText=0;
            rs2.innerText="Solo un risultato";
        }
        else if ((y==0) & (z==0)) {
            rs.innerText=0;
            rs2.innerText="Solo un risultato";
        }
        else if ((x!=0) & (y!=0) & (z!=0)) {
            delta=(y*y)-(4*x*z);
            delt.innerText=delta;
            if (delta<0) {
                rs.innerText="Impossibile";
                rs2.innerText="Impossibile";
            }
            else if (delta==0) {
                x1=-y/(2*x);
                rs.innerText=x1;
                rs2.innerText="Solo un risultato";
            }
            else {
                delta=Math.sqrt(delta);
                x1=(-y+delta)/(2*x);
                x2=(-y-delta)/(2*x);
                rs.innerText=x1;
                rs2.innerText=x2;
            }   
        }
    }
}