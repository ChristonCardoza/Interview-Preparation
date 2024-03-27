// child_process.fork(modulePath, [args]. {options})

const cp = require("child_process");
const path = require("path");

const names = ["a", "b", "c", "4", "5"];

var child = cp.fork("forkChild.js", names);

// revice message from child
child.on("message", (data) => {
  console.log(`Parent recieved ${data}`);
});

child.on("exit", () => {
  console.log("Child terminated!");
});

// send message to child
let interval = setInterval(() => {
  child.send({ names: "dully", age: 30, city: "naples" });
}, 1000);

setTimeout(() => {
  clearInterval(interval);
  child.kill();
}, 5000);
