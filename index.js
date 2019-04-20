require('dotenv').config()
const Commando = require('discord.js-commando');

const bot = new Commando.CommandoClient();
const DISCORD_TOKEN = process.env.BOT_TOKEN;

bot.registry.registerGroup('games', 'Games');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

bot.on('ready', () => {
    console.log('Ready!');
});

bot.on('message', (msg) => {
    if(msg.content == 'Hello') {
        msg.channel.send('Hello ' + msg.author);
    }
});

bot.login(DISCORD_TOKEN);