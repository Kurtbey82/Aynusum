const password="mescid";

const messages=[

"Hafızanı zorla sevgilim ❤️",

"Bir de bana unutkan diyorsun 😅",

"Emin misin? Bir daha düşün aşkım 💕",

"Olmadı... tekrar dene ❤️"

];

if(localStorage.getItem("login")=="true"){

showHome();

}

function login(){

let p=document.getElementById("password").value;

if(p==password){

localStorage.setItem("login","true");

showHome();

}

else{

let r=Math.floor(Math.random()*messages.length);

document.getElementById("error").innerHTML=messages[r];

}

}

function showHome(){

document.getElementById("loginPage").style.display="none";

document.getElementById("homePage").style.display="block";

}

function playMusic(){

let music=document.getElementById("music");

if(music.paused){

music.play();

}

else{

music.pause();

}

}

function logout(){

localStorage.removeItem("login");

location.reload();

}

setInterval(function(){

let start=new Date("2025-09-12");

let now=new Date();

let diff=now-start;

let gun=Math.floor(diff/86400000);

let saat=Math.floor(diff/3600000)%24;

let dakika=Math.floor(diff/60000)%60;

let saniye=Math.floor(diff/1000)%60;

document.getElementById("counter").innerHTML=

gun+" Gün "

+saat+" Saat "

+dakika+" Dakika "

+saniye+" Saniye";

},1000);
