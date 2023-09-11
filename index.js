const NotesModel = require('./notesModel.js')


console.log('The notes app is running')
const notesModel = new NotesModel()
console.log(notesModel.getNotes())
notesModel.addNote('hello')
console.log(notesModel.getNotes())