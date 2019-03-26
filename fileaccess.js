var http = require('http');
var fs = require('fs');
fs.readFile('samplefile.txt', function (err, data) {
    console.log(data.toString());
});
