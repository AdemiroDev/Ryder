const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
const embed = new Discord.MessageEmbed()
   .setTitle('<:Atencao:760555280722559027> Veja algumas informações sobre min')
   .setDescription('<a:Verificado:760559851885035550> Opa tudo bom? comigo está tudo otimo, veja minhas informações logo abaixo:')
   .addField("**<a:ateno:742444609615167589> Links do Ryder**:", `Me adicione: [[Clique aqui]](https://discord.com/api/oauth2/authorize?client_id=756855987755024415&permissions=271845732&scope=bot) \n\ Servidor de Suporte: [[Clique aqui]](https://discord.gg/VXRK3Qa)`)
   .addField("**<a:ateno:742444609615167589> Counter:**", `Servidores: ${client.guilds.cache.size} Servidores \n\ Usuarios: ${client.users.cache.size} Usuarios \n\ Canais: ${client.channels.cache.size} Canais \n\ Emojis: ${client.emojis.cache.size} Emojis \n\ Versâo: v0.0.2`)
   message.channel.send(embed);
}