var GameBoard = Backbone.Model.extend({
	initialize: function() {
		this.set('cards', new Cards());

		var colors = ['colour1', 'colour2', 'colour3', 'colour4', 'colour5', 'colour6', 'colour7', 'colour8'];
		
		var self = this;
		_(16).times(function() { 		
			var color = colors[_.random(colors.length - 1)];

			if (self.get('cards').containsCardWithColor(color)) {
				colors = _.without(colors, color);
			}	

			self.get('cards').add(new Card({color: color})); 
		});
	},

});