function mulBy2(num) {
  return num * 2;
}

function callMul(data, fn) {
  let result = [];

  for (let i = 0; i < data.length; i++) {
    result.push(fn(data[i]));
  }

  console.log(result);
}

callMul([1, 2, 3, 4, 5], mulBy2); // [ 2, 4, 6, 8, 10 ]
