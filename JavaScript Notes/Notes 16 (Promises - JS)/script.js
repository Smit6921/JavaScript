// There Are Three Phases of Promises :-
// 1. Pending
// 2. Fulfill
// 3. Reject


// OnPending

let a = 0 

let promise = new Promise (function (resolve , reject) {
    if (a>0) {
        resolve("a is grater than zero")
    }
    else{
        reject("a is lower than zero")
    }
}).then((result) => console.log(result)).catch((err) => console.log(err))


// OnFulfilment

let OnFulfilment = (result) => {
    console.log(result)
}


// OnRejction

let rejection = (error) => {
    console.log(error)
}

promise.then(OnFulfilment)
promise.catch(rejection)