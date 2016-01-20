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
    var files = event.target.files;
    for (var i = 0, ln = files.length; i < ln; i++) {
      profileTestImages.insert(files[i], function (err, fileObj) {
        console.log(fileObj);
      });
    }
  }
 
});

Template.step2.helpers({

    "images": function(){
        return S3.collection.find();
    }, 


    horse: function(){
        return Horses.find({_id: Session.get('horse')});
    },

    pictures: function(){
        return Pictures.find({horse_id: Session.get('horse')}).map(function(picture, index) {
          if (index === 0)
            picture.isFirst = true;

          return picture;
        })
    }

});
