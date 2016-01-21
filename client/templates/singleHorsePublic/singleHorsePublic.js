Template.singleHorsePublic.events({
    'submit form': function(e) {
    e.preventDefault();

   var message = {
    subject: $(e.target).find('[name=subject]').val(),
    message: $(e.target).find('[name=messageBody]').val(),
    to: $(e.target).find('[name=owner]').val(),
    from: Meteor.userId(), 
    horse_id: $(e.target).find('[name=horse_id]').val()
   }
    message._id = Messages.insert(message);
    $('#myModal').modal('hide');
  }, 
  'click #fav-star': function(e){
    e.preventDefault();

    var fav = {
        horse: Session.get('horse'),
        user: Meteor.userId()
    }
    Favorites.insert(fav);
    $('#fav-star').css({'color': 'red'});
      alert('this horse has been added to your favorites.');
      console.log(Session.get('horse'));
  }
});



Template.singleHorsePublic.helpers({

    "images": function(){
        return S3.collection.find();
    }, 

    pictures: function(){
        return horseImages.find({horse_id: Session.get('horse')}).map(function(picture, index) {
          if (index === 0)
            picture.isFirst = true;

          return picture;
        })
    }, 

    ownerInfo: function(){
        return Profiles.findOne({user: this.owner});
    }

});

