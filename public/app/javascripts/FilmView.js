var FilmView = Backbone.View.extend({
	className: 'film-container',
	template: _.template($('#film-template').html()),

	initialize: function(){
		this.render();
		this.listenTo(this.model, 'destroy', this.remove);
		this.listenTo(this.model, 'change', this.render);
		this.input = this.$('.edit');
	},

	render: function(){
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	},

	events : {
		"click .remove-button"  : "deleteFilm",
		"dblclick .film-name"   : "editFilmName",
		"keypress .edit"		: "updateFilmName",
		"blur .edit"			: "close"
	},

	deleteFilm: function(){
		this.model.destroy();
	},

	editFilmName: function(){
		this.$el.addClass("editing");
      	this.$('.edit').focus();
	},

	updateFilmName: function(evt){
		if (evt.keyCode == 13) this.close();
	},

	close: function(){
		var value = this.$('.edit').val();
			this.model.set({name: value});
			Backbone.sync("update",this.model);
			this.$el.removeClass("editing");
	}
});