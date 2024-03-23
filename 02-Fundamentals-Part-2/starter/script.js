"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive");

function logger() {
	console.log("My name is Jonas");
}

// Calling,running or invoking the function
logger();

// function fruitProcessor(apples, oranges) {
// 	console.log(apples, oranges);
// 	const juice = `Juice with ${apples} apples and ${oranges} oranges`;
// 	return juice;
// }

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

// *************  DECLARATIONS AND EXPRESSIONS *************

// Function declaration
function calcAge1(birthYear) {
	return 2024 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

//  Function expression
const calcAge2 = function (birthYear) {
	return 2024 - birthYear;
};

const age2 = calcAge2(1991);
console.log(age2);

// THE DIFFERENCE BETWEN DECLARATION AND EXPRESSION IS THAT IN DECLARATION YOU CAN
//  DECLARE VARIABLES THAT USE THE FUNCTION BEFORE IT IS DECLARED

// *************  ARROW FUNCTIONS  *************
const calcAge3 = (birthYear) => {
	return 2037 - birthYear;
};
const yearsUntilRetirement = (year, name) => {
	const age = 2023 - year;
	return `${65 - age} is how many years ${name} has until retirement.`;
};

// *************  FUNCTIONS CALLING OTHER FUNCTIONS  *************

function cutFruit(fruit) {
	return fruit * 4;
}

function fruitProcessor(apples, oranges) {
	const applePieces = cutFruit(apples);
	const orangePieces = cutFruit(oranges);
	const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
	return juice;
}

console.log(fruitProcessor(3, 2));

// *************  ARROW METHODS(BASIC)  *************

const friends = ["Michael", "Steven", "Peter"];
friends.push("Jay");
// front of the array
friends.unshift("John");
//remove at back
friends.pop();
//remove at front
friends.shift();
//returns index of value
friends.indexOf("Steven");
//return true or false if in array
friends.includes("Steven");

// *************  OBJECT METHODS  *************
