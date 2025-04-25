let config = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
    physics:{
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

//initialize the game
let game = new Phaser.Game(config);

//variables
let player, goal, cursors, textScore, score;


function preload ()
{
    this.load.image('player', "../assets/images/player.png");
    this.load.image('goal', "../assets/images/goal.png");
    this.load.image('background', "../assets/images/background.jpg");
}

function create ()
{
    this.add.image(0,0, "background").setOrigin(0,0); //set the background image
    player = this.physics.add.sprite(250, 900, 'player'); //create the player sprite
    player.setBounce(0); //set the bounce of the player sprite
    player.setCollideWorldBounds(true); //set the player to collide with the world bounds

    goal = this.physics.add.sprite(1600, 900, 'goal'); //create the goal sprite


    score = 0; //initialize the score
    let style = { font: "30px Arial", fill: "#ffffff", align: "center" }; //set the style of the score text
    textScore = this.add.text(16, 16, "Score: " + score, style); //create the score text

    cursors = this.input.keyboard.createCursorKeys(); //create the cursor keys
}

function update ()
{
    //movement
    if (cursors.left.isDown) //if the left arrow key is pressed
    {
        player.setVelocityX(-250); //set the velocity of the player to the left
        player.flipX = true; //flip the player sprite to the left
    }
    else if (cursors.right.isDown) //if the right arrow key is pressed
    {
        player.setVelocityX(250); //set the velocity of the player to the right
        player.flipX = false; //flip the player sprite to the right
    }
    else //if no arrow key is pressed
    {
        player.setVelocityX(0); //set the velocity of the player to 0
    }

    this.physics.add.overlap(player, goal, WinGame); //check for overlap between player and goal

    function WinGame() {
        score += 100;
        textScore.setText("Score: " + score); //update the score text
        goal.disableBody(true, true); //disable the goal sprite
        alert("You win!"); //show an alert message
    }


}