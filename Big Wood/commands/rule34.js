const fetch = require('node-fetch');
const path = require('path');

module.exports = {
    category: 'Adult',
    description: 'Sends random rule 34 picture',

    callback: async ({ message }) => {
        const randomPic = await fetch('https://rule34.xxx/index.php?page=dapi&s=post&q=index&json=1&limit=1', {method: 'GET'})

        message.reply({files: [{attachment: randomPic.preview_url}]})
        return
    }
}