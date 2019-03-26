function performTask() {
    console.log('1');

    waitfortheturn(2000).then(function() {
        callback();
    });

    console.log('3');
}

function callback() {
    console.log('2')
}

function waitfortheturn(delay) {
    return new Promise(function(resolve,reject) {
        setTimeout(resolve, delay);
    });
}

performTask();

