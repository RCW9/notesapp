
class NotesClient{
    loadNotes(callback){
        return fetch('http://localhost:3000/notes')
            .then(response => response.json())
            .then(data => {
                callback(data)
        })
      };
    
      createNote(note, callback) {
        const requestBody = JSON.stringify(note);
        return fetch("http://localhost:3000/notes", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: requestBody
        })
          .then(response => response.json())
          .then(data => {
              callback(data)
      })}}

    



module.exports = NotesClient