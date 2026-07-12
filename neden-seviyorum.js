const reasons = [

"Gülüşün bütün kötü günlerimi unutturuyor.",
"Yanında kendim olabiliyorum.",
"Sesini duyunca içim huzur doluyor.",
"Kalbin dünyanın en güzel yeri.",
"Bakışların bana güven veriyor.",
"Benim en güzel tesadüfümsün.",
"Her günümü güzelleştiriyorsun.",
"Seninle her anım daha anlamlı.",
"İyi ki varsın.",
"Çünkü sen... sensin ❤️",
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
"İyi ki benim Aynuşumsun. ❤️",
    "Gülümsediğinde dünyam aydınlanıyor.",
"Bana güven vermeni seviyorum.",
"Varlığın bana huzur veriyor.",
"Kalbin çok temiz.",
"Küçük şeylerle mutlu olabiliyorsun.",
"Yanımda çocuk gibi olabiliyorsun.",
"Gözlerin umut dolu.",
"Birlikte gülebiliyoruz.",
"Beni dinliyorsun.",
"Hayatıma anlam kattın.",
"Her gün seni biraz daha çok seviyorum.",
"Sabah uyandığımda aklıma gelen ilk kişisin.",
"Gece uyumadan önce düşündüğüm son kişisin.",
"Seninle konuşunca bütün stresim geçiyor.",
"Bana ilham oluyorsun.",
"Yanımdayken kendimi güçlü hissediyorum.",
"Birlikte kurduğumuz hayalleri seviyorum.",
"Sesindeki samimiyeti seviyorum.",
"Kalbimde bıraktığın izi seviyorum.",
"Sana bakınca geleceğimi görüyorum.",
"Benim en güzel duamsın.",
"İyi ki yollarımız kesişmiş.",
"Yanımdayken zamanın nasıl geçtiğini anlamıyorum.",
"Beni her zaman daha iyi biri olmaya teşvik ediyorsun.",
"Birlikte sustuğumuz anlar bile çok güzel.",
"İçten gülmeni seviyorum.",
"Heyecanını seviyorum.",
"Meraklı oluşunu seviyorum.",
"Hayallerine inanmanı seviyorum.",
"Şefkatini seviyorum.",
"Sıcacık kalbini seviyorum.",
"Birlikte yaşlanma hayalini seviyorum.",
"Her şeyden önce seni seviyorum.",
"Benim için emek vermeni seviyorum.",
"Vefalı oluşunu seviyorum.",
"Beni düşündüğünü hissettirmeni seviyorum.",
"Yanımdayken içimin huzurla dolmasını seviyorum.",
"Her gün bana umut vermeni seviyorum.",
"İyi ki hayatımdasın.",
"İyi ki benim sevgilimsin. ❤️"

];

const container = document.getElementById("heartContainer");
const card = document.getElementById("messageCard");
const reasonText = document.getElementById("reasonText");
const cardEmoji = document.getElementById("cardEmoji");
const overlay = document.getElementById("overlay");

let lastReason = -1;
let cardOpen = false;

const colors = [

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
const emojis=[

"❤️",
"💖",
"💕",
"💗",
"💘",
"💝",
"💞",
"🥰",
"😍",
"😘",
"🌹",
"🩷",
"✨"

];

function createHeart(){

const heart = document.createElement("div");

heart.className = "heart";

const size = Math.random()*45+45;

heart.style.left = Math.random()*100+"vw";
heart.style.background = colors[Math.floor(Math.random()*colors.length)];
heart.style.setProperty("--size",size+"px");

heart.style.animationDuration=(Math.random()*5+6)+"s";
heart.style.animationDelay=(Math.random()*1)+"s";
heart.style.animationTimingFunction="ease-in-out";

container.appendChild(heart);

setTimeout(()=>{

heart.remove();

},12000);

}

setInterval(createHeart,180);

document.getElementById("closeCard").onclick=function(){

card.style.display="none";

overlay.style.display="none";

cardOpen=false;

};
document.addEventListener("click",function(e){

    if(cardOpen) return;

    if(!e.target.classList.contains("heart")) return;

    const rect = e.target.getBoundingClientRect();

    explodeHeart(

        rect.left + rect.width/2,

        rect.top + rect.height/2,

        e.target.style.background

    );
if(navigator.vibrate){

    navigator.vibrate([25,40,25]);

}
    e.target.remove();

    setTimeout(function(){

        let random;

        do{

            random = Math.floor(Math.random()*reasons.length);

        }while(random===lastReason);

        lastReason=random;

        reasonText.textContent=reasons[random];
        cardEmoji.textContent =
emojis[Math.floor(Math.random()*emojis.length)];

        card.style.display="block";

        overlay.style.display="block";

        cardOpen=true;

    },700);

});

function explodeHeart(x,y,color){

    for(let i=0;i<24;i++){

        const p=document.createElement("div");

        p.className="particle";

        p.style.left=x+"px";

        p.style.top=y+"px";

        p.style.background=color;

        const angle=Math.random()*Math.PI*2;

        const distance=Math.random()*120+40;

        const dx=Math.cos(angle)*distance;

        const dy=Math.sin(angle)*distance;

        p.style.setProperty("--x",dx+"px");
        p.style.setProperty("--y",dy+"px");

        p.style.animation="explode .8s ease-out forwards";

        document.body.appendChild(p);

        setTimeout(function(){

            p.remove();

        },800);

    }

}

// Sayfa açılır açılmaz birkaç kalp oluştur
for(let i=0;i<12;i++){

    setTimeout(createHeart,i*120);

}
