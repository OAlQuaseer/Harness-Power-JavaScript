// revealing constructor patteren.
//This JavaScript promises pattern is called a revealing constructor because the single function argument reveals its capabilities to the constructor function, but ensures that consumers of the promise cannot manipulate its state.
var promise = new RSVP.Promise(function (fulfill, reject){
    
    
});

function onFulfilled (){};
function onRejected (){};
promise.then(onFulfilled, onRejected);
/////////////////////////////////////////////////////

console.log("//////////////////////////Example 1///////////////////////////");

function dieToss(){
    return Math.floor(Math.random()*6)+1;
};

console.log("step 1");
var promise1 = new RSVP.Promise(function (fulfill , reject){
    console.log("step 2");
    n = dieToss();
    if (n === 6){
        console.log(n);
        fulfill(n);
    }else{
        console.log(n);
        reject(n);
    }
});

function onFulfilled1 (toss){
    console.log(" YAYYY.... threw " + toss);
};
function onRejected1 (toss){
    console.log(" OOohh.... threw " + toss);
};
promise1.then(onFulfilled1, onRejected1);
console.log("Step 3")

console.log("//////////////////////////Example 1///////////////////////////");
