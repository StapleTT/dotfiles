const { Client, IntentsBitField } = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
});

client.on('ready', (c) => {
    console.log(`${c.user.tag} is online!`)
})

client.login(
    'MTE0NTIyMjE2OTA1MjMzNjEzOA.GR7gSg.W2w686asv6ssW6YKGSPHdb5l1quxpdWwz5Kw6A'
);

