var FilmCollectionView = Backbone.View.extend({
	id: 'films-container',
	initialize: function(){
		this.collection.on('add', this.renderNewFilm, this);
	},

	renderNewFilm: function(model){
		var view = new FilmView({
			model: model
		});
		this.$el.append(view.$el);
	}
});