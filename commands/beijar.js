const Discord = require('discord.js');

exports.run = async (client, message, args) => {

  var list = [
    'https://imgur.com/iclUiUN.gif',
    'https://imgur.com/lYQt9rx.gif',
    'https://imgur.com/w1TU5mR.gif',
    'https://i.pinimg.com/originals/b0/37/a0/b037a0d27fc2fce28cd279561ec89825.gif',
    'https://i.pinimg.com/originals/29/65/3a/29653ad6e372605c4c43c3c015f9e499.gif'
  ];

  var rand = list[Math.floor(Math.random() * list.length)];
  let user = message.mentions.users.first() || client.users.cache.get(args[0]);
  if (!user) {
    return message.reply('lembre-se de mencionar um usuário válido para beijar!');
  }
  /*
  message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! ❤️`, {files: [rand]});
  */
  let avatar = message.author.displayAvatarURL({ format: 'png' });
  const embed = new Discord.MessageEmbed()
    .setTitle('Beijâo')
    .setColor('#000000')
    .setDescription(`${message.author} Deu um beijo em ${user}`)
    .setImage(rand)
    .setTimestamp()
    .setThumbnail(avatar)
    .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}