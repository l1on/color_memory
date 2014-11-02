ColorMemory.Models.Card = Backbone.Model.extend({
	defaults: {
		"faceDown": true,
		"selected": false
	},

	flip: function() {
		this.set('faceDown', false);
	},

	turnDown: function() {
		this.set('faceDown', true);
	},

	select: function() {
		this.set('selected', true);
	},

	deselect: function() {
		this.set('selected', false);
	}

});