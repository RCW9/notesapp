

class NotesView{
    constructor(model, client){
        this.model = model;
        this.client = client
        this.buttonEl = document.querySelector('#add-note-button');
        this.resetbuttonEl = document.querySelector('#reset-note-button');
        this.mainContainerEl = document.querySelector('#main-container');
        console.log(this.mainContainerEl)
        this.buttonEl.addEventListener('click', () => {
            const inputEl = document.querySelector('#message-input');
            this.clearDisplayedNotes()
            this.postNote(inputEl);
            inputEl.value = ""
        });
        this.resetbuttonEl.addEventListener('click', () => {
            console.log('You have reset notes')
            this.clearDisplayedNotes()
            this.resetNotesData()
        });
    }
    ///takes the array returned from model.getNotes and sets the html to have each note as a div with a claass id of note///
    displayNotes(){
        const notes = this.model.getNotes()
        notes.forEach((note) => {
            const newDiv = document.createElement("div");
            newDiv.textContent = note
            newDiv.setAttribute( "class", "note" );
            this.mainContainerEl.append(newDiv)

        })};
    
    /// to add note to array without saving to backend
    addNewNote(inputEl){
        this.model.addNote(inputEl.value);
        this.clearDisplayedNotes();
        this.displayNotes();
    };
    

    ///removes all divs with class note
    clearDisplayedNotes(){
        const allNotes = document.querySelectorAll('div.note')
        allNotes.forEach((element )=> {
            element.remove()

        })
    };


    ///the functions below post/delete and display back end data
    ///fetches notes array from server, sets the array from the server as the model class array, calls diplay on the model class array
    displayNotesFromApi(){
        return this.client.loadNotes(apiNotes => 
        this.model.setNotes(apiNotes))
            .then(() => this.displayNotes())  
    };

    ///sets the note object to be used as POST argument for createNote client method
    ///posts a note to the server array with createNote method
    //sets returned added to server array as the model class array
    //calls display notes on model aray
    postNote(inputEl){
        const newNote = {content:inputEl.value}
        return this.client.createNote(newNote, apiNotes => 
            this.model.setNotes(apiNotes))
                .then(() => this.displayNotes()) 
    
};
    resetNotesData(){
        this.client.resetNotes((data) => 
            this.model.setNotes(data))
            .then(() => this.displayNotes()) 

        }
    }


module.exports = NotesView