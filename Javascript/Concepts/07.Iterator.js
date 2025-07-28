// An iterator is any object that implements the next() method, which returns:
// { value: any, done: boolean }

console.log("-------------------1. Range Itator-------------------------")
function makeRangeIterator(start, end, step) {
  let nextIndex = start;

  const rangeIterator = {
    next() {
      let result;

      if (nextIndex < end) {
        result = { value: nextIndex, done: false };
        nextIndex = nextIndex + step;

        return result;
      }

      return { done: true };
    },
  };

  return rangeIterator;
}

const itr = makeRangeIterator(1, 10, 2);

let result1 = itr.next();

while (!result1.done) {
  console.log(result1.value); // 1, 3, 5, 7, 9
  result1 = itr.next();
}

console.log("-------------------2. Array Itator-------------------------")

function arrayIterator(arr) {

  let nextIndex = 0;

  return {
    next() {
      if (nextIndex < arr.length) {
        return { value: arr[nextIndex++], done: false };
      } else {
        return { done: true };
      }
    }
  }
}

const array = [1, 2, 3, 4, 5];
const arrayItr = arrayIterator(array);

let result2 = arrayItr.next();
while(!result2.done) {
  console.log(result2.value)
  result2 = arrayItr.next()
}
