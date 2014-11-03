ColorMemory.Views.Games.List = Backbone.Marionette.CompositeView.extend({
	template: JST['templates/games/list'],

	tagName: 'table',

	className: 'table table-striped table-condensed',
	
	childView: ColorMemory.Views.Games.Show,

	childViewContainer: 'tbody'
});