if (Meteor.isServer) {
	Meteor.startup(function () {
		// code to run on server at startup
		process.env.MOBILE_DDP_URL = 'http://megan-horse.herokuapp.com/';
		process.env.MOBILE_ROOT_URL = 'http://megan-horse.herokuapp.com/';
		DDP_DEFAULT_CONNECTION_URL= 'http://megan-horse.herokuapp.com/';
	});

}
