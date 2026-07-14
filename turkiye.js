window.onload = function () {

    const map = document.getElementById("turkiyeMap");

    map.addEventListener("load", function () {

        const svg = map.contentDocument;

        if (!svg) {
            alert("SVG yüklenemedi.");
            return;
        }

        // Hatay
        let hatay =
            svg.getElementById("Hatay") ||
            svg.getElementById("hatay");

        // Mersin
        let mersin =
            svg.getElementById("Mersin") ||
            svg.getElementById("mersin") ||
            svg.getElementById("İçel") ||
            svg.getElementById("Icel");

        // Isparta
        let isparta =
            svg.getElementById("Isparta") ||
            svg.getElementById("ISPARTA") ||
            svg.getElementById("isparta");

        if (hatay) {
            hatay.style.cursor = "pointer";
            hatay.onclick = () => alert("❤️ Hatay Anımız");
        }

        if (mersin) {
            mersin.style.cursor = "pointer";
            mersin.onclick = () => alert("❤️ Mersin Anımız");
        }

        if (isparta) {
            isparta.style.cursor = "pointer";
            isparta.onclick = () => alert("❤️ Isparta Anımız");
        }

    });

};
