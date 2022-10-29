const Discord = require ('discord.js')
const { MessageEmbed } = require('discord.js')

module.exports = {
name: "commands",
aliases: ["cmds"],
category: "",
usage: "<prefix>cmds",
description: "Show all the commands available.",
run: async(client, message, args) => {
  

  
  message.channel.send(`Here's a list of the current commands:  \`\`\`diff
+ armylogo <text>
+ dragonlogo <text>
+ pirateslogo <text>
+ prologo <text>
+ reskulllogo <text>
+ wolflogo <text>
+ deltalogo <text>
+ ninjalogo <text>
+ purplegaminglogo <text>
+ witchlogo <text>
+ retrogaminglogo <text>
+ pandalogo <text>
 \`\`\`

Its prefix is \`!\`.`)
}
}