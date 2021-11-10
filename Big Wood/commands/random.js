const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js')

module.exports = {
    category: 'Education',
    description: 'Gives random vocabulary',
    
    // For the correct usage of the command
    expectedArgs: '<number of words>',
    minArgs: 1,
    maxArgs: 1,
    
    callback: async (message, args) => {
        if (Number(message.args.join('')) > 10) {
            message.channel.send(`I ain't sending you that many`)
            return
        }
        
        const answer = await fetch(`https://random-word-api.herokuapp.com/word?number=${message.args.join('')}`, {method: 'GET'})
        .then(response => response.json())
        .catch(error => console.log(error))

        let embed = new MessageEmbed()
        .setColor('#6bb9f0')
        .setTitle(`${message.args.join('')} random words:`)
        .setDescription(`${answer.join(', ')}`)
        
        message.channel.send({embeds: [embed]})
        return
    }
}
