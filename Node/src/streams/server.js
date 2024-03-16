const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url !== "/") {
    return res.end();
  }

  //   const file = fs.readFileSync(`${__dirname}/sample.txt`);
  //   return res.end(file);

  // const readableStream = fs.createReadStream(`${__dirname}/sample.txt`);
  // readableStream.pipe(res);

  // const file = fs.readFileSync(`${__dirname}/sample.txt`);
  // fs.writeFileSync(`${__dirname}/output.txt`, file);
  // res.end();

  // const readStream = fs.createReadStream(`${__dirname}/sample.txt`);
  // const writeStream = fs.createWriteStream(`${__dirname}/output.txt`);

  // readStream.on("data", (chunk) => {
  //   console.log("Chunk", chunk.toString());
  //   writeStream.write(chunk);
  // });Vestibulum

  // const sampleFileStream = fs.createReadStream(`${__dirname}/sample.txt`);
  // const outputWritaleStream = fs.createWriteStream(`${__dirname}/output.txt`);

  //   sampleFileStream.on("data", (chunk) => {
  //   console.log("Chunk", chunk.toString());

  //   const upperCaseString = chunk.toString().toUpperCase();
  //   const finalString = upperCaseString.replaceAll(/Vestibulum/gi, "cool");

  //   outputWritaleStream.write(finalString);
  // });

  const readableOutputStream = fs.createReadStream(`${__dirname}/output.txt`);
  readableOutputStream.pipe(res);
});

const PORT = 5700;

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
