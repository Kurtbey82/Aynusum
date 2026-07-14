window.onload = function () {

    const map = document.getElementById("turkiyeMap");

    map.addEventListener("load", function () {

        const svg = map.contentDocument;

        if (!svg) {
            alert("SVG yüklenemedi.");
            return;
        }

        // Şehirleri class adına göre bul
        const hatay = svg.querySelector(".Hatay");
        const mersin = svg.querySelector(".Mersin");
        const isparta = svg.querySelector(".Isparta");

        if (hatay) {
            hatay.style.cursor = "pointer";
            hatay.addEventListener("click", function () {
                alert("❤️ Hatay Anımız");
            });
        } else {
            console.log("Hatay bulunamadı");
        }

        if (mersin) {
            mersin.style.cursor = "pointer";
            mersin.addEventListener("click", function () {
                alert("❤️ Mersin Anımız");
            });
        } else {
            console.log("Mersin bulunamadı");
        }

        if (isparta) {
            isparta.style.cursor = "pointer";
            isparta.addEventListener("click", function () {
                alert("❤️ Isparta Anımız");
            });
        } else {
            console.log("Isparta bulunamadı");
        }

    });

};
