var ColorMemory = new Marionette.Application();

ColorMemory.addRegions({
	gameboardRegion: '#gameboard'
});

ColorMemory.on("start", function(options){
	var cardsView = new CardsView({
		collection: (new GameBoard).get('cards')
	});

	ColorMemory.gameboardRegion.show(cardsView);
});