window.onload = function () {

    const object = document.getElementById("turkiyeMap");

    object.addEventListener("load", function () {

        const svg = object.contentDocument;

        alert(svg ? "SVG yüklendi" : "SVG yüklenmedi");

        alert(svg.getElementById("TR31"));

    });

};
