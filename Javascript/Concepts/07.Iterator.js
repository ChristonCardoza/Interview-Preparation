function makeRangeIterator(start, end, step) {
  let nextIndex = start;
  let iterationCount = 0;

  const rangeIterator = {
    next() {
      let result;

      if (nextIndex < end) {
        result = { value: nextIndex, done: false };
        nextIndex = nextIndex + step;
        iterationCount++;

        return result;
      }

      return { value: iterationCount, done: true };
    },
  };

  return rangeIterator;
}

const itr = makeRangeIterator(1, 10, 2);

let result = itr.next();

while (!result.done) {
  console.log(result.value); // 1, 3, 5, 7, 9
  result = itr.next();
}
