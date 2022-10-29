const { default_prefix } = require("./config.json")
 const DisTube = require("distube")
 const Canvas = require ("canvas");
const { DiscordTogether } = require('discord-together');
const { config } = require("dotenv");
const fetch = require("node-fetch");
const db =require("quick.db");
const moment = require("moment");
const { CanvasSenpai } = require("canvas-senpai")
const canva = new CanvasSenpai();
const snekfetch = require("snekfetch")
const translate = require('google-translate-api');
const { emotes , emoji} =require("./config.json")
let cooldown = new Set();
let cdseconds = 3;
const Discord = require('discord.js')
const discord = require('discord.js')///this is ok bruh
const disbut = require('discord-buttons')
const client = new Discord.Client()
disbut(client)
const { MessageMenuOption, MessageMenu } = require("discord-buttons");
const { Client, MessageEmbed }  = require('discord.js');



const yts = require('yt-search')

client.queue = new Map();
client.vote = new Map();
const ready  = require("./handlers/ready.js")

client.commands = new discord.Collection();
client.aliases = new discord.Collection();

["command"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});
client.queue = new Map()
process.on('unhandledRejection', console.error);

  const { addexp } = require("./handlers/xp.js");

client.on("message", async message => {
    
  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.content.startsWith(default_prefix)) return;

  if(cooldown.has(message.author.id)){

    return message.channel.send(`**${message.author.username}** wait \`3\` seconds to use this command!`)
  }
  cooldown.add(message.author.id);
  setTimeout(() => {
cooldown.delete(message.author.id)}, cdseconds * 1000)

  if (!message.member)
    message.member = message.guild.fetchMember(message);

  const args = message.content
    .slice(default_prefix.length)
    .trim()
    .split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;

  let command = client.commands.get(cmd);

  if (!command) command = client.commands.get(client.aliases.get(cmd));

  if (command) command.run(client, message, args);
  return addexp(message)
});

 
client.on("ready", () => {
    client.user.setStatus("idle");
    console.log("Dumb bot is dumbbb")
});


const fs = require('fs')
//express
require('http').createServer((req, res) => res.end(`Bot is online Trivee!`)).listen(3000)
//auto kill

setInterval(() => {
  if (!client || !client.user) {
    console.log("Client Not Login, Process Kill")
    process.kill(1);
  }
}, 5000);
client.login(process.env.TOKEN);