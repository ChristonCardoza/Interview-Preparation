const obj = {
  name: "Christon",
  lname: "Cardoza",
  Address: {
    city: "Manglore",
  },
  score: [20, 30, 40, [70, 90]],
};

//---------------------------------------------------------------------------------------------------------------------------------------
//                                                              StructuredClone
//---------------------------------------------------------------------------------------------------------------------------------------

const copy1 = structuredClone(obj);

copy1.Address.city = "Kemmanu";
obj.score = [100];

console.log(obj); // { name: 'Christon', laname: 'Cardoza', Address: { city: 'Manglore'}, score: [ 100 ]}
console.log(copy1); // { name: 'Christon', laname: 'Cardoza', Address: { city: 'Kemmanu'}, score: [20, 30, 40, [70, 90]]}

//---------------------------------------------------------------------------------------------------------------------------------------
//                                                              JSON.parse & JSON.stringify
//---------------------------------------------------------------------------------------------------------------------------------------

const copy2 = JSON.parse(JSON.stringify(obj));

copy2.Address.city = "Udupi";
obj.score = [20, 30, 40, [70]];

console.log(obj); // { name: 'Christon', laname: 'Cardoza', Address: { city: 'Manglore'}, score: [20, 30, 40, [70]]}
console.log(copy2); // { name: 'Christon', laname: 'Cardoza', Address: { city: 'Udupi'}, score: [100]}

//---------------------------------------------------------------------------------------------------------------------------------------
//                                                              Custom
//---------------------------------------------------------------------------------------------------------------------------------------

const deepCopy = (input) => {
  if (typeof input != "object") {
    return input;
  }

  const copy = Array.isArray(input) ? [] : {};

  for (const key in input) {
    const value = input[key];
    copy[key] = deepCopy(value);
  }

  return copy;
};

const copy3 = deepCopy(obj);

copy3.Address.city = "Manipal";
obj.score = [20, 30, 40, [70], [4, [10]]];

console.log(obj); // { name: 'Christon', laname: 'Cardoza', Address: { city: 'Manglore'}, score: [20, 30, 40, [70], [4, [10]]]}
console.log(copy3); // { name: 'Christon', laname: 'Cardoza', Address: { city: 'Manipal'}, score: [20, 30, 40, [70]]}
