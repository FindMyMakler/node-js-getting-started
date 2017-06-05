var express = require('express');
var LayerAPI = require('layer-api');
var app = express();

// Initialize by providing your Layer credentials 
var layer = new LayerAPI({
  token: "vnsELsfceQQBFo7jshxzbBOKmWOLxE4J6dNBR8V0q4XpfoZu",
  appId: "layer:///apps/staging/2c96c436-44b0-11e7-9f2f-b79ffcf05b7b"
});

// Create a Conversation 
layer.conversations.create({participants: ['abcd']}, function(err, res) {
  var cid = res.body.id;
 
  // Send a Message 
  layer.messages.sendTextFromUser(cid, 'abcd', 'Hello, World!', function(err, res) {
    console.log(err || res.body);
  });
});

layer.identities.get('1ed50b90-d070-4dff-8e17-f12816e91e88', function(err, res) {
  if (err) return console.error(err);
 
  // Identity retrieved: 
  console.log('User: ' + res.body.display_name);
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
