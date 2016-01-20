Template.profileShow.helpers({
	profile: function(){
		return Profiles.findOne({user: Meteor.userId()}, {sort: { date: -1}});
	}, 
	// profilePic: function(){
	// 	return ProfilePictures.findOne({profile: Meteor.userId()});
	// }, 
	profilePic: function(){
    return profileTestImages.findOne({owner: Meteor.userId()}, {sort: {dateAdded: -1}});
  },
})
