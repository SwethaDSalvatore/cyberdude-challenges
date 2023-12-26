// amt > 10k buy android mobile 
// amt > 60k buy iphone mobile 
// amt > 5k && <10k buy basic mobile
// else you can't afford mobile phone now


// let amt = 41;

// switch (true) {
//     case amt > 10 && amt < 60:
//         console.log("buy android mobile");
//         break;

//     case amt >= 60:
//         console.log("buy iphone mobile");
//         break;
//     case amt > 5 && amt <= 10:
//         console.log("buy basic mobile");
//         break;

//     default:
//         console.log("you can't afford mobile phone now");
//         break;
// }

const inputDateString = "26/12/2023 16:04";

// Parse the input date string
const inputDate = new Date(inputDateString);

// Format the date
const options = {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  hour12: true,
};

const formattedDate = new Intl.DateTimeFormat('en-US', options).format(inputDate);

console.log(formattedDate);