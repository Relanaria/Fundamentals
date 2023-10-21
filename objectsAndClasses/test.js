// We can create an object with an object literal

let person = { name: "Peter", age: 20, height: 183 };

//We can define an empty object and add properties later

let person1 = {};
person1.name = "Peter";
person1.age = 20;
person1.hairColor = "black";
person["lastName"] = "Parker";

//

function objectPerson(firstname, lastname, age1) {
  let personInfo = {};

  personInfo.firstName = firstname;
  personInfo.lastName = lastname;
  personInfo.age = age1;

  return personInfo;
}

console.log(objectPerson("Dobri", "Yordanov", 24));

// Functions within a JavaScript object are called methods

let person2 = {
  sayHello: function () {
    console.log("Hi, guys");
  },
};

let person3 = {
  sayHello() {
    console.log("Hi, guys");
  },
};

// We can add a method to an already defined object

let person4 = { name: "Peter", age: 20 };
person4.sayHello = () => console.log("Hi, guys");

//▪ Get array of all property names (keys)

let cat = {
  name: "Tom",
  age: 5,
};

Object.keys(cat); // ['name', 'age']

// ▪ Get array with of all property values

Object.values(cat); // ['Tom', 5]

// Get and array of all properties as key-value tuples

Object.entries(cat); // [['name', 'Tom'], ['age', 5]]

let obj = { name: "Peter", age: "18", grade: "5.50" };
for (let key of Object.keys(obj)) {
  console.log(`${key}: ${obj[key]}`);
}

//  ${obj[key]} Returns the value of the property

function cityProblem(obj) {
  let entries = Object.entries(obj);
  for (let [key, value] of entries) {
    console.log(`${key} -> ${value}`);
  }
}

// JSON Methods

let personalInfo = {
  name: "Ivan",
  age: 25,
  grades: {
    Math: [2.5, 3.5],
    Chemistry: [4.5],
  },
};

let text = JSON.stringify(personalInfo);

console.log(text);

let obj1 = JSON.parse(text);

console.log(obj1);

function objConvertion(json) {
  let newObj = JSON.parse(json);
  let entries = Object.entries(newObj);

  for (const [key, value] of entries) {
    console.log(`${key}: ${value}`);
  }
}

function jsonConvertion(name, lastName, hairColor) {
  let personInfo = {
    name,
    lastName,
    hairColor,
  };

  console.log(JSON.stringify(personInfo));
}
