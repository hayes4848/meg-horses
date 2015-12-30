Template.singleHorsePublic.events({
    'submit form': function(e) {
    e.preventDefault();
    console.log('submit fired');

   var message = {
    subject: $(e.target).find('[name=subject]').val(),
    message: $(e.target).find('[name=messageBody]').val(),
    to: $(e.target).find('[name=owner]').val(),
    from: Meteor.userId()
   }
    message._id = Messages.insert(message);
    console.log('message should be inserted');
    $('#myModal').modal('hide');
  }
});



Template.singleHorsePublic.helpers({

    "images": function(){
        return S3.collection.find();
    }, 

    pictures: function(){
        return Pictures.find({horse_id: Session.get('horse')}).map(function(picture, index) {
          if (index === 0)
            picture.isFirst = true;

          return picture;
        })
    }, 

    ownerInfo: function(){
        return Profiles.findOne({user: this.owner});
    }

});
