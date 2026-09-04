const password = "mescit";

const messages = [
    "Hafızanı zorla sevgilim ❤️",
    "Bir de bana unutkan diyorsun 😅",
    "Emin misin? Bir daha düşün aşkım 💕",
    "Olmadı... tekrar dene ❤️",
    "ipucu: kelimenin doğru yapılışına bak!",
    "İpucu: kapalı bir alandı beni ilk gördüğün yer"
];

// =====================
// GİRİŞ
// =====================

function login(){

    const p = document.getElementById("password").value;

    if(p === password){

        sessionStorage.setItem("login","true");

        location.replace("home.html");

    }else{

        const r = Math.floor(Math.random()*messages.length);

        document.getElementById("error").innerHTML = messages[r];

    }

}

// =====================
// ÇIKIŞ
// =====================

function logout(){

    sessionStorage.clear();

    location.replace("index.html");

}

// =====================
// MENÜ
// =====================

function openMenu(){

    document.getElementById("sideMenu").style.left="0";

    document.getElementById("overlay").style.display="block";

}

function closeMenu(){

    document.getElementById("sideMenu").style.left="-300px";

    document.getElementById("overlay").style.display="none";

}

// =====================
// SAYFA GEÇİŞLERİ
// =====================

function showPage(id){

    document.querySelectorAll(".page").forEach(function(page){

        page.style.display="none";

        page.classList.remove("active");

    });

    const target=document.getElementById(id);

    if(target){

        target.style.display="block";

        target.classList.add("active");

    }

}

function openCookie(){

    closeMenu();

    history.pushState({page:"cookie"}, "", "#cookie");

    setTimeout(function(){

        showPage("cookieSection");

    },200);

}
// =====================
// MÜZİK ÇALAR
// =====================

function playMusic(){

    const music = document.getElementById("music");
    const button = document.getElementById("playBtn");

    if(!music || !button) return;

    if(music.paused){

        music.play();

        button.innerHTML = "⏸";

    }else{

        music.pause();

        button.innerHTML = "▶";

    }

}

document.addEventListener("DOMContentLoaded",function(){

    const music=document.getElementById("music");

    const playBtn=document.getElementById("playBtn");

    if(music && playBtn){

        music.addEventListener("ended",function(){

            playBtn.innerHTML="▶";

        });

    }

});

// =====================
// İLİŞKİ SAYACI
// =====================

function updateCounter(){

    const counter=document.getElementById("counter");

    if(!counter) return;

    const start=new Date("2025-09-12");

    const now=new Date();

    const diff=now-start;

    const gun=Math.floor(diff/86400000);

    const saat=Math.floor(diff/3600000)%24;

    const dakika=Math.floor(diff/60000)%60;

    const saniye=Math.floor(diff/1000)%60;

    counter.innerHTML=

        gun+" Gün "

        +saat+" Saat "

        +dakika+" Dakika "

        +saniye+" Saniye";

}

setInterval(updateCounter,1000);

document.addEventListener("DOMContentLoaded",updateCounter);
// =====================
// ŞANS KURABİYESİ
// =====================

document.addEventListener("DOMContentLoaded", function () {

    const cookie = document.getElementById("cookie");

    if(!cookie) return;

    const card = document.getElementById("messageCard");
    const message = document.getElementById("cookieMessage");
    const close = document.getElementById("closeCard");

    const compliments = [

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

    cookie.addEventListener("click", function () {

        if(navigator.vibrate){

            navigator.vibrate(40);

        }

        cookie.classList.add("shake");

        setTimeout(function(){

            cookie.classList.remove("shake");

            cookie.classList.add("crack");

            explodeCookie();

        },550);

        setTimeout(function(){

            cookie.style.display="none";

            const random=Math.floor(Math.random()*compliments.length);

            message.innerHTML=compliments[random];

            card.style.display="block";

        },900);

    });

    close.addEventListener("click",function(){

        card.style.display="none";

        cookie.style.display="block";

        cookie.classList.remove("crack");

    });

});
// =====================
// KURABİYE PARÇALANMA
// =====================

function explodeCookie(){

    const cookie=document.getElementById("cookie");

    if(!cookie) return;

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

        setTimeout(function(){

            piece.remove();

        },900);

    }

}
// =====================
// GİRİŞ KONTROLÜ
// =====================

document.addEventListener("DOMContentLoaded",function(){

    if(location.pathname.endsWith("home.html")){

        if(sessionStorage.getItem("login")!=="true"){

            location.replace("index.html");

            return;

        }

    }

});

// =====================
// GÜVENLİ GERİ TUŞU
// =====================

window.addEventListener("pageshow",function(){

    if(location.pathname.endsWith("home.html")){

        if(sessionStorage.getItem("login")!=="true"){

            location.replace("index.html");

        }

    }

});
window.addEventListener("popstate", function () {

    if(document.getElementById("cookieSection") &&
       document.getElementById("cookieSection").classList.contains("active")){

        showPage("homeSection");

        history.pushState(null, "", location.href);

    }

});
