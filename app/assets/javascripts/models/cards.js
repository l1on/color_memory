var Cards = Backbone.Collection.extend({
    model: Card,

    containsCardWithColor: function(color) {
    	if (this.find(function(card) { return card.get('color') == color; })) {
    		return true;
    	}
    	return false;
    },

    areFilppedCardsSameColor: function() {
    	var self = this;
    	return self.where({faceDown: false}).every(function(card) {return card.get('color') == self.at(0).get('color'); }); 
    }
});