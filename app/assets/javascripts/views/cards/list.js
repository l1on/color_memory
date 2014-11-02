ColorMemory.Views.Cards.List = Backbone.Marionette.CollectionView.extend({
	childView: ColorMemory.Views.Cards.Show,

	onRender: function() {
		this.setupKeyboardControl();
	},

	setupKeyboardControl: function() {
		$(document).keydown(_(function(event){ 
			switch(event.which) {
				case 37: 
					this.collection.selectPreviousCard();
					break;
				case 38: 
					alert('up');
					break;
				case 39: 
					this.collection.selectNextCard();
					break;				
				case 40: 
					alert('down');
					break;
				case 13:
					this.collection.getSelectedCard().flip();
					break;
			}
		}).bind(this));
	},

	onBeforeDestroy: function() {
		$(document).unbind('keydown');
	}
});