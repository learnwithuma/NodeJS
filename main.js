var emitter = require('events');
var util = require('util');
var say = require('./app');
util.inherits(say, emitter);

say = new say();

say.on('hi', function() {
    console.log('i said hi');
});

say.emit('hi');

