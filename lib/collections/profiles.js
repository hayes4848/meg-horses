Profiles = new Mongo.Collection('profiles');

Profiles.allow({
  update: function(){return true},
  remove: function(){return true},
});
