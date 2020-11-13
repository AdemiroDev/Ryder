const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  const sayMessage = args.join(' ');
  message.delete().catch(O_o => {});
  message.channel.send(sayMessage);

  if(!message.member.permissions.has("MANAGE_MESSAGES")) {
    return message.reply("**Você não tem permissâo de gerenciar mensagens!**")
  }
};