Template.singleHorsePublic.helpers({

    "images": function(){
        return S3.collection.find();
    }, 

    pictures: function(){
        return Pictures.find({horse_id: Session.get('horse')}).map(function(picture, index) {
          if (index === 0)
            picture.isFirst = true;

          return picture;
        })
    }

});
