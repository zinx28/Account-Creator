const Discord = require("discord.js");
const mongoose = require('mongoose');
const crypto = require("crypto");
const bcrypt = require("bcrypt");
const config = require(`../config.json`);

const Data = require('../models/user')
const Data1 = require('../models/a')
const Data2 = require('../models/cc')
const Data3 = require('../models/f')
// if alot of people is using this then fix the server to dm command since if there dms are off then it gives errors
module.exports.run = async (client, message, args) => {
    if (message.channel.type === "dm") {
        Data.findOne({
            discord: message.author.id
        }, (err, Getdata) => {
            const reason = args.slice(1).join(" ") || null
            if (!Getdata) { } else {
                return message.channel.send("Failed to create account. The username may already be taken or you might already have an account")
            }
            if (!reason == ! null) return message.channel.send(`Failed to create account. The username may already be taken or you might already have an account.`);

            Data.findOne({ 'displayName': reason }, (err1, DataBOI1) => {
                if (DataBOI1) {
                    if (DataBOI1.displayName == reason.toString()) {
                        ReadyBOI = false
                        return message.channel.send(`Username is already in use please try again (run ${congig.prefix}setup-user again)`)
                    }
                } else {

                    const idBOI = crypto.randomBytes(16).toString('hex')
                    var ReadyBOI
                    ReadyBOI = true
                    const newMadeDataF = new Data3({
                        id: idBOI,
                        discord: message.author.id
                    })
                    newMadeDataF.save().catch(err1 => console.log(err1))

                    //User
                    const newMadeDataUSER = new Data({
                        id: idBOI,
                        createdAt: new Date(),
                        allowsGifts: true,
                        discord: message.author.id,
                        displayName: reason,
                        email: reason + "@Fortnite.Dev",
                        password: bcrypt.hashSync(idBOI, bcrypt.genSaltSync(10))
                    })
                    newMadeDataUSER.save().catch(err1 => console.log(err1))

                    //CC
                    const newMadeDataCC = new Data2({
                        id: idBOI,
                        discord: message.author.id,
                        mtxplatform: "EpicPC"
                    })
                    newMadeDataCC.save().catch(err1 => console.log(err1))

                    //Athena
                    const newMadeDataA = new Data1({
                        id: idBOI,
                        discord: message.author.id,
                    })
                    newMadeDataA.save().catch(err1 => console.log(err1))
                    // gotta work on this message
                    return message.channel.send(`Account Created Email : ${reason + "@Account.Dev"} Password: ${idBOI}`)
                }
            }
            )

        })
    } else {

        Data.findOne({
            userId: message.author.id
        }, (err, Getdata) => {
            const reason = args.slice(1).join(" ") || null
            if (!Getdata) { } else {
                return message.channel.send("Failed to create account. The username may already be taken or you might already have an account")
            }
            if (!reason == ! null) return message.channel.send(`Failed to create account. The username may already be taken or you might already have an account.`);
            Data.findOne({ 'displayName': reason }, (err1, DataBOI1) => {
                if (DataBOI1) {
                    if (DataBOI1.displayName == reason.toString()) {
                        ReadyBOI = false
                        return message.member.send(`Username is already in use please try again (run ${congig.prefix}setup-user again)`)
                    }
                } else {

                    const idBOI = crypto.randomBytes(16).toString('hex')
                    var ReadyBOI
                    ReadyBOI = true
                    const newMadeDataF = new Data3({
                        id: idBOI,
                        userId: message.author.id
                    })
                    newMadeDataF.save().catch(err1 => console.log(err1))

                    //User
                    const newMadeDataUSER = new Data({
                        id: idBOI,
                        createdAt: new Date(),
                        allowsGifts: true,
                        userId: message.author.id,
                        displayName: reason,
                        email: reason + "@Fortnite.Dev",
                        password: bcrypt.hashSync(idBOI, bcrypt.genSaltSync(10))
                    })
                    newMadeDataUSER.save().catch(err1 => console.log(err1))

                    //CC
                    const newMadeDataCC = new Data2({
                        id: idBOI,
                        userId: message.author.id,
                        mtxplatform: "EpicPC"
                    })
                    newMadeDataCC.save().catch(err1 => console.log(err1))

                    //Athena
                    const newMadeDataA = new Data1({
                        id: idBOI,
                        userId: message.author.id,
                    })


                    // I Gotta Add DM Thingy (Make Sure Your Dms are on or bot will crash i think)
                    newMadeDataA.save().catch(err1 => console.log(err1))
                    // gotta work on this message
                    message.member.send(`Account Created Email : ${reason + "@Account.Dev"} Password: ${idBOI}`)
                    message.reply('I sent you your info!');


                }

            })

        })
    }
}
module.exports.config = {
    name: "setup-user",
    description: "",
    usage: "!setup-user",
    accessableby: "Members",
    aliases: ["user", "signup"]
}
