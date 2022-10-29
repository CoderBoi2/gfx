const Discord = require ('discord.js')
const { MessageEmbed } = require('discord.js')

module.exports = {
name: "als",
aliases: ["als"],
category: "",
usage: "<prefix>cmds",
description: "Show all the commands available.",
run: async(client, message, args) => {
  

  
  message.channel.send(`Here's a list of the current commands:  \`\`\`diff
+ al <text>
+ dl <text>
+ pal <text>
+ prol <text>
+ rsl <text>
+ wol <text>
+ deg <text>
+ nl <text>
+ pgl <text>
+ wil <text>
+ rgl <text>
+ panl <text>
 \`\`\`

Its prefix is \`!\`.`)
}
}