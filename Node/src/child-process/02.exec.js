// child_process.exec(command, {options}, {callback});

const cp = require("child_process");

var progs = {
  list: "ls",
  remove: "rm",
};

var child = cp.exec(progs.remove + " -r swwan1.js", (error, stdout, stderr) => {
  if (error) {
    console.log(
      `Name: ${error.name}\nMessage: ${error.message}\nStack: ${error.stack}`
    );
  } else {
    console.log(stdout);
  }
});
