const person = {
  name: "Kevin",
  //function inside of an object is called a METHOD
  walk() {
    //THIS returns reference to the current OBJECT (person)
    console.log(this);
  },
  talk() {},
};

// console.log(person.name);
// console.log(person['name']);
console.log(person.walk());

// THIS Keyword

const walk = person.walk;
console.log(walk);
