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

cakeArea.addEventListener("click", function () {

    if (celebrationStarted) {
        return;
    }

    clickCount++;

    clickCounter.textContent =
        clickCount + " / 3";


    /* Küçük tıklama efekti */

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


    /* 3. tıklama */

    if (clickCount === 3) {

        celebrationStarted = true;

        startCelebration();

    }

});


/* =========================
   KUTLAMA
========================= */

function startCelebration() {

    /* Üst yazıyı değiştir */

    instruction.innerHTML =
        "🎉 <strong>İYİ Kİ DOĞDUN PRENSESİM!</strong> 🎉";


    /* Sayaç gizle */

    clickCounter.style.display = "none";


    /* ANINDA KONFETİ */

    createConfetti(220);


    /* KONFETİ SESİ */

    playConfettiSound();


    /*
       Konfeti devam ederken
       doğum günü yazısı gelsin.
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


        /* Rastgele başlangıç noktası */

        piece.style.left =
            Math.random() * 100 + "%";


        /* Rastgele renk */

        piece.style.background =
            colors[
                Math.floor(
                    Math.random() * colors.length
                )
            ];


        /* Sağa / sola savrulma */

        piece.style.setProperty(
            "--drift",
            ((Math.random() - 0.5) * 280) + "px"
        );


        /* Dönme */

        piece.style.setProperty(
            "--spin",
            (
                (Math.random() > 0.5 ? 1 : -1) *
                (360 + Math.random() * 1080)
            ) + "deg"
        );


        /* Düşme süresi */

        piece.style.animationDuration =
            (2.5 + Math.random()) + "s";


        /* Hafif gecikme */

        piece.style.animationDelay =
            Math.random() * 0.45 + "s";


        confettiLayer.appendChild(piece);


        /*
           Animasyon bittikten sonra
           parçayı DOM'dan kaldır.
        */

        setTimeout(function () {

            piece.remove();

        }, 4000);

    }

}


/* =========================
   KONFETİ SESİ
========================= */

function playCakeMusic();

/* =========================
   ANA SAYFAYA DÖN
========================= */

function goHome() {

    location.href =
        "home.html";

}
