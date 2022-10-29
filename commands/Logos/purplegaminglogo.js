const Discord = require("discord.js");
const randoms = require('../../JSON/random.json');
const express = require('express')
const app = express()
const { Canvas, resolveImage } = require('canvas-constructor')
const canvas = require('canvas')
const { registerFont } = require('canvas');
registerFont('./fonts/Montserratbl.ttf', { family: 'Montserrat' });
module.exports = {
  name: "purplegaminglogo", 
  aliases: ["pgl", ""], 
  category: "",
  description: "Create amazing logo having purple Gaming icon",
  usage: "<prefix>pgl <text>",
  run: async (client, message, args) => {

let random = randoms.random[Math.floor((Math.random() * randoms.random.length))];

const text = args.join(" ");
if (!text || text.length > 7) return message.channel.send(`**${message.author.username}** give me text having less than 7 character.
 
${random}`); 

    const img = await canvas.loadImage('https://i.ibb.co/BjrFrPf/Purple-Gaming-Logo-1.png');

 let pfp = await resolveImage(message.author.displayAvatarURL({
            format: "jpg",
            size: 1024
        }))



    let image = new Canvas(500, 500)
    .printImage(img, 0, 0, 500, 500)
    .setColor("#000000")
    .setTextFont('42px Montserratebl')
    .setTextAlign("center")
    .printWrappedText(text, 250, 350
    )
    .toBuffer();

  return message.channel.send(new Discord.MessageAttachment((await image), "atreya.png"))
   
}
}