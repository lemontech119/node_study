const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapters = new FileSync('./db/subject.json');
const db = low(adapters);

db.defaults({ todos: [] }).write();

module.exports = db;