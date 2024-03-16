function* numbersGenerator(start) {
  let i = start;

  while (true) {
    yield i++;
    yield i++;
  }
}

let start = 0;
let end = 10;
const gen = numbersGenerator(start);

while (end >= 0) {
  console.log(gen.next());
  end--;
}

// function* makeRangeIterator(start = 0, end = Infinity, step = 1) {
//   let iterationCount = 0;
//   for (let i = start; i < end; i += step) {
//     iterationCount++;
//     yield i;
//   }
//   return iterationCount;
// }

// let start = 0;
// let end = 10;
// let step = 2
// const ranger = makeRangeIterator(start, end, step)

// while (end>=0) {
//   console.log(ranger.next());
//   end --;
// }
// const data = ranger.next()
// console.log(data)
