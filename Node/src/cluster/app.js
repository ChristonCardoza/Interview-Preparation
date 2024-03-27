const express = require("express");
const cors = require("cors");

const cluster = require("cluster");
const os = require("os");
const { worker } = require("workerpool");

const noCpu = os.cpus().length;

const app = express();

app.use(cors());
app.use(express.json());
// app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.send(`Ok..... from process id ${process.pid}`);
  cluster.worker.kill();
});

if (cluster.isMaster) {
  for (let i = 0; i < noCpu; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
    cluster.fork();
  });
} else {
  app.listen(7000, () =>
    console.log(`App is runiing on port 7000 with process id ${process.pid}`)
  );
}

// app.listen(7000, () => console.log("App is runiing on port 7000"));
