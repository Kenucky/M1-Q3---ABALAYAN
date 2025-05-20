class CreditsScene extends Phaser.Scene {
    constructor() {
        super('CreditsScene');
    }

    create() {
       this.add.image(0, 0, 'background').setOrigin(0, 0); //bg
       this.add.text(600, 250, 'Credits:', { fontSize: '120px', fill: '#000' });
       this.add.text(600, 400, 'Ken Shedrick Abalayan', { fontSize: '60px', fill: '#000' });
       this.add.text(600, 500, 'EMC131 - A224', { fontSize: '60px', fill: '#000' });
       this.add.text(600, 600, 'Entertainment Multimedia and \nComputing', { fontSize: '60px', fill: '#000' });

       let backButton = this.add.image(100, 50, 'back').setOrigin(0, 0);
       backButton.setDisplaySize(200, 150); // set the size of the button
       backButton.setInteractive({useHandCursor: true});
       backButton.on('pointerdown', () => {
           this.scene.start('MenuScene');
       });
    }
}