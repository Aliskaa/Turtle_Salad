var loadState = {

	preload: function(){
		//Sounds
        game.load.audio('buttonSound', 'assets/multimedia_button_click_006.mp3');
        game.load.audio('buttonSound2', 'assets/multimedia_button_click_018.mp3');
        game.load.audio('Music', 'assets/Musique.mp3');
		game.load.spritesheet('mute', 'assets/son.png',30, 28);
		// background
        game.load.image('backgroundMenu', 'assets/fond.png');
        game.load.image('backgroundGame', 'assets/fond_in_game.png');
		game.load.image('backgroundHelp', 'assets/aidejeu.png');
		// Player
		game.load.spritesheet('tortue', 'assets/sprite_tortue.png', 60, 60);
        game.load.image('tortueMap','assets/tortue_niveaux.png');
		// Dechets
        game.load.image('journal', 'assets/journal.png');
        game.load.image('lait', 'assets/lait.png');
        game.load.image('bocal', 'assets/bocal.png');
        game.load.image('conserve', 'assets/conserve.png');
        game.load.image('bouteille_verre', 'assets/bouteille_verre.png');
        game.load.image('pomme', 'assets/pomme.png');
        game.load.image('couche_culotte', 'assets/couche_culotte.png');
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
		game.load.image('panneauScoresPopUp', 'assets/scores.PNG');
        // Boutons
        game.load.image('buttonEasy', 'assets/bouton_facile.png');
        game.load.image('buttonNormal', 'assets/bouton_normal.png');
        game.load.image('buttonHard', 'assets/bouton_difficile.png');
        game.load.image('buttonReturn','assets/fleche_retour.png');
        game.load.image('buttonPlay', 'assets/boutons_jouer1.png');
        game.load.image('buttonHelp', 'assets/boutons_aide1.png');
        game.load.image('buttonlevel1', 'assets/bouton_marron_niveaux.png');
        game.load.image('buttonlevel2','assets/bouton_vert_niveaux.png');
        game.load.image('buttonlevel3','assets/bouton_orange_niveaux.png');
        game.load.image('buttonlevel4','assets/bouton_bleu_niveaux.png');
        game.load.image('buttonlevel5','assets/bouton_jaune_niveaux.png');
        game.load.image('buttonlevel6','assets/bouton_rouge_niveaux.png');
        game.load.image('buttonConfig','assets/bouton_config1.png');
        game.load.image('menu', 'assets/fond_in_game.png');
        game.load.image('map', 'assets/fond_niveaux.png');
        // Messages
        game.load.image('Bravo', 'assets/bravo.png');
        game.load.image('Recommencer', 'assets/recommencer.png');
        // Points Cultures
        game.load.image('PC1', 'assets/point_culture1.png');
        game.load.image('PC2', 'assets/point_culture2.png');
        game.load.image('PC3', 'assets/point_culture3.png');
        game.load.image('PC4', 'assets/point_culture4.png');
        game.load.image('PC5', 'assets/point_culture5.png');
        game.load.image('PC6', 'assets/point_culture6.png');
        game.load.image('PF', 'assets/point_final.png');
	},


	create: function(){
		game.difficulty = {
			trashPopFrequency: 2200,
			gravityDifficulty: 120,
            numberOfTrash: 15
		}
        
        game.win = {
            win1: false,
            win2: false,
            win3: false,
            win4: false,
            win5: false,
            win6: false
        };

        //BackSound
        this.BackSound = game.add.audio('Music');
        this.BackSound.loop=true;
        this.BackSound.play();
        
		game.physics.startSystem(Phaser.Physics.ARCADE);
		game.state.start('menu');
	}
};