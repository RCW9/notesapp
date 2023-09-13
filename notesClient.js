
class NotesClient{
    loadNotes(callback){
        fetch('https://http://localhost:3000/notes')
            .then(response => response.json())
            .then(data => {
                callback(data)
        });
    }}


module.exports = NotesClient