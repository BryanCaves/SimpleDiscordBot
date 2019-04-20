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
// const Discord = require('discord.js');
// const client = new Discord.Client();
// const OverwatchStats = require('./overwatchStats');

// require('dotenv').config()

// const botPrefix = '!';
// const DISCORD_TOKEN = process.env.BOT_TOKEN;
// const owStats = new OverwatchStats('pc', 'us', 'Slim-1958');
// // client.on('message', msg => {
// //     if(msg.content == "ping") {
// //         msg.reply('pong');
// //     }
// // });

// // client.on('message', msg => {
// //     if(!msg.content.startsWith(prefix) || msg.author.bot) return;

// //     const args = msg.content.slice(prefix.length).split(' ');
// //     const command = args.shift().toLowerCase();

// //     msg.reply(`Command: ${command}`);
// // });

// client.on('message', async msg => {
//     if(!msg.content.startsWith(botPrefix) || msg.author.bot) return;
//     let playerData = await owStats.getStats();
//     msg.reply(`Competitive Games won for ${playerData.data.name}: ${playerData.data.competitiveStats.games.gamesWon}`);
// });

// client.login(DISCORD_TOKEN);