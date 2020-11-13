const Discord = require("discord.js");

exports.run = async (client, message, args) => {
 if (!message.member.permissions.has("MANAGE_MESSAGES"))
 return message.reply(
 "<:Negativo:760555652316659773> Você nâo tem permissão de ``Gerenciar Mensagens``."
 );
 const deleteCount = parseInt(args[0], 10);
 if (!deleteCount || deleteCount < 1 || deleteCount > 99)
 return message.reply(
 "<a:verificadored:754516110476443688> Porfavor coloque um numero de 1 até 100."
 );

 const fetched = await message.channel.messages.fetch({
 limit: deleteCount + 1
 });
 message.channel.bulkDelete(fetched);
 message.channel.send(`Foi apagado ${args[0]} mensagens`).then(msg => msg.delete({timeout: 5000})).catch(error =>
 console.log(`Não foi possível deletar mensagens devido a: ${error}`)
 );
};