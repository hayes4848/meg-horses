Template.horses.helpers({
  horses: function() {
    return Horses.find({owner: Meteor.userId()});
  }
});
