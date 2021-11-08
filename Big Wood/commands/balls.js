const { MessageEmbed } = require('discord.js');

module.exports = {
    category: 'Fun',
    description: 'Rates your balls',
    
    callback: ({ message }) => {
        const rating = [
            'ZAMN!',
            'ZAD!',
            'Nice balls bro.',
            'Terrible.',
            'You should treat yourself now!',
            'You should kill yourself now!'
        ]

        const zamn = new MessageEmbed()
        .setTitle('ZAMN!')
        .setImage('https://i.imgur.com/hZ88siQ.jpeg')
        .setColor('#6bb9f0')

        const zad = new MessageEmbed()
        .setTitle('ZAD!')
        .setImage('https://i.ytimg.com/vi/02IcARdPPAg/maxresdefault.jpg')
        .setColor('#2e406f')

        let picked = rating[Math.floor(Math.random() * rating.length)]
        if (picked == 'ZAMN!') {
            message.reply({embeds: [zamn]})
            return
        } if (picked == 'ZAD!') {
            message.reply({embeds: [zad]})
            return
        } else {
            message.reply(picked)
            return
        }
    }
}