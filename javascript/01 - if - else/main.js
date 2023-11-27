// if else

// if the track is clear go straight || take right

const track = "block"

if (track === "clear") {
    console.log("go straight");
}
else {
    console.log("take right")
};





// fizz buzz
// 1,2,fizz,4, buzz,7,8,fizz,10,11,fizz,13,14,fizzbuzz
// 3 - fizz
// 5- buzz
// 5&3 = fizzbuzz

const count = 16;

function fizzBuzz() {
    if ((count % 3 === 0) && (count % 5 === 0)) {
        console.log("fizzBuzz");
    }
    else if (count % 3 === 0) {
        console.log("fizz");
    }
    else if (count % 5 === 0) {
        console.log("buzz");
    }
    else {
        console.log(count);
    }

}
fizzBuzz();
