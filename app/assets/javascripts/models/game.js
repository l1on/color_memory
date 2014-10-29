ColorMemory.Models.Game = Backbone.Model.extend({
	initialize: function() {
		this.set('cards', new ColorMemory.Models.Cards());

		var colors = ['colour1', 'colour2', 'colour3', 'colour4', 'colour5', 'colour6', 'colour7', 'colour8'];
		
		var self = this;
		_(16).times(function() { 		
			var color = colors[_.random(colors.length - 1)];

			if (self.get('cards').containsCardWithColor(color)) {
				colors = _(colors).without(color);
			}	

			self.get('cards').add(new ColorMemory.Models.Card({color: color})); 
		});

		this.get('cards').first().select();
	},

	selectNextCard: function() {
		var indexOfSelectedCard = this.get('cards').indexOf(this._getSelectedCard());
		
		this.get('cards').at(indexOfSelectedCard).deselect();
		this.get('cards').at(indexOfSelectedCard + 1).select();
	},

	_getSelectedCard: function() {
		return this.get('cards').find(function(card) { return card.get('selected') === true; });
	}

});