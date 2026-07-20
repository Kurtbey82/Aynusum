window.onload = function () {

    const object = document.getElementById("turkiyeMap");

    function initMap() {

        const svg = object.contentDocument;

        if (!svg) {
            alert("SVG henüz hazır değil");
            return;
        }

        alert("SVG hazır");

        alert(svg.getElementById("TR31"));
    }

    // SVG zaten yüklüyse
    if (object.contentDocument) {
        initMap();
    } else {
        object.onload = initMap;
    }

};
