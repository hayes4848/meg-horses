Pictures = new Mongo.Collection('pictures');

Pictures.allow({
  update: function(){return true},
  remove: function(){return true},
});
