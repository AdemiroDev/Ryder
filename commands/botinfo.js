const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
const embed = new Discord.MessageEmbed()
  .setTitle('<:seta:774411345368973342> Ryder Info')
  .setColor('YELLOW')
  .setDescription('**Olá deseja me adicionar em seu servidor Clicando** [Aqui](https://discord.com/oauth2/authorize?client_id=756855987755024415&permissions=271904358&scope=bot)')
  .setDescription("```[ Intel(R) Celeron(R) CPU J1800 @9.42Ghz 8.92Ghz ]```")
  .addField("<:role:774411006717722636> Usuarios", `${client.users.cache.size} Usuarios`, true)
  .addField("<a:discord_gif:774411379045302302> Servidores", `${client.guilds.cache.size} Servidores`, true)
  .addField("<:verific:774410854816153610> Nome", `Ryder`, true)
  .addField("<:verific:774410854816153610> ID", `756855987755024415`, true)
  .addField("<:emoji_11:774411256970084373> Linguagem", `JavaScript`, true)
  .addField("<a:music:774411578199769108> Prefix", `r!`, true)
  .addField("<:backup:774411145917497344> Sistema", `Linux 64x`, true)
  .addField('<:CPU:774474764206211092> CPU', `**${(process.cpuUsage().system / 1024 / 1024).toFixed(2)}%**`, true)
  .addField('<:memoria:774474794765778964> Memoria', `**${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)}MB **`, true)  
  .addField("<:hostbot:774411459810820097> Hospedagem", `[Rocket Cloud](https://rocketcloud.ml/)`, true)
  .addField("<:mongo:774475135948161044> DataBase", `[Mongoose](https://www.npmjs.com/package/discord-mongodb-economy)`, true)
  .addField("<:discord:774475279673327659> Discord.Js", `[V12](https://discord.js.org/#/)`, true)
  .addField("📅 Data de Criação", `15/09/2020`, true)
  .addField("🔐 Shards", `3/10`, true)
  .addField("<:dev:774410983048347688> Developer", `<@!756631052767854664>`, true)
  .setThumbnail('https://cdn.discordapp.com/icons/763391301634621451/63a15257853285039d2a43014ec06748.png?size=2048')
  .setTimestamp()
 message.channel.send(embed);
}