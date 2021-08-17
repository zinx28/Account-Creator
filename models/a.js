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
    },
    stage: {
        type: String,
        default: "season12"
    },
    banner: {
        type: String,
        default: ""
    },
    bannercolor: {
        type: String,
        default: ""
    },
    character: {
        type: String,
        default: ""
    },
    charactervariants: {
        type: Array,
        default: ""
    },
    backpack: {
        type: String,
        default: ""
    },
    backpackvariants: {
        type: Array,
        default: ""
    },
    pickaxe: {
        type: String,
        default: ""
    },
    pickaxevariants: {
        type: Array,
        default: ""
    },
    glider: {
        type: String,
        default: ""
    },
    glidervaraints: {
        type: Array,
        default: ""
    },
    skydivecontrail: {
        type: String,
        default: ""
    },
    dance: {
        type: Array,
        default: [
            "",
            "",
            "",
            "",
            "",
            "",
        ]
    },
    itemwrap: {
        type: Array,
        default: [
            "",
            "",
            "",
            "",
            "",
            "",
            ""
        ]
    },
    musicpack: {
        type: String,
        default: ""
    },
    loadingscreen: {
        type: String,
        default: ""
    }
})

module.exports = mongooes.model("athena", data101);
