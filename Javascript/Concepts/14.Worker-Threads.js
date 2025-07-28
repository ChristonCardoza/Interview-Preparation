const { Worker } = require('worker_threads');

console.log("Worker Example Started")

const worker = new Worker('./worker.js');

worker.on('message', (message) => {

  if (message === 'END'){
    worker.terminate()
  }

  console.log("Sum is: ", message)

  worker.terminate()
})

worker.postMessage('Hello Worker')

console.log("I am doing in main thread.....")

