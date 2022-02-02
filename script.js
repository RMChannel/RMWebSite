const heightdevice=window.screen.availHeight;
const bordo=document.getElementById('fondo');
const data=document.getElementById('Time');
const subcount=document.getElementById('subcount');
console.log(heightdevice);
let heightright=0;
if (heightdevice===1032) {
    heightright=200;
}
else if (heightdevice===720) {
    heightright=0;
}
else {
    heightright=140;
}
heightright=Math.floor(heightright);
console.log(heightright);
bordo.style.marginTop=heightright+"px";

setInterval(function () {
    const d=new Date();
    let second=d.getSeconds();
    let minute=d.getMinutes();
    let hour=d.getHours();
    let timedisplay;
    if (hour<10) {
        timedisplay="0"+hour+":";
    }
    else {
        timedisplay=hour+":";
    }
    if (minute<10) {
        timedisplay=timedisplay+"0"+minute+":";
    }
    else {
        timedisplay=timedisplay+minute+":";
    }
    if (second<10) {
        timedisplay=timedisplay+"0"+second;
    }
    else {
        timedisplay=timedisplay+second;
    }
    data.innerText=timedisplay;
},1000);
function subcount2() {
    fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${'UCxNRfgtZ82j2k4KJqfpg1mQ'}&key=${'AIzaSyDC6gmvUxck_VzKRd9H6mkuyo7BqMV3R3k'}`).then(response =>{
        return response.json();
    }).then(data =>{
        subcount.innerText=data.items[0].statistics.subscriberCount;
    })
}
subcount2();
setInterval(subcount2,300000);