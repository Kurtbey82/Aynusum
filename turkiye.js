window.onload = function () {

    const object = document.getElementById("turkiyeMap");

    object.addEventListener("load", function () {

        const svg = object.contentDocument;
        const paths = svg.querySelectorAll("path");

paths.forEach(path => {
    console.log(path.id);
});

        const hatay = svg.getElementById("TR31");
        const mersin = svg.getElementById("TR33");
        const isparta = svg.getElementById("TR32");

        setupCity(hatay, "Hatay ❤️");
        setupCity(mersin, "Mersin ❤️");
        setupCity(isparta, "Isparta ❤️");

    });

};

function setupCity(city, message){

    if(!city){
        console.log("Şehir bulunamadı");
        return;
    }

    city.style.cursor="pointer";
    city.style.fill="#ff4f8b";

    city.addEventListener("click",function(){
        alert(message);
    });

    city.addEventListener("mouseover",function(){
        city.style.fill="#ff0055";
    });

    city.addEventListener("mouseout",function(){
        city.style.fill="#ff4f8b";
    });

}
