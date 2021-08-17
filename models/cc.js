const mongooes = require('mongoose');

const data101 = mongooes.Schema({
    id: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    mtxplatform: {
        type: String,
        default: "EpicPC"
    },
    userId: String
})

module.exports = mongooes.model("commoncores", data101);
