const Discord = require("discord.js");
const client = new Discord.Client();
 
// Set the prefix
let prefix = ", ";
client.on("message", (message) => {
  // Exit and stop if the prefix is not there or if user is a bot
  if (!message.content.startsWith(prefix) || message.author.bot) return;
 
  if (message.content.startsWith(prefix + "skip")) {
    message.channel.send("Oni-Chan");
  } else
   
  if (message.content.startsWith(prefix + "p")) {
    message.channel.send("Oni-Chan");
  }
   
  if (message.content.startsWith(prefix + "play")) {
    message.channel.send("Oni-Chan");
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
