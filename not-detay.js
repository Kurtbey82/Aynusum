const params = new URLSearchParams(window.location.search);

const index = params.get("id");

let notes = JSON.parse(localStorage.getItem("notes")) || [];

if(index === null || !notes[index]){
    location.replace("notlar.html");
}

const note = notes[index];

document.getElementById("noteTitle").textContent = note.title;

document.getElementById("noteInfo").textContent =
"📅 " + note.date + "   ❤️ " + note.author;

document.getElementById("noteContent").textContent =
note.content;

document.getElementById("backBtn").onclick = function(){

    location.href = "notlar.html";

};

document.getElementById("deleteBtn").onclick = function(){

    if(confirm("Bu not silinsin mi?")){

        notes.splice(index,1);

        localStorage.setItem("notes",JSON.stringify(notes));

        location.href="notlar.html";

    }

};

document.getElementById("editBtn").onclick = function(){

    location.href = "not-duzenle.html?id=" + index;

};
