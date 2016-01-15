
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

  'change .profileImg': function() {

    var files = $("input.profileImg")[0].files

     S3.upload({
                files:files,
                path:"profilePics"
            },function(e,r){
                url = r.url;
                console.log(url);

                picture = {
                    url: url,
                    profile: Meteor.userId()
                }
                ProfilePictures.insert(picture);
        });

  }
});

Template.profile.helpers({

  profiles: function(){
    return Profiles.findOne({user: Meteor.userId()}, {sort: { date: -1}});
  }

});

