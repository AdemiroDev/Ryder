const Discord = require('discord.js');
module.exports.run = async (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setTitle('<:emoji_44:772841399003250738> Familia GTA')
    .setColor('YELLOW')
    .setDescription("<:verific:774410854816153610> Conheça a minha familia somos baseado no Grand Theft Auto San Andreas, veja meus parceiros abaixo:\n\ **Sweet** - Desenvolvedor: <@!625820155288748033>")
    message.channel.send(embed)
}