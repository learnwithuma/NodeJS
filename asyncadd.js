var async = require('async');

function addNumbers(a, b ) {
    var sum = a + b;
    return sum;
}
function print(c) {
    console.log("final o/p = " + c);
}
async.series({
    one: function (callback) {
        var sum = addNumbers(1, 1);
        callback(null, sum);
    },
    two: function (callback) {
        var sum = addNumbers(1, 2);
        callback(null, sum);
    },
    three: function (callback) {
        var sum = addNumbers(1, 3);
        callback(null, sum);
    }
}, function (err, results) {
    // results is now equal to: {one: 1, two: 2}
    console.log(results);
});