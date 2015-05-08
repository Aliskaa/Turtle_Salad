var mainState = {
	preload: function(){
		// Player
		game.load.image('player', 'assets/player.png');
	},

	create: function(){
		// Background Color
		game.stage.backgroundColor = '#3498db';
		// Physics Engine
		game.physics.startSystem(Phaser.Physics.ARCADE);
		// Control
		this.cursor = game.input.keyboard.createCursorKeys();
		// Player
		this.player = game.add.sprite(game.world.centerX, 475, 'player');
		this.player.anchor.setTo(0.5, 0.5); // position
		game.physics.arcade.enable(this.player); // player will use the Arcade physics engine
	},

	update: function(){
		this.movePlayer();
	},

	movePlayer: function(){
		this.player.body.velocity.x = 0;

		if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
			console.log("LEFT");
			this.player.body.velocity.x = -200;
		}
		else if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
			console.log("RIGHT");
			this.player.body.velocity.x = 200;
		}
	},

	
};

var game = new Phaser.Game(1000, 550, Phaser.AUTO, 'gameDiv');
game.state.add('main', mainState);
game.state.start('main');