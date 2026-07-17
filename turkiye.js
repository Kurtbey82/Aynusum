<script src="https://cdn.jsdelivr.net/npm/@panzoom/panzoom/dist/panzoom.min.js"></script>
<script src="turkiye.js"></script>
window.onload = function () {

    const object = document.getElementById("turkiyeMap");

    setTimeout(function () {

        const svg = object.contentDocument;

        const hatay = svg.getElementById("TR31");

        hatay.style.cursor = "pointer";

        hatay.addEventListener("click", function () {
            alert("Hatay ❤️");
        });

    }, 1000);

};
