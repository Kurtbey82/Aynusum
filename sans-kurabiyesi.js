const cookie=document.getElementById("cookie");

cookie.addEventListener("click",()=>{

if(navigator.vibrate){

navigator.vibrate(40);

}

cookie.classList.add("shake");

setTimeout(()=>{

cookie.classList.remove("shake");

},550);

});
