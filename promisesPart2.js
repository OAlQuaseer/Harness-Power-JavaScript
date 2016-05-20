// revealing constructor patteren.
//This JavaScript promises pattern is called a revealing constructor because the single function argument reveals its capabilities to the constructor function, but ensures that consumers of the promise cannot manipulate its state.
var promise = new RSVP.Promise(function (fulfill, reject){
    
    
});

function onFulfilled (){};
function onRejected (){};
promise.then(onFulfilled, onRejected);
/////////////////////////////////////////////////////
////Handling errors
//signupPayingUser
//  .then(displayHoorayMessage)
//  .then(queueWelcomeEmail)
//  .then(queueHandwrittenPostcard)
//  .then(redirectToThankYouPage)
//  .then(null, displayAndSendErrorReport)
console.log("//////////////////////////Example 1///////////////////////////");
var tossTable = {
    1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six'
};


function toss(){
    return new RSVP.Promise(function (fulfill, reject){
        var n = Math.floor(Math.random() * 6) + 1;
        fulfill(n);
    });
};

function logAndToss (toss){
    var str = tossTable[toss].toUpperCase();
    console.log("Tossed "+str);
//    we always need to return something from the handlers or be prepared in the subsequent statments to have nothing passed to the handler.   
//    var n = Math.floor(Math.random() * 6) + 1;
//    return n;
};

function LogIfErrorHappens (error){
    console.log("Oopps... "+ error.message+".... error has been thrown");
};

toss()
    .then(logAndToss)
    .then(logAndToss)
    .then(logAndToss)
    .then(null, LogIfErrorHappens);


console.log("//////////////////////////Example 1///////////////////////////");
