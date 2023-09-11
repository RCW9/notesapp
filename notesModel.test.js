
const NotesModel = require('./notesModel.js')

describe('NotesModel', () => {
    it('initialises with an empty array', () => {
        const model = new NotesModel();
        expect(model.getNotes()).toEqual([]);
    });
    it('adds a note', () => {
        const model = new NotesModel();
        model.addNote('Buy milk');
        model.addNote('Go to the gym');
        expect(model.getNotes()).toEqual(['Buy milk', 'Go to the gym']);
    });
    it('clear empties the list', () => {
        const model = new NotesModel();
        model.addNote('Buy milk');
        model.addNote('Go to the gym');
        model.reset();
        expect(model.getNotes()).toEqual([]);
    });
});