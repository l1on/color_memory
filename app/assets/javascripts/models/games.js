ColorMemory.Models.Games = Backbone.Collection.extend({
	model: ColorMemory.Models.Game,
	
	url: '/games',

	comparator: function(gameA, gameB) {
		if (gameA.get('score') < gameB.get('score')) return 1;
		if (gameA.get('score') > gameB.get('score')) return -1;
		return 0;
	}

});