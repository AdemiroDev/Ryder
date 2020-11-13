 const Discord = require("discord.js");

exports.run = async(client, message, args) => {
  let embed = new Discord.MessageEmbed()
  .setTitle("<:verific:774410854816153610> Central de Ajuda do Ryder.")
  .setDescription("<:emoji_44:774410910898323487> Seja bem vindo ao meu Central de Ajuda, precisando de ajuda ? e pra já abaixo você terá todos os meus comandos.")
  .addField("Diversão", `r!beijar, r!abracar, r!meme, r!avatar.`)
  .addField("Moderação", `r!anunciar, r!say, r!limpar, r!votacao, r!ban, r!slowmode.`)
  .addField("Utilidades", `r!botinfo, r!serverinfo, r!github, r!info, r!ajuda, r!ping, r!uptime, r!clima.`)
  .setImage('https://cdn.discordapp.com/attachments/763451193254084618/774421292761743360/central.jpg')
  message.channel.send(embed);
} 