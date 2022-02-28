const Discord = require("discord.js");
const config = require(`../config.json`);
module.exports.run = async (client, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setColor('#0077FC')
        .setTitle('Help')
        .addFields(
            {name: 'Prefix', value: `${config.prefix}`},
            {name: 'setup-user, signup', value: `Make an account ${config.prefix}signup {username} Eg : ${config.prefix}signup FortniteDev`},
            {name: 'change-username, username', value: 'Changes the account Username'},
        );
        message.channel.send(embed)
}

module.exports.config = {
    name: "help",
    description: "",
    usage: "!help",
    accessableby: "Members",
    aliases: ['h']
}
