Template.messageIndex.helpers({
	messages: function(){
		return Messages.find({to: Meteor.userId()});
	}
});
