const heightdevice=window.screen.availHeight;
const bordo=document.getElementById('fondo');
console.log(heightdevice);
let heightright=0;
if (heightdevice===1032) {
    heightright=460;
}
else if (heightdevice===720) {
    heightright=150;
}
else {
    heightright=500;
}
heightright=Math.floor(heightright);
console.log(heightright);
bordo.style.marginTop=heightright+"px";