const fetch = require('node-fetch');

module.exports = {
    category: 'motivational',
    description: 'Replies with a random quote.',
    
    slash: 'both',
    testOnly: false,
    
    callback: async ({ message }) => {
        const quote = await fetch("https://zenquotes.io/api/random", {method: 'GET'}).then(response => response.json());
        message.channel.send(quote[0]["q"] + ' -' + quote[0]["a"])
        return
    }
}