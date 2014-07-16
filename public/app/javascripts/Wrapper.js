var App = Backbone.View.extend({
	el: '#app',
	initialize: function(){
		 this.collectionView = new FilmCollectionView({
			collection : films
		});

		 this.newFilmView = new NewFilmView({
			model : new Film()
		})
		
		this.render();
		
		this.newViewListener();
		
	},

	render : function(){
		this.$el.append(this.collectionView.$el);
		this.$el.append(this.newFilmView.$el);
	},

	newViewListener : function(){
		Backbone.on('addData', function(data){
			var id = films.last().id+1;
			films.add({id : id, name : data.name, year : "("+data.year+")"});
		});
	}
});

var wrap = new App();