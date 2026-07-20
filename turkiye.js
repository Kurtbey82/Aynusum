window.onload = function () {

    const object = document.getElementById("turkiyeMap");

    object.addEventListener("load", function () {

        const svg = object.contentDocument;

        const cities = {

            TR31: "hatay",
            TR33: "mersin",
            TR32: "isparta"

        };

        for (const id in cities) {

            const city = svg.getElementById(id);

            if (!city) continue;

            city.style.cursor = "pointer";

            city.addEventListener("click", function () {

                location.href = "memory.html?city=" + cities[id];

            });

        }

    });

};
