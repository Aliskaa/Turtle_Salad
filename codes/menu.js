var menuState = {

	preload: function(){
			 game.load.image('menu', 'assets/fond.png');
			 game.load.image('buttonPlay', 'assets/boutons_jouer1.png');
			 //game.load.image('buttonPlay', 'assets/boutons_jouer2.png');
			//game.load.spritesheet('buttonPlay', 'assets/boutons_jouer.png');
			 game.load.image('buttonHelp', 'assets/boutons_aide1.png');

			 game.load.image('buttonConfig','assets/bouton_config1.png');
		
		
	},

	//var background;
	//var PlayButton;
	//var HelpButton;
	//var QuitButton;

	create: function(){
		     background = game.add.sprite(0,0,'menu');


		     this.PlayButton = game.add.button(740,155,'buttonPlay', this.PlayB,this);
		     this.PlayButton.anchor.setTo(0.5,0.5);
		     this.PlayButton.input.useHandCursor = true;
		     //this.PlayButton.width = 250;
			 this.PlayButton.inputEnabled = true;
		     

    		

		     this.HelpButton = game.add.button(740,215,'buttonHelp', this.HelpB,this);
		     this.HelpButton.anchor.setTo(0.5,0.5);
			 this.HelpButton.input.useHandCursor = true;
			 //this.HelpButton.width =250;
			 this.HelpButton.inputEnabled = true;

			 this.ConfigButton =game.add.button(740,275,'buttonConfig', this.ConfigB,this);
			 this.ConfigButton.anchor.setTo(0.5,0.5);
			 this.ConfigButton.input.useHandCursor = true;
			 //this.ConfigButton.width = 250;
			 this.ConfigButton.inputEnabled = true;
			 

	},

	update: function(){

		if (this.ConfigButton.input.pointerOver()) {
             game.add.tween(this.ConfigButton.scale).to({x: 1.2, y: 1.2}, 50).to({x: 1, y: 1}, 150).start();
		}

		if (this.HelpButton.input.pointerOver()) {
             game.add.tween(this.HelpButton.scale).to({x: 1.2, y: 1.2}, 50).to({x: 1, y: 1}, 150).start();
		}

		if (this.PlayButton.input.pointerOver()) {
             game.add.tween(this.PlayButton.scale).to({x: 1.2, y: 1.2}, 50).to({x: 1, y: 1}, 150).start();
		}

 	},

	 /*mouseOver:function(){
     game.add.tween(this.ConfigButton.scale).to({x: 1.2, y: 1.2}, 50).to({x: 1, y: 1}, 150).start();
	 },*/

	PlayB:function(){
		game.state.start('map');
		game.add.tween(this.PlayButton.scale).to({x: 1.2, y: 1.2}, 50).to({x: 1, y: 1}, 150).start();
	},

	QuitB: function(){
		game.state.start('Help');

	},

	ConfigB:function(){
	 game.add.tween(this.ConfigButton.scale).to({x: 1.2, y: 1.2}, 50).to({x: 1, y: 1}, 150).start();
	 this.game.state.start('Config');


	},
};

/*var game = new Phaser.Game(1000,550, Phaser.AUTO, 'gameDiv');
game.state.add('menu', menuState);
game.state.start('menu');*/