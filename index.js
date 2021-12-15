setInterval(() => {
    


let livedate= new Date();
// console.log(livedate);
let hours=livedate.getHours()
if(hours>12){
    hours-=12;
}
let time =hours+":"+livedate.getMinutes()+":"+livedate.getSeconds()
// console.log(time);
document.getElementById("time").innerHTML=time;
let daynumber=livedate.getDay();
// console.log(daynumber);
let days=[
    "Sunday","Monday","Tuesday","Wedneday","thursday","Friday","Saturday","Sunday"
]
let day = days[daynumber];
// console.log(day);
document.getElementById("day").innerHTML=day;

}, 1000);