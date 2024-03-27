const workerpool = require("workerpool");

const workHard = function (num) {
  // Simulate a long running process
  for (let i = 0; i < num; i++) {
    // Do nothing
  }
};

workerpool.worker({
  workHard: workHard,
});
