const secondEl=document.querySelector('.second-hand')
const minutesEl=document.querySelector('.min-hand');
const hourEl=document.querySelector('.hour-hand');

function setDate(){
 const seconds=new Date().getSeconds();
 const secondsDeg=((seconds/60)*360)+90
 secondEl.style.transform=`rotate(${secondsDeg}deg)`

 const minutes=new Date().getMinutes();
 const minutesDeg=((minutes/60)*360)+90
 minutesEl.style.transform=`rotate(${minutesDeg}deg)`;
 
 const hours=new Date().getHours();
 const hoursDeg=((hours/12)*360)+90
 hourEl.style.transform=`rotate(${hoursDeg}deg)`

}
setInterval(setDate, 1000);