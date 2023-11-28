// Array :

// Reference:

// Read :

const items = [
    { id: 1, name: "fruits", isgood: true },
    { id: 2, name: "vegetables", isgood: false },
    { id: 3, name: "groceries", isgood: true },
];
// console.log(items[2]);

// let allGood = items.some(function (value) {
//     return value.isgood === true;
// });
// console.log("all items are good", allGood);


// Update:

// const items2 = [
//     { id: 4, name: "sanitary", isgood: true },
//     { id: 5, name: "cosmetics", isgood: true },
// ];

// let allItems = items.concat(items2);
// console.log(allItems);


// Delete:

// delete items[1];
// console.log(items);


// primitive :

// Read :
const arrayRead = [10, 20, 30, 40, 50, 60];

// foreach - loop used to sequence....
// arrayRead.forEach(number => {
//     console.log(number * number);
// });

// map - used to read and modifiy like loop...
// let multiply = arrayRead.map((number) =>
//     number * number);
// console.log(multiply);

// filter...
// console.log(arrayRead.filter((number) =>
//     number % 3 === 0));

// find - find the first matching condition...
// console.log(arrayRead.find((value) =>
//     value % 3 === 0));

// slice...
// console.log(arrayRead.slice(0, 3));

// includes - output in boolean...
// console.log(arrayRead.includes(40));

// every - all to satisfy...
// console.log(arrayRead.every((number) =>
//     number % 3 === 0));

// some - any one condition satisfied is enough...
// console.log(arrayRead.some((number) =>
//     number % 3 === 0));

// reduce...
// console.log(arrayRead.reduce((pv, cv) =>
//     pv + cv));

// ....................................

// Update :

let arrayUpdate = ["sam", "swetha", "swathi", "alvin", "alice", "jo"];

// push - push at end....
// arrayUpdate.push("rando");
// console.log(arrayUpdate);

// unshift - shift to start...
// arrayUpdate.unshift("rando");
// console.log(arrayUpdate);

// splice - specific place adding....
// arrayUpdate.splice(2,0,"april","may")
// console.log(arrayUpdate);

// concat - concatenate ....
// let arrayUpdate2 = ["raj","jaya","viji","dhanam"];
// console.log(arrayUpdate.concat(arrayUpdate2));

// reverse - reverse the value...
// arrayUpdate.reverse();
// console.log(arrayUpdate);

// sort in ascending order
// arrayUpdate.sort();
// console.log(arrayUpdate);


// ....................................

// Delete :

let arrayDelete = ["fire", "water", "air", "land", "sky"];

// empty....
// arrayDelete = [];
// console.log(arrayDelete);

// delete....
// delete arrayDelete[2];
// console.log(arrayDelete);

// ....................................