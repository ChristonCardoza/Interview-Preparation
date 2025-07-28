function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// ------------------------------- Var Hoisting -------------------------------
async function varDemo() {
  await sleep(1000)
  console.log(' ------------------------------- Var Hoisting -------------------------------')
  var name = "John";
  console.log(name);
  var name = "Doe";
  console.log(name)
  var name = {
    firstName: "John",
    lastName: "Doe"
  }
  console.log(name)

  name = 'xyz'
  console.log(name)

//console.log(this.name) // window object

  console.log(sample) // undefined
  var sample;
  sample = 10;
  console.log(sample)

  var firstName = "pokkade"
  var secondName = "surname"
  var thirdName = 'thirdName'

  function sampleFunction(firstName) {
    console.log("Inside Function 'firstName': ",firstName) // NewName
    var firstName = "John"
    console.log("Inside Function 'firstName': ",firstName) // John
    console.log("Inside Function 'name': ",name) // xyz
    console.log("Inside Function 'secondName': ",secondName) // surname
    secondName = "newSurname"
    console.log("Inside Function 'secondName': ",secondName) // newSurname
    console.log("Inside Function 'thirdName': ",thirdName) // undefined
    var thirdName = 'thirdNameInsideFunction'
    console.log("Inside Function 'thirdName': ",thirdName) // thirdNameInsideFunction
  }
  sampleFunction("NewNmae")
  console.log(firstName) // pokkade
  console.log(secondName) // newSurname
  console.log(thirdName) // thirdName

  {
    console.log("Inside Block 'firstName': ",firstName) // pokkade
    var firstName = "John"
    console.log("Inside Block 'firstName': ",firstName) // John
    console.log("Inside Block 'name': ",name) // xyz
    console.log("Inside Block 'secondName': ",secondName) // newSurname
    secondName = "anothernewSurname"
    console.log("Inside Block 'secondName': ",secondName) // anothernewSurname
    console.log("Inside Block 'thirdName': ",thirdName) // thirdName
    var thirdName = 'thirdNameInsideFunction'
    console.log("Inside Block 'thirdName': ",thirdName) // thirdNameInsideFunction
  }
  console.log(firstName) // John
  console.log(secondName) // anothernewSurname
  console.log(thirdName) // thirdNameInsideFunction

  for(var i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i)
    })
  } // 5 5 5 5 5

}
varDemo()
// ------------------------------- Let Hoisting -------------------------------
async function letDemo() {
  await sleep(2000)
  console.log(' ------------------------------- Let Hoisting -------------------------------')
  let letName = "John";
  console.log(letName);

  letName = {
    firstName: "John",
    lastName: "Doe"
  }
  console.log(letName)

  let l2;
  console.log(l2); // undefined
  l2 = "l2";

  let letScope = 'xyz'
  {
    let letNewScope = 'abc'
    console.log("Inside Block 'letNewScope': ",letNewScope) // abc
    console.log("Inside Block 'letScope': ",letScope) // xyz
    letScope = 'scopeChangedInBlock'
    console.log("Inside Block 'letScope': ",letScope) // scopeChangedInBlock
  }
  console.log(letScope) // scopeChangedInBlock
  // console.log(letNewScope) // ReferenceError: letNewScope is not defined

  function getLetScope() {
    console.log("Inside Function 'letScope': ",letScope)
    letScope = 'FunctionChangedScope'
    console.log("Inside Function 'letScope': ",letScope)
    let letFunctionScope = 'abc'
    console.log("Inside Function 'letFunctionScope': ",letFunctionScope) // abc
  }

  getLetScope()

  console.log(letScope) // xyz

  // console.log(letSample) // ReferenceError: Cannot access 'letSample' before initialization
  // let letSample = 10;

  for(let i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i)
    })
  }
}

letDemo()

// ------------------------------- Const Hoisting -------------------------------
async function constDemo() {
  await sleep(3000)
  console.log(' ------------------------------- Const Hoisting -------------------------------')

  const constName = "John";
  console.log(constName); // John
  const newConstName = "Doe";

  // constName = {
  //   firstName: "John",
  //   lastName: "Doe"
  // }
  // console.log(constName) // TypeError: Assignment to constant variable.

  const constScope = 'xyz'
  {
    const constNewScope = 'abc'
    console.log("Inside Block 'letNewScope': ",constNewScope) // abc
    console.log("Inside Block 'letScope': ",constScope) // xyz
    // const constScope = 'scopeChangedInBlock' // cannot access before initialization
    console.log("Inside Block 'letScope': ",constScope) // scopeChangedInBlock
    const newConstName = "newConstNameInsideBlock";
    console.log(newConstName) // newConstNameInsideBlock
  }
  console.log(constScope) // scopeChangedInBlock

  // for(const i = 0; i < 5; i++) {
  //   setTimeout(() => {
  //     console.log(i)
  //   })
  // }


}

constDemo()
