Template.horses.helpers({
  horses: function() {
    return Horses.find();
  },

  pictures: function(){
        return Pictures.find({horse_id: this._id}).map(function(picture, index) {
          if (index === 0)
            picture.isFirst = true;

          return picture;
        })
    }
});
