require('dotenv').config();

// Update with your config settings.

module.exports = {
  development: {
    client: process.env.DB_CLIENT,
    connection: {
      user:  process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT
    },
  }
};
