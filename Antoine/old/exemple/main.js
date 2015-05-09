var mainState = {
	preload: function(){
		// Player
		game.load.image('player', 'assets/player.png');
		game.load.image('coin', 'assets/coin.png');
		game.load.image('enemy', 'assets/enemy.png');
		// World
		game.load.image('wallV', 'assets/wallVertical.png');
		game.load.image('wallH', 'assets/wallHorizontal.png');
	},

	create: function(){
		// Background Color
		game.stage.backgroundColor = '#3498db';
		// Physics Engine
		game.physics.startSystem(Phaser.Physics.ARCADE);
		// Control
		this.cursor = game.input.keyboard.createCursorKeys();
		// Display Walls
		this.createWorld();
		// Display score
		//this.scoreLabel = game.add.text(30, 30, 'score : 0', {font: '18px Arial', fill: '#ffffff'});
		this.score = 0;
		// Display player
		this.player = game.add.sprite(game.world.centerX, game.world.centerY, 'player');
		this.player.anchor.setTo(0.5, 0.5); // position
		game.physics.arcade.enable(this.player); // player will use the Arcade physics engine
		this.player.body.gravity.y = 500; // gravity
		// Display coin
		//this.coin = game.add.sprite(60, 140, 'coin');
		//game.physics.arcade.enable(this.coin);
		//this.coin.anchor.setTo(0.5, 0.5);
		// Display Ennemies
		//this.enemies = game.add.group();
		//this.enemies.enableBody = true;
		//this.enemies.createMultiple(10, 'enemy');
		
		//this.time.events.loop(2200, this.addEnemy, this);
	},

	update: function(){
		//Collisions
		game.physics.arcade.collide(this.player, this.walls);
		//game.physics.arcade.collide(this.enemies, this.walls);
		//game.physics.arcade.overlap(this.player, this.coin, this.takeCoin, null, this);
		//game.physics.arcade.overlap(this.player, this.enemies, this.playerDie, null, this);	

		this.movePlayer();
		
		if(!this.player.inWorld){
			this.playerDie();
		}
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

		if(game.input.keyboard.isDown(Phaser.Keyboard.UP) && this.player.body.touching.down) {
			console.log("JUMP");
			this.player.body.velocity.y = -320; //jump
		}
	},

	createWorld: function(){
		//Create our wall group with Arcade physics
		this.walls = game.add.group();
		this.walls.enableBody = true;

		//Create walls
		game.add.sprite(0, 0, 'wallV', 0, this.walls); // Left
		game.add.sprite(480, 0, 'wallV', 0, this.walls); // Right

		game.add.sprite(0, 0, 'wallH', 0, this.walls); // Top Left
		game.add.sprite(300, 0, 'wallH', 0, this.walls); // Top Right
		game.add.sprite(0, 320, 'wallH', 0, this.walls); // Bottom Left
		game.add.sprite(300, 320, 'wallH', 0, this.walls); // Bottom Right

		game.add.sprite(-100, 160, 'wallH', 0, this.walls); // Middle Left
		game.add.sprite(400, 160, 'wallH', 0, this.walls); // Middle Right

		var middleTop = game.add.sprite(100, 80, 'wallH', 0, this.walls);
		middleTop.scale.setTo(1.5, 1); // taille (150% x, 100% y)
		var middleBottom = game.add.sprite(100, 240, 'wallH', 0, this.walls);
		middleBottom.scale.setTo(1.5, 1);

		// Set all the walls to be immovable
		this.walls.setAll('body.immovable', true);
	},

	playerDie: function(){
		game.state.start('main');
	},

	takeCoin: function(){
		this.coin.kill();
		this.score += 5;
		this.scoreLabel.text = 'score : '+this.score;
		
		this.updateCoinPosition();
	},

	updateCoinPosition: function(){
		var coinPosition = [
			{x: 140, y: 60}, {x: 360, y: 60},
			{x: 60, y: 140}, {x: 440, y: 140},
			{x: 130, y: 300}, {x: 370, y: 300}
		];

		for(var i = 0; i < coinPosition.length; i++){
			if (coinPosition[i].x === this.coin.x){
				coinPosition.splice(i, 1);
			};
		}

		var newPosition = coinPosition[
			game.rnd.integerInRange(0, coinPosition.length-1)];

		this.coin.reset(newPosition.x, newPosition.y);
	},

	addEnemy: function(){
		var enemy = this.enemies.getFirstDead();

		if (!enemy) {
			return;
		}

		enemy.anchor.setTo(0.5, 1);
		enemy.reset(game.world.centerX, 0);
		enemy.body.gravity.y = 500;
		enemy.body.velocity.x = 100 * Phaser.Math.randomSign();
		enemy.body.bounce.x = 1;
		enemy.checkWorldBounds = true;
		enemy.cutOfBoundsKill = true;
	},
};

var game = new Phaser.Game(500, 340, Phaser.AUTO, 'gameDiv');
game.state.add('main', mainState);
game.state.start('main');