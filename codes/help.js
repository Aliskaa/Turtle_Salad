var helpState = {

	preload: function(){
		game.load.image('menu', 'assets/fond.png');
		game.load.image('buttonReturn','assets/fleche_retour2.png');
	},

	preload: function(){

		 background = game.add.sprite(0,0,'menu');

		 this.ReturnButton = game.add.button(80,475,'buttonReturn', this.Return,this);
		 this.ReturnButton.anchor.setTo(0.5,0.5);
		 this.ReturnButton.input.useHandCursor = true;
		 this.ReturnButton.inputEnabled = true;

	},
		
	update: function(){


		if (this.ReturnButton.input.pointerOver()) {
             game.add.tween(this.ReturnButton.scale).to({x: 1.2, y: 1.2}, 50).to({x: 1, y: 1}, 150).start();
		}

 	},


	Return: function(){
		game.state.start('menu');

	}, 



};