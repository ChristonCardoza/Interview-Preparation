function sum(a) {
  return function (b) {
    if (b) {
      return sum(a + b);
    } else {
      return a;
    }
  };
}

console.log(sum(1)()); //  1
console.log(sum(1)(2)()); // 3
console.log(sum(1)(2)(3)()); //  6
console.log(sum(1)(2)(3)(4)()); //  10
console.log(sum(1)(2)(3)(4)(5)()); // 15
