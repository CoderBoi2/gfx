const Discord = require("discord.js");
const randoms = require('../../JSON/random.json');
const express = require('express')
const app = express()
const { Canvas, resolveImage } = require('canvas-constructor')
const canvas = require('canvas')
const { registerFont } = require('canvas');
registerFont('./fonts/Vampire Wars.ttf', { family: 'Vampire Wars' });
module.exports = {
  name: "deltalogo", 
  aliases: ["deg", ""], 
  category: "",
  description: "Create amazing logo having delta icon",
  usage: "<prefix>deltal <text>",
  run: async (client, message, args) => {

let random = randoms.random[Math.floor((Math.random() * randoms.random.length))];

const text = args.join(" ");
if (!text || text.length > 14) return message.channel.send(`**${message.author.username}** give me text having less than 14 character. 
 
${random}`); 


 let pfp = await resolveImage(message.author.displayAvatarURL({
            format: "jpg",
            size: 1024
        }))


const img = await canvas.loadImage('https://i.ibb.co/3sM8ZRB/delta.png');

  let image = new Canvas(500, 500)
    .printImage(img, 0, 0, 500, 500)
    .setColor("#FFFFFF")
    .setTextFont('51px Vampire Wars')
    .setTextAlign("center")
    .printWrappedText(text, 250, 394)
    .toBuffer();

  return message.channel.send(new Discord.MessageAttachment((await image), "atreya.png"))
   
}
}