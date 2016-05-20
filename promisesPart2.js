// revealing constructor patteren.
//This JavaScript promises pattern is called a revealing constructor because the single function argument reveals its capabilities to the constructor function, but ensures that consumers of the promise cannot manipulate its state.
var promise = new RSVP.Promise(function (fulfill, reject){
    
    
});

function onFulfilled (){};
function onRejected (){};
promise.then(onFulfilled, onRejected);
/////////////////////////////////////////////////////

console.log("//////////////////////////Example 1///////////////////////////");
console.log("//////////////////////////Example 1///////////////////////////");
