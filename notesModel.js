
class NotesModel{
    constructor(){
        this.notesList = []
    }

    getNotes(){
        return this.notesList
    }

    addNote(note){
        this.notesList.push(note)
    }

    reset(){
        this.notesList = []
    }

    setNotes(apiNotes){
        this.notesList = apiNotes
    }
}

module.exports = NotesModel