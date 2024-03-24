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

// const calcTip = (billValue) => {
// 	if (billValue >= 50 && billValue <= 300) {
// 		return billValue * 0.15;
// 	} else {
// 		return billValue * 0.2;
// 	}
// };

// console.log(calcTip(100));

// let bills = [125, 555, 44];
// let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// let totals = [
// 	calcTip(bills[0]) + bills[0],
// 	calcTip(bills[1]) + bills[1],
// 	calcTip(bills[2]) + bills[2],
// ];

// CHALLENGE 4

const calcTip = function (bill) {
	return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
	const tip = calcTip(bills[i]);
	tips.push(tip);
	totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = function (arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		// sum = sum + arr[i];
		sum += arr[i];
	}
	return sum / arr.length;
};
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
