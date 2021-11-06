const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const WOKCommands = require('wokcommands');
const path = require('path');

client.on('ready', () => {
  new WOKCommands(client, {
    // The name of the local folder for your command files
    commandsDir: path.join(__dirname, 'commands'),
  })
})

client.on("message", msg => {
    if (msg.author.bot) return

    if (msg.content === "your mom" 
    || msg.content === "Your mom" 
    || msg.content === "YOUR MOM") 
    {
      msg.reply("She's a very nice woman, and so is yours.")
    } else if (msg.content === "your mother" 
    || msg.content === "Your mother" 
    || msg.content === "YOUR MOTHER") 
    {
      msg.reply("She's a very nice woman, and so is yours.")
    }
});


client.login('ODkwNDU2MTY0MjY4MTE4MDI2.YUwD7Q.buYI2BFwWjmh3lw-rQsixl5-m6g');