const fetch = require('node-fetch');

module.exports = {
    category: 'fun',
    description: 'Replies with a random cat picture.',
    
    slash: 'both',
    testOnly: false,

    callback: async ({ message }) => {
        const randomCat = await fetch('https://aws.random.cat/meow', {method: 'GET'})
        .then(response => response.json())

        message.channel.send({files: [{attachment: randomCat.file, name: `cat.${randomCat.file.split('.')[4]}`}]})
        return
    }
}