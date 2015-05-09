var mapState = {




	create: function(){

		     background = game.add.sprite(0,0,'map');

		     this.Level1Button = game.add.button(280,435,'buttonlevel1', this.playLevel1,this);
		     this.Level1Button.anchor.setTo(0.5,0.5);
		     this.Level1Button.input.useHandCursor = true;
		     this.Level1Button.inputEnabled = true;

		     this.Level2Button = game.add.button(58,351,'buttonlevel2', this.playLevel2,this);
		     this.Level2Button.anchor.setTo(0.5,0.5);
		     this.Level2Button.input.useHandCursor = true;
		     this.Level2Button.inputEnabled = false;
		     


		     this.Level3Button = game.add.button(253.5,128,'buttonlevel3', this.playLevel3,this);
		     this.Level3Button.anchor.setTo(0.5,0.5);
		     this.Level3Button.input.useHandCursor = true;
		     this.Level3Button.inputEnabled = false;

		     this.Level4Button = game.add.button(534,350,'buttonlevel4', this.playLevel4,this);
		     this.Level4Button.anchor.setTo(0.5,0.5);
		     this.Level4Button.input.useHandCursor = true;
		     this.Level4Button.inputEnabled = false;

		     this.Level5Button = game.add.button(532,98,'buttonlevel5', this.playLevel5,this);
		     this.Level5Button.anchor.setTo(0.5,0.5);
		     this.Level5Button.input.useHandCursor = true;
		     this.Level5Button.inputEnabled = false;

		     this.Level6Button = game.add.button(765,46.8,'buttonlevel6', this.playLevel6,this);
		     this.Level6Button.anchor.setTo(0.5,0.5);
		     this.Level6Button.input.useHandCursor = true;
		     this.Level6Button.inputEnabled = false;

		     this.ReturnButton = game.add.button(80,475,'buttonReturn', this.Return,this);
		 	 this.ReturnButton.anchor.setTo(0.5,0.5);
		 	 this.ReturnButton.input.useHandCursor = true;
		 	 this.ReturnButton.inputEnabled = true;


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
		game.state.start('menu');

	}, 

	playLevel1:function(){
		game.global = {
			level : 1
		};
		game.state.start('play');

	},

	playLevel2:function(){
		game.global = {
			level : 2,
			win : false
		};
		if (win){
			this.Level2Button.inputEnabled = true;
			game.state.start('play');
		}
		

	},

	playLevel3:function(){
		game.global = {
			level : 3,
			win : false
		};
		if (win){
			this.Level3Button.inputEnabled = true;
			game.state.start('play');
		}

	},

	playLevel4:function(){
		game.global = {
			level : 4,
			win : false
		};
		if (win){
			this.Level4Button.inputEnabled = true;
			game.state.start('play');
		}

	},

	playLevel5:function(){
		game.global = {
			level : 5,
			win: false
		};
		if (win){
			this.Level5Button.inputEnabled = true;
			game.state.start('play');
		}

	},

	playLevel6:function(){
		game.global = {
			level : 6,
			win: false
		};
		if (win){
			this.Level6Button.inputEnabled = true;
			game.state.start('play');
		}

	},


};