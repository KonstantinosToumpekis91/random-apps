document.addEventListener("DOMContentLoaded", () => {
  const $form = document.querySelector("form");
  const $notesContainer = document.querySelector("#notes-container");
  const notes = JSON.parse(localStorage.getItem("notes")) || [];

  const renderNotes = () => {
    $notesContainer.innerHTML = "";
    notes.forEach((note, i) => {
      const $el = document.createElement("div");
      $el.id = `note-${i}`;
      $el.innerHTML = `<div class="note-content">
                        <p class="note-text">${note}</p>
                        <button class="btn-delete" id="delete-${i}">Διαγραφή</button>
                      </div>`;
      $notesContainer.appendChild($el);
    });
  };

  $form.addEventListener("submit", (e) => {
    console.log(e);
    e.preventDefault();
    const value = e.target.note.value;
    if (value === "") {
      return;
    }
    notes.push(value);
    localStorage.setItem("notes", JSON.stringify(notes));
    e.target.note.value = "";
    renderNotes();
  });

  $notesContainer.addEventListener("click", (e) => {
    if (e.target.className.includes("btn")) {
      const id = e.target.id;
      const stringParts = id.split("-");
      const index = Number(stringParts[1]);
      console.log(index);
      notes.splice(index, 1);
      localStorage.setItem("notes", JSON.stringify(notes));
      renderNotes();
    }
  });
  renderNotes();
});
