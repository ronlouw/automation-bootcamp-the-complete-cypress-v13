let promise = new Promise((resolve, reject) => {
    let a = 1 + 1
    if(a == 2) {
        resolve('Promise Fulfilled')
    } else {
        reject('Promise not fulfilled')
    }
})

promise.then((message) => { // keyword then returns a promise in this case resolve or reject
    console.log(message + ', promise has passed!') // if promise is fulfilled
}).catch((message) => { // otherwise it is rejected
    console.log(message + ', promise has failed') 
})