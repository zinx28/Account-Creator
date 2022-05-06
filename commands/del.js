const Discord = require("discord.js");
const mongoose = require('mongoose');
const config = require(`../config.json`);
const Data = require('../models/user')
const Data1 = require('../models/a')
const Data2 = require('../models/cc')
const Data3 = require('../models/f')

module.exports.run = async (client, message, args) => {
    Data.findOne({
        discord: message.author.id
    }, (err, Getdata) => {
        if (err) console.log(err);
        if (Getdata) { 

        Data.collection.findOneAndDelete({ "discord": message.author.id })
        Data1.collection.findOneAndDelete({ "discord": message.author.id })
        Data2.collection.findOneAndDelete({ "discord": message.author.id })
        Data3.collection.findOneAndDelete({ "discord": message.author.id })
        const embed = new Discord.MessageEmbed()
            .setColor('#0077FC')
            .setTitle('Deleted Your Account')
            .setDescription("Your account is now deleted");
        return message.reply(embed)

        } else {
            return message.reply(`You dont have an account!`)
        }

       
    })   
}


module.exports.config = {
    name: "delete",
    description: "",
    usage: "!delete",
    accessableby: "Members",
    aliases: ["del"]
}
