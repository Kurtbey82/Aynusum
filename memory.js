const data = {

    hatay: {
        title: "❤️ Hatay",
        date: "11 Eylül 2025",
        text: "Buraya Hatay anınızı yazacağız.",
        photo: "hatay1.jpg"
    },

    mersin: {
        title: "❤️ Mersin",
        date: "04 Ekim 2025",
        text: "Buraya Mersin anınızı yazacağız.",
        photo: "mersin1.jpg"
    },

    isparta: {
        title: "❤️ Isparta",
        date: "2026",
        text: "Buraya Isparta anınızı yazacağız.",
        photo: "isparta1.jpg"
    }

};

const params = new URLSearchParams(window.location.search);

const city = params.get("city");

const memory = data[city];

if (memory) {

    document.getElementById("title").innerText = memory.title;
    document.getElementById("date").innerText = memory.date;
    document.getElementById("text").innerText = memory.text;
    document.getElementById("photo").src = memory.photo;

}
