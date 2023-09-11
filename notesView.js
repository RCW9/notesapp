

class NotesView{
    constructor(model){
        this.model = model
        this.mainContainerEl = document.querySelector('#main-container');
        console.log(this.mainContainerEl);
    }

    displayNotes(){
        const notes = this.model.getNotes()
        notes.forEach((note) => {
            const newDiv = document.createElement("div");
            newDiv.textContent = note
            newDiv.setAttribute( "class", "note" );
            this.mainContainerEl.append(newDiv)

        })
}}

module.exports = NotesView