var mapState = {

	create: function(){

        background = game.add.sprite(0,0,'map');

        this.tortueMap = game.add.sprite(game.tortue.x,game.tortue.y,'tortueMap');
        this.tortueMap.anchor.setTo(0.5, 0.5);
        
        this.Level1Button = game.add.button(280,435,'buttonlevel1', this.playLevel1,this);
        this.Level1Button.anchor.setTo(0.5,0.5);
        this.Level1Button.input.useHandCursor = true;
        this.Level1Button.inputEnabled = true;
        
        this.Level2Button = game.add.button(58,351,'buttonlevel2', this.playLevel2,this);
        this.Level2Button.anchor.setTo(0.5,0.5);
        this.Level2Button.input.useHandCursor = true;
        if(game.win.win1){
            this.Level2Button.inputEnabled = true;
        } else {
            this.Level2Button.inputEnabled = false;
        }

        this.Level3Button = game.add.button(253.5,128,'buttonlevel3', this.playLevel3,this);
        this.Level3Button.anchor.setTo(0.5,0.5);
        this.Level3Button.input.useHandCursor = true;
        if(game.win.win2){
            this.Level3Button.inputEnabled = true;
        } else {
            this.Level3Button.inputEnabled = false;
        }

        this.Level4Button = game.add.button(534,350,'buttonlevel4', this.playLevel4,this);
        this.Level4Button.anchor.setTo(0.5,0.5);
        this.Level4Button.input.useHandCursor = true;
        if(game.win.win3){
            this.Level4Button.inputEnabled = true;
        } else {
            this.Level4Button.inputEnabled = false;
        }

        this.Level5Button = game.add.button(532,98,'buttonlevel5', this.playLevel5,this);
        this.Level5Button.anchor.setTo(0.5,0.5);
        this.Level5Button.input.useHandCursor = true;
        if(game.win.win4){
            this.Level5Button.inputEnabled = true;
        } else {
            this.Level5Button.inputEnabled = false;
        }

        this.Level6Button = game.add.button(765,46.8,'buttonlevel6', this.playLevel6,this);
        this.Level6Button.anchor.setTo(0.5,0.5);
        this.Level6Button.input.useHandCursor = true;
        if(game.win.win5){
            this.Level6Button.inputEnabled = true;
        } else {
            this.Level6Button.inputEnabled = false;
        }
        
        this.ReturnButton = game.add.button(80,475,'buttonReturn', this.Return,this);
        this.ReturnButton.anchor.setTo(0.5,0.5);
        this.ReturnButton.input.useHandCursor = true;
        this.ReturnButton.inputEnabled = true;
        
        this.tortueMap = game.add.sprite(game.tortue.x,game.tortue.y,'tortueMap');
        this.tortueMap.anchor.setTo(0.5, 0.5);

		//ButtonSound
		this.ButtSound = game.add.audio('buttonSound');
        
        
        game.pushDechets = {
            dechetM: [],
            indexDechet: 0
        }
    },

    update: function(){


		if (this.Level1Button.input.pointerOver()) {
             game.add.tween(this.Level1Button.scale).to({x: 1.2, y: 1.2}, 50).to({x: 1, y: 1}, 150).start();
		}

		if (this.Level2Button.input.pointerOver()) {
             game.add.tween(this.Level2Button.scale).to({x: 1.2, y: 1.2}, 50).to({x: 1, y: 1}, 150).start();
		}
		if (this.Level3Button.input.pointerOver()) {
             game.add.tween(this.Level3Button.scale).to({x: 1.2, y: 1.2}, 50).to({x: 1, y: 1}, 150).start();
		}
		if (this.Level4Button.input.pointerOver()) {
             game.add.tween(this.Level4Button.scale).to({x: 1.2, y: 1.2}, 50).to({x: 1, y: 1}, 150).start();
		}
		if (this.Level5Button.input.pointerOver()) {
             game.add.tween(this.Level5Button.scale).to({x: 1.2, y: 1.2}, 50).to({x: 1, y: 1}, 150).start();
		}
		if (this.Level6Button.input.pointerOver()) {
             game.add.tween(this.Level6Button.scale).to({x: 1.2, y: 1.2}, 50).to({x: 1, y: 1}, 150).start();
		}
		if (this.ReturnButton.input.pointerOver()) {
             game.add.tween(this.ReturnButton.scale).to({x: 1.2, y: 1.2}, 50).to({x: 1, y: 1}, 150).start();
		}

 	},

 	Return: function(){
		this.ButtSound.play();
		game.state.start('menu');

	}, 

	playLevel1:function(){
		game.global = {
            activatePoubelleM:true,
            activatePoubelleV:false,
            activatePoubelleB:false,
            activatePoubelleJ:false
		};
		this.ButtSound.play();
        var PC = game.add.sprite(500, 275,'PC1');
        PC.anchor.setTo(0.5,0.5);
        var button = game.add.button(500, 520, 'buttonPlay', this.playGame, this);
        button.anchor.setTo(0.5, 0.5);
	},

	playLevel2:function(){
		game.global = {
            activatePoubelleM :true,
            activatePoubelleV :true,
            activatePoubelleB :false,
            activatePoubelleJ :false
		};
		this.ButtSound.play();
        var PC = game.add.sprite(500, 275,'PC2');
        PC.anchor.setTo(0.5,0.5);
        var button = game.add.button(500, 520, 'buttonPlay', this.playGame, this);
        button.anchor.setTo(0.5, 0.5);
	},

	playLevel3:function(){
		game.global = {
			activatePoubelleM:true,
            activatePoubelleV:true,
            activatePoubelleB:false,
            activatePoubelleJ:false
		};
		this.ButtSound.play();
        game.dechets.dechetV = ['bouteille_verre','bocal'];
        var PC = game.add.sprite(500, 275,'PC3');
        PC.anchor.setTo(0.5,0.5);
        var button = game.add.button(500, 520, 'buttonPlay', this.playGame, this);
        button.anchor.setTo(0.5, 0.5);

	},

	playLevel4:function(){
		game.global = {
			activatePoubelleM:true,
            activatePoubelleV:true,
            activatePoubelleB:true,
            activatePoubelleJ:false
		};
		this.ButtSound.play();
        var PC = game.add.sprite(500, 275,'PC4');
        PC.anchor.setTo(0.5,0.5);
        var button = game.add.button(500, 520, 'buttonPlay', this.playGame, this);
        button.anchor.setTo(0.5, 0.5);

	},

	playLevel5:function(){
		game.global = {
			activatePoubelleM:true,
            activatePoubelleV:true,
            activatePoubelleB:true,
            activatePoubelleJ:true
		};
		this.ButtSound.play();
        var PC = game.add.sprite(500, 275,'PC5');
        PC.anchor.setTo(0.5,0.5);
        var button = game.add.button(500, 520, 'buttonPlay', this.playGame, this);
        button.anchor.setTo(0.5, 0.5);
	},

	playLevel6:function(){
		this.ButtSound.play();
        game.dechets.dechetJ = ['conserve','lait'];
        var PC = game.add.sprite(500, 275,'PC6');
        PC.anchor.setTo(0.5,0.5);
        var button = game.add.button(500, 520, 'buttonPlay', this.playGame, this);
        button.anchor.setTo(0.5, 0.5);
	},

    playGame: function(){
        game.state.start('play');
    }

};