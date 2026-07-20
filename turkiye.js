const object = document.getElementById("turkiyeMap");

object.addEventListener("load", () => {

    const svg = object.contentDocument;

    const cities = {
        TR31: "hatay",
        TR33: "mersin",
        TR32: "isparta"
    };

    Object.keys(cities).forEach(id => {

        const city = svg.getElementById(id);

        if (!city) {
            console.log(id + " bulunamadı");
            return;
        }

        city.style.cursor = "pointer";

        city.addEventListener("click", () => {

            window.location.href = "memory.html?city=" + cities[id];

        });

    });

});
