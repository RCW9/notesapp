const NotesModel = require('./notesModel.js');
const NotesView = require('./notesView.js');
const NotesClient = require('./notesClient.js')



const notesClient = new NotesClient();
const notesModel = new NotesModel();
const notesView = new NotesView(notesModel, notesClient);
notesView.displayNotesFromApi();