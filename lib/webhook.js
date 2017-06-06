var LayerWebhooks = require('layer-webhooks');


// Initialize by providing your Layer credentials 
var layer = new LayerWebhooks({
    token: "vnsELsfceQQBFo7jshxzbBOKmWOLxE4J6dNBR8V0q4XpfoZu",
    appId: "layer:///apps/staging/2c96c436-44b0-11e7-9f2f-b79ffcf05b7b"
});

// Register a webhook 
layer.webhooks.register({
  events: ['message.sent'],
  url: 'https://pacific-reaches-16594.herokuapp.com/lib/webhook.js',
  secret: 'caspomc',
  config: {
    name: 'My sample webhook'
  }
}, function(err, res) {
  if (err) return console.error(err);
 
  // Webhook registered 
});