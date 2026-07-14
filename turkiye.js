window.addEventListener("load", function () {

    const map = document.getElementById("turkiyeMap");

    map.addEventListener("load", function () {

        const svg = map.contentDocument;

        if (!svg) {
            alert("SVG yüklenemedi.");
            return;
        }

        // Şehir isimlerini kontrol et
        console.log("Hatay:", svg.getElementById("Hatay"));
        console.log("Mersin:", svg.getElementById("Mersin"));
        console.log("Isparta:", svg.getElementById("Isparta"));

        const cities = [
            {
                id: "Hatay",
                title: "Hatay ❤️",
                date: "11 Eylül 2025",
                text: "İlk tanıştığımız şehir."
            },
            {
                id: "Mersin",
                title: "Mersin ❤️",
                date: "İlk Tatilimiz",
                text: "Birlikte geçirdiğimiz en güzel günlerden biri."
            },
            {
                id: "Isparta",
                title: "Isparta ❤️",
                date: "Anılarımız",
                text: "Seni her zaman hatırlayacağım şehir."
            }
        ];

        cities.forEach(city => {

            const element = svg.getElementById(city.id);

            if (!element) {
                console.log(city.id + " bulunamadı.");
                return;
            }

            element.style.cursor = "pointer";
            element.style.fill = "#ff5fa2";

            element.addEventListener("click", function () {

                document.getElementById("popupTitle").innerText = city.title;
                document.getElementById("popupDate").innerText = city.date;
                document.getElementById("popupText").innerText = city.text;

                document.getElementById("cityPopup").style.display = "flex";

            });

        });

    });

});

document.addEventListener("click", function (e) {

    if (e.target.id === "cityPopup") {
        document.getElementById("cityPopup").style.display = "none";
    }

});
