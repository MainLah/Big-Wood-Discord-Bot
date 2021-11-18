var Timer = require("easytimer.js").Timer;
var timerInstance = new Timer();
const fetch = require('node-fetch');
const DiscordJS = require('discord.js');
const { MessageEmbed } = require('discord.js')

module.exports = {
    category: 'Fun',
    description: 'Do a type speed test',
    cooldown: '45s',

    callback: async(message, args) => {
        const quote = await fetch("https://zenquotes.io/api/random", {method: 'GET'}).then(response => response.json());

        const typeEmbed = new MessageEmbed()
        .setColor('DARK_ORANGE')
        .setTitle('Typing Speed Test')
        .setDescription('Type the sentence below as fast as possible!')
        .addField('Sentence:', `${quote[0]["q"]}`)

        message.channel.send({embeds: [typeEmbed]})
        const filter = (m) => {
            return m.author.id === message.author.id
        }

        const collector = new DiscordJS.MessageCollector(message.channel, filter, {
            max: 1,
            time: 5000
        })
        
        if (timerInstance.getTotalTimeValues().seconds !== 0) {
            timerInstance.reset()
            timerInstance.stop()
        }

        timerInstance.start()

        collector.on('collect', m => {
            if (m.content === quote[0]["q"]) {
                const theQuote = quote[0]["q"].replace(/[,-;.]/g, '')
                console.log(theQuote.split('').length, timerInstance.getTotalTimeValues().seconds)
                if (m.author.bot) return
                let WPM = (theQuote.split('').length / 5) / (timerInstance.getTotalTimeValues().seconds / 60)
                m.reply(`Your typing speed is ${Math.round(WPM)} WPM (Words per Minute).`)
                collector.stop()
                timerInstance.reset()
                timerInstance.stop()
                clearInterval(timer)
            }
        })

        const timer = setInterval(() => {
            collector.stop()
            timerInstance.reset()
            timerInstance.stop()
        }, 45000)
        return
    }
}   