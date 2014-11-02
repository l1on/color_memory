ColorMemory.Views.Games.New = Marionette.ItemView.extend({
	id: 'game',

	template: JST['templates/games/new'],

	events: {
		'click button': '_onClickButton'
	},

	onBeforeRender: function() {
		this.model = new ColorMemory.Models.Game();
		this.collection = this.model.get('cards');

		this.listenTo(this.collection, 'change:faceDown', this.onCardFlipping);
	},

	onRender: function() {
		if (this.cardsView) this.cardsView.destroy();
		
		this.cardsView = new ColorMemory.Views.Cards.List({
			collection: this.collection
		}); 

		this.$('#cards').html(this.cardsView.render().el);
	},

	onCardFlipping: function() {
		if (this.collection.flipped().length == 2) {
			setTimeout(this._handleResults, 500, this.collection);		
		}
	},

	_handleResults: function(cards) {
		if (cards.areFilppedCardsSameColor()) {
			cards.removeFlippedCards();
			if (cards.length == 0) console.log('you win');
		} else {
			cards.turnDownFlippedCards();
		}		
	},

	_onClickButton: function() {
		this.render();
	}


});