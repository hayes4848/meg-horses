var profileStore = new FS.Store.S3('originalProfileTest',{
  accessKeyId     : "AKIAIF5LB6LM2NWRTRXA",
  secretAccessKey : "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",
  bucket          : "andy-horses",
  folder          : 'profileTest', 
  transformWrite: function(fileObj, readStream, writeStream) {
    var size = '300';
    gm(readStream, fileObj.name()).resize(size, size + '^').gravity('Center').extent(size, size).stream().pipe(writeStream)
  }
});

profileTestImages = new FS.Collection('profileTest', {
  stores: [profileStore ]
});

profileTestImages.allow({
  insert: function(userId, fileObj){return true},
  update: function(userId, fileObj){return true},
  remove: function(userId, fileObj){return true},
});
