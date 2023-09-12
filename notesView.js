

class NotesView{
    constructor(model){
        this.model = model;
        this.buttonEl = document.querySelector('#add-note-button');
        this.mainContainerEl = document.querySelector('#main-container');
        console.log(this.mainContainerEl)
        this.buttonEl.addEventListener('click', () => {
            const inputEl = document.querySelector('#message-input');
            this.addNewNote(inputEl);
            inputEl.value = ""
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
        this.model.addNote(inputEl.value);
        this.clearDisplayedNotes();
        this.displayNotes();
    };

    clearDisplayedNotes(){
        const allNotes = document.querySelectorAll('div.note')
        console.log(allNotes)
        allNotes.forEach((element )=> {
            element.remove()

        })

    };

};

module.exports = NotesView