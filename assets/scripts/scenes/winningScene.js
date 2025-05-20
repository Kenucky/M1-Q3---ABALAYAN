class WinningScene extends Phaser.Scene {
    constructor() {
        super('WinningScene');
    }

    preload() {
        this.load.image('background', '../assets/images/background.jpg');
        this.load.image('retry', '../assets/images/retrybutton.png');
        this.load.image('home', '../assets/images/homebutton.png');
    }

    create() {
        this.add.image(0, 0, 'background').setOrigin(0, 0);

        this.add.text(700, 200, 'YOU WIN!', {
            fontSize: '100px',
            fill: '#ffffff',
            fontFamily: 'Arial'
        });

        
        let retryButton = this.add.image(400, 400, 'retry').setOrigin(0, 0);
        retryButton.setInteractive({ useHandCursor: true });
        retryButton.on('pointerdown', () => {
            this.scene.start('GameScene');
        });

        
        let homeButton = this.add.image(950, 400, 'home').setOrigin(0, 0);
        homeButton.setInteractive({ useHandCursor: true });
        homeButton.on('pointerdown', () => {
            this.scene.start('MenuScene');
        });
    }
}
