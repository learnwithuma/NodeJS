function addNumbers(a, b, callback) {
    var sum = a + b;
    callback(sum)
}
function print(c) {
    console.log("final o/p = " + c);
    
}
addNumbers(1, 1, print);
addNumbers(1, 2, print);
addNumbers(1, 3, print);