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
