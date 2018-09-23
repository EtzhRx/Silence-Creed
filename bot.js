const Discord = require("discord.js");
const client = new Discord.Client();
const bot = new Discord.Client( 
// Set the prefix
let prefix = "!sc";
client.on("message", (message) => {
  // Exit and stop if the prefix is not there or if user is a bot
  if (!message.content.startsWith(prefix) || message.author.bot) return;
 
  if (message.content.startsWith(prefix + "skitter")) {
    message.channel.send("ig: _bagus.setiawan follow ya :)");
  } else
   
  if (message.content.startsWith(prefix + "p")) {
    message.channel.send("gak bisa play music aowkowkowkook");
  }
   
  if (message.content.startsWith(prefix + "image")) {
   message.channel.send("My Bot's message", {files: ["https://i.imgur.com/XxxXxXX.jpg"]});
  }
 
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

