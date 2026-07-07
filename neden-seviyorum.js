const container=document.getElementById("heartContainer");

const colors=[

"#ff3b7f",

"#ff6ba8",

"#ff8fb8",

"#ff4d6d",

"#ff99cc",

"#ff5e95"

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
