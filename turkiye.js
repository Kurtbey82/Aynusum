window.onload = function () {

    alert("window.onload çalıştı");

    const object = document.getElementById("turkiyeMap");

    object.onload = function () {

        alert("SVG yüklendi");

        const svg = object.contentDocument;

        alert(svg);

    };

};
