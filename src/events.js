player.on('error', (queue, error) => {
    console.log(`Error emitted from the queue ${error.message}`);
});

player.on('connectionError', (queue, error) => {
    console.log(`Error emitted from the connection ${error.message}`);
});

player.on('trackStart', (queue, track) => {
    queue.metadata.send(`Lecture de ${track.title} dans le salon **${queue.connection.channel.name}** 🎧`);
});

player.on('trackAdd', (queue, track) => {
    queue.metadata.send(`La musique ${track.title} a été ajoutée a la file d'atente ✅`);
});

player.on('botDisconnect', (queue) => {
    queue.metadata.send('J\'ai été déconnecté manuellement du canal vocal, en vidant la file d\'attente... ❌');
});

player.on('channelEmpty', (queue) => {
    queue.metadata.send('Personne n\'est dans le canal vocal, je quitte donc le canal vocal... ❌');
});

player.on('queueEnd', (queue) => {
    queue.metadata.send('J\'ai fini de lire toutes les musiques ✅');
});