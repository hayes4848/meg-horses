Favorites = new Mongo.Collection('favorites');

Favorites.allow({
  insert: function(){return true},	
  update: function(){return true},
  remove: function(){return true},
});
