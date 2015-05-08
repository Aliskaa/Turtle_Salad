var mainState = {
    
	preload: function(){
        
		// Player
		game.load.spritesheet('tortue', 'assets/sprite_tortue.png', 60, 60);
		// Ennemy
        game.load.spritesheet('dechet', 'assets/spritedechet.png', 20, 20);
        game.load.image('dechetB', 'assets/enemy_bleu.png');
        game.load.image('dechetJ', 'assets/enemy_jaune.png');
        game.load.image('dechetV', 'assets/enemy_vert.png');
        game.load.image('dechetM', 'assets/enemy_marron.png');
        
	},

	create: function(){
        
		game.stage.backgroundColor = '#3498db';
		
		game.physics.startSystem(Phaser.Physics.ARCADE);
		
		this.cursor = game.input.keyboard.createCursorKeys();
        
        this.score = 0;
        this.scoreLabel = game.add.text(30, 30, 'score : 0', {font: '18px Arial', fill: '#ffffff'});
		
		this.player = game.add.sprite(game.world.centerX, 475, 'tortue');
		this.player.anchor.setTo(0.5, 0.5);
		game.physics.arcade.enable(this.player);
		this.player.frame = 2;
        
        
		this.enemies = game.add.group();
		this.enemies.enableBody = true;
		this.enemies.createMultiple(15,'dechetB');
        this.nextDechet = 0;
        
		this.time.events.loop(2200, this.addEnemy, this);
        
        this.numberOfLane = 5;
        //this.game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]);
        this.Turtle0Button = this.input.keyboard.addKey(Phaser.Keyboard.A);
        this.Turtle0Button.onDown.add(function() { this.player.frame=0; },this);
        this.Turtle1Button = this.input.keyboard.addKey(Phaser.Keyboard.Z);
        this.Turtle1Button.onDown.add(function() { this.player.frame=1; },this);
        this.Turtle2Button = this.input.keyboard.addKey(Phaser.Keyboard.E);
        this.Turtle2Button.onDown.add(function() { this.player.frame=2; },this);
        this.Turtle3Button = this.input.keyboard.addKey(Phaser.Keyboard.R);
        this.Turtle3Button.onDown.add(function() { this.player.frame=3; },this);
	},

	update: function(){
        game.physics.arcade.overlap(this.player, this.enemies, this.dieDechet, null, this);
        
		this.movePlayer();
	},

	addEnemy: function(){        
        var enemy = this.enemies.getFirstDead();
		var position = 500-Math.floor(this.numberOfLane/2)*60;

		if (!enemy) {
			return;
		}
        
        var dechets = ['dechetJ', 'dechetV', 'dechetB', 'dechetM'];
        var positionDechet = Math.floor(Math.random()*4);
        enemy.loadTexture(dechets[positionDechet]);

        position = position + Math.floor(Math.random()*this.numberOfLane)*60;
		enemy.anchor.setTo(0.5, 1);
		enemy.reset(position, 125);
		enemy.body.gravity.y = 250;
		enemy.body.bounce.x = 1;
		enemy.checkWorldBounds = true;
		enemy.cutOfBoundsKill = true;
        
        this.nextDechet = this.nextDechet + 1;
    },

	movePlayer: function(){
		this.player.body.velocity.x = 0;
		

		if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
			if(this.player.body.x - 4 >= 100) {
				this.player.body.velocity.x = -200;
			}
		}
		else if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
			if(this.player.body.x + 4 <= 900) {
				this.player.body.velocity.x = 200;
			}
		}
	},
    
    dieDechet: function(player,enemy){
        enemy.kill();
        
        this.score += 1;
		this.scoreLabel.text = 'score : '+this.score;
        
    }

	
};

var game = new Phaser.Game(1000, 550, Phaser.AUTO, 'gameDiv');
game.state.add('main', mainState);
game.state.start('main');