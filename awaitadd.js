function addNumbers(a, b) {
    return new Promise(function (resolve, reject) {
        var sum = a + b;
        resolve(sum);
    })
}
function print(c) {
    console.log("final o/p = " + c);
}

async function makeSum(a, b) {
    const sum = await addNumbers(a,b);
    print(sum);
}

makeSum(1,1);
makeSum(1,2);
makeSum(1,3);