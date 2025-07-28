// ----------------------- Object Literals -----------------------
console.log("------------------------ Object Literals ------------------------")
const obj1 = {
  name: 'Alice',
  age: 30,
  greet() {
    console.log(`Hello, ${this.name}!`);
  }
}
obj1.greet()
console.log('\n')

//------------------------ new Object() ------------------------
console.log("------------------------ new Object() ------------------------")
const obj2 = new Object()
obj2.name = 'Bob';
obj2.age = 25;
obj2.greet = function() {
  console.log(`Hello, ${this.name}!`);
}
obj2.greet()
console.log('\n')

//------------------------ Constructor Function ------------------------
console.log("------------------------ Constructor Function ------------------------")
function obj3(name, age){
  this.name = name;
  this.age = age;

  this.greet = function() {
    console.log(`Hello, ${this.name}!`);
  }
}
const p1 = new obj3('Sam', 30);
p1.greet()
console.log('\n')

//------------------------ Factory Function ------------------------
console.log("------------------------ Factory Function ------------------------")
function createPerson(name, age) {
  return {
    name,
    age,
    greet() {
      console.log(`Hello, ${this.name}!`);
    }
  }
}
const obj6 = createPerson('Jane', 20);
obj6.greet()
console.log('\n')

//------------------------ Object.create() ------------------------
console.log("------------------------ Object.create() ------------------------")
const obj4 = {
  greet() {
    console.log(`Hello, ${this.name}!`);
  }
}
const p2 = Object.create(obj4);
p2.name = 'John';
p2.greet()
console.log('\n')

//------------------------ Class ------------------------
console.log("------------------------ Class -------------------------------")

class Obj5 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, ${this.name}!`);
  }
}
const p3 = new Obj5('Doe', 30);
p3.greet()
