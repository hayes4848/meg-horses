Template.newHorse.events({
	'submit form': function(e) {
    e.preventDefault();

    var horse = {
      age: $(e.target).find('[name=age]').val(),
      gender: $(e.target).find('[name=gender]').val(),
      breed: $(e.target).find('[name=breed]').val(),
      discipline: $(e.target).find('[name=discipline]').val(),
      price: $(e.target).find('[name=price]').val(),
      displayPrice: $(e.target).find('[name=priceCheck]').val(),
      description: $(e.target).find('[name=description]').val(), 
      name: $(e.target).find('[name=name]').val(), 
      owner: Meteor.userId(),
      favorited: 0,
      pageView: 0
    };

    horse._id = Horses.insert(horse);
    Router.go('step2', horse);
  }
})



