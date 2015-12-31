ProfilePictures = new Mongo.Collection('profilePictures');

ProfilePictures.allow({
  insert: function(){return true},
  update: function(){return true},
  remove: function(){return true},
});
