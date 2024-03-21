//---------------------------------------------------------------------------------------------------------------------------------------
//                                                              Call
//---------------------------------------------------------------------------------------------------------------------------------------

function getNameCall(city1, city2) {
  console.log(`${this.fname} ${this.lname} lives in ${city1} and ${city2}`);
}

let personCall = { fname: "Christon", lname: "Cardoa" };

Function.prototype.myCall = function (context, ...args) {
  context.myFn = this;
  context.myFn(...args);
};

getNameCall.myCall(personCall, "Udupi", "Karntaka"); // Christon Cardoa lives in Udupi and Karntaka

//---------------------------------------------------------------------------------------------------------------------------------------
//                                                              Apply
//---------------------------------------------------------------------------------------------------------------------------------------

function getNameApply(city1, city2) {
  console.log(
    this.fname + " " + this.lname + " lives in " + city1 + " and " + city2
  );
}

let personApply = { fname: "John", lname: "Doe" };

Function.prototype.myApply = function (context, args) {
  context.myFn = this;
  context.myFn(...args);
};

getNameApply.myApply(personApply, ["Ranchi", "Bokaro"]); // John Doe lives in Ranchi and Bokaro

//---------------------------------------------------------------------------------------------------------------------------------------
//                                                              Bind
//---------------------------------------------------------------------------------------------------------------------------------------

function getNameBind(city1, city2) {
  console.log(
    this.fname + " " + this.lname + " lives in " + city1 + " and " + city2
  );
}

let personBind = { fname: "John", lname: "Doe" };

Function.prototype.myBind = function (context, ...args1) {
  context.myFn = this;
  console.log();

  return function (...args2) {
    console.log(...args1, ...args2);
    context.myFn(...args1, ...args2);
  };
};

const bindName = getNameBind.myBind(personBind, "England");
bindName("Netherland"); // John Doe lives in England and Netherland

//---------------------------------------------------------------------------------------------------------------------------------------
//                                                              Filter
//---------------------------------------------------------------------------------------------------------------------------------------

Array.prototype.myFilter = function (callback) {
  let arr = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      arr.push(this[i]);
    }
  }

  return arr;
};

let dataFilter = [1, 2, 3, 4];
console.log(dataFilter.myFilter((item) => item > 2)); // [3 , 4]

//---------------------------------------------------------------------------------------------------------------------------------------
//                                                              Map
//---------------------------------------------------------------------------------------------------------------------------------------

Array.prototype.myMap = function (callback) {
  let arr = [];

  for (let i = 0; i < this.length; i++) {
    arr.push(callback(this[i], i, this));
  }

  return arr;
};

let dataMap = [1, 2, 3, 4];
console.log(dataMap.myMap((item) => item > 2)); // [ false, false, true, true ]

//---------------------------------------------------------------------------------------------------------------------------------------
//                                                              Reduce
//---------------------------------------------------------------------------------------------------------------------------------------

Array.prototype.myReduce = function (callback, initialvalue = 0) {
  let accumulator = initialvalue;

  for (let i = 0; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }

  return accumulator;
};

let dataReduce = [1, 2, 3, 4];
console.log(
  dataReduce.myReduce((prevValue, curValue) => prevValue + curValue, 0)
); // 10
