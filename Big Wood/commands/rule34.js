const fetch = require('node-fetch');

module.exports = {
    category: 'Adult',
    description: 'Sends random rule 34 picture',
    expectedArgs: '<tags>',
    minArgs: 0,

    callback: async ({ message, args }) => {
        
        let randomPic = await fetch(`https://rule34.xxx/index.php?page=dapi&s=post&q=index&json=1&limit=10&tags=${args.join('')}`, {method: 'GET'})
        .then(response => response.json())

        message.channel.send({files: [{attachment: randomPic[Math.floor(Math.random() * 10)].file_url}]})
        return
    }
}