const randoms = require('../../JSON/random.json');
const Discord = require("discord.js");
const express = require('express')
const app = express()
const { Canvas, resolveImage } = require('canvas-constructor')
const canvas = require('canvas')
const { registerFont } = require('canvas');
registerFont('./fonts/Anton.ttf', { family: 'Anton' });
module.exports = {
  name: "dragonlogo", 
  aliases: ["dl", ""], 
  category: "",
  description: "Create amazing logo having dragon icon",
  usage: "<prefix>dragonlogo <text>",
  run: async (client, message, args) => {
let random = randoms.random[Math.floor((Math.random() * randoms.random.length))];

const text = args.join(" ");
if (!text || text.length > 15) return message.channel.send(`**${message.author.username}** give me text having less than 15 character.
 
${random}`); 

    const img = await canvas.loadImage('https://i.ibb.co/d4n8bMb/logo4.png');

 let pfp = await resolveImage(message.author.displayAvatarURL({
            format: "jpg",
            size: 1024
        }))



    let image = new Canvas(500, 500)
    .printImage(img, 0, 0, 500, 500)
    .setColor("#FFFFFF")
    .setTextFont('60px Anton')
    .setTextAlign("center")
    .printWrappedText(text, 250, 418)
    .toBuffer();

  return message.channel.send(new Discord.MessageAttachment((await image), "atreya.png"))
   
}
}