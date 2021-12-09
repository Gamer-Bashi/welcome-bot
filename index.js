const { Discord, MessageEmbed } = require("discord.js");
const client = new Discord.Client;
const config = require("./config.json");

client.on("ready", () => {
    console.log("The bot is ready");
    client.user.setActivity(`${config.Activity}`, { type: `${config.Type}` })
});

client.on("guildMemberAdd", async member => {
    let channel = member.guild.channels.cache.find(c => c.id === `${config.ChannelID}`)
    let WELCOME = new Discord.MessageEmbed()
        .setTitle('Welcome')
        .setDescription(`${member.user} ${config.Descriptione-Embed}`)
        .setColor('BLUE')
        .setThumbnail(`${config.Tasvire-Koochik}`)
        .setImage(`${config.tasvire-bozorh}`)
        .setTimestamp()
        .setFooter(`${config.footer}`)
    channel.send(WELCOME)
})

client.login(config.token)
