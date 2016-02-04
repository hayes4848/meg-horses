Session.set('lowerLimit', 0);
Session.set('upperLimit', 5000000);



Template.horses.events({
  'click .pageviewupdate': function(e) {

    var newPageView = this.pageView + 1;

    Horses.update(this._id, {
      $set: {pageView: newPageView}
    });
  }, 

  'click #filterButton': function(){
    $('#collapseExample').slideToggle("slow", function(){
      if($('#collapseExample').is(":visible")){
          $('#arrowSpan').html('&#9650;');
      }
      else {
          $('#arrowSpan').html('&#9660;');  
      } 
    });    
  }, 

  'submit form': function(e) {
    e.preventDefault();
    var price = $(e.target).find('[name=cost]:checked').val();

    if(price == 'lessthan5'){
      Session.set('lowerLimit', 0);
      Session.set('upperLimit', 5000);
    }else if(price == '5to10'){
      Session.set('lowerLimit', 5000);
      Session.set('upperLimit', 10000);
    }else if(price == '10to15'){
      Session.set('lowerLimit', 10000);
      Session.set('upperLimit', 15000);
    }else if(price == '15to20'){
      Session.set('lowerLimit', 15000);
      Session.set('upperLimit', 20000);
    }
    else if(price == 'all'){
      Session.set('lowerLimit', 0);
      Session.set('upperLimit', 5000000);
    }else{
      Session.set('lowerLimit', 20000);
      Session.set('upperLimit', 5000000);
    }
    $('#collapseExample').slideToggle("slow", function(){
      if($('#collapseExample').is(":visible")){
          $('#arrowSpan').html('&#9650;');
      }
      else {
          $('#arrowSpan').html('&#9660;');  
      } 
    });    
  }
})



Template.allHorses.helpers({
  horses: function() {
    return Horses.find({price: { $gt: Session.get('lowerLimit'), $lt: Session.get('upperLimit') }});
  },

  horsesCount: function() {
    var count = Horses.find({price: { $gt: Session.get('lowerLimit'), $lt: Session.get('upperLimit') }}).count();
    return count;
  },

  pictures: function(){
        return horseImages.find({horse_id: this._id}).map(function(picture, index) {
          if (index === 0)
            picture.isFirst = true;

          return picture;
        })
    }
});
