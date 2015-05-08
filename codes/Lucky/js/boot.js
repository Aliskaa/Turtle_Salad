var bootState = {

	preload: function(){
		game.load.image('progressBar', 'assets/progressBar.png');
	},

	create: function(){
		game.stage.backgroundColor = '#3498db';
		game.physics.startSystem(Phaser.Physics.ARCADE);

		if(!game.device.desktop) {
			game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

			document.body.style.backgroundColor = '#3498db';

			game.scale.minWidth = 250;
			game.scale.minHeight = 170;
			game.scale.maxWidth = 1080;
			game.scale.mawHeight = 680;

			game.scale.pageAlignHorizontaly = true;
			game.scale.pageAlignVerticaly = true;

			game.scale.setScreenSize(true);
		}

		game.state.start('load');
	}
};