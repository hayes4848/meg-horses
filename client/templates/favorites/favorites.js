Template.favorites.helpers({
	favorites: function(){
		return Favorites.find({user: Meteor.userId()});
	}, 
	horses: function(){
		return Horses.find({_id: this.horse});
	}, 
	pictures: function(){
        return Pictures.find({horse_id: this._id}).map(function(picture, index) {
          if (index === 0)
            picture.isFirst = true;

          return picture;
        })
    }
})
