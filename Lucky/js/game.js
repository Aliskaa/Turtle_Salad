var game = new Phaser.Game(1000, 550, Phaser.AUTO, 'gameDiv');

game.global = {
	score: 0
};

game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('map', mapState);
game.state.add('help', helpState);
game.state.add('config', configState);
game.state.add('play', playState);
game.state.start('load');