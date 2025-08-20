
// This code sets up a connection to a PostgreSQL database using the `pg` library.
// A new `Pool` instance is created with the required database connection details, including:
// - `user`: the database username (in this case, "postgres")
// - `host`: the database server's hostname (here, "localhost")
// - `database`: the name of the database ("production_user_server")
// - `password`: the password for the database user ("1331")
// - `port`: the port on which the database server is running (5432)
//
// The `connect` method is called to establish the connection.
// If there's an error during connection, it logs an error message to the console.
// Otherwise, it confirms that the connection to the PostgreSQL database was successful.

const { Pool } = require("pg");
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "production_user_server",
  password: "1331",
  port: 5432,
});

pool.connect(function (err) {
  if (err) {
    console.log("Error connecting to PostgreSQL database");
  } else {
    console.log("PostgreSQL Database connected successfully");
  }
});

module.exports = pool;