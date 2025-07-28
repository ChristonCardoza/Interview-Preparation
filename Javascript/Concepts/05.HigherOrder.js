// Higher Order Function
// A function which takes another function as an argument or returns a function is called higher order function

// 1. Function which takes another function as an argument
console.log("---------------1. Function which takes another function as an argument-----------------")
function multiplyBy2(num) {
  return num * 2;
}

function callMul(data, fn) {
  let result = [];

  for (let i = 0; i < data.length; i++){
    result.push(fn(data[i]))
  }

  console.log(result)
}

callMul([1, 2, 3, 4, 5], multiplyBy2) // [ 2, 4, 6, 8, 10 ]


// 2. Function which returns a function
console.log("---------------2. Function which returns a function-----------------")
function multiplier(x) {
  return function(y) {
    return x * y;
  }
}

const double = multiplier(2); // 10
const triple = multiplier(3); // 9

console.log(double(5))
console.log(triple(3))

console.log("--------------- Logger Example -----------------")

function add(a, b) {
  return a + b;
}

function multiply(a, b){
  return a * b;
}

function withLogger(fn) {
  return function(...args) {
    console.log(`Calling ${fn.name} with arguments ${args}`)
    const result = fn(...args);
    console.log(`Result of ${fn.name} is ${result}`)
    return result;
  }
}

const loggedAdd = withLogger(add);
loggedAdd(1, 2)

const loggedMultiply = withLogger(multiply);
loggedMultiply(3,6)
