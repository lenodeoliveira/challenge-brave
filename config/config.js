require('dotenv').config();
const { DB_HOST, DB_USER, DB_PASS } = process.env;

module.exports = {
  "development": {
    "username": DB_USER,
    "password": DB_PASS,
    "database": "brave_ag_dev",
    "host": DB_HOST,
    "dialect": "postgres",
  },
  "test": {
    "username": DB_USER,
    "password": DB_PASS,
    "database": "brave_ag_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": DB_USER,
    "password": DB_PASS,
    "database": "brave_ag_production",
    "host": DB_HOST,
    "dialect": "postgres"
  }
}
