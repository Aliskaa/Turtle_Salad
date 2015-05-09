var loadState = {

	preload: function(){
		// background
        game.load.image('backgroundMenu', 'assets/fond.png');
        game.load.image('backgroundGame', 'assets/fond_in_game.png');
		// Player
		game.load.spritesheet('tortue', 'assets/sprite_tortue.png', 60, 60);
		// Dechets
        game.load.image('dechetB', 'assets/enemy_bleu.png');
        game.load.image('dechetJ', 'assets/enemy_jaune.png');
        game.load.image('dechetV', 'assets/bouteille_verre.png');
        game.load.image('dechetM', 'assets/pomme.png');
        // Poubelles
        game.load.image('poubelleJO','assets/pjo.png');
        game.load.image('poubelleJF','assets/pjf.png');
        game.load.image('poubelleBO','assets/pbo.png');
        game.load.image('poubelleBF','assets/pbf.png');
        game.load.image('poubelleMO','assets/pmo.png');
        game.load.image('poubelleMF','assets/pmf.png');
        game.load.image('poubelleVO','assets/pvo.png');
        game.load.image('poubelleVF','assets/pvf.png');
        // Panneaux
        game.load.image('panneauPoubelles', 'assets/panneau_poubelles.png');
        game.load.image('panneauScores', 'assets/panneau_scores.png');
        // Boutons
        game.load.image('buttonEasy', 'assets/bouton_facile.png');
        game.load.image('buttonNormal', 'assets/bouton_normal.png');
        game.load.image('buttonHard', 'assets/bouton_difficile.png');
        game.load.image('buttonReturn','assets/fleche_retour.png');
        game.load.image('buttonPlay', 'assets/boutons_jouer1.png');
        game.load.image('buttonHelp', 'assets/boutons_aide1.png');
        game.load.image('buttonNiveaux', 'assets/bouton_niveaux.png');
        game.load.image('buttonConfig','assets/bouton_config1.png');
        game.load.image('menu', 'assets/fond_in_game.png');
        game.load.image('map', 'assets/fond_niveaux.png');
	},


	create: function(){
		game.physics.startSystem(Phaser.Physics.ARCADE);
		game.state.start('menu');
	}
};