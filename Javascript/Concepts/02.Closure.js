var global = 0;
function outer() {
  var v = 0;
  let l = 0;
  const c = 0;

  global = 50;

  return function inner() {
    v = v + 1;
    l = l + 1;
    let local = 0;
    local = local + 1;
    global = global + 1;

    console.log(`Value of v: ${v}`);
    console.log(`Value of l: ${l}`);
    console.log(`Value of c: ${c}`);
    console.log(`Value of local: ${local}`);
    console.log(`Value of global: ${global}`);
  };
}

global = 100;

const inner = outer();

global = 500;

for (let i = 0; i < 10; i++) {
  inner();
}

global = 20;
