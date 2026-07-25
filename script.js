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

const music = document.getElementById("music");

if (music) {
    music.addEventListener("ended", function () {
        document.getElementById("playBtn").innerHTML = "▶";
    });
}

function logout(){

    sessionStorage.removeItem("login");

    window.location.replace("index.html");

}setInterval(function(){

    const counter = document.getElementById("counter");
    if(!counter) return;

    let start = new Date("2025-09-12");
    let now = new Date();
    let diff = now - start;

    let gun = Math.floor(diff/86400000);
    let saat = Math.floor(diff/3600000)%24;
    let dakika = Math.floor(diff/60000)%60;
    let saniye = Math.floor(diff/1000)%60;

    counter.innerHTML =
        gun+" Gün "
        + saat+" Saat "
        + dakika+" Dakika "
        + saniye+" Saniye";

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
if(window.location.pathname.endsWith("home.html")){

    history.pushState(null, null, location.href);

    window.addEventListener("popstate", function(){

        history.pushState(null, null, location.href);

        location.reload();

    });

}
function showPage(id){

    document.querySelectorAll(".page").forEach(function(page){

        page.classList.remove("active");

    });

    document.getElementById(id).classList.add("active");

}
function openCookie(){

    closeMenu();

    setTimeout(function(){

        showPage("cookieSection");

    },200);

}
const cookie = document.getElementById("cookie");

if(cookie){

const card = document.getElementById("messageCard");
const message = document.getElementById("cookieMessage");
const close = document.getElementById("closeCard");

const compliments=[

"Sen gülünce dünya daha güzel bir yer oluyor. ❤️",

"İyi ki benim hayatımdasın.",

"Bugünkü en büyük şansım sensin.",

"Gözlerin huzurun tanımı gibi.",

"Kalbin dünyanın en güzel yeri.",

"Senin gülüşün bütün yorgunluğumu alıyor.",

"İyi ki seni sevmişim.",

"Her gün sana yeniden âşık oluyorum.",

"Bir ömür aynı kurabiyeyi seninle paylaşmak isterim. 🍪❤️",

"Şans kurabiyem bana hep seni gösteriyor."

];

cookie.addEventListener("click",()=>{

    if(navigator.vibrate){

        navigator.vibrate(40);

    }

    cookie.classList.add("shake");

    setTimeout(()=>{

        cookie.classList.remove("shake");

        cookie.classList.add("crack");
        explodeCookie();

    },550);

    setTimeout(()=>{

        cookie.style.display="none";
        setTimeout(()=>{

const random=Math.floor(Math.random()*compliments.length);

message.textContent=compliments[random];

card.style.display="block";

},300);

    },950);

});
function explodeCookie(){

const rect=cookie.getBoundingClientRect();

for(let i=0;i<10;i++){

const piece=document.createElement("div");

piece.className="cookiePiece";

piece.textContent="🍪";

piece.style.left=(rect.left+rect.width/2)+"px";

piece.style.top=(rect.top+rect.height/2)+"px";

const angle=Math.random()*360;

const distance=150+Math.random()*180;

const x=Math.cos(angle*Math.PI/180)*distance;

const y=Math.sin(angle*Math.PI/180)*distance;

piece.style.setProperty("--x",x+"px");

piece.style.setProperty("--y",y+"px");

document.body.appendChild(piece);

setTimeout(()=>{

piece.remove();

},900);

}

}
close.onclick=()=>{

card.style.display="none";

cookie.style.display="block";

cookie.classList.remove("crack");

}
