const fetch = require('node-fetch')

module.exports = {
    category: 'Fun',
    description: 'Answers questions',
    
    // For the correct usage of the command
    expectedArgs: '<question>',
    minArgs: 1,
    syntaxError: `Where's the question smartass`,
    
    // Invoked when the command is actually ran
    callback: async ({ message, args }) => {
        if (!args) {
            message.reply('Where is the question smartass')
            return
        }
        const answer = await fetch('https://eightballapi.com/api/', {method: 'GET'}).then(response => response.json())
        const embed = new MessageEmbed()
        .setColor('#6bb9f0')
        .setDescription(`${answer["reading"]}`)

        message.reply({embeds: [embed]})
        return
    }
}
