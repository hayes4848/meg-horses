var horseStore = new FS.Store.S3('horseStore',{
  accessKeyId     : Meteor.settings.public.AWS.key,
  secretAccessKey : Meteor.settings.public.AWS.secret,
  bucket          : Meteor.settings.public.AWS.bucket,
  folder          : 'horse-images', 
  transformWrite: function(fileObj, readStream, writeStream) {
    var size = '400';
    gm(readStream, fileObj.name()).resize(size, size + '^').gravity('Center').extent(size, size).stream().pipe(writeStream)
  }
});

horseImages = new FS.Collection('horseImages', {
  stores: [horseStore ]
});

horseImages.allow({
  insert: function(){return true},
  update: function(){return true},
  remove: function(){return true},
  download: function(){return true}
});
