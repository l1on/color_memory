ColorMemory.Views.Cards.List = Backbone.Marionette.CollectionView.extend({
	id: 'cards',
	
	childView: ColorMemory.Views.Cards.Show,

	onRender: function() {
		this._setupKeyboardControl();
	},

	_setupKeyboardControl: function() {
		$(document).keydown(_(function(event){ 
			switch(event.which) {
				case 37: 
					this.collection.selectPreviousCard();
					break;
				case 38: 
					this.collection.selectPreviousRowCard();
					break;
				case 39: 
					this.collection.selectNextCard();
					break;				
				case 40: 
					this.collection.selectNextRowCard();
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