//--------------------------------------------------------------------------------------------------------------------
//                                                  Call back
//--------------------------------------------------------------------------------------------------------------------

const cb1 = () => {
  console.log("hello");
};

setTimeout(cb1, 100); //  hello

// -------------------------------------------

const cb2 = (data) => {
  console.log(data);
};

const print = (name, cb) => {
  const message = `Hello ${name}`;
  cb(message);
};

print("Christon", cb2); // Hello Christon

// -------------------------------------------

const add = (a, b, cb) => {
  let sum;

  setTimeout(() => {
    sum = a + b;
    cb(sum);
  }, 1000);

  console.log(sum); // undefined
};

const cb3 = (data) => {
  console.log(`From cb3 function: ${data}`); // From cb3 function: 9
};

add(4, 5, cb3);

// -------------------------------------------

function addH(val, cb) {
  return cb(val + 5);
}

function subH(val, cb) {
  return cb(val - 5);
}

function mulH(val, cb) {
  return cb(val * 5);
}

addH(5, function (addRes) {
  subH(addRes, function (subRes) {
    mulH(subRes, function (mulRes) {
      console.log(mulRes); // 25
    });
  });
});

//--------------------------------------------------------------------------------------------------------------------
//                                                      Promise
//--------------------------------------------------------------------------------------------------------------------

function addP(val) {
  return val + 5;
}

function subP(val) {
  return val - 5;
}

function mulP(val) {
  return val * 5;
}

const p1 = new Promise(function (resolve, reject) {
  resolve(5);
});

const p2 = new Promise(function (resolve, reject) {
  reject("Rejecting the promise");
});

p1.then(addP)
  .then(subP)
  .then(mulP)
  .then((res) => console.log(`Prmise Response is: ${res}`)) // Prmise Response is: 25
  .catch((err) => console.log(`Prmise Error is: ${err}`));

p2.then(addP)
  .then(subP)
  .then(mulP)
  .then((res) => console.log(`Prmise Response is: ${res}`))
  .catch((err) => console.log(`Prmise Error is: ${err}`)); // Prmise Error is: Rejecting the promise

//--------------------------------------------------------------------------------------------------------------------
//                                                      Async/Await
//--------------------------------------------------------------------------------------------------------------------

function addA(val) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(val + 5), 100);
  });
}

function subA(val) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(val - 5), 100);
  });
}

function mulA(val) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(val * 5), 100);
  });
}

async function getResult(val) {
  let result = await addA(val);
  result = await subA(result);
  result = await mulA(result);

  console.log(`Async/Await Result: ${result}`); // Async/Await Result: 25
}

getResult(5);

function delay(i) {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve(i);
    }, i * 1000);
  });
}

async function test() {
  console.log("started"); // 'started'
  for (let i = 1; i <= 6; i++) {
    //console.log("a")
    const result = await delay(i);
    console.log(result); // 1.2.3.4.5,6
  }
  console.log("ended"); // ended"
}

// test();

// // function register(cb){
// //   // wait(3000)
// //   setTimeout(() => {
// //     console.log("register")
// //     cb()
// //   }, 2000)

// // }

// // function sendEmail(cb){
// //   setTimeout(() => {
// //      console.log("sendEmail")
// //     cb()
// //   }, 1000)

// // }

// // function login(cb){
// //   setTimeout(() => {
// //     console.log("login")
// //     cb()
// //   }, 1000)

// // }

// // function getUserData(cb){
// //   setTimeout(() => {
// //     console.log("getUserData")
// //     cb()
// //   }, 1000)

// // }

// // function displayUserData(){
// //   setTimeout(() => {
// //     console.log("displayUserData")
// //   }, 1000)

// // }

// // register(function() {
// //   sendEmail(function(){
// //     login (function() {
// //         getUserData(function(){
// //           displayUserData()
// //       })
// //     })
// //   })
// // })

// function register(){

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("register")
//       resolve()
//     }, 2000)
//   })
// }

// function sendEmail(){

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("sendEmail")
//       resolve()
//     }, 1000)
//   })
// }

// function login(cb){

//   return new Promise  ((resolve, reject) => {
//     setTimeout(() => {
//       console.log("login")
//       resolve()
//     }, 1000)
//   })

// }

// function getUserData(cb){

//   return new Promise ((resolve, reject) => {
//     setTimeout(() => {
//       console.log("getUserData")
//       resolve()
//     }, 1000)
//   })

// }

// function displayUserData(){
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("displayUserData")
//       resolve()
//     }, 1000)
//   })

// }

// // register()
// //   .then(sendEmail)
// //   .then(login)
// //   .then(getUserData)
// //   .then(displayUserData)

// async function job(){
//   await register()
//   await sendEmail()
//   await login()
//   await getUserData()
//   await displayUserData()
// }

// job().then(() => console.log("done"))
