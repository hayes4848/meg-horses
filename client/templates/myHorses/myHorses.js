Template.myHorses.helpers({
	horses: function () {
		return Horses.find({owner: Meteor.userId()})
	}

});

Template.myHorses.events({
	"click .delete": function() {
		if (confirm("Delete this Horse?")) {
			Horses.remove(this._id);
	}
	}
})
