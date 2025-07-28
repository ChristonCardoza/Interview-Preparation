// this in global scope
console.log("---------------------------Global-----------------------------");
console.log(this); // window object

// this in function

console.log(
  "---------------------------Inside Function in Strict-----------------------------",
);
function x() {
  "use strict";
  console.log(this);
}
x(); // undefined

// If the value of this keyword is undefined or null this keyword will be pointing to global object
// only in non strict mode
console.log(
  "---------------------------Inside Function in Non - Strict-----------------------------",
);
function y() {
  console.log(this);
}
y(); // window object

// It is also depends how it is called during runtime
// global.x()

console.log(
  "---------------------------Inside Object Method-----------------------------",
);
const obj = {
  a: 10,
  x: function () {
    console.log(this);
  },
};

obj.x(); // obj

console.log(
"---------------------------Inside Function Method of Object-----------------------------"
)
const obj1 = {
  a: 10,
  x: function () {
    function y () {
      console.log(this);
    }
    y()
  },
};

obj1.x(); // window

console.log(
  "---------------------------Inside Call Method-----------------------------",
);

const student1 = {
  name: "Student 1",
  printName: function () {
    console.log(this);
  },
};

const student2 = {
  name: "Student 2",
};

student1.printName(); // student1
student1.printName.call(student2); // student2
student1.printName.apply(student2); // student2
const printName = student1.printName.bind(student2); // student2
printName();

console.log(
  "---------------------------Arrow Function-----------------------------",
);
const arrow = () => console.log(this);
arrow();

console.log(
  "---------------------------Arrow Function Method of Object-----------------------------",
);

const arrowObj1 = {
  a: 10,
  x: () => {
    console.log(this);
  },
};

arrowObj1.x(); // window object

console.log(
  "---------------------------Arrow Function within Method of Object-----------------------------",
);

const arrowObj2 = {
  a: 20,
  x: function () {
    const y = () => {
      console.log(this);
    };
    y();
  },
};

arrowObj2.x(); // arrowObj2
