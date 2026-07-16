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
