const mongooes = require('mongoose');
const data101 = mongooes.Schema({
    "id":String,
    "createdAt":Date,
    "displayName":String,
    "email":String,
    "password":String,
    "discord": String
})

module.exports = mongooes.model("users", data101);
