ColorMemory.Views.Games.New = Marionette.ItemView.extend({
	id: 'new_game',

	template: JST['templates/games/new'],

	events: {
		'click button': '_onClickButton',
		'submit form': '_onSubmit'
	},

	onBeforeRender: function() {
		this.model = new this.collection.model();
		
		this.cards = this.model.get('cards');

		this.listenTo(this.cards, 'change:faceDown', this._onCardFlipping);
		this.listenTo(this.model, 'change:score', this._onScoreChange);
	},

	onRender: function() {
		if (this.cardsView) this.cardsView.destroy();
		
		this.cardsView = new ColorMemory.Views.Cards.List({
			collection: this.cards
		}); 

		this.$('#gameboard').prepend(this.cardsView.render().el);
	},

	_onCardFlipping: function() {
		if (this.cards.flipped().length == 2) {
			setTimeout(this._handleResults, 500, this.cards, this.model);		
		}
	},

	_handleResults: function(cards, game) {
		if (cards.areFilppedCardsSameColor()) {
			game.set('score', game.get('score') + 1);
			cards.removeFlippedCards();
			
			if (cards.length == 0) this.$('form').removeClass('hide');
		} else {
			game.set('score', game.get('score') - 1);
			cards.turnDownFlippedCards();
		}		
	},

	_onClickButton: function() {
		this.render();
	},

	_onScoreChange: function() {
		this.$('#score h2').text(this.model.get('score'));
	},

	_onSubmit: function(e) {
		e.preventDefault();
    	e.stopPropagation();

    	this.model.set({
    		name: this.$('#player_name').val(),
    		email: this.$('#player_email').val()
    	});

    	var self = this;
    	self.collection.create(self.model.toJSON(),{
    		success: function(){
    			self.cardsView.destroy();
    			window.location.hash = "index";
    		},

    		wait: true
    	});
	},

});