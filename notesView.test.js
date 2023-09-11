/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesView = require('./notesView');
const NotesModel = require('./notesModel');

describe('testing view', () => {
    it('displays 3 divs', () => {
        // 1. Arrange - instantiate our View class
        document.body.innerHTML = fs.readFileSync('./index.html');
        const notesModel = new NotesModel()
        notesModel.addNote('model')
        notesModel.addNote('view')
        notesModel.addNote('controller')
        const notesView = new NotesView(notesModel)
        notesView.displayNotes()
        expect(document.querySelectorAll('div').length).toBe(4) 
        expect(document.querySelectorAll('div.note').length).toBe(3)   
    });
    });