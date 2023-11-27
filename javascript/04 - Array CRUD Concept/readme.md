# Javascript Challenge

This challenge is part of free internship (Fullstack Engineer) offered by [CyberDude Networks Pvt. Ltd.](https://cyberdudenetworks.com) You can find all the source code and live links below.

## Array


### Javascript Code

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

// find - find the first matching condition
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

## References:

`https://youtu.be/7AIMdzNQtkY?si=4CCVBStWT1xl4kNz` Cyberdude -Array-primitive.",
[cyberdude-Array-primitive](`https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.youtube.com%2Fwatch%3Fv%3DWebG_D9-U80&psig=AOvVaw0Ogbg2x_RHHsrPzbpuraPV&ust=1701159112933000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNjGo9nd44IDFQAAAAAdAAAAABAD`)

## License

[MIT](https://choosealicense.com/licenses/mit/)