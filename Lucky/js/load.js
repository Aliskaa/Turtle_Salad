var loadState = {

	preload: function(){
		// background
        game.load.image('background', 'assets/fond_in_game.png');
		// Player
		game.load.spritesheet('tortue', 'assets/sprite_tortue.png', 60, 60);
		// Dechets
        game.load.image('dechetB', 'assets/enemy_bleu.png');
        game.load.image('dechetJ', 'assets/enemy_jaune.png');
        game.load.image('dechetV', 'assets/enemy_vert.png');
        game.load.image('dechetM', 'assets/enemy_marron.png');
        // Poubelles
        game.load.image('poubelleJO','assets/pjo.png');
        game.load.image('poubelleJF','assets/pjf.png');
        game.load.image('poubelleBO','assets/pbo.png');
        game.load.image('poubelleBF','assets/pbf.png');
        game.load.image('poubelleMO','assets/pmo.png');
        game.load.image('poubelleMF','assets/pmf.png');
        game.load.image('poubelleVO','assets/pvo.png');
        game.load.image('poubelleVF','assets/pvf.png');
	},

	create: function(){
		game.physics.startSystem(Phaser.Physics.ARCADE);

		game.state.start('menu');
	}
};