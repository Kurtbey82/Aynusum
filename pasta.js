let clickCount = 0;
let celebrationStarted = false;

const cakeArea = document.getElementById("cakeArea");
const instruction = document.getElementById("instruction");
const clickCounter = document.getElementById("clickCounter");
const birthdayText = document.getElementById("birthdayText");
const confettiLayer = document.getElementById("confettiLayer");


/* =========================
   PASTAYA TIKLAMA
========================= */

document.addEventListener("click", function (event) {

    if (celebrationStarted) {
        return;
    }

    /*
       Sadece pasta alanına tıklanırsa
       işlem yap.
    */

    if (!cakeArea || !cakeArea.contains(event.target)) {
        return;
    }


    clickCount++;


    clickCounter.textContent =
        clickCount + " / 3";


    /* Küçük tıklama animasyonu */

    cakeArea.animate(
        [
            {
                transform:
                    "translate(-50%, -50%) scale(1)"
            },

            {
                transform:
                    "translate(-50%, -50%) scale(1.04)"
            },

            {
                transform:
                    "translate(-50%, -50%) scale(1)"
            }
        ],

        {
            duration: 180,
            easing: "ease-out"
        }
    );


    /* =========================
       3. TIKLAMA
    ========================= */

    if (clickCount >= 3) {

        celebrationStarted = true;

        startCelebration();

    }

});


/* =========================
   KUTLAMA
========================= */

function startCelebration() {

    /*
       Üstteki yazıyı değiştir
    */

    instruction.innerHTML =
        "🎉 <strong>İYİ Kİ DOĞDUN PRENSESİM!</strong> 🎉";


    /*
       Sayaç gizle
    */

    clickCounter.style.display =
        "none";


    /*
       KONFETİ
    */

    createConfetti(220);


    /*
       PASTA MÜZİĞİ
    */

    playCakeMusic();


    /*
       Konfeti devam ederken
       altın yazı ortaya çıksın.
    */

    setTimeout(function () {

        birthdayText.classList.add("show");

    }, 450);

}


/* =========================
   KONFETİ OLUŞTUR
========================= */

function createConfetti(amount) {

    const colors = [

        "#ffd700",
        "#ff4f81",
        "#ffffff",
        "#7b61ff",
        "#42d9a3",
        "#ff8a00",
        "#58a6ff",
        "#f3c4ff"

    ];


    for (let i = 0; i < amount; i++) {

        const piece =
            document.createElement("span");


        piece.className =
            "confetti";


        /*
           Rastgele başlangıç noktası
        */

        piece.style.left =
            Math.random() * 100 + "%";


        /*
           Rastgele renk
        */

        piece.style.background =
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ];


        /*
           Sağa / sola savrulma
        */

        piece.style.setProperty(
            "--drift",
            (
                (Math.random() - 0.5) *
                280
            ) + "px"
        );


        /*
           Dönme miktarı
        */

        piece.style.setProperty(
            "--spin",
            (
                (Math.random() > 0.5 ? 1 : -1) *
                (360 + Math.random() * 1080)
            ) + "deg"
        );


        /*
           Düşme süresi
        */

        piece.style.animationDuration =
            (2.5 + Math.random()) + "s";


        /*
           Hafif başlangıç gecikmesi
        */

        piece.style.animationDelay =
            Math.random() * 0.45 + "s";


        confettiLayer.appendChild(
            piece
        );


        /*
           Animasyon bittikten sonra
           parçayı temizle.
        */

        setTimeout(function () {

            piece.remove();

        }, 4000);

    }

}


/* =========================
   PASTA MÜZİĞİ
========================= */

function playCakeMusic() {

    const music =
        new Audio(
            "ses/pasta-muzik.mp3"
        );


    music.volume = 1.0;


    music.play().catch(function (error) {

        console.log(
            "Pasta müziği başlatılamadı:",
            error
        );

    });

}


/* =========================
   ANA SAYFAYA DÖN
========================= */

function goHome() {

    location.href =
        "home.html";

}
