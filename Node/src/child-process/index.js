console.log(0);

setTimeout(() => console.log(1), 2000);

setTimeout(() => console.log(2), 3000);

setTimeout(() => console.log(3), 200);

setTimeout(() => console.log(4), 0);

setTimeout(() => console.log(5));

console.log(6);

const promise1 = new Promise((resolve, reject) => {
  console.log(7);

  setTimeout(() => {
    console.log(8);
    resolve(9);
  }, 200);
});

const promise2 = new Promise((resolve, reject) => {
  console.log(10);

  resolve(
    setTimeout(() => {
      console.log(11);
    }, 200)
  );
});

promise1.then((data) => console.log(data));

promise2.then((data) => console.log(data));

const arr = [2, 2, 1, 3, 2, 4, 1];

const result = [];

const target = 5;

for (let i = 0; i < arr.length; i++) {
  let curSum = 0;
  const curArr = [];

  for (let j = i; j < arr.length; j++) {
    curSum += arr[j];
    curArr.push(arr[j]);

    if (curSum === target) {
      result.push(curArr);
      break;
    }
  }
}

console.log(result);

const obj = {
  name: "christon",
  address: {
    city: "udupi",
  },
};

function deep(input) {
  if (typeof input !== "object") {
    return input;
  }

  let copy = Array.isArray(input) ? [] : {};

  for (let key in input) {
    let value = input[key];

    copy[key] = deep(value);
  }

  return copy;
}

const copy = deep(obj);

console.log(obj);
console.log(copy);

copy.address.city = "Manglore";

console.log(obj);
console.log(copy);

const a = [1, 3, [23, [343]]];
a.flat(Infinity);
