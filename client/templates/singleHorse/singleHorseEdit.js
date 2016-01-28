Template.singleHorseEdit.events({
	'submit form': function(e) {
    e.preventDefault();

    var currentHorseId = this._id;

    var horse = {
      age: $(e.target).find('[name=age]').val(),
      gender: $(e.target).find('[name=gender]').val(),
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
  }, 

  'click .remove': function(e) {
    e.preventDefault();

    var currentHorseId = this.id;
    if (confirm("Delete this Image?")) {
      horseImages.remove(this._id);
    }
  }, 

  'change .file_bag': function(event, template) {
    FS.Utility.eachFile(event, function(file) {
      var newFile = new FS.File(file);
      newFile.horse_id = Session.get('horse');
      newFile.dateAdded = new Date();
      horseImages.insert(newFile, function (err, fileObj) {
        //If !err, we have inserted new doc with ID fileObj._id, and
        //kicked off the data upload using HTTP
      });
    });
  }
}), 

Template.singleHorseEdit.helpers({

    pictures: function(){
        return horseImages.find({horse_id: Session.get('horse')}).map(function(picture, index) {
          if (index === 0)
            picture.isFirst = true;

          return picture;
        })
    }
})
