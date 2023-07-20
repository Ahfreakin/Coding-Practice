let name = 'Vlad';
let age = 19;
// {} are identifiers for an object. Basically use this to bundle several things such as variables to help with referencing 1 thing instead of several things.

let person = {
name: 'Vlad',
age: 19,
 greet: function(message){
    console.log('Hello '+ message);
 }

} // The variables assigned in line 1 and 2 are no longer needed now, we can delete them.

//2 ways to access the "name" property/variable
//1. Dot notation as shown below

person.name = 'John'; //this is an example of changing the name within the object. 
console.log(person.name); // This is a way of accessing the name within the object.

// 2.  Bracket Notation
person['name'] = 'Mary'; //This can be read using dot notation or bracket notation. When I say read that means the console.log command.

person.greet('Vlad');