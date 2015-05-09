


var game = new Phaser.Game(1000, 550, Phaser.AUTO, 'gameDiv');

game.state.add('menu', menuState);
game.state.add('config', configState);
game.state.add('help', helpState);
game.state.add('map', mapState);

game.state.start('menu');