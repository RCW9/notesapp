

class NotesView{
    constructor(model){
        this.model = model;
        this.buttonEl = document.querySelector('#add-note-button');
        this.mainContainerEl = document.querySelector('#main-container');
        this.buttonEl.addEventListener('click', () => {
            const inputEl = document.querySelector('#message-input');
            this.addNewNote(inputEl);
        });
    }

    displayNotes(){
        const notes = this.model.getNotes()
        notes.forEach((note) => {
            const newDiv = document.createElement("div");
            newDiv.textContent = note
            newDiv.setAttribute( "class", "note" );
            this.mainContainerEl.append(newDiv)

        })};
    
    addNewNote(inputEl){
        this.model.addNote(inputEl.value)
        this.displayNotes()
    }
};

module.exports = NotesView