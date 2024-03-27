// child_process.spawn(command, [args], {options})

/*
OPTIONS

cwd : Current working directory
env:  Environment key-value pairs 
argv0: Explicity set the value of argv[0] set to the child process 
stdio: Child's stdio confugration (pipe, ignore, inherit)
detached: prepare child to run independtly of its parent process
uid: sets the user identify of the process
gid: set the grop identity of the process
shell: if true runs command inside of a shell
*/

var cp = require("child_process");
const fs = require("fs");
const { stdin } = require("process");

var progs = {
  list: "ls",
  copy: "cp",
  folder: "mkdir",
};

var child = cp.spawn(progs.list, ["-a"], {
  cwd: "..",
});

child.stdout.on("data", (data) => {
  console.log(`data:\n ${data}`);
});

child.stderr.on("data", (err) => {
  console.log(`error: ${err}`);
});

var copy = cp.spawn(progs.copy, ["spwan.js", "swwan1.js"]);
copy.on("exit", () => {
  console.log("copy process finished");
});

let err = fs.openSync("./logs/err.txt", "a");
let out = fs.openSync("./logs/out.txt", "a");

var child1 = cp.spawn(progs.list, ["-a"], {
  cwd: "..",
  stdio: ["ignore", out, err],
});

// run child process in detached mode
let out_detached = fs.openSync("./logs/out_detached.txt", "a");
let err_detached = fs.openSync("./logs/err_detached.txt", "a");

let detached = cp.spawn("node", ["index.js"], {
  detached: true,
  stdio: ["ignore", out_detached, err_detached],
});
detached.unref();
