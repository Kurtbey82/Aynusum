const ROWS = 6;
const COLS = 8;
const TOTAL = ROWS * COLS;

const board = document.getElementById("puzzleBoard");
const countEl = document.getElementById("pieceCount");
const shuffleBtn = document.getElementById("shuffleBtn");
const success = document.getElementById("success");

let puzzleOrder = [];
let selectedSlot = null;


// =========================
// PUZZLE BAŞLAT
// =========================

function createPuzzle() {

    board.innerHTML = "";
    puzzleOrder = [];
    selectedSlot = null;

    success.classList.remove("show");

    // Parça numaraları

    for (let i = 0; i < TOTAL; i++) {
        puzzleOrder.push(i);
    }

    shuffle(puzzleOrder);

    createBoard();

    updateCounter();
}


// =========================
// KARIŞTIR
// =========================

function shuffle(array) {

    do {

        for (let i = array.length - 1; i > 0; i--) {

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
// TAHTAYI OLUŞTUR
// =========================

function createBoard() {

    for (let slotIndex = 0; slotIndex < TOTAL; slotIndex++) {

        const slot =
            document.createElement("div");

        slot.className = "puzzleSlot";

        slot.dataset.slot =
            slotIndex;


        const piece =
            document.createElement("div");

        piece.className =
            "puzzlePiece";


        setPieceImage(
            piece,
            puzzleOrder[slotIndex]
        );


        slot.appendChild(piece);


        slot.addEventListener(
            "click",
            function () {

                handleSlotClick(slot);

            }
        );


        board.appendChild(slot);
    }
}


// =========================
// FOTOĞRAF PARÇASI
// =========================

function setPieceImage(
    piece,
    pieceIndex
) {

    const row =
        Math.floor(
            pieceIndex / COLS
        );

    const col =
        pieceIndex % COLS;


    piece.style.backgroundImage =
        'url("img/puzzle.jpg")';


    /*
       Fotoğrafın tamamını kutucuğa
       göre ölçekliyoruz.
    */

    piece.style.backgroundSize =
        `${COLS * 100}% ${ROWS * 100}%`;


    piece.style.backgroundPosition =
        `${(col * 100) / (COLS - 1)}% ` +
        `${(row * 100) / (ROWS - 1)}%`;
}


// =========================
// KUTUCUĞA TIKLAMA
// =========================

function handleSlotClick(slot) {

    if (!selectedSlot) {

        selectedSlot = slot;

        slot.classList.add(
            "selected"
        );

        return;
    }


    // Aynı kutuya tekrar tıklandı

    if (selectedSlot === slot) {

        selectedSlot.classList.remove(
            "selected"
        );

        selectedSlot = null;

        return;
    }


    // İki parçayı değiştir

    swapPieces(
        selectedSlot,
        slot
    );


    selectedSlot.classList.remove(
        "selected"
    );

    selectedSlot = null;


    updateCounter();

    checkPuzzle();
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


    updatePiece(
        slotA,
        puzzleOrder[indexA]
    );

    updatePiece(
        slotB,
        puzzleOrder[indexB]
    );
}


// =========================
// TEK PARÇAYI GÜNCELLE
// =========================

function updatePiece(
    slot,
    pieceIndex
) {

    const piece =
        slot.querySelector(
            ".puzzlePiece"
        );


    setPieceImage(
        piece,
        pieceIndex
    );
}


// =========================
// DOĞRU PARÇA SAYISI
// =========================

function updateCounter() {

    let correct = 0;


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

                correct++;

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


    countEl.textContent =
        `${correct} / ${TOTAL} parça`;
}


// =========================
// TAMAMLANDI MI?
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
// ÇÖZÜLDÜ MÜ?
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
