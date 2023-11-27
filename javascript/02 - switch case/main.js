// amt > 10k buy android mobile 
// amt > 60k buy iphone mobile 
// amt > 5k && <10k buy basic mobile
// else you can't afford mobile phone now


let amt = 41;

switch (true) {
    case amt > 10 && amt < 60:
        console.log("buy android mobile");
        break;

    case amt >= 60:
        console.log("buy iphone mobile");
        break;
    case amt > 5 && amt <= 10:
        console.log("buy basic mobile");
        break;

    default:
        console.log("you can't afford mobile phone now");
        break;
}