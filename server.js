//Heroku site: https://cool-timestamp-service.herokuapp.com

//require express and instantiate app
var express = require('express');
var app = express();

//naturalTime e.g. 'January 20, 2016'
var naturalTime = /\w+\s?\d{1,2},\s?\d{4}/;

//unixTime e.g. '1234234234'
var unixTime = /^\d+/;


//home directory listing instructions
app.get('/', function (req, res) {
    res.send('Please type in a date in the address bar to recieve your Unix Timestamp!');
});

//get time from user
app.get('/:time', function (req, res) {
    var time = req.params.time;
    if(time.match(naturalTime)) {
        //get unix time in seconds
        var naturalToUnix = new Date(time).getTime()/1000;
        res.json({'unix': naturalToUnix, 'naturalTime': time});
    }
    else if(time.match(unixTime)) {
        var unixToNatural = new Date(+time*1000);
        res.json({'unix': +time, 'naturalTime': unixToNatural});
    }
    else {
        res.json({unix: null, naturalTime: null});
    }
});

//provide heroku with port information or default to 3000
var port = Number(process.env.PORT || 3000);

//listen on port 3000
app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});
