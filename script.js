const heightdevice=window.screen.availHeight;
const bordo=document.getElementById('fondo');
console.log(heightdevice);
let heightright=0;
if (heightdevice===1032) {
    heightright=500;
}
else if (heightdevice===720) {
    heightright=180;
}
else {
    heightright=400;
}
heightright=Math.floor(heightright);
console.log(heightright);
bordo.style.marginTop=heightright+"px";