var imageStore = new FS.Store.S3("images", {
  region: "us-east-1", //optional in most cases
  accessKeyId: Meteor.settings.public.key, //required if environment variables are not set
  secretAccessKey: Meteor.settings.public.secret, //required if environment variables are not set
  bucket: "andy-horses" //required
});


Images = new FS.Collection("images", {
  stores: [imageStore]
});
