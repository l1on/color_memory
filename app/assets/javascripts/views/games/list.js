ColorMemory.Views.Games.List = Backbone.Marionette.CompositeView.extend({
	template: JST['templates/games/list'],

	tagName: 'table',
	
	childView: ColorMemory.Views.Games.Show,

	childViewContainer: 'tbody'
});