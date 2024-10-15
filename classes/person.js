// Create a class Person that has the following:

//instance variables that include firstName, lastName, and age

class Person {
  constructor (firstName, lastName, age) {
    this.firstName = firstName,
    this.lastName = lastName,
    this.age = age
  }

  //an instance method called introduce that will introduce the person by using console.log with a string saying, "Hi, I'm <firstName> <lastName>, and I'm <age> years old.".
  introduce() {
    console.log( `Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`);
  }

//   a static method called introducePeople that will take in an array of Person instances.

// Have introducePeople throw an Error with a message of "introducePeople only takes an array as an argument." if the argument is not of type Array.

// Have introducePeople throw an Error with a message of "All items in array must be Person class instances." if any of the items in the array are not instances of the Person class.

// If no Errors are thrown then introducePeople should call introduce on each of the People instances in the input array.
  static introducePeople(people) {
     if(!Array.isArray(people)) {
      throw new Error("introducePeople only takes an array as an argument.")
     }
     for (let person of people) {
      if(!(person instanceof Person)) {
        throw new Error("All items in array must be Person class instances.")
      }
     }
     people.forEach(person => person.introduce());
  }

}
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}
