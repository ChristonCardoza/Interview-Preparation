const { produce } = require("immer");

const a = {
  someObj: {
    anothObj: {
      somemore: {
        d: "enough"
      }
    }
  },
  name: "chrsiton"
};

const b = {
  ...a,
  someObj: {
    ...a.someObj,
    anothObj: {
      ...a.someObj.anothObj,
      somemore: {
        ...a.someObj.anothObj.somemore,
        d: "newValue"
      }
    }
  }
};

const c = produce(a, (draft) => {
  draft.someObj.anothObj.somemore.d = "myLatest";
  draft.someObj.anothObj.somemore.e = "neValue";
});

const d = produce(a, (draft) => {
  draft.someObj.anothObj.somemore.d = "dbale";
  draft.someObj.anothObj.somemore.e = "dlfaf";
});
console.log("a:", JSON.stringify(a));
console.log("b:", JSON.stringify(b));
console.log("c:", JSON.stringify(c));
console.log("d:", JSON.stringify(d));
