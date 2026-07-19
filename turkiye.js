window.onload = function () {

    const object = document.getElementById("turkiyeMap");

    setTimeout(function () {

        const svg = object.contentDocument;

        // Şehirler
        const hatay = svg.getElementById("TR31");
        const mersin = svg.getElementById("TR33");
        const isparta = svg.getElementById("TR32");

        // Kalpler
        const heartHatay = svg.getElementById("heart-hatay");
        const heartMersin = svg.getElementById("heart-mersin");
        const heartIsparta = svg.getElementById("heart-isparta");

        // Şehir renkleri
        setupCity(hatay);
        setupCity(mersin);
        setupCity(isparta);

        // Kalplere tıklama
        heartHatay.addEventListener("click", () => openCity("hatay"));
        heartMersin.addEventListener("click", () => openCity("mersin"));
        heartIsparta.addEventListener("click", () => openCity("isparta"));

    }, 1000);

};

function setupCity(city){

    if(!city) return;

    city.style.cursor = "pointer";
    city.style.fill = "#ff4f8b";

}

function openCity(city){

    if(city==="hatay"){
        alert("Hatay ❤️");
    }

    if(city==="mersin"){
        alert("Mersin ❤️");
    }

    if(city==="isparta"){
        alert("Isparta ❤️");
    }

}
