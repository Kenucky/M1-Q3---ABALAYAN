class GameScene extends Phaser.Scene {
    constructor() {
        super('GameScene');
        this.player = null;
        this.cursors = null
        this.goal = null;
        this.playerSpeed = 250; //player speed
    }

    preload() {
        this.load.image('background', '../assets/images/background.jpg'); //load the background image
        this.load.image('player', '../assets/images/player.png'); //load the player image
        this.load.image('goal', '../assets/images/goal.png'); //load the goal image
    }   

    create  () {
        this.add.image(0,0, "background").setOrigin(0,0); //set the background image
        this.add.image(1400,700, "goal").setOrigin(0,0); //set the goal image
        this.goal = this.physics.add.sprite(1400,700, "goal").setOrigin(0,0); //set the goal image
        
        this.player = this.physics.add.sprite(200, 700, 'player'); //set the player image
        this.player.setOrigin(0, 0); 
        this.player.setCollideWorldBounds(true); 

        this.cursors = this.input.keyboard.createCursorKeys(); //create the cursor keys

        this.physics.add.collider(this.player, this.goal, () => {
            this.goal.disableBody(true, true);
            this.scene.start('WinningScene');
            
        }, null, this); 

        let backButton = this.add.image(100, 50, 'back').setOrigin(0, 0);
        backButton.setDisplaySize(200, 150); // set the size of the button
        backButton.setInteractive({useHandCursor: true});
        backButton.on('pointerdown', () => {
            this.scene.start('MenuScene');
        });
    }

    update() {
        if (!this.cursors || !this.player) return;

        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-this.playerSpeed);
            this.player.flipX = true;
        } else if (this.cursors.right.isDown) {
            this.player.setVelocityX(this.playerSpeed);
            this.player.flipX = false;
        } else {
            this.player.setVelocityX(0);
        }
    }
}




