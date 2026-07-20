window.onload = function () {

    const object = document.getElementById("turkiyeMap");

    function initMap() {

        const svg = object.contentDocument;

        if (!svg) {
            alert("SVG henüz hazır değil");
            return;
        }

        alert("SVG hazır");

        const hatay = svg.getElementById("TR31");

hatay.style.fill = "red";

hatay.addEventListener("click", function () {
    alert("Hatay tıklandı");
});
    }

    // SVG zaten yüklüyse
    if (object.contentDocument) {
        initMap();
    } else {
        object.onload = initMap;
    }

};
