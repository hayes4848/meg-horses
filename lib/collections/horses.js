Horses = new Mongo.Collection('horses');

Horses.allow({
  insert: function(){return true},	
  update: function(){return true},
  remove: function(){return true},
});
