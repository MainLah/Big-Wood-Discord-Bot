const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js');
const DiscordJS = require('discord.js');

module.exports = {
    category: 'Fun',
    description: 'Guess the missing word',
    
    slash: 'both',
    testOnly: false,
    
    callback: async (message) => {
        //takes a random quote from zenquote api, chooses a random word to be guessed
        const quote = await fetch("https://zenquotes.io/api/random", {method: 'GET'}).then(response => response.json());
        const array = quote[0]["q"].split(' ')
        const randomWord = array[Math.floor(Math.random() * array.length)].replace('.', '')
        const newMessage = quote[0]["q"].replace(randomWord, '_'.repeat(randomWord.length))
        
        const question = new MessageEmbed()
        .setColor('#6bb9f0')
        .setTitle('Guess the missing word')
        .setDescription(newMessage)
        if (randomWord.length > 1) {
            question.addField('Hint:', `First letter is "${randomWord[0]}" and it's ${randomWord.length} letters long`)
        } else {
            question.addField('Hint:', 'The word only has 1 letter')
        }
        message.channel.send({embeds: [question]})

        console.log(randomWord)
        
        //checking user's message if correct or wrong
        const filter = (m) => {
            return m.author.id === message.author.id
        }

        const collector = new DiscordJS.MessageCollector(message.channel, filter, {
            max: 1,
            time: 5000
        })

        const timer = setInterval(() => {
            message.channel.send(`Time's out! The answer is "${randomWord.toUpperCase()}"`)
            collector.stop()
            clearInterval(timer)
        }, 15000)

        collector.on('collect', m => {
            if (m.content.toLowerCase() === randomWord.toLowerCase()) {
                m.reply('Correct!')
                collector.stop()
                clearInterval(timer)
                return
            }
        })
    },
}

