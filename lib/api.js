var express = require('express');
var LayerAPI = require('layer-api');
var app = express();

// Initialize by providing your Layer credentials 
var layer = new LayerAPI({
  token: "vnsELsfceQQBFo7jshxzbBOKmWOLxE4J6dNBR8V0q4XpfoZu",
  appId: "layer:///apps/staging/2c96c436-44b0-11e7-9f2f-b79ffcf05b7b"
});

// Create a Conversation 


layer.conversations.create({participants: ['1ed50b90-d070-4dff-8e17-f12816e91e88']}, function(err, res) {
  var cid = res.body.id;
 
  // Send a Message 
  layer.messages.sendTextFromUser(cid, '1ed50b90-d070-4dff-8e17-f12816e91e88', 'Hello, World!', function(err, res) {
    console.log(err || res.body);
  });
});

var payload = {
  sender: {
    name: 'The System'
  },
  parts: [
    {
      body: 'Hello, World!',
      mime_type: 'text/plain'
    }
  ]
};
layer.announcements.send(payload, function(err, res) {
  if (err) return console.error(err);
 
  // announcement data 
  var announcement = res.body;
});

