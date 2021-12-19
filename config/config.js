require('dotenv').config();
const { 
  DB_HOST, 
  DB_USER, 
  DB_PASS, 
  DIALECT,
  DB_DEV_NAME,
  DB_TEST_NAME,
  DB_PROD_NAME

} = process.env;

module.exports = {
  "development": {
    "username": DB_USER,
    "password": DB_PASS,
    "database": DB_DEV_NAME,
    "host": DB_HOST,
    "dialect": DIALECT,
  },
  "test": {
    "username": DB_USER,
    "password": DB_PASS,
    "database":  DB_TEST_NAME,
    "host": DB_HOST,
    "dialect": DIALECT
  },
  "production": {
    "username": DB_USER,
    "password": DB_PASS,
    "database": DB_PROD_NAME,
    "host": DB_HOST,
    "dialect": DIALECT
  }
}
