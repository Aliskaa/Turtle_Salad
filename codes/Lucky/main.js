var mainState = {
	preload: function(){
		// Player
		game.load.spritesheet('tortue', 'assets/sprite_tortue.png', 60, 60);
		// Ennemy
		game.load.image('enemy', 'assets/enemy.png');
	},

	create: function(){
		
		game.stage.backgroundColor = '#3498db';
		
		game.physics.startSystem(Phaser.Physics.ARCADE);
		
		this.cursor = game.input.keyboard.createCursorKeys();
		
		this.player = game.add.sprite(game.world.centerX, 475, 'tortue');
		this.player.anchor.setTo(0.5, 0.5);
		game.physics.arcade.enable(this.player);
		this.player.frame = 2;

		this.enemies = game.add.group();
		this.enemies.enableBody = true;
		this.enemies.createMultiple(3, 'enemy');
        this.nextDechet = 0;
        
		this.time.events.loop(2200, this.addEnemy, this);
        
        
	},

	update: function(){
        game.physics.arcade.overlap(this.player, this.enemies, this.dieDechet, null, this);
        
		this.movePlayer();


	},

	addEnemy: function(){
        var enemy = this.enemies.getFirstDead();

		if (!enemy) {
			return;
		}

		enemy.anchor.setTo(0.5, 1);
		enemy.reset(490, 125);
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
    
    dieDechet: function(){
        
        
        var enemy = this.enemies.children;
        
        enemy[this.nextDechet-1].kill();
        
    }

	
};

var game = new Phaser.Game(1000, 550, Phaser.AUTO, 'gameDiv');
game.state.add('main', mainState);
game.state.start('main');