window.onload = function () {

    const object = document.getElementById("turkiyeMap");

    object.addEventListener("load", function () {

        const svg = object.contentDocument;

        alert(svg.getElementById("TR31"));

    });

};
