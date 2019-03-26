function performTask() {
    console.log('1');

    waitfortheturn(2000);

    console.log('3');
}

function callback() {
    console.log('2')
}

async function waitfortheturn(delay) {
    await wait(delay);
    console.log('2');
}

function wait(delay) {
    return new Promise(function(resolve,reject) {
        setTimeout(resolve, delay);
    });
}

performTask();

