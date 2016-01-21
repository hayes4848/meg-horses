Template.step2.events({
  // 'change .file_bag': function() {

  //   var files = $("input.file_bag")[0].files

  //    S3.upload({
  //               files:files,
  //               path:"subfolder"
  //           },function(e,r){
  //               url = r.url;
  //               console.log(url);
  //               console.log(Session.get('horse'));

  //               picture = {
  //                   url: url,
  //                   horse_id: Session.get('horse')
  //               }
  //               Pictures.insert(picture);
  //       });

  // }


'change .file_bag': function(event, template) {
    FS.Utility.eachFile(event, function(file) {
      var newFile = new FS.File(file);
      newFile.horse_id = Session.get('horse');
      newFile.dateAdded = new Date();
      horseImages.insert(newFile, function (err, fileObj) {
        //If !err, we have inserted new doc with ID fileObj._id, and
        //kicked off the data upload using HTTP
      });
    });
  }
 
});

Template.step2.helpers({

    "images": function(){
        return S3.collection.find();
    }, 


    horse: function(){
        return Horses.find({_id: Session.get('horse')});
    },

    // pictures: function(){
    //     return Pictures.find({horse_id: Session.get('horse')}).map(function(picture, index) {
    //       if (index === 0)
    //         picture.isFirst = true;

    //       return picture;
    //     })
    // }

    pictures: function(){
      return horseImages.find({horse_id: Session.get('horse')}).map(function(picture, index) {
        if (index === 0)
          picture.isFirst = true;

        return picture;
      })
    }

});
