window.onload = function () {

    const svgObject = document.getElementById("turkiyeMap");

    svgObject.addEventListener("load", function () {

        const svg = svgObject.contentDocument;

        const hatay = svg.getElementById("hatay");
        const mersin = svg.getElementById("mersin");
        const isparta = svg.getElementById("isparta");

        [hatay, mersin, isparta].forEach(sehir => {
            if(sehir){
                sehir.style.fill = "#ff4d8d";
                sehir.style.cursor = "pointer";
            }
        });

        if(hatay){
            hatay.onclick = () => window.location.href = "hatay.html";
        }

        if(mersin){
            mersin.onclick = () => window.location.href = "mersin.html";
        }

        if(isparta){
            isparta.onclick = () => window.location.href = "isparta.html";
        }

    });

};
