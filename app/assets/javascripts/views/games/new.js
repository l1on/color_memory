ColorMemory.Views.Games.New = Marionette.CompositeView.extend({
	id: 'game',

	template: JST['templates/games/new'],

	childView: ColorMemory.Views.Cards.Show,

	childViewContainer: '#cards',

	onBeforeRender: function() {
		this.model = new ColorMemory.Models.Game();
		this.collection = this.model.get('cards');

		this.setupKeyboardControl();
	},

	setupKeyboardControl: function() {
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
	}

});