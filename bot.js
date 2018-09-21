const prefix = "!";
const Discord = require('discord.js');
const client = new Discord.Client();

client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  } else
 
  if (message.content.startsWith("foo")) {
    message.channel.send("bar!");
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

