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
