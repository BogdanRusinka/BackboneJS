var NewFilmView = Backbone.View.extend({
	id: 'newView',
	template: _.template($('#new-film-template').html()),

	initialize: function(){
		this.render();
	},

	events : {
		"click .add-button" : "callTrigger"
	},

	callTrigger : function(){
		var data = {
			name : this.$(".new-film-name").val(),			
			year : this.$(".new-film-year").val()
		}
		Backbone.trigger('addData', data);
		this.$(".new-film-name").val("");
		this.$(".new-film-year").val("");
	},

	render: function(){
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	},
});

