window.onload = function () {

    alert("1");

    const object = document.getElementById("turkiyeMap");

    setTimeout(function () {

        alert("2");

        const svg = object.contentDocument;

        if (!svg) {
            alert("contentDocument = null");
            return;
        }

        alert("SVG bulundu");

        const hatay = svg.getElementById("TR31");

        if (!hatay) {
            alert("TR31 bulunamadı");
        } else {
            alert("TR31 bulundu");
            hatay.style.fill = "red";
        }

    }, 1000);

};
