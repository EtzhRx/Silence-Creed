const Discord = require("discord.js");
const client = new Discord.Client();
 
// Set the prefix
let prefix = "!";
client.on("message", (message) => {
  // Exit and stop if the prefix is not there or if user is a bot
  if (!message.content.startsWith(prefix) || message.author.bot) return;
 
  if (message.content.startsWith(prefix + "play")) {
    message.channel.send("Playing");
  } else
   
  if (message.content.startsWith(prefix + "p")) {
    message.channel.send("Playing");
  }
   
  if (message.content.startsWith(prefix + "s")) {
    message.channel.send("Skip");
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
