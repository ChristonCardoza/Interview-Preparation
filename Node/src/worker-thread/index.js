// process.env.UV_THREADPOOL_SIZE = 1
const express = require("express");

const workerpool = require("workerpool");
const { Worker, isMainThread } = require("worker_threads");

const cors = require("cors");

const app = express();
app.use(cors());

const pool = workerpool.pool(__dirname + "/myWorker.js");
app.get("/small", (req, res) => {
  res.json("small end point");
});

app.get("/big", (req, res) => {
  // Simulate a long running process

  //   for (let i = 0; i < 10000000000; i++) {
  //     // Do nothing
  //   }
  // res.end("Big end point");

  pool.exec("workHard", [10000000000]).then(() => {
    res.json("Big end point");
  });
});

app.get("/heavy", (req, res) => {
  if (isMainThread) {
    const worker = new Worker(__dirname + "/anotherWorker.js");

    worker.on("message", (data) => {
      res.json("Heavy end point");
    });
  }
});

app.listen(5000, () => console.log("Server is running on 5000"));
