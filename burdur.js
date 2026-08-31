const galleryImages = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightImage = document.getElementById("lightImage");
const close = document.getElementById("close");

let currentIndex = 0;

galleryImages.forEach((img,index)=>{

    img.addEventListener("click",()=>{

        currentIndex=index;

        lightImage.src=img.src;

        lightbox.style.display="flex";

    });

});

close.addEventListener("click",()=>{

    lightbox.style.display="none";

});

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        lightbox.style.display="none";

    }

});

document.addEventListener("keydown",(e)=>{

    if(lightbox.style.display!=="flex") return;

    if(e.key==="ArrowRight"){

        currentIndex++;

        if(currentIndex>=galleryImages.length){

            currentIndex=0;

        }

        lightImage.src=galleryImages[currentIndex].src;

    }

    if(e.key==="ArrowLeft"){

        currentIndex--;

        if(currentIndex<0){

            currentIndex=galleryImages.length-1;

        }

        lightImage.src=galleryImages[currentIndex].src;

    }

    if(e.key==="Escape"){

        lightbox.style.display="none";

    }

});
