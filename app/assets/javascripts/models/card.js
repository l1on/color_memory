var Card = Backbone.Model.extend({
	defaults: {
		"faceDown": true,
	},

	flip: function() {
		this.set('faceDown', false);
	},

	turnDown: function() {
		this.set('faceDown', true);
	},

});