const commando = require('discord.js-commando');
const discord = require('discord.js');
const OverwatchAPI = require('../../services/overwatch_api');

class OverwatchStatsCommand extends commando.Command
{
    constructor(client) 
    {
        super(client, {
            name: 'overwatch',
            group: 'games',
            memberName: 'overwatch',
            description: 'Fetch Overwatch player statistics'
        });
    }

    async run(message, args) {
        const overwatchArgs = args.split(' ');

        const platform = overwatchArgs[0];
        const region = overwatchArgs[1];
        const battleTag = overwatchArgs[2].replace('#', '-');

        const overwatchApi = new OverwatchAPI(platform, region, battleTag);
        const playerStats = await overwatchApi.getStats();

        if(playerStats.data.private == true) {
            message.reply('This profile is private');
            return;
        }

        var quickPlayStatsEmbed = new discord.RichEmbed()
            .setTitle("Quick Play Stats")
            .addField("Name", playerStats.data.name)
            .setThumbnail(playerStats.data.icon)
            .addField("Games Won", playerStats.data.quickPlayStats.games.won)
            .addField("Bronze Medals", playerStats.data.quickPlayStats.awards.medalsBronze)
            .addField("Silver Medals", playerStats.data.quickPlayStats.awards.medalsSilver)
            .addField("Gold Medals", playerStats.data.quickPlayStats.awards.medalsGold);

        var compStatsEmbed = new discord.RichEmbed()
            .setTitle("Competitive Stats")
            .addField("Name", playerStats.data.name)
            .setThumbnail(playerStats.data.icon)
            .addField("Games Won", playerStats.data.competitiveStats.games.won)
            .addField("Bronze Medals", playerStats.data.competitiveStats.awards.medalsBronze)
            .addField("Silver Medals", playerStats.data.competitiveStats.awards.medalsSilver)
            .addField("Gold Medals", playerStats.data.competitiveStats.awards.medalsGold);

        message.channel.sendEmbed(quickPlayStatsEmbed);
        message.channel.sendEmbed(compStatsEmbed);    
    }
}

module.exports = OverwatchStatsCommand;