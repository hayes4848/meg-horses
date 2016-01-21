
Template.singleHorse.events({
  'change .file_bag': function() {

    var files = $("input.file_bag")[0].files

     S3.upload({
                files:files,
                path:"subfolder"
            },function(e,r){
                url = r.url;
                console.log(url);
                console.log(Session.get('horse'));

                picture = {
                    url: url,
                    horse_id: Session.get('horse')
                }
                Pictures.insert(picture);
        });

  }
});

Template.singleHorse.helpers({

    "images": function(){
        return S3.collection.find();
    }, 

    pictures: function(){
        return horseImages.find({horse_id: Session.get('horse')}).map(function(picture, index) {
          if (index === 0)
            picture.isFirst = true;

          return picture;
        })
    }

});
