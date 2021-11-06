const fetch = require('node-fetch');

module.exports = {
    category: 'fun',
    description: 'Replies with a random dog picture.',
    
    slash: 'both',
    testOnly: false,
    
    callback: async ({ message }) => {
        const dog = await fetch('https://dog.ceo/api/breeds/image/random', {method: 'GET'}).then(response => response.json());
        message.reply({files: [{attachment: dog.message}]})
        return
    }
}