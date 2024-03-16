// -------------------------------------------------------- VAR --------------------------------------------------------

var v1 = "v1";
console.log(v1); // v1

var v2;
console.log(v2); // undefined
v2 = "v2";

var v3;
v3 = "v3";
console.log(v3); // v3

console.log(v4); // undefined
var v4 = "v4";

var v5 = [1, 2, 3, 5];
var v5 = { a: 3 };
console.log(v5); // { a: 3 }

// var v6 = "v6"
// console.log(v7) // v7 is not defined

var v7 = "v7";
v7 = "v8";
console.log(v7); // v8
v7 = "v9";

// -------------------------------------------------------- LET --------------------------------------------------------

let l1 = "l1";
console.log(l1); // li

let l2;
console.log(l2); // undefined
l2 = "l2";

let l3;
l3 = "l3";
console.log(l3); // l3

// console.log(l4); // Cannot access l4 before initialization
// let l4 = "l4";

// let l5 = [1, 2, 3, 5];
// console.log(l5); // [1, 2, 3, 5]
// let l5 = { a: 3 }; // Identifier 'l5' has already been declared

let l6 = "l6";
l6 = "l7";
console.log(l6); // l7
l6 = "l8";

// -------------------------------------------------------- CONST --------------------------------------------------------

const c1 = "c1";
console.log(c1); // c1

// const c2; // Unexpected token
// console.log(c2);
// c2 = "c2";

// console.log(c3); // Cannot access c3 before initialization
// const c3 = "c3";

// const c4 = [1, 2, 3, 5];
// console.log(c4); // [1, 2, 3, 5]
// const c4 = { a: 3 }; // Identifier 'c4' has already been declared

const c5 = "c5";
c5 = "c6"; // Assignment to constant variable
