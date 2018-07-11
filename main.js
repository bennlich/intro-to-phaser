var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game-div', { preload: preload, create: create, update: update });

function preload() {

    game.load.image('sky', 'assets/sky.png');
    game.load.image('ground', 'assets/platform.png');
    game.load.image('star', 'assets/star.png');
    game.load.spritesheet('dude', 'assets/dude.png', 32, 48);

}

function create() {

    //  A simple background for our game
    game.add.sprite(0, 0, 'sky');
    game.add.sprite(20, 20, 'star');
    
    //  The platforms group contains the ground and the 2 ledges we can jump on
    var platforms = game.add.group();
    
    // Here we create the ground.
    var ground = platforms.create(0, game.world.height - 64, 'ground');
    
}

function update() {
}
