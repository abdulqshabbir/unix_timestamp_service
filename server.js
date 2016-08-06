//require express and instantiate app
var express = require('express');
var app = express();
var naturalTimeMatch = /\w+\s?\d{1,2},\s?\d{4}/;
var unixTimeMatch = /^\d+/;


//home directory listing instructions
app.get('/', function (req, res) {
    res.send('Please type in a date in the address bar to recieve your Unix Timestamp!');
});

//get time from user
app.get('/:time', function (req, res) {
    var time = req.params.time;
    if(time.match(naturalTimeMatch)) {
        console.log('natural time match!');
        
    }

    else if(time.match(unixTimeMatch)) {
        console.log('unix tiem match!');
    }
    else {
        res.json({unix: null, naturalTime: null});
    }
});

//listen on port 3000
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

//getTime returns the number of milliseconds since January 01, 1970
console.log(new Date('1969, December, 31').getTime());
