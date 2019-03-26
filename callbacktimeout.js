function performTask() {
    console.log('1')

    setTimeout(callback, 2000)

    console.log('3')
}

function callback() {
    console.log('2')
}
performTask();