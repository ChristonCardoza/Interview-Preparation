const { Readable, Writable, Transform, pipeline } = require("stream");

const readableStream = new Readable({
  read() {},
  highWaterMark: 2,
  objectMode: true,
});

readableStream.on("data", (chunck) => {
  console.log("Data coming: ", chunck);
  // writableStream.write(chunck);
});

console.log(readableStream.push("Welcome to DeadMan Zone"));
// console.log(readableStream.push({ author: "DeadMan" }));

const writableStream = new Writable({
  write(s) {
    console.log("Write: ", s.toString());
  },
});

// writableStream.write("Hello World");

const transformStream = new Transform({
  transform(chunk, encoding, callback) {
    transformStream.emit("error", new Error("Error in pipeline"));
    callback(null, chunk.toString().toUpperCase());
  },
});

pipeline(readableStream, transformStream, writableStream, (err) => {
  if (err) {
    console.log(err.message);
  }
});
