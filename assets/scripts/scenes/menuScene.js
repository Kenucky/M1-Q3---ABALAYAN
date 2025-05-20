class MenuScene extends Phaser.Scene{
    constructor(){
        super("MenuScene");
    }

    preload(){
        this.load.image('background', "../assets/images/background.jpg");
        this.load.image('player', "../assets/images/player.png");
        this.load.image('goal', "../assets/images/goal.png");
        this.load.image('play', "../assets/images/playbutton.png");
        this.load.image('credits', "../assets/images/questionbutton.png");
        this.load.image('back', "../assets/images/backbutton.png");

    }

    create(){
        console.log('You are in Menu Scene');
        this.add.image(0, 0, 'background').setOrigin(0, 0);
        this.add.text(600, 250, 'KEN Catcher', { fontSize: '120px', fill: '#000' });


        let playButton = this.add.image(650, 450, 'play').setOrigin(0, 0);
        playButton.setInteractive({useHandCursor: true});
        playButton.on('pointerdown', () => {
            this.scene.start('GameScene');
        });

        let creditsButton = this.add.image(1000, 425, 'credits').setOrigin(0, 0);
        creditsButton.setInteractive({useHandCursor: true});
        creditsButton.on('pointerdown', () => {
            this.scene.start('CreditsScene');
        });

        let quitButton = this.add.text(900, 800, 'Quit', { fontSize: '100px', fill: '#000' });
        quitButton.setInteractive({useHandCursor: true});
        quitButton.on('pointerdown', () => {
            alert("Exiting the game...");
        });
    }

}