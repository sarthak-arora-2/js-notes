// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        // break;  // If we remove break then all the below expressions of this case will be executed except default case.
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}