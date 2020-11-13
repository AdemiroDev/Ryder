const { Discord, discord } = require("discord.js");
const { MessageEmbed } = require("discord.js");
const moment = require("moment");
const fetch = require("node-fetch")

module.exports = {
    name: "github",
    aliases: [""],
    usage: "Github <nome>",
    exmaple: "Github Pedro-Ricardo",
    description: `Informações da conta do usuário na github!`,
    run: async (client, message, args) => {

       try {

  if (!args[0]) return message.channel.send(`Por favor diga o nome de quem deseja procurar na Github!`)
    
  fetch(`https://api.github.com/users/${args.join('-')}`)
    .then(res => res.json()).then(body => {
      if(body.message) return message.channel.send(`Usuário não encontrado | Por favor me de um nome válido!`);
    let { login, avatar_url, name, id, html_url, public_repos, followers, following, location, created_at, bio } = body;

   const embed = new MessageEmbed()
   .setAuthor(`${login} Github`, avatar_url)
   .setColor(`#8b6eff`)
   .setThumbnail(`${avatar_url}`)
   .addField(`Usuário`, `${login}`, true)
   .addField(`ID`, `${id}`, true)
   .addField(`Biografia`, `${bio || "Neuma biografia"}`, true)
   .addField(`Repositórios Publicos`, `${public_repos || "Nenhum"}`, true)
   .addField(`Seguidores`, `${followers}`, true)
   .addField(`Seguindo`, `${following}`, true)
   .addField(`Localização`, `${location || "Nenhum local"}`, true)
   .addField(`Conta Criada`, moment.utc(created_at).format("dddd, MMMM, Do YYYY"), true)
   .setFooter(`Executado por: ${message.author.username}`)

   message.channel.send(embed)

    })

        } catch (error) {
            console.log(`[Commands] [github] Getting Error In github Command :\n`, error);
            return message.channel.send(`Algo deu errado tente novamente mais tarde!`)
        }
    }
};