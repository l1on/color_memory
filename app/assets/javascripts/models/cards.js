ColorMemory.Models.Cards = Backbone.Collection.extend({
    model: ColorMemory.Models.Card,

    initialize: function() {
        this.on('remove', this.selectFirstCard);
    },

    containsCardWithColor: function(color) {
    	if (this.find(function(card) { return card.get('color') == color; })) {
    		return true;
    	}
    	return false;
    },

    areFilppedCardsSameColor: function() {
    	var flippedCards = this.flipped();
    	return flippedCards.every(function(card) { return card.get('color') == _(flippedCards).first().get('color'); }); 
    },

    flipped: function() {
        return this.where({faceDown: false});
    },

    removeFlippedCards: function() {
        this.remove(this.flipped());
    },

    turnDownFlippedCards: function() {
        _(this.where({faceDown: false})).each(function(card) { card.turnDown(); });
    },  

    selectNextCard: function() {
        this._selectCard({step: 1, edge: this.length - 1});
    },

    selectPreviousCard: function() {
        this._selectCard({step: -1, edge: 0});
    },

    selectNextRowCard: function() {
        var self = this;
        _(4).times(function() {
            self.selectNextCard();
        });
    },

    selectPreviousRowCard: function() {
        var self = this;
        _(4).times(function() {
            self.selectPreviousCard();
        });
    },

    getSelectedCard: function() {
        return this.find(function(card) { return card.get('selected') === true; });
    },

    selectFirstCard: function() {
        if (this.length > 0) this.first().select();
    },

    _selectCard: function(direction) {
        var indexOfSelectedCard = this.indexOf(this.getSelectedCard());
        if (indexOfSelectedCard == direction.edge) return;
        
        this.at(indexOfSelectedCard).deselect();
        this.at(indexOfSelectedCard + direction.step).select();        
    },

});