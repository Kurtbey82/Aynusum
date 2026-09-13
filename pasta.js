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

    if (celebrationStarted) return;

    if (!cakeArea || !cakeArea.contains(event.target)) {
        return;
    }

    clickCount++;

    clickCounter.textContent = clickCount + " / 3";


    /* Tıklama animasyonu */

    cakeArea.animate(
        [
            {
                transform: "scale(1)"
            },
            {
                transform: "scale(1.04)"
            },
            {
                transform: "scale(1)"
            }
        ],
        {
            duration: 220,
            easing: "ease-out"
        }
    );


    /* 3. tıklama */

    if (clickCount >= 3) {

        celebrationStarted = true;

        startCelebration();
    }

});


/* =========================
   KUTLAMA
========================= */

function startCelebration() {

    instruction.innerHTML =
        "🎉 <strong>İYİ Kİ DOĞDUN PRENSESİM!</strong> 🎉";

    clickCounter.style.display = "none";


    /* Konfeti */

    createConfetti(250);


    /* Pasta müziği */

    playCakeMusic();


    /* Yazı */

    setTimeout(function () {

        birthdayText.classList.add("show");

    }, 450);

}


/* =========================
   KONFETİ
========================= */

function createConfetti(amount) {

    const colors = [
        "#ff4fa3",
        "#ffd84d",
        "#ffffff",
        "#ff75c8",
        "#c86cff",
        "#ff9f43"
    ];


    for (let i = 0; i < amount; i++) {

        const confetti = document.createElement("div");

        confetti.className = "confetti";


        confetti.style.left =
            Math.random() * 100 + "%";


        confetti.style.background =
            colors[
                Math.floor(Math.random() * colors.length)
            ];


        confetti.style.setProperty(
            "--drift",
            (Math.random() * 300 - 150) + "px"
        );


        confetti.style.setProperty(
            "--spin",
            (Math.random() * 1440 - 720) + "deg"
        );


        confetti.style.animationDuration =
            (2.5 + Math.random() * 1.5) + "s";


        confetti.style.animationDelay =
            Math.random() * 0.45 + "s";


        confettiLayer.appendChild(confetti);


        setTimeout(function () {

            confetti.remove();

        }, 4500);

    }

}


/* =========================
   PASTA MÜZİĞİ
========================= */

function playCakeMusic() {

    const music =
        new Audio("ses/pasta-muzik.mp3");

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

    location.href = "home.html";

}
