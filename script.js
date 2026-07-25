const password="mescid";

const messages=[

"Hafızanı zorla sevgilim ❤️",

"Bir de bana unutkan diyorsun 😅",

"Emin misin? Bir daha düşün aşkım 💕",

"Olmadı... tekrar dene ❤️"

];

function login(){

let p=document.getElementById("password").value;

if(p==password){

sessionStorage.setItem("login","true");

window.location.replace("home.html");

}

else{

let r=Math.floor(Math.random()*messages.length);

document.getElementById("error").innerHTML=messages[r];

}

}

function playMusic(){

    const music = document.getElementById("music");
    const button = document.getElementById("playBtn");

    if(music.paused){

        music.play();
        button.innerHTML = "⏸";

    }else{

        music.pause();
        button.innerHTML = "▶";

    }

}

document.getElementById("music").addEventListener("ended", function(){

    document.getElementById("playBtn").innerHTML = "▶";

});

function logout(){

    sessionStorage.removeItem("login");

    window.location.replace("index.html");

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
function openMenu(){

document.getElementById("sideMenu").style.left="0";

document.getElementById("overlay").style.display="block";

}

function closeMenu(){

document.getElementById("sideMenu").style.left="-300px";

document.getElementById("overlay").style.display="none";

}
// Ana sayfada geri tuşuna basılınca çıkmak yerine sayfayı yenile
history.pushState(null, null, location.href);

window.addEventListener("popstate", function () {

    history.pushState(null, null, location.href);

    location.reload();

});
function goPage(page){

    closeMenu();

    setTimeout(function(){

        location.replace(page);

    },200);

}
