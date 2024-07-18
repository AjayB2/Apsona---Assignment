document.addEventListener('DOMContentLoaded', () => {
  const newNoteBtn = document.getElementById('new-note');
  const notesContainer = document.getElementById('notes');
  const searchInput = document.getElementById('search');

  newNoteBtn.addEventListener('click', createNewNote);
  searchInput.addEventListener('input', searchNotes);

  function createNewNote() {
    const note = document.createElement('div');
    note.classList.add('note');
    note.contentEditable = true;
    notesContainer.appendChild(note);
  }

  function searchNotes() {
    const query = searchInput.value.toLowerCase();
    const notes = document.querySelectorAll('.note');
    notes.forEach(note => {
      if (note.textContent.toLowerCase().includes(query)) {
        note.style.display = 'block';
      } else {
        note.style.display = 'none';
      }
    });
  }
});
