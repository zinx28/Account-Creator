const mongooes = require('mongoose');

const data101 = mongooes.Schema({
    id: {
        type: String,
        required: true,
    },
    userId: {
       type: String,
       required: true,
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

module.exports = mongooes.model("athena", data101);
