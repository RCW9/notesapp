const NotesClient = require('./notesClient');
const NotesModel = require('./notesModel');
const NotesView = require('./notesView');

    // This makes `fetch` available to our test
    // (it is not by default, as normally `fetch` is only
    // available within the browser)
    require('jest-fetch-mock').enableMocks()

    describe('notesClient Class', () => {
    it('calls fetch and returns data', (done) => {
        // 1. Instantiate the class
        const notesClient = new NotesClient();

        // 2. We mock the response from `fetch`
        // The mocked result will depend on what your API
        // normally returns — you want your mocked response
        // to "look like" as the real response as closely as
        // possible (it should have the same fields).
        fetch.mockResponseOnce(JSON.stringify(
            ['This note is coming from the server']
        ));
        // 3. We call the method, giving a callback function.
        // When the HTTP response is received, the callback will be called.
        // We then use `expect` to assert the data from the server contain
        // what it should.
        notesClient.loadNotes((returnedDataFromApi) => {
        expect(returnedDataFromApi[0]).toBe('This note is coming from the server');
        // 4. Tell Jest our test can now end.
        done();
        });
    });
    });