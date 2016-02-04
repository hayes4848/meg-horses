Horses = new Mongo.Collection('horses');

Horses.allow({
  insert: function(){return true},	
  update: function(){return true},
  remove: function(){return true},
});


HorsesSchema = new SimpleSchema({
  'age': {
    type: Number,
    label: 'Horse Age'
  },
  'gender': {
    type: String,
    label: 'Horse Gender'

  },
  'breed': {
    type: String,
    label: 'Horse Breed'

  },
  'discipline': {
    type: String,
    label: 'Horse Discipline'

  },
  'price': {
    type: Number,
    label: 'Horse Price'

  },
  'description': {
    type: String,
    label: 'Horse Description'

  },
  'name':  {
    type: String,
    label: 'Horse Name'

  },
  'owner': {
    type: String,
    label: 'Owner ID'

  }, 
  'displayPrice': {
    type: String,
    label: 'Display Price', 
    optional: true
  }, 
  'pageView': {
    type: Number,
    label: 'Page View'
  }, 
  'favorited': {
    type: Number,
    label: 'Favorited'
  }
});

Horses.attachSchema(HorsesSchema);
