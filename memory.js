const memories = {

    hatay: {

        title: "❤️ Hatay",

        date: "16.05.2026",

        text: "Seninle ilk defa burada aynı evin içinde uyuduk:)",

        photos: [
    "img/hatay1.jpg",
    "img/hatay2.jpg",
    "img/hatay3.jpg",
    "img/hatay4.jpg"
],

    },

    mersin: {

        title: "💚 Mersin",

        date: "16.05.2026",

        text: "Sahilde seninle yürümek çok güzeldi ♥️",

        photos: [
    "img/mersin1.jpg",
    "img/mersin2.jpg",
    "img/mersin3.jpg",
    "img/mersin4.jpg"
],

    },

    isparta: {

        title: "❤️ Isparta",

        date: "04.10.2025",

        text: "Hikâyemizin başladığı şehir. ilk heyecanlarımızı yaşadığımız, ilklerimizin şehri ✨",

        photos: [
    "img/isparta0.jpg",
    "img/isparta1.jpg",
    "img/isparta2.jpg",
    "img/isparta3.jpg",
    "img/isparta4.jpg",
    "img/isparta5.jpg",
    "img/isparta6.jpg",
    "img/isparta7.jpg",
    "img/isparta8.jpg",
    "img/isparta9.jpg",
    "img/isparta10.jpg",
    "img/isparta11.jpg",
    "img/isparta12.jpg"
],

    }

};

const params = new URLSearchParams(window.location.search);

const city = params.get("city");

const data = memories[city];

if (data) {

    document.getElementById("title").innerText = data.title;

    document.getElementById("date").innerText = data.date;

    document.getElementById("text").innerText = data.text;

    const gallery = document.getElementById("gallery");

gallery.innerHTML = "";

data.photos.forEach(function(photo){

    const img = document.createElement("img");

    img.src = photo;

    gallery.appendChild(img);

});

}
