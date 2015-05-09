var mapState = {



	create: function(){

		     background = game.add.sprite(0,0,'map');

		     this.LevelButton = game.add.button(280,435,'buttonNiveaux', this.playLevel,this);
		     this.LevelButton.anchor.setTo(0.5,0.5);
		     this.LevelButton.input.useHandCursor = true;
		     this.LevelButton.inputEnabled = true;

		     this.ReturnButton = game.add.button(80,475,'buttonReturn', this.Return,this);
		 	 this.ReturnButton.anchor.setTo(0.5,0.5);
		 	 this.ReturnButton.input.useHandCursor = true;
		 	 this.ReturnButton.inputEnabled = true;


    },


    update: function(){


		if (this.LevelButton.input.pointerOver()) {
             game.add.tween(this.LevelButton.scale).to({x: 1.2, y: 1.2}, 50).to({x: 1, y: 1}, 150).start();
		}

		if (this.ReturnButton.input.pointerOver()) {
             game.add.tween(this.ReturnButton.scale).to({x: 1.2, y: 1.2}, 50).to({x: 1, y: 1}, 150).start();
		}

 	},

 	Return: function(){
		game.state.start('menu');

	}, 

	playLevel:function(){
		game.state.start('play');

	}

};