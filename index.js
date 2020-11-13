const Discord = require("discord.js")
const client = new Discord.Client()
const config = require("./config.json")

client.on("ready", () => {
    console.log(`${client.user.username} foi iniciado com sucesso, com ${client.users.cache.size} usuários, em ${client.channels.cache.size} canais, em ${client.guilds.cache.size} servidores.`);
    let status = [
        {name: `${client.guilds.cache.size} Servers, ${client.users.cache.size} Users.`, type: 'WATCHING'}
    ]
    function setStatus(){
        let randomStatus = status[Math.floor(Math.random()*status.length)]
        client.user.setPresence({activity: randomStatus})
    }
    setStatus();
    setInterval(() => setStatus(),20000)
    
});

  client.on("message", message => {
    if (message.author.bot) return;
    if (message.channel.type == "dm") return;
    if (!message.content.toLowerCase().startsWith(config.prefix)) return;
    
    var comando = message.content.toLowerCase().split(" ")[0];
    comando = comando.slice(config.prefix.length);

    var args = message.content.split(" ").slice(1);
    try {
        var arquivoComando = require(`./commands/${comando}.js`)
        arquivoComando.run(client, message, args);
    } catch (erro) {
        if (erro.code == "MODULE_NOT_FOUND") return;
        console.log(erro);
    }

});

client.login(config.token);