const password = "mescid";

const messages = [

"Hafızanı zorla sevgilim ❤️",

"Bir de bana unutkan diyorsun 😅",

"Emin misin? Bir daha düşün aşkım 💕",

"Olmadı... tekrar dene ❤️"

];

// GİRİŞ

function login(){

    const p = document.getElementById("password").value;

    if(p === password){

        sessionStorage.setItem("login","true");

        window.location.replace("home.html");

    }else{

        const r = Math.floor(Math.random()*messages.length);

        document.getElementById("error").innerHTML = messages[r];

    }

}

// ÇIKIŞ

function logout(){

    sessionStorage.clear();

    location.replace("index.html");

}
// MÜZİK

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

document.addEventListener("DOMContentLoaded", function(){

    const music = document.getElementById("music");

    if(music){

        music.addEventListener("ended", function(){

            const btn = document.getElementById("playBtn");

            if(btn){

                btn.innerHTML = "▶";

            }

        });

    }

});

// SAYAÇ

setInterval(function(){

    const counter = document.getElementById("counter");

    if(!counter) return;

    const start = new Date("2025-09-12");

    const now = new Date();

    const diff = now - start;

    const gun = Math.floor(diff/86400000);

    const saat = Math.floor(diff/3600000)%24;

    const dakika = Math.floor(diff/60000)%60;

    const saniye = Math.floor(diff/1000)%60;

    counter.innerHTML =

        gun+" Gün "

        + saat+" Saat "

        + dakika+" Dakika "

        + saniye+" Saniye";

},1000);
// MENÜ

function openMenu(){

    const menu = document.getElementById("sideMenu");
    const overlay = document.getElementById("overlay");

    if(menu) menu.style.left = "0";

    if(overlay) overlay.style.display = "block";

}

function closeMenu(){

    const menu = document.getElementById("sideMenu");
    const overlay = document.getElementById("overlay");

    if(menu) menu.style.left = "-300px";

    if(overlay) overlay.style.display = "none";

}

// SPA SAYFA GEÇİŞLERİ

function showPage(id){

    document.querySelectorAll(".page").forEach(function(page){

        page.style.display = "none";
        page.classList.remove("active");

    });

    const target = document.getElementById(id);

    if(target){

        target.style.display = "block";
        target.classList.add("active");

    }

}

function openCookie(){

    closeMenu();

    setTimeout(function(){

        showPage("cookieSection");

    },200);

}

// Home ilk açılış

document.addEventListener("DOMContentLoaded",function(){

    if(document.getElementById("homeSection")){

        showPage("homeSection");

    }

});
// =========================
// ŞANS KURABİYESİ
// =========================

document.addEventListener("DOMContentLoaded", function () {

    const cookie = document.getElementById("cookie");

    if (!cookie) return;

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

        if (navigator.vibrate) {

            navigator.vibrate(40);

        }

        cookie.classList.add("shake");

        setTimeout(function () {

            cookie.classList.remove("shake");

            cookie.classList.add("crack");

            explodeCookie();

        }, 550);

        setTimeout(function () {

            cookie.style.display = "none";

            const random = Math.floor(Math.random() * compliments.length);

            message.textContent = compliments[random];

            card.style.display = "block";
            card.style.zIndex="999999";

        }, 950);

    });
        function explodeCookie(){

        const rect = cookie.getBoundingClientRect();

        for(let i=0;i<10;i++){

            const piece = document.createElement("div");

            piece.className = "cookiePiece";

            piece.textContent = "🍪";

            piece.style.left = (rect.left + rect.width/2) + "px";

            piece.style.top = (rect.top + rect.height/2) + "px";

            const angle = Math.random() * 360;

            const distance = 150 + Math.random() * 180;

            const x = Math.cos(angle * Math.PI / 180) * distance;

            const y = Math.sin(angle * Math.PI / 180) * distance;

            piece.style.setProperty("--x", x + "px");

            piece.style.setProperty("--y", y + "px");

            document.body.appendChild(piece);

            setTimeout(function(){

                piece.remove();

            },900);

        }

    }

    close.onclick = function(){

        card.style.display = "none";

        cookie.style.display = "block";

        cookie.classList.remove("crack");

    };

});
// =========================
// GERİ TUŞU KORUMASI
// =========================

if(window.location.pathname.endsWith("home.html")){

    history.pushState(null,null,location.href);

    window.addEventListener("popstate",function(){

        history.pushState(null,null,location.href);

    });

}

// =========================
// İLK AÇILIŞ
// =========================

document.addEventListener("DOMContentLoaded",function(){

    if(document.getElementById("homeSection")){

        showPage("homeSection");

    }

});

// =========================
// DEBUG
// =========================

console.log("script.js başarıyla yüklendi");
