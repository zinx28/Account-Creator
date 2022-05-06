const Discord = require("discord.js");
const mongoose = require('mongoose');
const config = require(`../config.json`);
const Data = require('../models/user');

module.exports.run = async (client, message, args) => {
    Data.findOne({
        discord: message.author.id
    }, (err, Getdata) => {
        if (err) console.log(err);
        const reason = args.slice(1).join(" ") || null
        if (!reason == ! null) return message.channel.send(`Failed to change username.The Username Cant be null.`);
        if (Getdata) { } else {
            return message.reply(`You dont have an account! Please do ${config.prefix}setup-user {username} in DMs with me eg : ${config.prefix}setup-user Account123`)
        }
        Data.findOne({ 'displayName': reason }, (err1, DataBOI1) => {
            if (DataBOI1) {
                if (DataBOI1.displayName == reason.toString()) {
                    ReadyBOI = false
                    return message.channel.send(`Username is already in use please try again (run ${config.prefix}setup-user again)`)
                }
            } else {
                Data.collection.updateOne({ "discord": message.author.id }, { $set: { "displayName": reason } })
                const embed = new Discord.MessageEmbed()
                    .setColor('#0077FC')
                    .setTitle('Username Changed')
                    .setDescription(`Updated your Username to ${reason}! (relog to show the change)`);
                return message.reply(embed)
            }
        })

    })

}


module.exports.config = {
    name: "change-username",
    description: "",
    usage: "!change-username",
    accessableby: "Members",
    aliases: ["username"]
}
