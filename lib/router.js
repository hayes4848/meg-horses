Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/horses', {name: 'horses'});
Router.route('/myhorses', {name: 'myHorses'});
Router.route('/', {name: 'index'});
Router.route('/submit', {name: 'newHorse'});
Router.route('profile', {name: 'profile'});
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

// Router.route('profile/:id', {
//   name: 'profile', 
//   data: function() { return Profile.findOne(this.params._id); }

// })
