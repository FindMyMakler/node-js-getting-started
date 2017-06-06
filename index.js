var express = require('express');

var app = express();

var LayerWebhooks = require('layer-webhooks');


// Initialize by providing your Layer credentials 
var layer = new LayerWebhooks({
    token: "vnsELsfceQQBFo7jshxzbBOKmWOLxE4J6dNBR8V0q4XpfoZu",
    appId: "layer:///apps/staging/2c96c436-44b0-11e7-9f2f-b79ffcf05b7b"
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
