var emitter = require('events');
var util = require('util');

function wish() {
    this.msg='Hello !!!!';
}

util.inherits(wish, emitter);

wish = new wish();

wish.on('Hello', function () {
    console.log('Hello user !!');
});

wish.emit('Hello');