const cookie = document.getElementById("cookie");
const card=document.getElementById("messageCard");
const message=document.getElementById("cookieMessage");
const close=document.getElementById("closeCard");

const compliments=[

"Sen gülünce dünya daha güzel bir yer oluyor. ❤️",

"İyi ki benim hayatımdasın.",

"Bugünkü en büyük şansım sensin.",

"Gözlerin huzurun tanımı gibi.",

"Kalbin dünyanın en güzel yeri.",

"Senin gülüşün bütün yorgunluğumu alıyor.",

"İyi ki seni sevmişim.",

"Her gün sana yeniden âşık oluyorum.",

"Bir ömür aynı kurabiyeyi seninle paylaşmak isterim. 🍪❤️",

"Şans kurabiyem bana hep seni gösteriyor."

];

cookie.addEventListener("click",()=>{

    if(navigator.vibrate){

        navigator.vibrate(40);

    }

    cookie.classList.add("shake");

    setTimeout(()=>{

        cookie.classList.remove("shake");

        cookie.classList.add("crack");
        explodeCookie();

    },550);

    setTimeout(()=>{

        cookie.style.display="none";
        setTimeout(()=>{

const random=Math.floor(Math.random()*compliments.length);

message.textContent=compliments[random];

card.style.display="block";

},300);

    },950);

});
function explodeCookie(){

const rect=cookie.getBoundingClientRect();

for(let i=0;i<10;i++){

const piece=document.createElement("div");

piece.className="cookiePiece";

piece.textContent="🍪";

piece.style.left=(rect.left+rect.width/2)+"px";

piece.style.top=(rect.top+rect.height/2)+"px";

const angle=Math.random()*360;

const distance=150+Math.random()*180;

const x=Math.cos(angle*Math.PI/180)*distance;

const y=Math.sin(angle*Math.PI/180)*distance;

piece.style.setProperty("--x",x+"px");

piece.style.setProperty("--y",y+"px");

document.body.appendChild(piece);

setTimeout(()=>{

piece.remove();

},900);

}

}
close.onclick=()=>{

card.style.display="none";

cookie.style.display="block";

cookie.classList.remove("crack");

}
