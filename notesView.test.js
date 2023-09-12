/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesView = require('./notesView');
const NotesModel = require('./notesModel');

describe('testing view', () => {
    it('adds and displays notes on click', () => {
        // 1. Arrange - instantiate our View class
        document.body.innerHTML = fs.readFileSync('./index.html');
        const notesModel = new NotesModel()
        const notesView = new NotesView(notesModel)
        const inputEl = document.querySelector('#message-input');
        inputEl.value = "adding a note"
        notesView.buttonEl.click();
        expect(document.querySelectorAll('div.note').length).toBe(1);
        expect(document.querySelector('div.note').textContent).toBe("adding a note");   
    });
    it('adding second note, no duplicates', () => {
        // 1. Arrange - instantiate our View class
        document.body.innerHTML = fs.readFileSync('./index.html');
        const notesModel = new NotesModel()
        const notesView = new NotesView(notesModel)
        const inputEl = document.querySelector('#message-input');
        inputEl.value = "adding a note"
        notesView.buttonEl.click();
        inputEl.value = "adding second note"
        notesView.buttonEl.click();
        expect(document.querySelectorAll('div.note').length).toBe(2);
        expect(document.querySelectorAll('div.note')[0].textContent).toBe("adding a note");
        expect(document.querySelectorAll('div.note')[1].textContent).toBe("adding second note")   
    });
    });