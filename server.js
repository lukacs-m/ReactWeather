/**
 * Created by user on 12/05/2016.
 */
var express = require('express');

var app = express();

app.use(express.static('public'));

app.listen(3000, function () {
    console.log('Express server is up and running on port 3000');
});