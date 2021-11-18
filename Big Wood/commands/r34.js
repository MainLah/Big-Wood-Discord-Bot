const fetch = require('node-fetch');
const {MessageEmbed} = require('discord.js')

module.exports = {
    category: 'Adult',
    description: 'Sends random rule 34 picture',
    expectedArgs: '<tags>',
    minArgs: 0,
    cooldown: '5s',

    callback: async ({ message, args }) => {
        
        let randomPic = await fetch(`https://rule34.xxx/index.php?page=dapi&s=post&q=index&json=1&limit=10&tags=${args.join('')}`, {method: 'GET'})
        .then(response => response.text())
        .catch(error => console.log(error))

        if (!randomPic || randomPic == undefined || randomPic == 0) {
            message.channel.send('Nothing was found')
            return
        } else {
            const link = randomPic.split(',').filter(e => e.includes("file_url"))
            const embed = new MessageEmbed()
            .setTitle('Click for Picture')
            .setDescription('Provided by rule34.xxx')
            .setColor('LUMINOUS_VIVID_PINK')
            .setURL(`${link[Math.floor(Math.random() * link.length)].replace(`"file_url":`, '').replace(/["\\]/g, '')}`)
            message.channel.send({embeds: [embed]})
            return
        }
    }
}