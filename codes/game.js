var game = new Phaser.Game(1000, 550, Phaser.AUTO, 'gameDiv');

game.state.add('menu', menuState);
game.state.add('Config', ConfigState);

game.state.start('menu');