const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js')

module.exports = {
    category: 'Education',
    description: 'Gives definition of your word',
    
    // For the correct usage of the command
    expectedArgs: '<word>',
    maxArgs: 1,

    callback: async (message, args) => {
        const def = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${message.args.join('')}`, {method: 'GET'})
        .then(response => response.json())
        .catch(error => console.log(error))

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