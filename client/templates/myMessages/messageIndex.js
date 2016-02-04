Template.messageIndex.helpers({
	messages: function(){
		return Messages.find({to: Meteor.userId()}, {sort: {_id: -1}});
	}, 

	senderProfile: function(){
		return Profiles.findOne({user: this.from}); 
	}, 

	// senderPicture: function(){
	// 	return ProfilePictures.findOne({profile: this.from});
	// }

	senderPicture: function(){
    return profileTestImages.findOne({owner: this.from}, {sort: {dateAdded: -1}});
  },
});
