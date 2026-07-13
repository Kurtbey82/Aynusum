alert("JS çalıştı");

window.onload = function () {

    const svgObject = document.getElementById("turkiyeMap");

    function haritayiHazirla() {

        const svg = svgObject.contentDocument;

        if (!svg) {
            alert("SVG okunamadı");
            return;
        }

        ["hatay", "mersin", "isparta"].forEach(id => {

            const city = svg.getElementById(id);

            if (city) {

                city.setAttribute("fill", "#ff4d8d");

                city.style.fill = "#ff4d8d";
                city.style.cursor = "pointer";

                city.onclick = () => {
                    location.href = id + ".html";
                };

            } else {
                alert(id + " bulunamadı");
            }

        });

    }

    if (svgObject.contentDocument) {
        haritayiHazirla();
    } else {
        svgObject.onload = haritayiHazirla;
    }

};
function openCity(city){

    const popup=document.getElementById("cityPopup");

    const title=document.getElementById("popupTitle");

    const date=document.getElementById("popupDate");

    const text=document.getElementById("popupText");

    if(city==="hatay"){

        title.innerHTML="❤️ Hatay";

        date.innerHTML="📅 16.05.2026";

        text.innerHTML="Birlikte geçirdiğimiz güzel anılar burada başladı.";

    }

    if(city==="mersin"){

        title.innerHTML="❤️ Mersin";

        date.innerHTML="📅 16.05.2026";

        text.innerHTML="Deniz, kahkahalar ve unutulmaz anılar...";

    }

    if(city==="isparta"){

        title.innerHTML="❤️ Isparta";

        date.innerHTML="📅 04.10.2025";

        text.innerHTML="İlk güzel yolculuklarımızdan biri.";

    }

    popup.style.display="flex";

    setTimeout(()=>{

        location.href=city+".html";

    },1000);

}

document.getElementById("cityPopup").onclick=function(){

    this.style.display="none";

}
