ColorMemory.Views.Games.New = Marionette.ItemView.extend({
	id: 'game',

	template: JST['templates/games/new'],

	events: {
		'click button': '_onClickButton'
	},

	model: this.model,

	onBeforeRender: function() {
		this.collection = this.model.get('cards');

		this.listenTo(this.collection, 'change:faceDown', this._onCardFlipping);
		this.listenTo(this.model, 'change:score', this._onScoreChange);
	},

	onRender: function() {
		if (this.cardsView) this.cardsView.destroy();
		
		this.cardsView = new ColorMemory.Views.Cards.List({
			collection: this.collection
		}); 

		this.$('#cards').html(this.cardsView.render().el);
	},

	_onCardFlipping: function() {
		if (this.collection.flipped().length == 2) {
			setTimeout(this._handleResults, 500, this.collection, this.model);		
		}
	},

	_handleResults: function(cards, game) {
		if (cards.areFilppedCardsSameColor()) {
			game.set('score', game.get('score') + 1);
			cards.removeFlippedCards();
			
			if (cards.length == 0) console.log('you win');
		} else {
			game.set('score', game.get('score') - 1);
			cards.turnDownFlippedCards();
		}		
	},

	_onClickButton: function() {
		this.model = new ColorMemory.Models.Game();
		this.render();
	},

	_onScoreChange: function() {
		this.$('#score').text(this.model.get('score'));
	}


});