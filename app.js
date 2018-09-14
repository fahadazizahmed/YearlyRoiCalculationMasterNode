var ex = require('express');
var app = ex();
var roicalculate = require('./Controllers/roiCalculate');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(roicalculate);


    var server = app.listen(process.env.PORT || 3000, function () {
        var port = server.address().port;
        console.log('App listening on port %s', port);
    });
