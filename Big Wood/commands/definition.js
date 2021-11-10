const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js')

module.exports = {
    category: 'Education',
    description: 'Gives definition of your word',
    
    // For the correct usage of the command
    expectedArgs: '<word>',
    minArgs: 1,
    maxArgs: 1,

    callback: async (message, args) => {
        const def = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${message.args.join('')}`, {method: 'GET'})
        .then(response => response.json())
        .catch(error => console.log(error))
        
        if(def.hasOwnProperty('resolution')) {
            message.channel.send('What are you trying to look for? Cause it\'s too retarded to have a meaning')
            return
        }

        let embed = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Dictionary says')
        .setDescription(`Meaning of ${message.args.join('')}`)
        .addFields(
            { name: `Definition:`, value: `${def[0].meanings[0].definitions[0].definition}` },
            { name: `Example of usage:`, value: `${def[0].meanings[0].definitions[0].example}` }
        )

        message.channel.send({embeds: [embed]})
        return
    }
}
