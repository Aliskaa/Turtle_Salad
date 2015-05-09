var playState = {
    
	create: function(){
        
        this.background = game.add.sprite(0, 0, 'backgroundGame');
        this.background = game.add.sprite(10, 10, 'panneauScores');
        this.background = game.add.sprite(785, 10, 'panneauPoubelles');
		
		game.physics.startSystem(Phaser.Physics.ARCADE);
		
		this.cursor = game.input.keyboard.createCursorKeys();
        
        this.nbdechet = game.difficulty.numberOfTrash;
        this.nbdechetJ = 0;
        this.nbdechetB = 0;
        this.nbdechetV = 0;
        this.nbdechetM = 0;
        this.score = 0;
        this.dechetrestant = this.nbdechet;
		this.deadTrash=0;
        this.scoreLabel = game.add.text(30, 30, 'score : 0 / '+this.nbdechet, {font: '18px Arial', fill: '#000000'});
        this.nbdechetLabel = game.add.text(30, 50, 'restants : '+this.nbdechet, {font: '18px Arial', fill: '#000000'});
        
        if(game.global.activatePoubelleM){
            this.poubelleM = game.add.sprite(790, 100, 'poubelleMO');
            this.poubelleM.anchor.setTo(0,1);
        }
        if(game.global.activatePoubelleV){
            this.poubelleV = game.add.sprite(840, 100, 'poubelleVF');
            this.poubelleV.anchor.setTo(0,1);
        }
        if(game.global.activatePoubelleB){
            this.poubelleB = game.add.sprite(890, 100, 'poubelleBF');
            this.poubelleB.anchor.setTo(0,1);
        }
        if(game.global.activatePoubelleJ){    
            this.poubelleJ = game.add.sprite(940, 100, 'poubelleJF');
            this.poubelleJ.anchor.setTo(0,1);
        }
		this.player = game.add.sprite(game.world.centerX, 500, 'tortue');
		this.player.anchor.setTo(0.5, 0.5);
		game.physics.arcade.enable(this.player);
		this.player.frame = 0;
        this.player.key = 'tortueM';
        
		this.enemies = game.add.group();
		this.enemies.enableBody = true;
		this.enemies.createMultiple(this.nbdechet,'dechetM');
        this.nextDechet = 0;

		this.trashLoop = this.time.events.loop(game.difficulty.trashPopFrequency, this.addEnemy, this);
        
        this.numberOfLane = 5;
        
        if(typeof this.poubelleM  != "undefined"){
            this.Turtle0Button = this.input.keyboard.addKey(Phaser.Keyboard.A);
            this.Turtle0Button.onDown.add(function(){
                                            this.player.frame=0;
                                            this.player.key = 'tortueM';
                                            if(typeof this.poubelleJ  != "undefined") this.poubelleJ.loadTexture('poubelleJF');
                                            if(typeof this.poubelleB  != "undefined") this.poubelleB.loadTexture('poubelleBF');
                                            if(typeof this.poubelleV  != "undefined") this.poubelleV.loadTexture('poubelleVF');
                                            this.poubelleM.loadTexture('poubelleMO');},this);
        }
        if(typeof this.poubelleV  != "undefined"){
            this.Turtle0Button = this.input.keyboard.addKey(Phaser.Keyboard.Z);
            this.Turtle0Button.onDown.add(function(){
                                            this.player.frame=1;
                                            this.player.key = 'tortueV';
                                            if(typeof this.poubelleJ  != "undefined") this.poubelleJ.loadTexture('poubelleJF');
                                            if(typeof this.poubelleB  != "undefined") this.poubelleB.loadTexture('poubelleBF');
                                            if(typeof this.poubelleM  != "undefined") this.poubelleM.loadTexture('poubelleMF');
                                            this.poubelleV.loadTexture('poubelleVO');},this);
        }
       if(typeof this.poubelleB  != "undefined"){
            this.Turtle0Button = this.input.keyboard.addKey(Phaser.Keyboard.E);
            this.Turtle0Button.onDown.add(function(){
                                            this.player.frame=2;
                                            this.player.key = 'tortueB';
                                            if(typeof this.poubelleJ  != "undefined") this.poubelleJ.loadTexture('poubelleJF');
                                            if(typeof this.poubelleM  != "undefined") this.poubelleM.loadTexture('poubelleMF');
                                            if(typeof this.poubelleV  != "undefined") this.poubelleV.loadTexture('poubelleVF');
                                            this.poubelleB.loadTexture('poubelleBO');},this);
        }
        if(typeof this.poubelleJ  != "undefined"){
            this.Turtle0Button = this.input.keyboard.addKey(Phaser.Keyboard.R);
            this.Turtle0Button.onDown.add(function(){
                                            this.player.frame=3;
                                            this.player.key = 'tortueJ';
                                            if(typeof this.poubelleM  != "undefined") this.poubelleM.loadTexture('poubelleMF');
                                            if(typeof this.poubelleB  != "undefined") this.poubelleB.loadTexture('poubelleBF');
                                            if(typeof this.poubelleV  != "undefined") this.poubelleV.loadTexture('poubelleVF');
                                            this.poubelleJ.loadTexture('poubelleJO');},this);
        }
	},

	update: function(){
        game.physics.arcade.overlap(this.player, this.enemies, this.dieDechet, null, this);
        
		this.movePlayer();
        
        if(this.dechetrestant == 0){
            // game.state.start('menu');
            game.time.events.remove(this.trashLoop);
		}
		if(this.deadTrash == this.nbdechet){
            //this.input.keyboard.destroy();
            this.scorePopUp = game.add.sprite(500, 275, 'panneauScoresPopUp');
            this.scorePopUp.anchor.setTo(0.5,0.5);
            if(this.score/this.nbdechet >= 0.8){
                this.messagePopUp = game.add.sprite(500, 150, 'Bravo');
                this.messagePopUp.anchor.setTo(0.5, 0.5);
                this.buttonSuivant = game.add.button(500,450,'buttonPlay', this.winGame,this);
                this.buttonSuivant.anchor.setTo(0.5, 0.5);
            } else {
                this.messagePopUp = game.add.sprite(500, 150, 'Recommencer');
                this.messagePopUp.anchor.setTo(0.5, 0.5);
                this.buttonSuivant = game.add.button(500,450,'buttonPlay', this.loseGame,this);
                this.buttonSuivant.anchor.setTo(0.5, 0.5);
            }
            this.messagePopUp.anchor.setTo(0.5, 0.5);
            this.poubelleMPopUp = game.add.sprite(350, 275, 'poubelleMF');
			this.poubelleMPopUp.anchor.setTo(0.5,0.5);
			this.poubelleVPopUp = game.add.sprite(350, 375, 'poubelleVF');
			this.poubelleVPopUp.anchor.setTo(0.5,0.5);
			this.poubelleBPopUp = game.add.sprite(550, 275, 'poubelleBF');
			this.poubelleBPopUp.anchor.setTo(0.5,0.5);
			this.poubelleJPopUp = game.add.sprite(550, 375, 'poubelleJF');
			this.poubelleJPopUp.anchor.setTo(0.5,0.5);
            this.pourcent = this.score/this.nbdechet * 100;
            this.nbdechetpourcent = game.add.text(500, 215, 'Tu as '+this.pourcent+' %', {font: '30px Arial', fill: '#000000'});
            this.nbdechetpourcent.anchor.setTo(0.5,0.5);
			this.nbdechetMLabel = game.add.text(400, 270, ''+this.nbdechetM, {font: '18px Arial', fill: '#000000'});
			this.nbdechetVLabel = game.add.text(400, 370, ''+this.nbdechetV, {font: '18px Arial', fill: '#000000'});
			this.nbdechetBLabel = game.add.text(600, 270, ''+this.nbdechetB, {font: '18px Arial', fill: '#000000'});
			this.nbdechetJLabel = game.add.text(600, 370, ''+this.nbdechetJ, {font: '18px Arial', fill: '#000000'});
        }
	},

	addEnemy: function(){        
        var enemy = this.enemies.getFirstDead();
		var position = 490-Math.floor(this.numberOfLane/2)*110;

		if (!enemy) {
			return;
		}
        
        var dechets = null;
        var indexDechet = 0;
        
        dechets = [];
        indexDechet = 0;
        
        /*if(game.global.activatePoubelleM){
            dechets.push('dechetM');
            indexDechet+=1;
        }*/
        if(game.global.activatePoubelleV){
            dechets.push('dechetV');
            indexDechet+=1;
        }
        if(game.global.activatePoubelleB){
            dechets.push('dechetB');
            indexDechet+=1;
        }
       if(game.global.activatePoubelleJ){
            dechets.push('dechetJ');
            indexDechet+=1;
        }

        var positionDechet = Math.floor(Math.random()*game.pushDechets.indexDechet);
        enemy.loadTexture(game.pushDechets.dechet[positionDechet]);
        enemy.key = game.pushDechets.type[positionDechet];

        position = position + Math.floor(Math.random()*this.numberOfLane)*110;
		enemy.anchor.setTo(0.5, 1);
		enemy.reset(position, 125);
		enemy.body.gravity.y = game.difficulty.gravityDifficulty;
		enemy.body.bounce.x = 1;
		enemy.checkWorldBounds = true;
		enemy.cutOfBoundsKill = true;
        enemy.events.onOutOfBounds.add(this.trashOutOfBounds, this);

        this.dechetrestant -= 1;
        this.nbdechetLabel.text = 'restants : '+this.dechetrestant;
        
        this.nextDechet = this.nextDechet + 1;
    },

	movePlayer: function(){
		this.player.body.velocity.x = 0;


		if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
			if(this.player.body.x - 4 >= 200) {
				this.player.body.velocity.x = -300;
				game.add.tween(this.player).to( { angle: -40 }, 100, Phaser.Easing.Linear.None, true);
			}
		}
		else if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
			if(this.player.body.x + 4 <= 700) {
				this.player.body.velocity.x = 300;
				game.add.tween(this.player).to( { angle: 40 }, 100, Phaser.Easing.Linear.None, true);
			}
		}else{
			game.add.tween(this.player).to( { angle: 0 }, 100, Phaser.Easing.Linear.None, true);
		}
	},
    
    dieDechet: function(player,enemy){
        enemy.kill();
        
        if(player.key == 'tortueJ' & enemy.key == 'dechetJ' & game.global.activatePoubelleJ){
            this.score += 1;
            this.nbdechetJ += 1;
            this.scoreLabel.text = 'score : '+this.score+' / '+this.nbdechet;
            game.add.tween(this.poubelleJ.scale).to({x: 1.2, y: 1.2}, 50).to({x: 1, y: 1}, 150).start();
        }
        else if(player.key == 'tortueB' & enemy.key == 'dechetB' & game.global.activatePoubelleB){
            this.score += 1;
            this.nbdechetB += 1;
            this.scoreLabel.text = 'score : '+this.score+' / '+this.nbdechet;
            game.add.tween(this.poubelleB.scale).to({x: 1.2, y: 1.2}, 50).to({x: 1, y: 1}, 150).start();
        }
        else if(player.key == 'tortueV' & enemy.key == 'dechetV' & game.global.activatePoubelleV){
            this.score += 1;
            this.nbdechetV += 1;
            this.scoreLabel.text = 'score : '+this.score+' / '+this.nbdechet;
            game.add.tween(this.poubelleV.scale).to({x: 1.2, y: 1.2}, 50).to({x: 1, y: 1}, 150).start();
        }
        else if(player.key == 'tortueM' & enemy.key == 'dechetM' & game.global.activatePoubelleM){
            this.score += 1;
            this.nbdechetM += 1;
            this.scoreLabel.text = 'score : '+this.score+' / '+this.nbdechet;
            game.add.tween(this.poubelleM.scale).to({x: 1.2, y: 1.2}, 50).to({x: 1, y: 1}, 150).start();
        }
        else {
            game.add.tween(this.player).to( { angle: 360 }, 750, Phaser.Easing.Linear.None, true);
            game.add.tween(this.player.scale).to( { x: 1.5, y: 1.5 }, 325).to({x: 1, y: 1}, 325).start();
        }
		this.deadTrash+=1;
    },

	trashOutOfBounds: function(enemy){
		enemy.kill();
		this.deadTrash+=1;
	},

    loseGame: function(){
        game.state.start('play');
    },
    
    winGame: function(){
        if(game.win.win1){
            if(game.win.win2){
                if(game.win.win3){
                    if(game.win.win4){
                        if(game.win.win5){
                            game.win.win6 = true;
                            game.state.start('map');
                        } else {
                            game.win.win5 = true;
                            game.tortue.x = 764;
                            game.tortue.y = 43;
                            game.state.start('map');
                        }
                    } else {
                        game.win.win4 = true;
                        game.tortue.x = 533;
                        game.tortue.y = 98;
                        game.state.start('map');
                    }
                } else {
                    game.win.win3 = true;
                    game.tortue.x = 531;
                    game.tortue.y = 350;
                    game.state.start('map');
                }
            } else {
                game.win.win2 = true;
                game.tortue.x = 253;
                game.tortue.y = 126;
                game.state.start('map');
            }
        } else {
            game.win.win1 = true;
            game.tortue.x = 59;
            game.tortue.y = 349;
            game.state.start('map');
        }
    }
};