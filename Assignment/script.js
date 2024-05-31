// a variable called carName, assign the value Volvo to it.
let carName = "Volvo";




//  declare three variables with the following names and values on one single line,:
var firstName = "John", lastName = "Doe", age = 35;




// So What Will Be The 1st Variable Name, Then 2nd Variable Values & 
// 3rd Variable Name And Values Both! 
let firstName = "John";
let lastName = "Doe";
let age = 35;




// Use the correct assignment operator that will 
// result in x being 50 (same as x = x * y). 
x = 10;
y = 5;
x *= y; // what will be the value of x ? answar is 50 ;
console.log(x);



// Useing comments to describe the correct data type of the following variables:
let length = 16; // data type : number ;
let lastName = "Johnson"; // data type : string;

const x = {
    firstName: "John",
    lastName: "Doe"
};    // data type :Object


// Execute the function named myFunction.

function myFunction() {
    alert("Hello World!");
}
myFunction(); //function is called 
// call the function and see the output 




// Create an object called person with name = John, age = 50, Then,
// access the object to alert("John is 50").

let person = {
    name: "John",
    age: 50,
}
alert(person.name + " is " + person.age);




// 1. Alert the number of items in an array, using the correct Array property: 

const cars = ["Volvo", "Jeep", "Mercedes"];
let arrayLength = cars.length;
alert("Array length is " + arrayLength)




// 2. Change the first item of Brand to "Ford".
const Brand = ["Volvo", "Jeep", "Mercedes"];

Brand.splice(0, 1, "Ford");
console.log(Brand)


// Math related problem 

// 1. Use the correct Math method to create a random number.
let random = Math.random();
console.log(random);




// 2. Use the correct Math method to return the largest number of 10 and 20.
let num1 = 10;
let num2 = 20;
let largestNum = Math.max(num1, num2)
console.log(largestNum)


// 3. Use the correct Math method to get the square root of 9.
let rootOfNine = Math.sqrt(9);
console.log(rootOfNine);



// 1. Choose the correct comparison operator to alert true, when x is greater than y. 
x = 10;
y = 5;
alert(x > y ? true : false)






// 2. Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, otherwise alert "Old enough".
var inputAge = prompt("Hello Enter your age: ")
alert(inputAge <= 17 ? "Too young" : "Old enough")










