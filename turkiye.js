window.onload = function () {

    const object = document.getElementById("turkiyeMap");

    function initMap() {

        const svg = object.contentDocument;

        if (!svg) return;

        const cities = {
            TR31: "hatay",
            TR33: "mersin",
            TR32: "isparta",
            TR15: "burdur"
        };

        Object.keys(cities).forEach(function(id){

            const city = svg.getElementById(id);

            if(!city) return;

            city.style.cursor = "pointer";

            city.addEventListener("click", function(){

                window.location.href = "memory.html?city=" + cities[id];

            });

        });

    }

    if (object.contentDocument) {
        initMap();
    } else {
        object.onload = initMap;
    }

};
