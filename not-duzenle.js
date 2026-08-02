const params = new URLSearchParams(window.location.search);

const index = params.get("id");

let notes = JSON.parse(localStorage.getItem("notes")) || [];

if(index === null || !notes[index]){

    location.replace("notlar.html");

}

const note = notes[index];

const title = document.getElementById("editTitle");

const content = document.getElementById("editContent");

title.value = note.title;

content.value = note.content;

// Geri

document.getElementById("backBtn").onclick = function(){

    location.href = "not-detay.html?id=" + index;

};

// Kaydet

document.getElementById("saveBtn").onclick = function(){

    if(title.value.trim()==="" || content.value.trim()===""){

        alert("Başlık ve içerik boş olamaz.");

        return;

    }

    notes[index].title = title.value;

    notes[index].content = content.value;

    localStorage.setItem("notes",JSON.stringify(notes));

    location.href = "not-detay.html?id=" + index;

};
