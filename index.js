const NotesModel = require('./notesModel.js');
const NotesView = require('./notesView.js');




const notesModel = new NotesModel()
const notesView = new NotesView(notesModel)
