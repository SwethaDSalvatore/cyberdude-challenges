// Array :

// creation:

let personCreation = ["Swetha", 24, true,
    { city: "Chennai", pinCode: 12345 },
    ["designing", "coding"],
    function () {
        "Hello there !!";
    }
];
console.log(personCreation);


//..............................................

// Read:
// console.log(personCreation[5]);

let arrayRead = [1, 2, 3, 4, 5];

// foreach- loop used to sequence....
// arrayRead.forEach(number => {
//    console.log(number);
// });

// map - used to read and modifiy like loop...
// let multiply = arrayRead.map((number) =>
//     number * number);
// console.log(multiply);

// filter...
// console.log(arrayRead.filter((number) =>
// number % 3 === 0));

// slice...
// console.log(arrayRead.slice(0,3));

// includes - output in boolean...
// console.log(arrayRead.includes(6));

// every - all to satisfy...
// console.log(arrayRead.every((number) =>
// number % 3 === 0));

// some - any one condition satisfied is enough...
// console.log(arrayRead.some((number) =>
// number % 3 === 0));

// find - find the first matching condition...
// console.log(arrayRead.find((number) =>
// number > 2));

// reduce...
// console.log(arrayRead.reduce((pv,cv) =>
// pv + cv));

// ................................................

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

// ..................................................

// Delete :

let arrayDelete = ["A", "B", "C", "D", "E"];

// empty....
// arrayDelete = [];
// console.log(arrayDelete);

// delete....
// delete arrayDelete[2];
// console.log(arrayDelete);

// ...................................................