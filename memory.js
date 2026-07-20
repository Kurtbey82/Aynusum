const memories = [
{
    image: "img/hatay1.jpg",
    title: "İlk Buluşmamız ❤️",
    date: "11 Eylül 2025",
    text: "Buraya ilk anınızı yazacağız."
},
{
    image: "img/mersin1.jpg",
    title: "Mersin ❤️",
    date: "2025",
    text: "Buraya Mersin anınızı yazacağız."
},
{
    image: "img/isparta1.jpg",
    title: "Isparta ❤️",
    date: "2026",
    text: "Buraya Isparta anınızı yazacağız."
}
];

const gallery = document.getElementById("gallery");

memories.forEach(memory => {

    gallery.innerHTML += `
        <div class="memory-card">
            <img src="${memory.image}" alt="${memory.title}">
            <div class="memory-content">
                <h2>${memory.title}</h2>
                <small>${memory.date}</small>
                <p>${memory.text}</p>
            </div>
        </div>
    `;

});
