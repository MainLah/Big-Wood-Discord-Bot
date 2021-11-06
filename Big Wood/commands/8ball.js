module.exports = {
    category: 'Fun',
    description: 'Answers questions',
    
    // For the correct usage of the command
    expectedArgs: '<question>',
    minArgs: 1,
    syntaxError: `Where's the question smartass`,
    
    // Invoked when the command is actually ran
    callback: ({ message, args }) => {

        //I don't fucking understand the 8ball API response so I just copied the answers
        const answer = [
            'Without a doubt.',
            'Better not tell you now.',
            'My sources say no.',
            'Signs point to yes.',
            'Outlook not so good.',
            'My reply is no.',
            `Don't count on it.`,
            'Outlook good.',
            'Most definitely.',
            'You may rely on it.',
            'It is certain.',
            'Very doubtful.',
            'Concentrate and ask again.',
            'As I see it, yes.',
            'Most likely.',
            'Yes definitely.'
        ]

        if (!args) {
            message.reply(`Where's the question dumbass`)
            return
        }
        message.reply(answer[Math.floor(Math.random() * answer.length)])
        return
    }
}