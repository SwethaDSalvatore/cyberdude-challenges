# Object - CRUD Concept (Javascript Challenge)
This challenge is part of free internship (Fullstack Engineer) offered by [CyberDude Networks Pvt. Ltd.](https://cyberdudenetworks.com) You can find all the source code and live links below.

> Task #3: Create a object about ur self with all datatype values. And try to manipulate it.

// Create

let myself = {
  firstName: "Swetha",
  lastName: "Ramesh",
  age: 24,
  isWorking: true,
  hobbies: ["designing", "coding", "reading"],
  address: {
    street: "Dubai main Road, cross Street",
    city: "Dubai",
    pinCode: 123456,
  },
  introduce: function () {
    console.log(`Hi, I'm ${this.firstName} ${this.lastName}. I'm ${this.age} years old.`);
  },
};

// console.log(myself);

// ................................
// Read

// console.log("Read about myself:");
// console.log("First Name:", myself.firstName);
// console.log("Last Name:", myself.lastName);
// console.log("Age:", myself.age);
// console.log("Is Working:", myself.isWorking);
// console.log("Hobbies:", myself.hobbies.join(", "));
// console.log("Address:", myself.address.street + ", " + myself.address.city + ", " + myself.address.pinCode);
// myself.introduce();

// console.log(`Read about myself:
// First Name: ${myself.firstName}
// age: ${myself.age}`)

// ................................
// Update

// console.log("Updating information about myself:");
// myself.age = 23;
// myself.hobbies.push("Cooking");
// myself.address.city = "Oslo, Norway 😉";

// console.log("Updated Age:", myself.age);
// console.log("Updated Hobbies:", myself.hobbies.join(", "));
// console.log("Updated City:", myself.address.city);


// ................................
// Delete

// console.log("Deleting information about myself:");
// // myself = []
// delete myself.isWorking;
// console.log(myself);

// ................................



## References:

https://youtu.be/WebG_D9-U80?si=PEoiSAS0NwjeW-5Z Cyberdude - JS object