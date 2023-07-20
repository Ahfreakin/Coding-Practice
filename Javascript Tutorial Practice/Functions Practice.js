// This function performs a task such as displaying something.
function greet() {
    console.log('Hello World');
}

greet(); //This essentially just displays the result of the function which in this case would display "Hello World".

function greet(name) {  // "name" itself is only a "variable" that is visible within the function. In reality its a parameter and it is not identified or registered outside of the function.

    console.log('Hello' + name)

}
greet('John'); // This is called an argument, its a parameter that has an actual defined value.
greet('Mary'); // when checking console this should display "Hello John" and "Hello Mary".


function greet(name,lastName) {
    console.log('Hello' + name + '' + lastName); //Example of adding more than 1 parameter to a function.
}

// To check if it works we would write it out like this.

greet('John', 'Smith')
greet('Mary', 'Jane')

//Functions can also be used to calculate values.

function square(number) {

    return number * number
}

let number = square(2);
console.log(number); // This result should display 4.

// We could also write it out just as.

console.log(square(2));