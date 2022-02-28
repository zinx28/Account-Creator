const mongooes = require('mongoose');

const data101 = mongooes.Schema({
    id: {
        type: String,
        required: true,
    },
    discord: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
})

module.exports = mongooes.model("athena", data101);
