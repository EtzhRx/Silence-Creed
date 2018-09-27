const Discord = require("discord.js");
const client = new Discord.Client();
 
// Set the prefix
let prefix = "!";
client.on("message", (message) => {
  // Exit and stop if the prefix is not there or if user is a bot
  if (!message.content.startsWith(prefix) || message.author.bot) return;
 
  if (message.content.startsWith(prefix + "skitter")) {
    message.channel.send("ig: _bagus.setiawan follow ya :)");
  } else
   
  if (message.content.startsWith(prefix + "p")) {
    message.channel.send("gak bisa play music aowkowkowkook");
  }
   
  if (message.content.startsWith(prefix + "play")) {
    message.channel.send("gak bisa play music aowkowkowkook");
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
