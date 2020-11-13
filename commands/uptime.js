const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
 let totalSeconds = client.uptime / 1000;
 let days = Math.floor(totalSeconds / 86400);
 let hours = Math.floor(totalSeconds / 3600);
 totalSeconds %= 3600;
 let minutes = Math.floor(totalSeconds / 60);
 let seconds = totalSeconds % 60;

 let uptime = `🗓️ ${days.toFixed()} dias\n🗓️ ${hours.toFixed()} horas\n🗓️ ${minutes.toFixed()} minutos\n🗓️ ${seconds.toFixed()} segundos`;

 const embed = new Discord.MessageEmbed()
 .setTitle(`Uptime !`)
 .setThumbnail("https://1.bp.blogspot.com/-F244q6WLJtw/XiBIxMVnG2I/AAAAAAABJpo/4YYV-tlwqKM8L7lLl_hBZd7Wngtw_IynwCLcBGAsYHQ/s1600/Gifs%2BPsicod%25C3%25A9licos%2B%25283%2529.gif")
 .setColor("#FF0000")
 .setDescription(`**Estou online há:**\n${uptime}`)

 message.channel.send(embed);
};