var LayerAPI = require('layer-api');

// Initialize by providing your Layer credentials
var layer = new LayerAPI({
  token: 'vnsELsfceQQBFo7jshxzbBOKmWOLxE4J6dNBR8V0q4XpfoZu',
  appId: 'layer:///apps/staging/2c96c436-44b0-11e7-9f2f-b79ffcf05b7b'
});

// Create a Conversation 
layer.conversations.create({participants: ['abcd']}, function(err, res) {
  var cid = res.body.id;
 
  // Send a Message 
  layer.messages.sendTextFromUser(cid, 'abcd', 'Hello, World!', function(err, res) {
    console.log(err || res.body);
  });
});