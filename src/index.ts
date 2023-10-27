import app from './app.js';
import connectToDatabase from './db/connection.js';

// Connections and Listeners

//only after we connect to the database do we want to turn on the server.
const PORT = process.env.PORT || 5000;
connectToDatabase()
  .then(() => {
    app.listen(PORT, () =>
      console.log('Listening on port 5000 AND database connected.')
    );
  })
  .catch((err) => console.log(err));
