Template.newHorse.events({
	'submit form': function(e) {
    e.preventDefault();

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

    horse._id = Horses.insert(horse);
    Router.go('horses', horse);
  }
})
