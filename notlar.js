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

    notesList.innerHTML += `
    <div class="noteCard">
        <h3>${note.title}</h3>
        <p>${note.content}</p>
        <small>
        ❤️ ${note.author}<br>
        📅 ${note.date}
        </small>
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
