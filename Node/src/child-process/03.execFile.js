// child_process.execFile(file, [args], {options}, callback)

const cp = require("child_process");

var child = cp.execFile("node", ["index.js"], (error, stdout, stderr) => {
  if (error) {
    throw error;
  }
  {
    console.log(stdout);
  }
});
