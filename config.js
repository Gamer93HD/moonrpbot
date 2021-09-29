module.exports = {
    app: {
        px: '*',
        token: process.env.TOKEN,
        playing: '😎',
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        discordPlayer: {}
    }
};