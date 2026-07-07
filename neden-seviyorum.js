const container=document.getElementById("heartContainer");

const hearts = ["❤️","💖","🤍","🧡","💛","💚","🩵","💜","🩷","🖤","🩶"];

const colors = [
"#ff0000",
"#ff1493",
"#ff69b4",
"#ff00ff",
"#ff8c00",
"#ffd700",
"#7fff00",
"#00fa9a",
"#00ced1",
"#1e90ff",
"#4169e1",
"#8a2be2",
"#ff6347",
"#ffb6c1"
];

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

// Rastgele kalp emojisi
heart.innerHTML = hearts[Math.floor(Math.random()*hearts.length)];

// Boyut (50px - 100px)
const size = Math.random()*50 + 50;

heart.style.fontSize = size + "px";

// Rastgele konum
heart.style.left = Math.random()*100 + "vw";

// Rastgele renk
heart.style.color = colors[Math.floor(Math.random()*colors.length)];

// Rastgele hız
const duration = Math.random()*5 + 6;
heart.style.animationDuration = duration + "s";

container.appendChild(heart);

heart.addEventListener("animationend",()=>{
    heart.remove();
});

}

setInterval(createHeart,250);
