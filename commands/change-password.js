const mongoose = require('mongoose');
const config = require(`../config.json`);
const crypto = require("crypto");
const bcrypt = require("bcrypt");
const Data = require('../models/user');
mongoose.connect(`${config.mon}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log(`${config.log} Connected to the database!`);
}).catch((err) => {
    console.log(err);
})

module.exports.run = async (client, message, args) => {
    Data.findOne({
        userId: message.author.id
    }, (err, Getdata) => {
        if (err) console.log(err);
        const reason = args.slice(1).join(" ") || null
        if (Getdata) { } else {
            return message.reply(`You dont have an account! Please do ${config.prefix}setup-user {username} in DMs with me eg : ${config.prefix}setup-user FortniteDev`)
        }
        if (!reason == ! null) return message.channel.send(`Failed to change password.The Password Cant be null.`);

        const mongoose = require('mongoose');
        const config = require(`../config.json`);
        const Data = require('../models/user');
        mongoose.connect(`${config.mon}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() => {
            console.log(`${config.log} Connected to the database!`);
        }).catch((err) => {
            console.log(err);
        })

        module.exports.run = async (client, message, args) => {
            Data.findOne({
                userId: message.author.id
            }, (err, Getdata) => {
                if (err) console.log(err);
                const reason = args.slice(1).join(" ") || null
                if (Getdata) { } else {
                    return message.reply(`You dont have an account! Please do ${config.prefix}setup-user {username} in DMs with me eg : ${config.prefix}setup-user FortniteDev`)
                }
                if (!reason == ! null) return message.channel.send(`Failed to change password.The Password Cant be null.`);
                Data.collection.updateOne({ "userId": message.author.id }, { $set: { "password": bcrypt.hashSync(reason, bcrypt.genSaltSync(10)) } })
                return message.channel.send(`Updated your Password to ${reason}! (relog to show the change)`)
            })
        }
    })
}
module.exports.config = {
    name: "change-password",
    description: "",
    usage: "!change-password",
    accessableby: "Members",
    aliases: ["password"]
}
