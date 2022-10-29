const Discord = require("discord.js");
const randoms = require('../../JSON/random.json');
const express = require('express')
const app = express()
const { Canvas, resolveImage } = require('canvas-constructor')
const canvas = require('canvas')
const { registerFont } = require('canvas');
registerFont('./fonts/AlfaSlabOne.ttf', { family: 'Alfa Slab One' });
module.exports = {
  name: "ninjalogo", 
  aliases: ["nl", ""], 
  category: "",
  description: "Create amazing logo having Ninja icon",
  usage: "<prefix>nl <text>",
  run: async (client, message, args) => {

let random = randoms.random[Math.floor((Math.random() * randoms.random.length))];

const text = args.join(" ");
if (!text || text.length > 6) return message.channel.send(`**${message.author.username}** give me text having less than 6 character. 
 
${random}`); 

    const img = await canvas.loadImage('https://i.ibb.co/9bGZTr4/Game-Ninja-Logo.png');

 let pfp = await resolveImage(message.author.displayAvatarURL({
            format: "jpg",
            size: 1024
        }))



   
  let image = new Canvas(500, 500)
    .printImage(img, 0, 0, 500, 500)
    .setColor("#FFFFFF")
    .setTextFont('50px AlfaSlabOne')
    .setTextAlign("center")
    .printWrappedText(text, 250, 334)
    .toBuffer();

  return message.channel.send(new Discord.MessageAttachment((await image), "atreya.png"))
   
}
}