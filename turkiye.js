alert("JS çalıştı");

window.onload = function () {

    const svgObject = document.getElementById("turkiyeMap");

    function haritayiHazirla() {

        const svg = svgObject.contentDocument;

        if (!svg) {
            alert("SVG okunamadı");
            return;
        }

        ["hatay", "mersin", "isparta"].forEach(id => {

            const city = svg.getElementById(id);

            if (city) {

                city.setAttribute("fill", "#ff4d8d");

                city.style.fill = "#ff4d8d";
                city.style.cursor = "pointer";

                city.onclick = () => {
                    location.href = id + ".html";
                };

            } else {
                alert(id + " bulunamadı");
            }

        });

    }

    if (svgObject.contentDocument) {
        haritayiHazirla();
    } else {
        svgObject.onload = haritayiHazirla;
    }

};
