const Discord = require('discord.js');
module.exports.run = async (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setTitle('<:verific:774410854816153610> Ping? Pong !')
    .addField("Ping:", `**${client.ws.ping}ms**`)
    message.channel.send(embed);
}