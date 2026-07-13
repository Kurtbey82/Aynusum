window.onload = function () {

    const svgObject = document.getElementById("turkiyeMap");

    svgObject.addEventListener("load", function () {

        const svg = svgObject.contentDocument;

        // Hatay
        const hatay = svg.getElementById("Hatay");

        // Mersin
        const mersin = svg.getElementById("Mersin");

        // Isparta
        const isparta = svg.getElementById("Isparta");

        if(hatay){
            hatay.style.fill="#ff4d8d";
            hatay.style.cursor="pointer";
            hatay.onclick=()=>location.href="hatay.html";
        }

        if(mersin){
            mersin.style.fill="#ff4d8d";
            mersin.style.cursor="pointer";
            mersin.onclick=()=>location.href="mersin.html";
        }

        if(isparta){
            isparta.style.fill="#ff4d8d";
            isparta.style.cursor="pointer";
            isparta.onclick=()=>location.href="isparta.html";
        }

    });

};
