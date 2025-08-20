// This code establishes a connection to a MongoDB database using Mongoose.
// The `connectionDb` function takes a `URL` parameter (the database connection string)
// and connects to the database asynchronously. If the connection is successful,
// a message is logged to the console indicating the connection's success,
// along with the provided database URL.
// Finally, the function is exported as part of an object for use in other files.

const mongoose = require("mongoose");

async function connectionDb(URL) {
  return mongoose.connect(URL).then(() => {
    console.log(`database is connected at URL : ${URL}`);
  });
}

module.exports = { connectionDb };
