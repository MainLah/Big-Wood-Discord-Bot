module.exports = {
    category: 'anti-bully',
    description: 'Replies with be considerate.',
    
    slash: 'both',
    testOnly: false,
    
    callback: ({ message, interaction }) => {
        const reply = 'Are you going to bully Ahmad? You should stop it bro be considerate to others'
        if (message) {
            message.reply({
                content: reply
            })
            return
        }
        interaction.reply({
            content: reply
        })
    }
}