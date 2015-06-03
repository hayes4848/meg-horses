Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/myhorses', {name: 'horses'});
Router.route('/', {name: 'index'});
Router.route('/submit', {name: 'newHorse'});

Router.route('/horses/:_id', {
  name: 'singleHorse',
  data: function() { return Horses.findOne(this.params._id); },

  onBeforeAction: function () {
       Session.set('horse', this.params._id);
       this.next()
    }
});
