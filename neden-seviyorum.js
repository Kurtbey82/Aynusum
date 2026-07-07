const container=document.getElementById("heartContainer");

const hearts = ["❤️","💖","💗","💓","💕","💘","💝"];

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

heart.innerHTML="❤";

const size=Math.random()*35+20;

heart.style.fontSize=size+"px";

heart.style.left=Math.random()*100+"vw";

heart.style.color=colors[Math.floor(Math.random()*colors.length)];

const duration=Math.random()*6+6;

heart.style.animationDuration=duration+"s";

container.appendChild(heart);

heart.addEventListener("animationend",()=>{

heart.remove();

});

}

setInterval(createHeart,250);
