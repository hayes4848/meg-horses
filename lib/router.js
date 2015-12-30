Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/horses', {name: 'horses'});
Router.route('/myhorses', {name: 'myHorses'});
Router.route('/', {name: 'index'});
Router.route('/submit', {name: 'newHorse'});
Router.route('/mymessages', {name: 'messageIndex'});
Router.route('signup', {name: 'signup'});

Router.route('/horses/:_id', {
  name: 'singleHorse',
  data: function() { return Horses.findOne(this.params._id); },

  onBeforeAction: function () {
       Session.set('horse', this.params._id);
       this.next()
    }
});

Router.route('/publichorses/:_id', {
  name: 'singleHorsePublic',
  data: function() { return Horses.findOne(this.params._id); },

  onBeforeAction: function () {
       Session.set('horse', this.params._id);
       this.next()
    }
});

Router.route('/horses/:_id/edit', {
  name: 'singleHorseEdit',
  data: function() { return Horses.findOne(this.params._id); }
});

Router.route('/step2/:_id', {
	name: 'step2',
	data: function() {return Horses.findOne(this.params._id); },

	onBeforeAction: function () {
       Session.set('horse', this.params._id);
       this.next()
    }
});

Router.route('profile', {
  name: 'profile',
  data: function() {return Profiles.findOne({user: Meteor.userId}); }
});

Router.route('/message/:_id', {
  name: 'message',
  data: function() {return Messages.findOne(this.params._id); },

  onBeforeAction: function () {
       // Session.set('horse', this.params._id);
       this.next()
    }
});


