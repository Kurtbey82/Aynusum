const container=document.getElementById("heartContainer");

const colors=[

"#ff0055",
"#ff1493",
"#ff4fa3",
"#ff5e7e",
"#ff6ec7",
"#ff8fab",
"#ff3d68",
"#ff1744",
"#ff69b4",
"#ff7f50",
"#ffb703",
"#ffd166",
"#06d6a0",
"#00c2ff",
"#4d96ff",
"#7b2cbf"

];

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

const size=Math.random()*45+45;

heart.style.width=size+"px";
heart.style.height=size+"px";

heart.style.left=Math.random()*100+"vw";

heart.style.background=
colors[Math.floor(Math.random()*colors.length)];

heart.style.animationDuration=
(Math.random()*5+6)+"s";

heart.style.animationDelay=
(Math.random()*1)+"s";

container.appendChild(heart);

setTimeout(()=>{

heart.remove();

},12000);

}

setInterval(createHeart,180);
