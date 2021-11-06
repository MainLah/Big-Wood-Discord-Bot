module.exports = {
    category: 'anti-bully',
    description: 'Replies with be considerate.',
    
    slash: 'both',
    testOnly: false,
    
    callback: ({ message, interaction }) => {
        const reply = 'Who? No one here is retarded.'
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