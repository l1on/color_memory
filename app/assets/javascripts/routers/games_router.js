ColorMemory.Routers.GamesRouter = Backbone.Router.extend({
	initialize: function(options) {
		this.games = new ColorMemory.Models.Games();
		this.games.reset(options.games);
	},

	routes: {
		'new': 'newGame',
		'index': 'index',
		'.*': 'index'
	},

	newGame: function() {
		this.view = new ColorMemory.Views.Games.New({
			collection: this.games,
		});

		$("#games").html(this.view.render().el);
	},

	index: function() {
		this.view = new ColorMemory.Views.Games.List({
			collection: this.games
		});

		$("#games").html(this.view.render().el);		
	}
});