var ConfigState = {

	preload: function(){
		//game.load.image('menu', 'assets/fond.png');

			 game.load.image('buttonEasy', 'assets/bouton_facile.png');
			 
			 game.load.image('buttonNormal', 'assets/bouton_normal.png');

			 game.load.image('buttonHard', 'assets/bouton_difficile.png');

			 game.load.image('buttonReturn','assets/fleche_retour.png');

	},

//	var level
//	var level1;
//	var level2;
//	var level3;


	create: function(){

		 background = game.add.sprite(0,0,'menu');


		 this.EasyButton = game.add.button(740,155,'buttonEasy', this.Config1,this);
		 this.EasyButton.anchor.setTo(0.5,0.5);
		 this.EasyButton.input.useHandCursor = true;
		 //this.EasyButton.width = 250;
		 this.EasyButton.inputEnabled = true;
		     
		 this.NormalButton = game.add.button(740,215,'buttonNormal', this.Config2,this);
		 this.NormalButton.anchor.setTo(0.5,0.5);
		 this.NormalButton.input.useHandCursor = true;
		 this.NormalButton.inputEnabled = true;
		 //this.NormalButton.width =250;

		 this.HardButton = game.add.button(740,275,'buttonHard', this.Config3,this);
		 this.HardButton.anchor.setTo(0.5,0.5);
		 this.HardButton.input.useHandCursor = true;
		 this.HardButton.inputEnabled = true;
		 //this.HardButton.width = 250;

		 this.ReturnButton = game.add.button(80,475,'buttonReturn', this.Return,this);
		 this.ReturnButton.anchor.setTo(0.5,0.5);
		 this.ReturnButton.input.useHandCursor = true;
		 this.ReturnButton.inputEnabled = true;
		 //this.ReturnButton.width = 250;


	},

	update: function(){

		if (this.EasyButton.input.pointerOver()) {
             game.add.tween(this.EasyButton.scale).to({x: 1.2, y: 1.2}, 50).to({x: 1, y: 1}, 150).start();
		}
		if (this.NormalButton.input.pointerOver()) {
             game.add.tween(this.NormalButton.scale).to({x: 1.2, y: 1.2}, 50).to({x: 1, y: 1}, 150).start();
		}
		
		if (this.HardButton.input.pointerOver()) {
             game.add.tween(this.HardButton.scale).to({x: 1.2, y: 1.2}, 50).to({x: 1, y: 1}, 150).start();
		}
		if (this.ReturnButton.input.pointerOver()) {
             game.add.tween(this.ReturnButton.scale).to({x: 1.2, y: 1.2}, 50).to({x: 1, y: 1}, 150).start();
		}

 	},

	Return: function(){
		game.state.start('menu');
	}, 

	Config1: function(){
		 this.level = this.level1;
	},

	Config2: function(){
	 	 this.level = this.level2;		
	},

	Config3: function(){
		 this.level = this.level3;

		
	},
};

/*var game = new Phaser.Game(1000,550, Phaser.AUTO, 'gameDiv');
game.state.add('Config', ConfigState);
game.state.start('Config');*/






