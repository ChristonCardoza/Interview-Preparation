// Array Creations

console.log('---------------------------Array Creations---------------------------')
console.log('\n')
const arr1 = [1, 2, 3, 4, 5];
console.log('arr1: ',arr1)

const arr2 = new Array(1, 2, 3, 4, 5)
console.log('arr2: ',arr2)

const arr3 = Array.of(1, 2, 3, 4, 5)
console.log('arr3: ',arr3)

const arr4 = Array.from("12345", x => Number(x))
console.log('arr4: ',arr4)

const arr5 = Array.from({ length: 5 }, (_, i) => i + 1)
console.log('arr5: ',arr5)

const arr6 = new Array(5).fill(1)
console.log('arr6: ',arr6)
let arr = [1, 2, 3, 4, 5];
console.log('\n')

console.log('---------------------------Mutation---------------------------')
console.log('\n')
// Push(...items)
arr.push(6)
console.log('arr.push(6): ',arr) // [1, 2, 3, 4, 5, 6]
arr.push(4,5)
console.log('arr.push(4,5): ',arr) // [1, 2, 3, 4, 5, 6, 4, 5]
console.log('\n')

// Pop()
arr.pop()
console.log('arr.pop(): ',arr) // [1, 2, 3, 4, 5, 6, 4]
console.log('\n')

// Shift()
arr.shift()
console.log('arr.shift(): ',arr) // [2, 3, 4, 5, 6, 4]
console.log('\n')

// Unshift(...items))
arr.unshift(0,1)
console.log('arr.unshift(0,1): ',arr) // [0, 1, 2, 3, 4, 5, 6, 4]
console.log('\n')


// Splice (targeIdx, deleteCount, ...itemsToInsert)
arr = [1, 2, 3, 4, 5];
console.log('arr: ',arr) // [1, 2, 3, 4, 5]
arr.splice(2) // delete from index 2
console.log('arr.splice(2): ',arr) // [1, 2]
arr = [1, 2, 3, 4, 5];
arr.splice(1,2) // delete 2 elements from index 1
console.log('arr.splice(1,2): ',arr) // [1, 4, 5]
arr = [1, 2, 3, 4, 5];
arr.splice(1,0,'a','b') // delete 0 elements from index 1 and insert 'a' and 'b'
console.log('arr.splice(1,0,"a","b"): ',arr) // [1, 'a', 'b', 2, 3, 4, 5]
arr = [1, 2, 3, 4, 5];
arr.splice(1,2,'a','b') // replace
console.log('arr.splice(1,2,"a","b"): ',arr)
console.log('\n')


// Sort(compareFunction)
arr = [10, 1, 5, 0]
console.log('arr: ',arr) // [10, 1, 5, 0]
arr.sort() // lexical order
console.log('arr.sort(): ',arr)
arr.sort((a,b) => a - b) // ascending order
console.log('arr.sort((a,b) => a - b): ',arr) // [0, 1, 5, 10]
arr.sort((a,b) => b - a) // descending order
console.log('arr.sort((a,b) => b - a): ',arr) // [10, 5, 1, 0]
console.log('\n')

// Reverse()
arr = [1, 2, 3];
console.log('arr: ',arr) // [1, 2, 3]
arr.reverse();
console.log('arr.reverse(): ',arr)
console.log('\n')

// Fill(value, start, end)
arr = [1, 2, 3, 4];
console.log('arr: ',arr) // [1, 2, 3, 4]
arr.fill(0, 1, 3);
console.log('arr.fill(0, 1, 3): ',arr)
console.log('\n')

console.log('---------------------------Non-Mutation---------------------------')
console.log('\n')

// Concat(...items)
const a = [1, 2];
const b = [3, 4];
let result = a.concat(b, [5, 6]);
console.log('a: ',a)
console.log('b: ',a)
console.log('a.concat(b, [5, 6]): ',result);  // [1, 2, 3, 4, 5, 6]
console.log('\n')

// Slice(start, end)
arr = [10, 20, 30, 40, 50];
console.log('arr: ',arr)
console.log('arr.slice(1, 3): ',arr.slice(1, 3));   // [20, 30]
console.log('arr.slice(-2): ',arr.slice(-2));    // [40, 50]
console.log('arr.slice(): ',arr.slice());      // full copy: [10, 20, 30, 40, 50]
console.log('\n')

// Includes(value, fromIdx)
arr = ['a', 'b', 'c'];
console.log('arr: ',arr)
console.log('arr.includes(b): ',arr.includes('b'));         // true
console.log('arr.includes(b, 2): ',arr.includes('b', 2));   // false
console.log('\n')

// IndexOf(value, fromIdx)
arr = [1, 2, 3, 2];
console.log('arr: ',arr)
console.log('arr.indexOf(2): ',arr.indexOf(2));        // 1
console.log('arr.indexOf(2, 2): ',arr.indexOf(2, 2));     // 3
console.log('arr.indexOf(5): ',arr.indexOf(5));        // -1
console.log('\n')

// LastIndexOf(value, fromIdx)
arr = [1, 2, 3, 2];
console.log('arr: ',arr)
console.log('arr.lastIndexOf(2): ',arr.lastIndexOf(2));   // 3
console.log('arr.lastIndexOf(2, 2): ',arr.lastIndexOf(2, 2));     // 1
console.log('\n')

// Join(separator)
arr = ['a', 'b', 'c'];
console.log('arr: ',arr)
console.log("arr.join(): ",arr.join());       // "a,b,c"
console.log('arr.join(-): ',arr.join('-'));    // "a-b-c"
console.log('\n')

console.log('---------------------------Search & Test ---------------------------')
console.log('\n')

// Find(callback)
let nums = [10, 20, 30, 40];
console.log('nums: ',nums)
result = nums.find((n) => n > 25);
console.log('nums.find((n) => n > 25): ',result); // 30
console.log('\n')

// FindIndex(callback)
nums = [5, 15, 25, 35];
console.log('nums: ',nums)
const index = nums.findIndex((n) => n > 20);
console.log('nums.findIndex((n) => n > 20): ',index); // 2
console.log('\n')

// Some(callback)
arr = [1, 3, 5, 8];
console.log('arr: ',arr)
console.log('arr.some(n => n % 2 === 0): ',arr.some(n => n % 2 === 0)); // true
console.log('arr.some(n => n > 10): ',arr.some(n => n > 10));     // false
console.log('\n')

// Every(callback)
arr = [2, 4, 6];
console.log('arr: ',arr)
console.log('arr.every(n => n % 2 === 0): ',arr.every(n => n % 2 === 0)); // true
console.log('arr.every(n => n > 3): ',arr.every(n => n > 3));       // false
console.log('\n')

// Filter(callback)
nums = [10, 25, 30, 45];
console.log('nums: ',nums)
const even = nums.filter(n => n % 2 === 0);
console.log('nums.filter(n => n % 2 === 0): ',even); // [10, 30]
console.log('\n')

// Flat(depth)
arr = [1, [2, [3, [4]]]];
console.log('arr: ',arr)
console.log('arr.flat(): ', arr.flat());       // [1, 2, [3, [4]]]
console.log('arr.flat(2)',arr.flat(2));      // [1, 2, 3, [4]]
console.log('arr.flat(Infinity)',arr.flat(Infinity)); // fully flattened
console.log('\n')

// ForEach(callback)
arr = [1, 2, 3];
console.log('arr: ',arr)
arr.forEach((val, idx) => {
  console.log(`Index ${idx}: ${val}`);
});
console.log('\n')

// Map(callback)
arr = [1, 2, 3];
console.log('arr: ',arr)
const doubled = arr.map(x => x*2);
console.log('arr.map(x => x * 2): ',doubled)
console.log('\n')

// Reduce(callback, initialValue)
arr = [1, 2, 3];
console.log('arr: ',arr)
const sum = arr.reduce((acc, val) => acc + val, 0);
console.log('arr.reduce((acc, val) => acc + val, 0): ',sum)

const grouped = ['apple', 'banana', 'avocado'].reduce((acc, fruit) => {
  const letter = fruit[0];
  acc[letter] = acc[letter] || [];
  acc[letter].push(fruit);
  return acc;
}, {});
console.log(grouped);
console.log('\n')

// ReduceRight(callback, initialValue)
arr = ['a', 'b', 'c']
console.log('arr: ',arr)
const reversedConcat = arr.reduceRight((acc, val) => acc + val);
console.log('arr.reduceRight((acc, val) => acc + val): ',reversedConcat); // 'cba'
