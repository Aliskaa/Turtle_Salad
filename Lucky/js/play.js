var playState = {
    
	create: function(){
        
        this.activatePoubelleM=false;
        this.activatePoubelleV=true;
        this.activatePoubelleB=false;
        this.activatePoubelleJ=true;
        
        
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
        
        if(this.activatePoubelleM){
            this.poubelleM = game.add.sprite(790, 100, 'poubelleMO');
            this.poubelleM.anchor.setTo(0,1);
        }
        if(this.activatePoubelleV){
            this.poubelleV = game.add.sprite(840, 100, 'poubelleVF');
            this.poubelleV.anchor.setTo(0,1);
        }
        if(this.activatePoubelleB){
            this.poubelleB = game.add.sprite(890, 100, 'poubelleBF');
            this.poubelleB.anchor.setTo(0,1);
        }
        if(this.activatePoubelleJ){    
            this.poubelleJ = game.add.sprite(940, 100, 'poubelleJF');
            this.poubelleJ.anchor.setTo(0,1);
        }
		this.player = game.add.sprite(game.world.centerX, 475, 'tortue');
		this.player.anchor.setTo(0.5, 0.5);
		game.physics.arcade.enable(this.player);
		this.player.frame = 0;
        this.player.key = 'tortueM';
        
		this.enemies = game.add.group();
		this.enemies.enableBody = true;
		this.enemies.createMultiple(15,'dechetM');
        this.nextDechet = 0;
        
		this.time.events.loop(2200, this.addEnemy, this);
        
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
            game.state.start('menu');
        }
	},

	addEnemy: function(){        
        var enemy = this.enemies.getFirstDead();
		var position = 500-Math.floor(this.numberOfLane/2)*60;

		if (!enemy) {
			return;
		}
        
        var dechets = null;
        var nbdechet = 0;
        
        dechets = [];
        nbdechet = 0;
        
        if(this.activatePoubelleM){
            dechets.push('dechetM');
            nbdechet+=1;
        }
        if(this.activatePoubelleV){
            dechets.push('dechetV');
            nbdechet+=1;
        }
        if(this.activatePoubelleB){
            dechets.push('dechetB');
            nbdechet+=1;
        }
       if(this.activatePoubelleJ){
            dechets.push('dechetJ');
            nbdechet+=1;
        }


        //var dechets = ['dechetJ', 'dechetV', 'dechetB', 'dechetM'];
        var positionDechet = Math.floor(Math.random()*nbdechet);
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
        
        if(player.key == 'tortueJ' & enemy.key == 'dechetJ' & this.activatePoubelleJ){
            this.score += 1;
            this.scoreLabel.text = 'score : '+this.score+' / '+this.nbdechet;
            game.add.tween(this.poubelleJ.scale).to({x: 1.2, y: 1.2}, 50).to({x: 1, y: 1}, 150).start();
        }
        else if(player.key == 'tortueB' & enemy.key == 'dechetB' & this.activatePoubelleB){
            this.score += 1;
            this.scoreLabel.text = 'score : '+this.score+' / '+this.nbdechet;
            game.add.tween(this.poubelleB.scale).to({x: 1.2, y: 1.2}, 50).to({x: 1, y: 1}, 150).start();
        }
        else if(player.key == 'tortueV' & enemy.key == 'dechetV' & this.activatePoubelleV){
            this.score += 1;
            this.scoreLabel.text = 'score : '+this.score+' / '+this.nbdechet;
            game.add.tween(this.poubelleV.scale).to({x: 1.2, y: 1.2}, 50).to({x: 1, y: 1}, 150).start();
        }
        else if(player.key == 'tortueM' & enemy.key == 'dechetM' & this.activatePoubelleM){
            this.score += 1;
            this.scoreLabel.text = 'score : '+this.score+' / '+this.nbdechet;
            game.add.tween(this.poubelleM.scale).to({x: 1.2, y: 1.2}, 50).to({x: 1, y: 1}, 150).start();
        }
        else {
            game.add.tween(this.player).to( { angle: 360 }, 750, Phaser.Easing.Linear.None, true);
            game.add.tween(this.player.scale).to( { x: 1.5, y: 1.5 }, 325).to({x: 1, y: 1}, 325).start();
        }
    }
};