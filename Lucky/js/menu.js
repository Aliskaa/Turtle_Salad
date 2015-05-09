var menuState = {

	create: function(){
		
        background = game.add.sprite(0,0,'backgroundMenu');

        this.PlayButton = game.add.button(740,155,'buttonPlay', this.PlayB,this);
        this.PlayButton.anchor.setTo(0.5,0.5);
        this.PlayButton.input.useHandCursor = true;
        this.PlayButton.inputEnabled = true;

        this.HelpButton = game.add.button(740,215,'buttonHelp', this.HelpB,this);
        this.HelpButton.anchor.setTo(0.5,0.5);
        this.HelpButton.input.useHandCursor = true;
        this.HelpButton.inputEnabled = true;

        this.ConfigButton =game.add.button(740,275,'buttonConfig', this.ConfigB,this);
        this.ConfigButton.anchor.setTo(0.5,0.5);
        this.ConfigButton.input.useHandCursor = true;
        this.ConfigButton.inputEnabled = true;
		
		this.muteButton = game.add.button(20, 20, 'mute', this.toggleSound, this);
		this.muteButton.input.useHandCursor = true;
		if (game.sound.mute) {
			this.muteButton.frame = 1;
		}
        
        game.tortue = {
            x: 278,
            y: 430
        };
        
        game.dechets = {
            dechetM: ['pomme','couche_culotte'],
            dechetV: ['bouteille_verre'],
            dechetB: ['journal'],
            dechetJ: ['conserve']
        }
        
		//ButtonSound
		this.ButtSound = game.add.audio('buttonSound');

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

	PlayB:function(){
		this.ButtSound.play();
        game.add.tween(this.PlayButton.scale).to({x: 1.2, y: 1.2}, 50).to({x: 1, y: 1}, 150).start();

		game.state.start('map');
	},

	HelpB: function(){
		this.ButtSound.play();
		game.state.start('help');
	},

	ConfigB:function(){
        this.ButtSound.play();
        this.game.state.start('config');
	},

	toggleSound: function(){
		game.sound.mute = ! game.sound.mute;
		this.muteButton.frame = game.sound.mute ? 1 : 0;
	},

};