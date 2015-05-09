var playState = {
    
	create: function(){
        
        this.background = game.add.sprite(0, 0, 'backgroundGame');
        this.background = game.add.sprite(10, 10, 'panneauScores');
        this.background = game.add.sprite(785, 10, 'panneauPoubelles');
		
		game.physics.startSystem(Phaser.Physics.ARCADE);
		
		this.cursor = game.input.keyboard.createCursorKeys();
        
        this.nbdechet = 2;
        this.nbdechetJ = 0;
        this.nbdechetB = 0;
        this.nbdechetV = 0;
        this.nbdechetM = 0;
        this.score = 0;
        this.dechetrestant = this.nbdechet;
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
        
		this.trashLoop = this.time.events.loop(2200, this.addEnemy, this);
        
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
        
        if(this.dechetrestant == -1){
            // game.state.start('menu');
            game.time.events.remove(this.trashLoop);
            //this.input.keyboard.destroy();
            this.scorePopUp = game.add.sprite(500, 275, 'panneauScoresPopUp');
            this.scorePopUp.anchor.setTo(0.5,0.5);
            this.poubelleMPopUp = game.add.sprite(350, 275, 'poubelleMF');
			this.poubelleMPopUp.anchor.setTo(0.5,0.5);
			this.poubelleVPopUp = game.add.sprite(350, 375, 'poubelleVF');
			this.poubelleVPopUp.anchor.setTo(0.5,0.5);
			this.poubelleBPopUp = game.add.sprite(550, 275, 'poubelleBF');
			this.poubelleBPopUp.anchor.setTo(0.5,0.5);
			this.poubelleJPopUp = game.add.sprite(550, 375, 'poubelleJF');
			this.poubelleJPopUp.anchor.setTo(0.5,0.5);
			this.nbdechetMLabel = game.add.text(400, 270, ''+this.nbdechetM, {font: '18px Arial', fill: '#000000'});
			this.nbdechetVLabel = game.add.text(400, 370, ''+this.nbdechetV, {font: '18px Arial', fill: '#000000'});
			this.nbdechetBLabel = game.add.text(600, 270, ''+this.nbdechetB, {font: '18px Arial', fill: '#000000'});
			this.nbdechetJLabel = game.add.text(600, 370, ''+this.nbdechetJ, {font: '18px Arial', fill: '#000000'});
            
            
            //game.win.win1 = true;
            
            //game.state.start('map');
		   
        }
	},

	addEnemy: function(){        
        var enemy = this.enemies.getFirstDead();
		var position = 490-Math.floor(this.numberOfLane/2)*110;

		if (!enemy) {
			return;
		}
        
        var dechets = null;
        var nbdechet = 0;
        
        dechets = [];
        nbdechet = 0;
        
        if(game.global.activatePoubelleM){
            dechets.push('dechetM');
            nbdechet+=1;
        }
        if(game.global.activatePoubelleV){
            dechets.push('dechetV');
            nbdechet+=1;
        }
        if(game.global.activatePoubelleB){
            dechets.push('dechetB');
            nbdechet+=1;
        }
       if(game.global.activatePoubelleJ){
            dechets.push('dechetJ');
            nbdechet+=1;
        }


        var positionDechet = Math.floor(Math.random()*nbdechet);
        enemy.loadTexture(dechets[positionDechet]);
        enemy.key = dechets[positionDechet];

        position = position + Math.floor(Math.random()*this.numberOfLane)*110;
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
				this.player.body.velocity.x = -300;
			}
		}
		else if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
			if(this.player.body.x + 4 <= 700) {
				this.player.body.velocity.x = 300;
			}
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
    }
};