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
 
 // Set the voice
 let prefix = ", ";
 client.login('NTA4NTgzMjU0NTM0NzgyOTgw.DsCy2Q.O1Un7IJueDN2GJ2umrtRPTtPI3I');
 client.on('message', async message => {
  // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  if (!message.guild) return;

  if (message.content === 'join') {
    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
    } else {
      message.reply('You need to join a voice channel first!');
    }
  }
 
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
