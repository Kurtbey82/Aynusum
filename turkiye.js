window.addEventListener("load", () => {

    const map = document.getElementById("turkiyeMap");

    map.addEventListener("load", () => {

        const svg = map.contentDocument;
        alert(svg.getElementById("hatay") ? "Hatay bulundu" : "Hatay bulunamadı");

        ["hatay","mersin","isparta"].forEach(id => {

            const city = svg.getElementById(id);

            if(city){

                const path = city.querySelector("path");

                if(path){
                    path.setAttribute("style","fill:#ff4d8d;");
                }

                city.style.cursor = "pointer";

                city.addEventListener("click", () => {
                    window.location.href = id + ".html";
                });

            }

        });

    });

});
