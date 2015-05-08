var menuState = {

	preload: function(){
		game.load.image('menu', 'assets/fond.png');

		game.load.image('buttonPlay', 'assets/bouton_jouer.png');
		game.load.image('buttonHelp', 'assets/bouton_aide copie.png');
		game.load.image('buttonQuit', 'assets/bouton_quitter copie.png');
		
		
	},

	//var background;
	//var PlayButton;
	//var HelpButton;
	//var QuitButton;

	create: function(){
		background = game.add.sprite(0,0,'menu');


		this.PlayButton = game.add.button(150,150,'buttonPlay', this.PlayB,this);
		//this.PlayJouerButton.input.useHandCursor = true;
		PlayButton.width = 100;

		this.HelpButton = game.add.button(150,160,'buttonHelp', this.HelpB,this);
		//this.HelpButton.input.useHandCursor = true;
		HelpButton.width = 100;

		this.QuitButton = game.add.button(150,170,'buttonQuit', this.QuitB,this);
		//this.QuitButton.input.useHandCursor = true;
		QuitButton.width = 100;


	},


	QuitB: function(){
		this.close();
	},

	PlayB:function(){
		game.state.start('map');
	},

	QuitB: function(){
		game.state.start('Help');

	},

	

};

var game = new Phaser.Game(1000, 550, Phaser.AUTO, 'gameDiv');
	game.state.add('menu', menuState);
	game.state.start('menu');