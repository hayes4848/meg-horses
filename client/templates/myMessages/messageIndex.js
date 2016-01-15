Template.messageIndex.helpers({
	messages: function(){
		return Messages.find({to: Meteor.userId()});
	}, 

	senderProfile: function(){
		return Profiles.findOne({user: this.from}); 
	}, 

	senderPicture: function(){
		return ProfilePictures.findOne({profile: this.from});
	}
});
