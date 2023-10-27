import app from './app.js';
import connectToDatabase from './db/connection.js';
// Connections and Listeners
//only after we connect to the database do we want to turn on the server.
connectToDatabase()
    .then(() => {
    app.listen(5000, () => console.log('Listening on port 5000 AND database connected.'));
})
    .catch((err) => console.log(err));
//# sourceMappingURL=index.js.map