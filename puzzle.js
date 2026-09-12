const ROWS = 6;
const COLS = 8;
const TOTAL = ROWS * COLS;

const board = document.getElementById("puzzleBoard");
const countEl = document.getElementById("pieceCount");
const shuffleBtn = document.getElementById("shuffleBtn");
const success = document.getElementById("success");

let pieces = [];
let lockedCount = 0;


// =========================
// KARIŞTIRMA
// =========================

function shuffle(array) {

    for (let i = array.length - 1; i > 0; i--) {

        const j =
            Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] =
            [array[j], array[i]];
    }

    return array;
}


// =========================
// PUZZLE OLUŞTUR
// =========================

function createPuzzle() {

    board.innerHTML = "";

    pieces = [];

    lockedCount = 0;

    success.classList.remove("show");

    countEl.textContent =
        `0 / ${TOTAL} parça`;


    const boardWidth =
        board.clientWidth;

    const boardHeight =
        board.clientHeight;


    const pieceWidth =
        boardWidth / COLS;

    const pieceHeight =
        boardHeight / ROWS;


    // Başlangıç pozisyonları

    const positions = [];


    for (let row = 0; row < ROWS; row++) {

        for (let col = 0; col < COLS; col++) {

            positions.push({

                x:
                    Math.random() *
                    Math.max(
                        0,
                        boardWidth - pieceWidth
                    ),

                y:
                    Math.random() *
                    Math.max(
                        0,
                        boardHeight - pieceHeight
                    )
            });
        }
    }


    // Parçaları oluştur

    for (let row = 0; row < ROWS; row++) {

        for (let col = 0; col < COLS; col++) {

            const index =
                row * COLS + col;


            const piece =
                document.createElement("div");


            piece.className =
                "piece";


            piece.dataset.row =
                row;

            piece.dataset.col =
                col;


            piece.style.width =
                pieceWidth + "px";

            piece.style.height =
                pieceHeight + "px";


            // Fotoğrafı parçaya böl

            piece.style.backgroundSize =
                boardWidth + "px " +
                boardHeight + "px";


            piece.style.backgroundPosition =
                (-col * pieceWidth) + "px " +
                (-row * pieceHeight) + "px";


            // Rastgele başlangıç konumu

            piece.style.left =
                positions[index].x + "px";

            piece.style.top =
                positions[index].y + "px";


            makeDraggable(piece);


            board.appendChild(piece);

            pieces.push(piece);
        }
    }
}


// =========================
// SÜRÜKLEME
// =========================

function makeDraggable(piece) {

    let startX = 0;
    let startY = 0;

    let originalX = 0;
    let originalY = 0;


    piece.addEventListener(
        "pointerdown",
        function (event) {

            if (
                piece.classList.contains(
                    "locked"
                )
            ) {
                return;
            }


            piece.setPointerCapture(
                event.pointerId
            );


            piece.classList.add(
                "dragging"
            );


            startX =
                event.clientX;

            startY =
                event.clientY;


            originalX =
                parseFloat(
                    piece.style.left
                );

            originalY =
                parseFloat(
                    piece.style.top
                );
        }
    );


    piece.addEventListener(
        "pointermove",
        function (event) {

            if (
                !piece.classList.contains(
                    "dragging"
                )
            ) {
                return;
            }


            const newX =
                originalX +
                (
                    event.clientX -
                    startX
                );


            const newY =
                originalY +
                (
                    event.clientY -
                    startY
                );


            piece.style.left =
                newX + "px";

            piece.style.top =
                newY + "px";
        }
    );


    piece.addEventListener(
        "pointerup",
        function () {

            if (
                !piece.classList.contains(
                    "dragging"
                )
            ) {
                return;
            }


            piece.classList.remove(
                "dragging"
            );


            checkPiece(piece);
        }
    );


    piece.addEventListener(
        "pointercancel",
        function () {

            piece.classList.remove(
                "dragging"
            );
        }
    );
}


// =========================
// DOĞRU YER KONTROLÜ
// =========================

function checkPiece(piece) {

    const row =
        Number(piece.dataset.row);

    const col =
        Number(piece.dataset.col);


    const pieceWidth =
        board.clientWidth /
        COLS;

    const pieceHeight =
        board.clientHeight /
        ROWS;


    const targetX =
        col * pieceWidth;

    const targetY =
        row * pieceHeight;


    const currentX =
        parseFloat(
            piece.style.left
        );

    const currentY =
        parseFloat(
            piece.style.top
        );


    const tolerance =
        Math.min(
            pieceWidth,
            pieceHeight
        ) * 0.28;


    if (

        Math.abs(
            currentX - targetX
        ) < tolerance &&

        Math.abs(
            currentY - targetY
        ) < tolerance

    ) {

        piece.style.left =
            targetX + "px";

        piece.style.top =
            targetY + "px";


        piece.classList.add(
            "locked"
        );


        lockedCount++;


        countEl.textContent =
            `${lockedCount} / ${TOTAL} parça`;


        // Puzzle tamamlandı

        if (
            lockedCount === TOTAL
        ) {

            setTimeout(
                function () {

                    success.classList.add(
                        "show"
                    );

                },
                400
            );
        }
    }
}


// =========================
// YENİDEN KARIŞTIR
// =========================

shuffleBtn.addEventListener(
    "click",
    createPuzzle
);


// =========================
// EKRAN BOYUTU DEĞİŞİNCE
// =========================

window.addEventListener(
    "resize",
    createPuzzle
);


// =========================
// BAŞLAT
// =========================

createPuzzle();
