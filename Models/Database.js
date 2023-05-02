var context = require('mysql2')

const db = context.createConnection({
    host:"localhost",
    user:"root",
    database:"satisyonetimi",
    password:"celil123"
});

module.exports = db;