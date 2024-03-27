var data = process.argv.slice(2);

// send msg to parent process
function sayHello(names) {
  names.forEach((name) => process.send(`Greeting ${name}`));
}

// recieve process from child
process.on("message", (userData) => {
  console.dir(userData, { color: true });
});

// console.log(data);

sayHello(data);
