const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
client.cmdlist = new Discord.Collection();
const config = require(`./config.json`);
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

client.once('ready', () => {
	console.log(`${config.log} ${client.user.tag} is online.`)
	client.user.setActivity("Fortnite", { type: "PLAYING" })
});
fs.readdir("./commands/", (err, files) => {
	if (err) console.log(err)

	let jsfile = files.filter(f => f.split(".").pop() === "js")
	if (jsfile.length <= 0) {
		return console.log(`${config.log} Couldn't Find Commands!`);
	}
	jsfile.forEach((f, i) => {
		let pull = require(`./commands/${f}`);
		client.commands.set(pull.config.name, pull);
		pull.config.aliases.forEach(alias => {
			client.aliases.set(alias, pull.config.name)
		});
	});
});

client.on("message", async message => {

	let prefix = config.prefix;
	let messageArray = message.content.toLowerCase().split(" ");
	let cmd = messageArray[0];
	const args = message.content
		.slice(prefix.length)
		.trim()
		.split(/ +/);
	if (!message.content.toUpperCase().startsWith(prefix)) return;
	let commandfile = client.commands.get(cmd.slice(prefix.length)) || client.commands.get(client.aliases.get(cmd.slice(prefix.length)))
	if (commandfile) commandfile.run(client, message, args)
})

client.login('PUT-TOKEN-HERE');
