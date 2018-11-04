const Discord = require("discord.js");
const client = new Discord.Client();
 
// Set the prefix
let prefix = ", ";
client.on("message", (message) => {
  // Exit and stop if the prefix is not there or if user is a bot
  if (!message.content.startsWith(prefix) || message.author.bot) return;
 
  if (message.content.startsWith(prefix + "instagram")) {
    message.channel.send("https://instagram.com/official_immortal_gaming");
  } else
   
  if (message.content.startsWith(prefix + "youtube")) {
    message.channel.send("https://www.youtube.com/channel/UC4KN0anLirlTsn95Ugrroeg");
  }
   
  if (message.content.startsWith(prefix + "facebook")) {
    message.channel.send("https://www.facebook.com/Offc-immortal-Team-724495147912985/?modal=admin_todo_tour(edited)");
  }

  if (message.content.startsWith(prefix + "join")) {
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
    } else {
      message.reply('You need to join a voice channel first!');
    }
  }
 
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
