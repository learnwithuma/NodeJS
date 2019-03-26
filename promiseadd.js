function addNumbers(a, b) {
    return new Promise(function (resolve, reject) {
        var sum = a + b;
        resolve(sum);
    })
}
function print(c) {
    console.log("final o/p = " + c);
}

addNumbers(1, 1).then(function (sum) {
    print(sum)
});
addNumbers(1, 2).then(function (sum) {
    print(sum)
});
addNumbers(1, 3).then(function (sum) {
    print(sum)
});