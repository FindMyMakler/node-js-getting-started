var express = require('express');

var app = express();


var redis = require('redis').createClient(process.env.REDIS_URL);
var queue = require('kue').createQueue({
  redis: process.env.REDIS_URL
});
 
var WebhooksServices = require('layer-webhooks-services');
var lws = new WebhooksServices({
  token: process.env."vnsELsfceQQBFo7jshxzbBOKmWOLxE4J6dNBR8V0q4XpfoZu",
  appId: process.env."layer:///apps/staging/2c96c436-44b0-11e7-9f2f-b79ffcf05b7b",
  redis: redis
});

var webhook = {
  name: 'Webhook Example',  // An arbitrary name for your webhook 
  path: '/', // Your server URL path for the webhook 
  events: ['message.sent']  // Events this webhook is listening to 
};
 
// Register a webhook 
lws.register({
  secret: 'caspomc',
  url: 'https://pacific-reaches-16594.herokuapp.com/',
  hooks: [webhook]
});

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
