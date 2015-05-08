var ConfigState = {

	preload: function(){
		game.load.image('menu', 'assets/fond.png');

			 game.load.image('buttonEasy', 'assets/.png');
			 
			 game.load.image('buttonNormal', 'assets/.png');

			 game.load.image('buttonHard', 'assets/.png');

			 game.load.image('buttonReturn','assets/.png');

	},

//	var level
//	var level1;
//	var level2;
//	var level3;


	create: function(){

		 background = game.add.sprite(0,0,'menu');


		 this.EasyButton = game.add.button(625,125,'buttonEasy', this.Config1,this);
		 this.EasyButton.input.useHandCursor = true;
		 this.EasyButton.width = 250;
	
		     
		 this.NormalButton = game.add.button(625,190,'buttonNormal', this.Config2,this);
		 this.NormalButton.input.useHandCursor = true;
		 this.NormalButton.width =250;

		 this.HardButton = game.add.button(625,255,'buttonHard', this.Config3,this);
		 this.HardButton.input.useHandCursor = true;
		 this.HardButton.width = 250;

		 this.ReturnButton = game.add.button(100,600,'buttonReturn', this.Return,this);
		 this.ReturnButton.input.useHandCursor = true;
		 this.ReturnButton.width = 250;


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








