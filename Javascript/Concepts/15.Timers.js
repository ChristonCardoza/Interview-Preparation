// 1. SetTimout(callback, delay)
// Execute a function once after a given delay
// callback is added to the task queue after the delay
// Not guaranteed to execute exactly after the delay. It will execute after the delay only if the call stack is empty

function timeoutExp() {
  setTimeout(() => {
    console.log("setTimeout");
  }, 3000)
}
timeoutExp()

// 2. SetInterval(callback, delay)
// Repeat a function after every interval
// Registers a callback to be added repeatedly to the task queue after the delay
// If the callback execution takes longer than the delay, the next callback will be added to the task queue immediately after the previous callback completes But it does not overlap or run concurrently.
let count = 0
function intervalExp() {
  const interval = setInterval(() => {
    const start = Date.now();
    while (Date.now() - start < 2500) {
      // Busy loop for 2.5 seconds
    }
    console.log(`Tick ${++count} at`, new Date().toLocaleTimeString());
    if (count === 5) clearInterval(interval)
  }, 1000)
}
intervalExp()

// 3. SetImmediate(callback)
// Runs callback immediately after the current poll phase
// Sceduling during check phase of the event loop
// Always runs after I/O events but it run after timers set for 0ms when using top level and before timer when inside I/o cycle ie Because the Timers phase comes before Check phase in the event loop
setImmediate(() => console.log("setImmediate"));
setTimeout(() => console.log("setTimeout 0ms"), 0);

// 4. Process.nextTick(callback)
// Runs callback before the next event loop tick, ie immediately after the current operation completes
// It is a part of the microtask queue
// Runs before any I/O events or timers
console.log("Start");

process.nextTick(() => {
  console.log("nextTick");
});

console.log("End");

