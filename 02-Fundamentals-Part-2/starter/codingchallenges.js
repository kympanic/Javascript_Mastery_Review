"use strict";

// CHALLENGE 1

function calcAverage(num1, num2, num3) {
	return (num1 + num2 + num3) / 3;
}

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = function (avgDolphins, avgKoalas) {
	if (avgDolphins > avgKoalas) {
		console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
	} else if (avgKoalas > avgDolphins) {
		console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
	} else {
		console.log("No team wins...");
	}
};

checkWinner(scoreDolphins, scoreKoalas);

// CHALLENGE 2

const calcTip = (billValue) => {
	if (billValue >= 50 && billValue <= 300) {
		return billValue * 0.15;
	} else {
		return billValue * 0.2;
	}
};

console.log(calcTip(100));

let bills = [125, 555, 44];
let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
let totals = [
	calcTip(bills[0]) + bills[0],
	calcTip(bills[1]) + bills[1],
	calcTip(bills[2]) + bills[2],
];
