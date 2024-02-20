/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    
    return function() {

        return n++;
        
    };
};

let n = -2;
let callArray = ["call", "call", "call", "call", "call"];

//Create a counter with initial value n
const counter = createCounter(n); //createCounter(n) is a function call to the createCounter function that was defined earlier in your code. This function takes a parameter n which is used as the initial value of the counter. The function returns another function (a closure) which acts as a counter, incrementing its value each time it's called. So, counter is a reference to this closure, initialized with the initial value n

//Call "call" five time and log the counter values
callArray.forEach(() => console.log(counter())); //callArray.forEach() is a method that iterates over each element of the callArray. Here, it's used to iterate over each occurrence of the string "call" in the array.

                               //The arrow function () => console.log(counter()) is passed as a callback function to the forEach() method. This arrow function doesn't take any parameters, but when executed, it logs the current value of the counter to the console.

                                //So, when forEach() iterates over each element of callArray, it calls the arrow function, which in turn calls counter(). Each call to counter() returns the current value of the counter (starting from n and incrementing by 1 each time it's called), and this value is logged to the console. Thus, you'll see the counter values logged to the console each time "call" is encountered in the callArray.
/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */