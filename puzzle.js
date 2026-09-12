const ROWS = 6;
const COLS = 8;
const TOTAL = ROWS * COLS;

const board = document.getElementById("puzzleBoard");
const countEl = document.getElementById("pieceCount");
const shuffleBtn = document.getElementById("shuffleBtn");
const success = document.getElementById("success");

let puzzleOrder = [];


// =========================
// PUZZLE'YI OLUŞTUR
// =========================

function createPuzzle() {

    board.innerHTML = "";

    success.classList.remove("show");

    puzzleOrder = [];

    // 0 - 47 arasındaki parçalar

    for (let i = 0; i < TOTAL; i++) {
        puzzleOrder.push(i);
    }

    // Parçaları karıştır

    shuffle(puzzleOrder);


    // 48 kutucuğu oluştur

    for (let slotIndex = 0; slotIndex < TOTAL; slotIndex++) {

        createSlot(
            slotIndex,
            puzzleOrder[slotIndex]
        );
    }


    updateCounter();
}


// =========================
// KARIŞTIR
// =========================

function shuffle(array) {

    do {

        for (
            let i = array.length - 1;
            i > 0;
            i--
        ) {

            const j =
                Math.floor(
                    Math.random() * (i + 1)
                );

            [
                array[i],
                array[j]
            ] = [
                array[j],
                array[i]
            ];
        }

    } while (isSolved(array));
}


// =========================
// KUTUCUK OLUŞTUR
// =========================

function createSlot(
    slotIndex,
    pieceIndex
) {

    const slot =
        document.createElement("div");

    slot.className =
        "puzzleSlot";


    slot.dataset.slot =
        slotIndex;


    const piece =
        document.createElement("img");

    piece.className =
        "puzzlePiece";


    piece.src =
        createPieceImage(pieceIndex);


    piece.alt =
        "Puzzle parçası";


    piece.draggable =
        false;


    slot.appendChild(piece);


    // Dokunmatik / mouse

    slot.addEventListener(
        "click",
        function () {

            selectSlot(slot);
        }
    );


    board.appendChild(slot);
}


// =========================
// FOTOĞRAF PARÇASI
// =========================

function createPieceImage(index) {

    const row =
        Math.floor(index / COLS);

    const col =
        index % COLS;


    const canvas =
        document.createElement("canvas");


    const image =
        new Image();


    /*
       Parçaları doğrudan CSS background
       yerine canvas ile oluşturuyoruz.
    */

    canvas.width = 100;
    canvas.height = 100;


    const ctx =
        canvas.getContext("2d");


    image.src =
        "img/puzzle.jpg";


    image.onload = function () {

        ctx.drawImage(
            image,

            col *
            image.naturalWidth /
            COLS,

            row *
            image.naturalHeight /
            ROWS,

            image.naturalWidth /
            COLS,

            image.naturalHeight /
            ROWS,

            0,
            0,
            100,
            100
        );
    };


    return canvas.toDataURL();
}


// =========================
// SEÇİM
// =========================

let selectedSlot = null;


function selectSlot(slot) {

    if (!selectedSlot) {

        selectedSlot =
            slot;

        slot.classList.add(
            "selected"
        );

        return;
    }


    if (
        selectedSlot === slot
    ) {

        slot.classList.remove(
            "selected"
        );

        selectedSlot = null;

        return;
    }


    swapPieces(
        selectedSlot,
        slot
    );


    selectedSlot.classList.remove(
        "selected"
    );

    selectedSlot = null;
}


// =========================
// PARÇALARI DEĞİŞTİR
// =========================

function swapPieces(
    slotA,
    slotB
) {

    const indexA =
        Number(
            slotA.dataset.slot
        );

    const indexB =
        Number(
            slotB.dataset.slot
        );


    [
        puzzleOrder[indexA],
        puzzleOrder[indexB]

    ] = [

        puzzleOrder[indexB],
        puzzleOrder[indexA]
    ];


    refreshBoard();

    checkPuzzle();
}


// =========================
// TAHTAYI YENİLE
// =========================

function refreshBoard() {

    const slots =
        document.querySelectorAll(
            ".puzzleSlot"
        );


    slots.forEach(
        function (
            slot,
            index
        ) {

            const pieceIndex =
                puzzleOrder[index];


            const piece =
                slot.querySelector(
                    ".puzzlePiece"
                );


            piece.src =
                createPieceImage(
                    pieceIndex
                );
        }
    );


    updateCounter();
}


// =========================
// DOĞRU PARÇA SAYISI
// =========================

function updateCounter() {

    let correct = 0;


    puzzleOrder.forEach(
        function (
            pieceIndex,
            slotIndex
        ) {

            if (
                pieceIndex ===
                slotIndex
            ) {

                correct++;
            }
        }
    );


    countEl.textContent =
        `${correct} / ${TOTAL} parça`;


    // Doğru parçaları işaretle

    const slots =
        document.querySelectorAll(
            ".puzzleSlot"
        );


    slots.forEach(
        function (
            slot,
            index
        ) {

            if (
                puzzleOrder[index] ===
                index
            ) {

                slot.classList.add(
                    "correct"
                );

            } else {

                slot.classList.remove(
                    "correct"
                );
            }
        }
    );
}


// =========================
// PUZZLE TAMAMLANDI MI?
// =========================

function checkPuzzle() {

    if (
        isSolved(puzzleOrder)
    ) {

        setTimeout(
            function () {

                success.classList.add(
                    "show"
                );

            },
            500
        );
    }
}


// =========================
// ÇÖZÜLMÜŞ MÜ?
// =========================

function isSolved(array) {

    return array.every(
        function (
            value,
            index
        ) {

            return value === index;
        }
    );
}


// =========================
// YENİDEN KARIŞTIR
// =========================

shuffleBtn.addEventListener(
    "click",
    function () {

        createPuzzle();
    }
);


// =========================
// BAŞLAT
// =========================

createPuzzle();
