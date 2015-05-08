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


		     this.PlayButton = game.add.button(625,125,'buttonPlay', this.PlayB,this);
		     this.PlayButton.input.useHandCursor = true;
		     this.PlayButton.width = 250;
	
		     

    		

		     this.HelpButton = game.add.button(625,190,'buttonHelp', this.HelpB,this);
			 this.HelpButton.input.useHandCursor = true;
			 this.HelpButton.width =250;

			 this.ConfigButton = game.add.button(625,255,'buttonConfig', this.ConfigB,this);
			 this.ConfigButton.input.useHandCursor = true;
			 this.ConfigButton.width = 250;


	},


	PlayB:function(){
		game.state.start('map');
	},

	QuitB: function(){
		game.state.start('Help');

	},

	ConfigB:function(){
	 game.state.start('Config');

	},
};