exports.run = async (client, message, args) => {
    if (!message.member.hasPermission(" MANAGE_GUILD")) return message.channel.send(`Você não tem permissão de Gerenciar Servidor para usar este comando`);
    if (!args.join(' ')) return message.channel.send({embed: {
        title: "Uso incorreto !",
        description: "Uso correto: votacao <titulo> \nEx. votacao Devemos banir fulano do servidor?",
        footer: {
            icon_url: message.author.avatarURL,
            text: `Comando utilizado por ${message.author.username}`
        },
        color: 13632027,
        timestamp: new Date()
    }});

    message.delete();

    message.channel.send({embed: {
        title: args.join(' '),
        footer: {
            text: `Votação iniciada por ${message.author.username}`
        },
        color: 8463563,
        timestamp: new Date()
    }}).then((message) => {
        message.react(":white_check_mark:");
        message.react(":x:");
    });
};