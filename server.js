//require express and instantiate app
var express = require('express');
var app = express();

//home directory
app.get('/', function (req, res) {
    res.send('Please type in a date in the address bar to recieve your Unix Timestamp!');
});

//get time from user
app.get('/:time', function (req, res) {
    var time = req.params.time;
    res.send(time);
    console.log(time);
});

//listen on port 3000
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
