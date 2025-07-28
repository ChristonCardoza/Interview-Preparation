//--------------------------------------------------------------------------------------------------------------------
//                                                      Object.create
//--------------------------------------------------------------------------------------------------------------------

const obj = {
  name: "Christon",
  address: {
    city: "Udupi",
  },
  getAge: function () {
    return new Date().getFullYear() - this.birthYear;
  },
};

obj.birthYear = 1996;
console.log(obj); // { name: 'Christon', address: { city: 'Udupi' }, birthYear: 1996, getAge: λ }
console.log(obj.getAge()); // 28

const newObj = Object.create(obj);
console.log(newObj); // { name: 'Christon', address: { city: 'Udupi' }, birthYear: 1996, getAge: λ }

newObj.birthYear = 2000;
newObj.address.city = "Manglore";

console.log(newObj); // { birthYear: 2000, name: 'Christon', address: { city: 'Manglore' }, getAge: λ }
console.log(newObj.getAge()); // 24
console.log(obj); // {name: 'Christon', birthYear: 1996, address: { city: 'Manglore' }, getAge: λ }
console.log(obj.getAge()); // 28

//--------------------------------------------------------------------------------------------------------------------
//                                                      Object.assign
//--------------------------------------------------------------------------------------------------------------------

const obj1 = {
  name: "Christon",
  address: {
    city: "Udupi",
  },
  getAge: function () {
    return new Date().getFullYear() - this.birthYear;
  },
};

obj1.birthYear = 1996;
console.log(obj1); // { name: 'Christon', address: { city: 'Udupi' }, birthYear: 1996, getAge: λ }
console.log(obj1.getAge()); // 28

const obj2 = {
  name: "Antony",
  address: {
    city: "Goa",
  },
  getAge: function () {
    return new Date().getFullYear() - this.birthYear;
  },
};

obj2.birthYear = 1994;
obj2.weight = 100;
console.log(obj2); // { name: 'Antony', address: { city: 'Goa' }, birthYear: 1994, weight: 100, getAge: λ }
console.log(obj2.getAge()); // 30

const obj3 = Object.assign({}, { height: 6 }, obj2, obj1, { birthYear: 1990 });

console.log(obj3); // {height: 6, name: 'Christon', address: { city: 'Udupi' }, birthYear: 1990, weight: 100, getAge: λ}
console.log(obj3.getAge()); // 34

//--------------------------------------------------------------------------------------------------------------------
//                                                      Object.create
//--------------------------------------------------------------------------------------------------------------------
const user = Object.create( Object.prototype, {
  id: {
    value: 1,
    enumerable: true,
    writable: false,
  },
  name: {
    value: "John",
    enumerable: true,
    writable: true
  },
  password: {
    value: "123456",
    enumerable: false,
  }
})

console.log(user) // { id: 1, name: 'John' }

const person1 = {
  name: "Alice",
  age: 30
}

const employee1 = Object.create(person1)
employee1.id = 1

console.log(employee1.id) // 1
console.log(employee1.name) // Alice
console.log(employee1.hasOwnProperty('id')); // true
console.log(employee1.hasOwnProperty('name'));// false
person1.name = "Bob"
console.log(employee1.name) // Bob
employee1.name = "Charlie"
console.log(employee1.name) // Charlie
console.log(person1.name) // Bob

//--------------------------------------------------------------------------------------------------------------------
//                                                      Object.defineProperty
//--------------------------------------------------------------------------------------------------------------------

const person2 = {
  name: "Alice",
  age: 25
};
console.log(person2); // { name: "Alice", age: 25}

Object.defineProperty(person2, "age", {
  enumerable: false
});

console.log(person2); // { name: "Alice" }
