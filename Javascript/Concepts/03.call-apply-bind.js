const person = {
  name: "Christon",
  fullname: function (city, state) {
    console.log(`${this.name} ${city}  ${state}`);
  },
};

const person1 = {
  name: "Cardoza",
};

// Call
person.fullname.call(person, "kemmannu", "Manglore"); // Christon kemmannu  Manglore
person.fullname.call(person1, "Udupi", "Karnataka"); // Cardoza Udupi  Karnataka

// Apply
person.fullname.apply(person, ["kemmannu", "Manglore"]); // Christon kemmannu  Manglore
person.fullname.apply(person1, ["Udupi", "Karnataka"]); // Cardoza Udupi  Karnataka

// Bind
const b1 = person.fullname.bind(person);
b1("kemmannu", "Manglore"); //  Christon kemmannu  Manglore
const b2 = person.fullname.bind(person1);
b2("Udupi", "Karnataka"); //  Cardoza Udupi  Karnataka
