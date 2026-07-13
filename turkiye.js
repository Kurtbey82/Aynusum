window.addEventListener("load", () => {

    const map = document.getElementById("turkiyeMap");

    map.addEventListener("load", () => {

        const svg = map.contentDocument;

        if (!svg) {
            alert("SVG yüklenemedi.");
            return;
        }

        const cities = [
            { id: "hatay", page: "hatay.html" },
            { id: "mersin", page: "mersin.html" },
            { id: "isparta", page: "isparta.html" }
        ];

        cities.forEach(city => {

            const il = svg.getElementById(city.id);

            if (il) {

                il.style.fill = "#ff4d8d";
                il.style.cursor = "pointer";
                il.style.transition = "0.3s";

                il.addEventListener("mouseenter", () => {
                    il.style.fill = "#ff7cab";
                });

                il.addEventListener("mouseleave", () => {
                    il.style.fill = "#ff4d8d";
                });

                il.addEventListener("click", () => {
                    window.location.href = city.page;
                });

            } else {
                console.log(city.id + " bulunamadı.");
            }

        });

    });

});
