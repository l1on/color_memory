ColorMemory.Models.Cards = Backbone.Collection.extend({
    model: ColorMemory.Models.Card,

    containsCardWithColor: function(color) {
    	if (this.find(function(card) { return card.get('color') == color; })) {
    		return true;
    	}
    	return false;
    },

    areFilppedCardsSameColor: function() {
    	var self = this;
    	return self.where({faceDown: false}).every(function(card) { return card.get('color') == self.at(0).get('color'); }); 
    },

    removeFlippedCards: function() {
        this.reset(this.reject(function(card) { return card.isFlipped(); }));
    },

    turnDownFlippedCards: function() {
        _(this.where({faceDown: false})).each(function(card) { card.turnDown(); });
    }
});