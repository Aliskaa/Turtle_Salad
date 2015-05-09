var playState = {
    
	create: function(){
        
		//game.stage.backgroundColor = '#3498db';
        
        this.background = game.add.sprite(0, 0, 'backgroundGame');
        this.background = game.add.sprite(10, 10, 'panneauScores');
        this.background = game.add.sprite(785, 10, 'panneauPoubelles');
		
		game.physics.startSystem(Phaser.Physics.ARCADE);
		
		this.cursor = game.input.keyboard.createCursorKeys();
        
        this.nbdechet = 15;
        this.score = 0;
        this.dechetrestant = this.nbdechet;
        this.scoreLabel = game.add.text(30, 30, 'score : 0 / '+this.nbdechet, {font: '18px Arial', fill: '#000000'});
        this.nbdechetLabel = game.add.text(30, 50, 'restants : '+this.nbdechet, {font: '18px Arial', fill: '#000000'});
        
        this.poubelleM = game.add.sprite(790, 100, 'poubelleMF');
        this.poubelleM.anchor.setTo(0,1);
        this.poubelleV = game.add.sprite(840, 100, 'poubelleVF');
        this.poubelleV.anchor.setTo(0,1);
        this.poubelleB = game.add.sprite(890, 100, 'poubelleBO');
        this.poubelleB.anchor.setTo(0,1);
        this.poubelleJ = game.add.sprite(940, 100, 'poubelleJF');
        this.poubelleJ.anchor.setTo(0,1);
		
		this.player = game.add.sprite(game.world.centerX, 475, 'tortue');
		this.player.anchor.setTo(0.5, 0.5);
		game.physics.arcade.enable(this.player);
		this.player.frame = 2;
        this.player.key = 'tortueB';
        
		this.enemies = game.add.group();
		this.enemies.enableBody = true;
		this.enemies.createMultiple(15,'dechetB');
        this.nextDechet = 0;
        
		this.time.events.loop(2200, this.addEnemy, this);
        
        this.numberOfLane = 5;
        //this.game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]);
        this.Turtle0Button = this.input.keyboard.addKey(Phaser.Keyboard.A);
        this.Turtle0Button.onDown.add(function(){
                                        this.player.frame=0;
                                        this.player.key = 'tortueM';
                                        this.poubelleJ.loadTexture('poubelleJF');
                                        this.poubelleB.loadTexture('poubelleBF');
                                        this.poubelleV.loadTexture('poubelleVF');
                                        this.poubelleM.loadTexture('poubelleMO');},this);
        this.Turtle1Button = this.input.keyboard.addKey(Phaser.Keyboard.Z);
        this.Turtle1Button.onDown.add(function() {
                                        this.player.frame=1;
                                        this.player.key = 'tortueV';
                                        this.poubelleJ.loadTexture('poubelleJF');
                                        this.poubelleB.loadTexture('poubelleBF');
                                        this.poubelleV.loadTexture('poubelleVO');
                                        this.poubelleM.loadTexture('poubelleMF');},this);
        this.Turtle2Button = this.input.keyboard.addKey(Phaser.Keyboard.E);
        this.Turtle2Button.onDown.add(function() {
                                        this.player.frame=2;
                                        this.player.key = 'tortueB';
                                        this.poubelleJ.loadTexture('poubelleJF');
                                        this.poubelleB.loadTexture('poubelleBO');
                                        this.poubelleV.loadTexture('poubelleVF');
                                        this.poubelleM.loadTexture('poubelleMF');},this);
        this.Turtle3Button = this.input.keyboard.addKey(Phaser.Keyboard.R);
        this.Turtle3Button.onDown.add(function() {
                                        this.player.frame=3;
                                        this.player.key = 'tortueJ';
                                        this.poubelleJ.loadTexture('poubelleJO');
                                        this.poubelleB.loadTexture('poubelleBF');
                                        this.poubelleV.loadTexture('poubelleVF');
                                        this.poubelleM.loadTexture('poubelleMF');},this);

         this.ReturnButton = game.add.button(80,495,'buttonReturn', this.Return,this);
         this.ReturnButton.anchor.setTo(0.5,0.5);
         this.ReturnButton.input.useHandCursor = true;
         this.ReturnButton.inputEnabled = true;
	},

	update: function(){
        game.physics.arcade.overlap(this.player, this.enemies, this.dieDechet, null, this);
        
		this.movePlayer();
        
        if(this.dechetrestant == 0){
            game.state.start('menu');
        }

        if (this.ReturnButton.input.pointerOver()) {
             game.add.tween(this.ReturnButton.scale).to({x: 1.2, y: 1.2}, 50).to({x: 1, y: 1}, 150).start();
        }
	},

    Return: function(){
        game.state.start('map');

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
        enemy.key = dechets[positionDechet];

        position = position + Math.floor(Math.random()*this.numberOfLane)*60;
		enemy.anchor.setTo(0.5, 1);
		enemy.reset(position, 125);
		enemy.body.gravity.y = 250;
		enemy.body.bounce.x = 1;
		enemy.checkWorldBounds = true;
		enemy.cutOfBoundsKill = true;
        
        this.dechetrestant -= 1;
        this.nbdechetLabel.text = 'restants : '+this.dechetrestant;
        
        this.nextDechet = this.nextDechet + 1;
    },

	movePlayer: function(){
		this.player.body.velocity.x = 0;

		if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
			if(this.player.body.x - 4 >= 200) {
				this.player.body.velocity.x = -200;
			}
		}
		else if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
			if(this.player.body.x + 4 <= 700) {
				this.player.body.velocity.x = 200;
			}
		}
	},
    
    dieDechet: function(player,enemy){
        enemy.kill();
        
        if(player.key == 'tortueJ' & enemy.key == 'dechetJ'){
            this.score += 1;
            this.scoreLabel.text = 'score : '+this.score+' / '+this.nbdechet;
            game.add.tween(this.poubelleJ.scale).to({x: 1.2, y: 1.2}, 50).to({x: 1, y: 1}, 150).start();
        }
        else if(player.key == 'tortueB' & enemy.key == 'dechetB'){
            this.score += 1;
            this.scoreLabel.text = 'score : '+this.score+' / '+this.nbdechet;
            game.add.tween(this.poubelleB.scale).to({x: 1.2, y: 1.2}, 50).to({x: 1, y: 1}, 150).start();
        }
        else if(player.key == 'tortueV' & enemy.key == 'dechetV'){
            this.score += 1;
            this.scoreLabel.text = 'score : '+this.score+' / '+this.nbdechet;
            game.add.tween(this.poubelleV.scale).to({x: 1.2, y: 1.2}, 50).to({x: 1, y: 1}, 150).start();
        }
        else if(player.key == 'tortueM' & enemy.key == 'dechetM'){
            this.score += 1;
            this.scoreLabel.text = 'score : '+this.score+' / '+this.nbdechet;
            game.add.tween(this.poubelleM.scale).to({x: 1.2, y: 1.2}, 50).to({x: 1, y: 1}, 150).start();
        }
    }

    



	
};