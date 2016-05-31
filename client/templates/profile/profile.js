
Template.profile.events({
	'submit form': function(e) {
    e.preventDefault();

    var profile = {
      name: $(e.target).find('[name=name]').val(),
      barn: $(e.target).find('[name=barn]').val(),
      city: $(e.target).find('[name=city]').val(),
      state: $(e.target).find('[name=state]').val(),
      phone: $(e.target).find('[name=phone]').val(),
      email: $(e.target).find('[name=email]').val(),
      url: $(e.target).find('[name=url]').val(),
      user: Meteor.userId(), 
      date: new Date(),
    };
   profile._id = Profiles.insert(profile); 
   Router.go('profileShow'); 
  }, 

  // 'change .profileImg': function() {

  //   var files = $("input.profileImg")[0].files

  //    S3.upload({
  //               files:files,
  //               path:"profilePics"
  //           },function(e,r){
  //               url = r.url;
  //               console.log(url);

  //               picture = {
  //                   url: url,
  //                   profile: Meteor.userId()
  //               }
  //               ProfilePictures.insert(picture);
  //       });

  // }

  // 'change .profileImg': function(event, template) {
  //   var file = $("input.profileImg").get(0).files[0];
  //   var fileObj = profileTestImages.insert(file);

  'click #imageUpload': function(){
    alert('you clicked this');
  },
    

  'change .profileImg': function(event, template) {
    FS.Utility.eachFile(event, function(file) {
      var newFile = new FS.File(file);
      newFile.owner = Meteor.userId();
      newFile.dateAdded = new Date();
      profileTestImages.insert(newFile, function (err, fileObj) {
        //If !err, we have inserted new doc with ID fileObj._id, and
        //kicked off the data upload using HTTP
      });
    });
  }
  
});

Template.profile.helpers({

  profiles: function(){
    return Profiles.findOne({user: Meteor.userId()}, {sort: { date: -1}});
  },

  profileImages: function(){
    return profileTestImages.findOne({owner: Meteor.userId()}, {sort: {dateAdded: -1}});
  },

  // profilePictures: function(){
  //   return ProfilePictures.find({owner: Meteor.userId()}, {sort: {updatedAt: -1}});
  // }

});

