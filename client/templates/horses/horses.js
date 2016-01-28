Template.horses.helpers({
  horses: function() {
    return Horses.find();
  },

  pictures: function(){
        return horseImages.find({horse_id: this._id}).map(function(picture, index) {
          if (index === 0)
            picture.isFirst = true;

          return picture;
        })
    }
});

Template.horses.events({
  'click .pageviewupdate': function(e) {

    var newPageView = this.pageView + 1;

    Horses.update(this._id, {
      $set: {pageView: newPageView}
    });
  }
})
