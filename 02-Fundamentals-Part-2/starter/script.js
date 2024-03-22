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

function fruitProcessor(apples, oranges) {
	console.log(apples, oranges);
	const juice = `Juice with ${apples} apples and ${oranges} oranges`;
	return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

//Function declaration
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

//Arrow Function

const calcAge3 = (birthYear) => {
	return 2037 - birthYear;
};

const age3 = calcAge3(1991);
console.log(age3, "arrow function");

const yearsUntilRetirement = (year, name) => {
	const age = 2023 - year;
	return `${65 - age} is how many years ${name} has until retirement.`;
};

console.log(yearsUntilRetirement(1991, "Dan"));
