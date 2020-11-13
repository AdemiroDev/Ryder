const Discord = require("discord.js");
const moment = require("moment");
moment.locale('pt-BR');

exports.run = (bot,message, 
args) => {
 
 const regions = {
 brazil: 'Brasil',
 europe: 'Europa',
 };
 const owner = message.guild.owner.user || {};
 let autor = message.author || {}
 let gAvatar = message.guild.iconURL({ dynamic: true, format: "png", size: 1024 });
 let embed = new Discord.MessageEmbed()

 .setFooter(`${message.guild.name} • © Todos os direitos reservados.`, message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
 .setTitle(`<a:discord:742430298922549379> © ${message.guild.name}`)
 .setThumbnail(gAvatar)
 .setColor(`#303136`)
 .addField(` <:Cartao:760559850786258955> ID:`, message.guild.id, true)
 .addField(' <a:Criador:760559851779653632> Fundador:',`${owner.username + "#" + owner.discriminator || ' Owner not found...'} \n\`\`(${owner.id})\`\``,true)
 .addField(` <a:diamantebrilha:742424401269620776> Região:`, `${regions[message.guild.region]}`, true)
 .addField(' #️⃣ Canais de Texto:', message.guild.channels.cache.filter(m => m.type === 'text').size, true)
 .addField(' <a:spotify:742079880488812564> Canais de Voz:', message.guild.channels.cache.filter(m => m.type === 'voice').size, true)
 .addField(' <a:comunismo:745047014743474197> Total de membros:', message.guild.memberCount, true)
 .addField(` <a:verificadored:754516110476443688> Data de criação:`, moment.utc(message.guild.createdAt).format("LLL"), true)

 message.channel.send(embed);
}

exports.help = {
 name: "serverinfo"
}