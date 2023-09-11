const NotesModel = require('./notesModel.js');
const NotesView = require('./notesView.js');




const notesModel = new NotesModel()
notesModel.addNote('This is an example note')
const notesView = new NotesView(notesModel)
notesView.displayNotes()