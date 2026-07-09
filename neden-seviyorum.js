let cardOpen = false;
const reasons=[

"Gülüşün bütün kötü günlerimi unutturuyor.",

"Yanında kendim olabiliyorum.",

"Sesini duyunca içim huzur doluyor.",

"Kalbin dünyanın en güzel yeri.",

"Bakışların bana güven veriyor.",

"Benim en güzel tesadüfümsün.",

"Her günümü güzelleştiriyorsun.",

"Seninle her anım daha anlamlı.",

"İyi ki varsın.",

"Çünkü sen... sensin ❤️"
  "Çünkü gözlerinin içi gülüyor.",
"Yanımdayken dünyadaki bütün karmaşa duruyor.",
"Sesini duyduğum an yüzüm gülüyor.",
"Bana kendimi değerli hissettiriyorsun.",
"En sıradan günü bile güzelleştiriyorsun.",
"Gülüşün içimi ısıtıyor.",
"Beni ben olduğum için seviyorsun.",
"Birlikte sessiz kalmak bile güzel.",
"Küçük şeylerden mutlu olabiliyorsun.",
"İçten ve samimisin.",
"Kalbin çok güzel.",
"Merhametin beni sana hayran bırakıyor.",
"Bana güç veriyorsun.",
"Yanında kendimi evimde hissediyorum.",
"Hayatıma huzur kattın.",
"Bir mesajın bile bütün günümü güzelleştiriyor.",
"Bana umut oluyorsun.",
"Kokunu özlüyorum.",
"Seninle gelecek hayali kurabiliyorum.",
"Benim en güzel alışkanlığımsın.",
"İyi ki yollarımız kesişmiş.",
"Her halinle güzelsin.",
"Beni her gün yeniden kendine âşık ediyorsun.",
"Kahkahan dünyadaki en güzel seslerden biri.",
"Yanındayken zaman çok hızlı geçiyor.",
"Seninle yaşlanmak istiyorum.",
"İçimdeki çocuğu ortaya çıkarıyorsun.",
"Gözlerinin içine bakmayı seviyorum.",
"Kalbime iyi geliyorsun.",
"İyi ki benim Aynuşumsun. ❤️"

];
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

heart.style.left=Math.random()*100+"vw";

heart.style.background=
colors[Math.floor(Math.random()*colors.length)];

heart.style.animationDuration=
(Math.random()*5+6)+"s";
  heart.style.animationTimingFunction="ease-in-out";

heart.style.animationDelay=
(Math.random()*1)+"s";
  heart.style.zIndex=Math.floor(Math.random()*5)+1;

  heart.style.setProperty("--size",size+"px");
container.appendChild(heart);

setTimeout(()=>{

heart.remove();

},12000);

}

setInterval(createHeart,180);
const card=document.getElementById("messageCard");

const reasonText=document.getElementById("reasonText");
let lastReason = -1;
let cardOpen = false;

document.getElementById("closeCard").onclick=()=>{

card.style.display="none";

cardOpen = false;

document.getElementById("overlay").style.display="none";

};
document.addEventListener("click",(e)=>{

    if(cardOpen) return;

    if(!e.target.classList.contains("heart")) return;

if(!e.target.classList.contains("heart")) return;

const rect=e.target.getBoundingClientRect();

explodeHeart(

rect.left+rect.width/2,

rect.top+rect.height/2,

e.target.style.background

);

e.target.remove();

setTimeout(()=>{

let random;

do{

random = Math.floor(Math.random()*reasons.length);

}while(random === lastReason);

lastReason = random;

reasonText.textContent = reasons[random];

card.style.display="block";
  cardOpen = true;

document.getElementById("overlay").style.display="block";

},700);
});
function explodeHeart(x,y,color){

for(let i=0;i<24;i++){

const p=document.createElement("div");

p.className="particle";

p.style.left=x+"px";

p.style.top=y+"px";

p.style.background=color;

const angle=Math.random()*360;

const distance=Math.random()*120+40;

const dx=Math.cos(angle*Math.PI/180)*distance;

const dy=Math.sin(angle*Math.PI/180)*distance;

p.style.setProperty("--x",dx+"px");
p.style.setProperty("--y",dy+"px");

p.style.animation="explode .8s ease-out forwards";

document.body.appendChild(p);

setTimeout(()=>{

p.remove();

},800);

}

}
