
Template.message.events({
	'click .messageDelete': function(event, template){
		if (confirm("Delete this Message?")) {
			Messages.remove(template.data._id);
			Router.go('messageIndex');
		}
	}, 
	'submit form': function(e) {
	    e.preventDefault();

	   var message = {
	    subject: $(e.target).find('[name=subject]').val(),
	    message: $(e.target).find('[name=messageBody]').val(),
	    to: $(e.target).find('[name=oldfrom]').val(),
	    from: Meteor.userId(), 
	    horse_id: $(e.target).find('[name=horse_id]').val()
	   }
	    message._id = Messages.insert(message);
	    $('#replyModal').modal('hide');
	  }
});


Template.message.helpers({
	senderProfile: function(){
		return Profiles.findOne({user: this.from});
	}, 
	horseInfo: function(){
		return Horses.findOne({_id: this.horse_id});
	}
});


