Sfotipy = {};

Sfotipy.Song = Backbone.Model.extend({});
Sfotipy.Songs = Backbone.Collection.extend({ //Songs es una coleccion de una lista de canciones / elementos tipo Song

	model: Sfotipy.Song
})

Sfotipy.SongView = Backbone.View.extend({
	events: {
		//"EVENTO SELECTOR": "FUNCTION A EJECUTAR"
		"click .action.icon-add" : "add"
	},
	tagName: 'li',
	className: 'item border-bottom',
	template: Handlebars.compile($("#song-template").html()),
	initialize: function(){
		//this.listenTo(this.model, "change", this.render, this);
		this.listenTo(this.model, "change", this.render);
	},

	render: function(){
	//var song = this.model;
	//var name = song.get('name');
	//var author = song.get('author');

//entregar instancia de jquery con $
var html= this.template(this.model.toJSON());
this.$el.html(html);
	//this.$el.html("<span>"+ author + "</span>" + name + "</span>");

	},
	add: function(e){
		alert(this.model.get("name"));
	}
});

Sfotipy.Router = Backbone.Router.extend({
	routes: {
		"" : "index",
		"album/:/name" : "album",
		"profile/:username" : "profile"
	},
	index : function(){
		console.log("Estoy en el Index");
	},
	album: function(name){
		console.log("Album " + name);
	},
	profile: function(username){
		console.log("Username "+ username);
	}
});

Sfotipy.app = new Sfotipy.Router();
Backbone.history.start();
window.Sfotipy = Sfotipy;