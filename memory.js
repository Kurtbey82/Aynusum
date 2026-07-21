alert("memory.js çalıştı");
const memories = {

    hatay: {

        title: "❤️ Hatay",

        date: "11 Eylül 2025",

        text: "Buraya Hatay anınızı yazacağız.",

        photo: "hatay1.jpg",

        spotify: ""

    },

    mersin: {

        title: "💚 MERSİN TESTİ",

        date: "BUGÜN TEST",

        text: "Eğer bunu görüyorsan memory.js çalışıyor."

        photo: "mersin1.jpg",

        spotify: ""

    },

    isparta: {

        title: "❤️ Isparta",

        date: "4 Ekim 2025",

        text: "Buraya Isparta anınızı yazacağız.",

        photo: "isparta1.jpg",

        spotify: ""

    }

};

const params = new URLSearchParams(window.location.search);

const city = params.get("city");

const data = memories[city];

if (data) {

    document.getElementById("title").innerText = data.title;

    document.getElementById("date").innerText = data.date;

    document.getElementById("text").innerText = data.text;

    document.getElementById("photo").src = data.photo;

}
