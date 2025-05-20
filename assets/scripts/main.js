let config = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: [MenuScene, CreditsScene, GameScene, WinningScene]
};
let game = new Phaser.Game(config);