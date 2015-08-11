Template.singleHorseEdit.events({
	'submit form': function(e) {
    e.preventDefault();

    var currentHorseId = this._id;

    var horse = {
      age: $(e.target).find('[name=age]').val(),
      gender: $(e.target).find('[name=gender]').val(),
      weight: $(e.target).find('[name=weight]').val(),
      breed: $(e.target).find('[name=breed]').val(),
      discipline: $(e.target).find('[name=discipline]').val(),
      price: $(e.target).find('[name=price]').val(),
      description: $(e.target).find('[name=description]').val(), 
      name: $(e.target).find('[name=name]').val(), 
      owner: Meteor.userId()
    };

    Horses.update(currentHorseId, {$set: horse}, function(error) {
      if (error) {
        // display the error to the user
        alert(error.reason);
      } else {
    Router.go('singleHorse', {_id: currentHorseId});
      }
    })
  }
})
