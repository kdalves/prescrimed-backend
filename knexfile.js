require('dotenv').config();

// Update with your config settings.

module.exports = {
  client: process.env.DB_CLIENT,
  connection: {
    host:  process.env.DB_HOST,
    user:  process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT
  }
};
