/* =====================================================
   MEHMET & AYNUR — SANA DOĞRU
   Mini Dinozor Aşk Oyunu
===================================================== */

const startScreen = document.getElementById("startScreen");
const gameScreen = document.getElementById("gameScreen");

const startButton = document.getElementById("startButton");
const restartButton = document.getElementById("restartButton");

const gameArea = document.getElementById("gameArea");
const player = document.getElementById("player");
const aynur = document.getElementById("aynur");
const obstaclesContainer = document.getElementById("obstacles");

const distanceText = document.getElementById("distance");

const jumpButton = document.getElementById("jumpButton");
const duckButton = document.getElementById("duckButton");

const finalMessage = document.getElementById("finalMessage");


/* =====================================================
   OYUN AYARLARI
===================================================== */

const TARGET_DISTANCE = 1000;

let distance = 0;

let gameRunning = false;

let gameOver = false;

let playerJumping = false;

let playerDucking = false;

let gameSpeed = 6;

let obstacleTimer = 0;

let animationFrame;


/* =====================================================
   OYUNU BAŞLAT
===================================================== */

function startGame() {

    startScreen.classList.add("hidden");

    gameScreen.classList.remove("hidden");

    finalMessage.classList.add("hidden");

    aynur.classList.remove("show");

    distance = 0;

    gameSpeed = 6;

    obstacleTimer = 0;

    gameRunning = true;

    gameOver = false;

    playerJumping = false;

    playerDucking = false;

    player.classList.remove("jump");
    player.classList.remove("duck");

    obstaclesContainer.innerHTML = "";

    updateDistance();

    cancelAnimationFrame(animationFrame);

    gameLoop();
}


/* =====================================================
   OYUNU YENİDEN BAŞLAT
===================================================== */

function restartGame() {

    startGame();

}


/* =====================================================
   MESAFE
===================================================== */

function updateDistance() {

    distanceText.textContent =
        Math.floor(distance) + " m";

}


/* =====================================================
   ZIPLAMA
===================================================== */

function jump() {

    if (!gameRunning) return;

    if (playerJumping) return;

    playerJumping = true;

    player.classList.remove("duck");

    player.classList.add("jump");

    setTimeout(function () {

        player.classList.remove("jump");

        playerJumping = false;

    }, 650);

}


/* =====================================================
   EĞİLME
===================================================== */

function duckStart() {

    if (!gameRunning) return;

    if (playerJumping) return;

    playerDucking = true;

    player.classList.add("duck");

}


function duckEnd() {

    playerDucking = false;

    player.classList.remove("duck");

}


/* =====================================================
   KLAVYE KONTROLLERİ
===================================================== */

document.addEventListener("keydown", function (event) {

    if (
        event.code === "Space" ||
        event.code === "ArrowUp"
    ) {

        event.preventDefault();

        jump();

    }


    if (event.code === "ArrowDown") {

        event.preventDefault();

        duckStart();

    }

});


document.addEventListener("keyup", function (event) {

    if (event.code === "ArrowDown") {

        duckEnd();

    }

});


/* =====================================================
   MOBİL KONTROLLER
===================================================== */

jumpButton.addEventListener("touchstart", function (event) {

    event.preventDefault();

    jump();

}, { passive: false });


jumpButton.addEventListener("click", function () {

    jump();

});


duckButton.addEventListener("touchstart", function (event) {

    event.preventDefault();

    duckStart();

}, { passive: false });


duckButton.addEventListener("touchend", function (event) {

    event.preventDefault();

    duckEnd();

}, { passive: false });


duckButton.addEventListener("mousedown", function () {

    duckStart();

});


duckButton.addEventListener("mouseup", function () {

    duckEnd();

});


duckButton.addEventListener("mouseleave", function () {

    duckEnd();

});


/* =====================================================
   ENGEL OLUŞTURMA
===================================================== */

function createObstacle() {

    if (!gameRunning) return;

    const obstacle = document.createElement("div");

    obstacle.classList.add("obstacle");


    /*
       İki farklı engel tipi:

       low  = zıplanacak engel
       high = eğilerek geçilecek engel
    */

    const highObstacle =
        Math.random() < 0.30;


    if (highObstacle) {

        obstacle.classList.add("high");

        obstacle.textContent = "🐦‍🔥";

        obstacle.dataset.type = "high";

    } else {

        obstacle.classList.add("low");

        const obstacles = [
            "🪨",
            "🌵",
            "🪵"
        ];

        obstacle.textContent =
            obstacles[
                Math.floor(
                    Math.random() * obstacles.length
                )
            ];

        obstacle.dataset.type = "low";

    }


    /*
       Ekranın sağından başlat
    */

    obstacle.style.left =
        gameArea.offsetWidth + 100 + "px";


    obstaclesContainer.appendChild(obstacle);

}


/* =====================================================
   ENGELLERİ HAREKET ETTİR
===================================================== */

function moveObstacles() {

    const obstacles =
        document.querySelectorAll(".obstacle");


    obstacles.forEach(function (obstacle) {

        let currentLeft =
            parseFloat(
                obstacle.style.left
            );


        currentLeft -= gameSpeed;


        obstacle.style.left =
            currentLeft + "px";


        /*
           Ekranın dışına çıktıysa sil
        */

        if (currentLeft < -150) {

            obstacle.remove();

        }

    });

}


/* =====================================================
   ÇARPIŞMA KONTROLÜ
===================================================== */

function checkCollisions() {

    const playerRect =
        player.getBoundingClientRect();


    const obstacles =
        document.querySelectorAll(".obstacle");


    obstacles.forEach(function (obstacle) {

        const obstacleRect =
            obstacle.getBoundingClientRect();


        /*
           Çarpışma alanını biraz küçültüyoruz.
           Böylece karakter ile engelin
           kenarları birbirine değdiğinde
           haksız yere oyun bitmez.
        */

        const padding = 12;


        const collision =

            playerRect.left + padding <
            obstacleRect.right - padding &&

            playerRect.right - padding >
            obstacleRect.left + padding &&

            playerRect.top + padding <
            obstacleRect.bottom - padding &&

            playerRect.bottom - padding >
            obstacleRect.top + padding;


        if (collision) {

            /*
               Engel yüksekse eğilmek gerekiyor.
               Eğilmişsek geçebiliriz.
            */

            if (
                obstacle.dataset.type === "high" &&
                playerDucking
            ) {

                return;

            }


            /*
               Engel alçaksa zıplamak gerekiyor.
            */

            if (
                obstacle.dataset.type === "low" &&
                playerJumping
            ) {

                return;

            }


            endGame();

        }

    });

}


/* =====================================================
   OYUN BİTİŞİ
===================================================== */

function endGame() {

    gameRunning = false;

    gameOver = true;

    cancelAnimationFrame(animationFrame);

    /*
       Kısa bir bekleme sonrası
       yeniden başlatma seçeneği
    */

    setTimeout(function () {

        const retry =
            confirm(
                "Aynur'a ulaşamadın. ❤️\n\n" +
                "Tekrar denemek ister misin?"
            );


        if (retry) {

            restartGame();

        }

    }, 100);

}


/* =====================================================
   AYNUR'A ULAŞMA
===================================================== */

function reachAynur() {

    gameRunning = false;

    cancelAnimationFrame(animationFrame);


    /*
       Engelleri durdur
    */

    obstaclesContainer.innerHTML = "";


    /*
       Aynur'u göster
    */

    aynur.classList.add("show");


    /*
       Final mesajını biraz sonra göster
    */

    setTimeout(function () {

        finalMessage.classList.remove("hidden");

    }, 1000);

}


/* =====================================================
   ANA OYUN DÖNGÜSÜ
===================================================== */

function gameLoop() {

    if (!gameRunning) return;


    /*
       Mesafe artır
    */

    distance += 0.15;


    updateDistance();


    /*
       Belirli mesafeden sonra
       oyunu bitir
    */

    if (distance >= TARGET_DISTANCE) {

        reachAynur();

        return;

    }


    /*
       Engel oluşturma zamanlayıcısı
    */

    obstacleTimer--;


    if (obstacleTimer <= 0) {

        createObstacle();


        /*
           Engeller arasındaki mesafe
           giderek biraz azalıyor.
        */

        const minimum =
    Math.max(
        80,
        150 - distance / 25
    );

const maximum =
    Math.max(
        120,
        220 - distance / 20
    );

        obstacleTimer =
            minimum +
            Math.random() *
            (maximum - minimum);

    }


    /*
       Hızı mesafeyle birlikte artır
    */

    gameSpeed =
        3.5 +
        distance / 800;


    /*
       Engelleri hareket ettir
    */

    moveObstacles();


    /*
       Çarpışmaları kontrol et
    */

    checkCollisions();


    /*
       Bir sonraki frame
    */

    animationFrame =
        requestAnimationFrame(gameLoop);

}


/* =====================================================
   BUTONLAR
===================================================== */

startButton.addEventListener(
    "click",
    startGame
);


restartButton.addEventListener(
    "click",
    restartGame
);
