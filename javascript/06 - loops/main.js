
// let employees = [
//   { id: 1, name: "Tony Stark", department: "IT", salary: 70000 },
//   { id: 2, name: "Nick Fury", department: "HR", salary: 50000 },
//   { id: 3, name: "Captain America", department: "Finance", salary: 60000 },
//   { id: 4, name: "Thor", department: "Marketing", salary: 55000 }
// ];

// for
// for (let i = 0; i < employees.length; i++) {
//   console.log(`Employee ID: ${employees[i].id}, Name: ${employees[i].name}, Department: ${employees[i].department}, Salary: ${employees[i].salary}`);
// }

// // forEach
// employees.forEach(employee => {
//   console.log(`${employee.name} - ${employee.department} - ${employee.salary}`);
// });

// Using for-of loop
// for (const employee of employees) {
//   console.log(`${employee.name} - ${employee.department} - ${employee.salary}`);
// }

// Using for-in loop (not recommended for arrays)
// for (const index in employees) {
//   console.log(`${employees[index].name} - ${employees[index].department} - ${employees[index].salary}`);
// }

// Using while loop
// Let counter = 1;
// while (counter <= 15) {
//   if (counter % 3 === 0 && counter % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (counter % 3 === 0) {
//     console.log("Fizz");
//   } else if (counter % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(counter);
//   }
//   counter++;
// }

// Using do - while loop
// let index = 1;
// do {
//   if (index % 3 === 0 && index % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (index % 3 === 0) {
//     console.log("Fizz");
//   } else if (index % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(index);
//   }
//   index++;
// } while (index <= 20);

// let bottle = 100
// while (bottle >= 1) {
//   console.log(bottle);
//   bottle--;
//   console.log(bottle);
// }

// let count = 4
// while (count >= 1) {

//   console.log(count);
//   count--;
// }
function fibonacciGenerator(n) {
  let output = []
  if (n === 1) {
    output = [0];
  }
  else if (n === 2) {
    output = [0, 1];
  }
  else {
    output = [0, 1]
  }

  for (let i = 2; i < n; i++) {
    const element = array[index];
  }

  return output;
}
console.log(fibonacciGenerator(5));