var Card = Backbone.Model.extend({

	defaults: {
		"faceDown":  true,
	},

	flipUp: function() {
		this.set('faceDown', false);
	},

	flipDown: function() {
		this.set('faceDown', true);
	},

	putOnColor: function(color) {
		this.set('color', color);
	}

})