
class NotesClient{
    loadNotes(callback){
        return fetch('http://localhost:3000/notes')
            .then(response => response.json())
            .then(data => {
                callback(data)
        })
      };
    
      createNote(note, callback) {
        ///note has format {content: 'this ia s note'} to match the server`POST method which is looking for the request to have req.body.content attribute 
        const requestBody = JSON.stringify(note);
        ///stringify to convert to a json string as expected by the POST method
        return fetch("http://localhost:3000/notes", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          
          body: requestBody
        })
          .then(response => response.json())
          ///response is the array with the posted note added as can be seen on backend app
          .then(data => {
              console.log(data)
              callback(data)
              
      })}
      
      resetNotes(callback){
        return fetch('http://localhost:3000/notes', {
          method: 'DELETE'
        })
        .then(response => response.json())
        .then(data => {
            callback(data)
            
    })
      }
    
    }

      


    



module.exports = NotesClient