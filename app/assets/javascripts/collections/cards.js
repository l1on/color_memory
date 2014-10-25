var Cards = Backbone.Collection.extend({
  model: Card,

  initialize: function() {
  	var self = this;
  	_(16).times(function(n) { 
  		var colors = ['colour1', 'colour2', 'colour3', 'colour4', 'colour5', 'colour6', 'colour7', 'colour8'];
  		
  		var color = colors[n % 8];

  		self.add(new Card({color: color})); 
  	});
  }
});