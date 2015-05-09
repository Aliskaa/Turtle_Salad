var mapState = {

	create: function(){
        game.global = {
            level: 2
        };
		game.state.start('play');
	}
};