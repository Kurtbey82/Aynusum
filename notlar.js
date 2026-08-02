const addBtn = document.getElementById("addNoteBtn");
const modal = document.getElementById("noteModal");
const closeBtn = document.getElementById("closeModal");
const saveBtn = document.getElementById("saveNote");

const titleInput = document.getElementById("noteTitle");
const contentInput = document.getElementById("noteContent");
const authorInput = document.getElementById("author");

const notesList = document.getElementById("notesList");

let notes = JSON.parse(localStorage.getItem("notes")) || [];

addBtn.onclick = () => {

    modal.style.display = "flex";

};

closeBtn.onclick = () => {

    modal.style.display = "none";

};

function formatDate(){

    const now = new Date();

    return now.toLocaleString("tr-TR");

}
function renderNotes(){

    notesList.innerHTML = "";

    const mehmetNotes = notes.filter(n => n.author === "Mehmet");
    const aynurNotes = notes.filter(n => n.author === "Aynur");

    if(mehmetNotes.length){

        notesList.innerHTML += "<h2 class='sectionTitle'>❤️ Mehmet'in Notları</h2>";

        mehmetNotes.forEach(addNoteCard);

    }

    if(aynurNotes.length){

        notesList.innerHTML += "<h2 class='sectionTitle'>❤️ Aynur'un Notları</h2>";

        aynurNotes.forEach(addNoteCard);

    }

}

function addNoteCard(note){

const index=notes.indexOf(note);

notesList.innerHTML+=`

<div class="noteCard" onclick="openNote(${index})">

<h3>${note.title}</h3>

<small>📅 ${note.date}</small>

</div>

`;

}
saveBtn.onclick = () => {

    if(titleInput.value.trim()==="" || contentInput.value.trim()===""){
        alert("Başlık ve not boş olamaz.");
        return;
    }

    notes.push({

        title:titleInput.value,
        content:contentInput.value,
        author:authorInput.value,
        date:formatDate()

    });

    localStorage.setItem("notes",JSON.stringify(notes));

    titleInput.value="";
    contentInput.value="";

    modal.style.display="none";

    renderNotes();

};

renderNotes();
function deleteNote(index){

    if(confirm("Bu not silinsin mi?")){

        notes.splice(index,1);

        localStorage.setItem("notes",JSON.stringify(notes));

        renderNotes();

    }

}
let currentIndex = -1;

function openNote(index){

currentIndex = index;

const note = notes[index];

document.getElementById("notesList").style.display = "none";

document.getElementById("noteDetail").style.display = "block";

document.getElementById("detailTitle").textContent = note.title;

document.getElementById("detailDate").textContent =
"📅 " + note.date + "   ❤️ " + note.author;

document.getElementById("detailContent").textContent =
note.content;

}
document.getElementById("backListBtn").onclick = function(){

document.getElementById("noteDetail").style.display="none";

document.getElementById("notesList").style.display="block";

};
document.getElementById("deleteCurrent").onclick = function(){

if(currentIndex==-1) return;

if(confirm("Bu not silinsin mi?")){

notes.splice(currentIndex,1);

localStorage.setItem("notes",JSON.stringify(notes));

document.getElementById("noteDetail").style.display="none";

document.getElementById("notesList").style.display="block";

renderNotes();

}

};
document.getElementById("editNote").onclick = function(){

alert("Bir sonraki adımda düzenleme ekranını yapacağız 😊");

};
