var CardsView = Marionette.CollectionView.extend({
	childView: CardView,

	onBeforeRender: function() {
		$(document).keydown(function(event){ 
			switch(event.which) {
				case 37: 
					alert('left');
					break;
				case 38: 
					alert('up');
					break;
				case 39: 
					alert('right');
					break;				
				case 40: 
					alert('down');
					break;
				case 13:
					alert('enter');
					break;
			}
		});
	},

});
