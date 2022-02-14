require('dotenv').config();
let config;

if(process.env.POSTGRESQL_URI) {
  config = {
    DB_URI: process.env.POSTGRESQL_URI
  }
} else {
  config = {
    HOST: "",
    USER: "",
    PASSWORD: "",
    DB: "",
    dialect: "",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
}

module.exports = config;
