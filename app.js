var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
console.log("Q:2");
var massage = "Hello Eric, would you like to learn some Python today?";
console.log(massage);
console.log("Q:3");
var str = "shaheer";
var upperCaseStr = str.toUpperCase();
console.log(upperCaseStr);
var lowerCaseStr = str.toLowerCase();
console.log(lowerCaseStr);
var titleCaseStr = toTitleCase(str);
console.log(titleCaseStr);
function toTitleCase(str) {
    return str.replace(/\b\w/g, function (char) {
        return char.toUpperCase();
    });
}
console.log("Q:4");
var quote = "The source of all humour is not laughter, but sorrow.";
var author = "Mark Twain";
console.log("\"".concat(quote, "\"\n- ").concat(author));
console.log("Q:5");
var quote1 = "The source of all humour is not laughter, but sorrow.";
var Famous_person = "Mark Twain";
var message = ("\"".concat(quote1, "\"\n- ").concat(Famous_person));
console.log(message);
console.log("Q:6");
var personNameWithWhitespace = "\t shaheer\nHassan   ";
console.log("Name with whitespace:", personNameWithWhitespace);
var trimmedName = personNameWithWhitespace.trim();
console.log("Trimmed name:", trimmedName);
console.log("Q:7");
var a = 5;
var b = 3;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log("Q:8");
//written by shaheer hassan 
// date 2\17\2024
// this program perform arthimatic operations
console.log(5 + 3);
console.log(8 - 2);
console.log(4 * 2);
console.log(16 / 2);
console.log("Q:9");
//written by shaheer hassan 
// date 2\17\2024
// this program print favoutite num as  output
var favourite = 7;
var massage1 = "My favourite number is ".concat(favourite);
console.log(massage1);
console.log("Q:11");
var names = ["hassan", "usman", "anas"];
for (var index = 0; index < names.length; index++) {
    var element = names[index];
    console.log(element);
}
console.log("Q:12");
var names1 = ["hassan", "usman", "anas"];
for (var index = 0; index < names1.length; index++) {
    var element = names1[index];
    console.log("hi! ", element);
}
console.log("Q:13");
var motorcycles = ["harley davidson", "kawasaki ninja", "honda 125"];
for (var index = 0; index < motorcycles.length; index++) {
    var element = motorcycles[index];
    console.log("ma to honda hi la saan", element);
}
console.log("Q:14");
var invitees = [
    "Anas Qadri",
    "hassan khanzada",
    "Ahmar chaudhary"
];
function sendInvitations(invitees) {
    invitees.forEach(function (invitee) {
        console.log("hey ".concat(invitee, " lets go for a dinner tonight "));
    });
}
sendInvitations(invitees);
console.log("Q:15");
var GuestWhoCantMakeIt = invitees.shift();
console.log("".concat(GuestWhoCantMakeIt, " cant make to dinner"));
var NewInvitee = "muhammad ashan";
invitees.push(NewInvitee);
sendInvitations(invitees);
console.log("Q:16");
var orginalinvitees = [
    "Anas Qadri",
    "hassan khanzada",
    "Ahmar chaudhary"
];
var newInvitees = [
    "usman rajput",
    "abrar arain",
    "saad khanzada"
];
orginalinvitees = orginalinvitees.concat(newInvitees);
sendInvitations(orginalinvitees);
console.log("Q:17");
var trimmedinvitees = orginalinvitees.slice(0, 2);
sendInvitations(trimmedinvitees);
console.log("Unfortunately, the new dinner table won't arrive in time, so I can only invite two people for dinner.\n");
while (orginalinvitees.length > 2) {
    var removedinvitees = orginalinvitees.pop();
    if (removedinvitees !== undefined) {
        console.log("Sorry ".concat(removedinvitees, ", I'm unable to invite you to dinner."));
    }
}
console.log("Q:18");
var dreamdestination = [
    "mashad",
    "karbala",
    "najaf",
    "madina",
    "makkah"
];
console.log("Original order:", dreamdestination);
console.log("Alphabetical order:", __spreadArray([], dreamdestination, true).sort());
console.log("Original order (still intact):", dreamdestination);
console.log("Reverse alphabetical order:", __spreadArray([], dreamdestination, true).sort().reverse());
console.log("Original order (still intact):", dreamdestination);
dreamdestination.reverse();
console.log("Reversed order:", dreamdestination);
dreamdestination.reverse();
console.log("Back to original order:", dreamdestination);
dreamdestination.sort();
console.log("Sorted in alphabetical order:", dreamdestination);
dreamdestination.sort(function (a, b) { return b.localeCompare(a); });
console.log("Sorted in reverse alphabetical order:", dreamdestination);
console.log("Q:19");
function NumberOfPeopleInvited(invitees) {
    var numberOfInvitees = invitees.length;
    console.log("You are inviting ".concat(numberOfInvitees, " people to dinner."));
}
NumberOfPeopleInvited(invitees);
console.log("Q:20");
var favouriteplaces = [
    "mashad",
    "khum",
    "gadeer",
    "karbala",
    "najaf",
    "madina"
];
console.log("List of Fvourite places:");
favouriteplaces.forEach(function (favouriteplaces) {
    console.log(favouriteplaces);
});
console.log("Q:21");
var bike1 = {
    make: "Honda",
    model: "CBR600RR",
    year: 2022,
    engineSizeCC: 599,
    color: "Red"
};
var bike2 = {
    make: "Yamaha",
    model: "YZF-R6",
    year: 2021,
    engineSizeCC: 599,
    color: "Blue"
};
console.log("Information about bikes:");
console.log("bikes 1:");
console.log("Make:", bike1.make);
console.log("Model:", bike1.model);
console.log("Year:", bike1.year);
console.log("Engine Size (cc):", bike1.engineSizeCC);
console.log("Color:", bike1.color);
console.log();
console.log("Motorcycle 2:");
console.log("Make:", bike2.make);
console.log("Model:", bike2.model);
console.log("Year:", bike2.year);
console.log("Engine Size (cc):", bike2.engineSizeCC);
console.log("Color:", bike2.color);
console.log("Q:22");
var shoes = ["loafers", "joggers", "sneakers"];
console.log(shoes[2]);
console.log(shoes[3]);
console.log("Q:23");
var num1 = 5;
console.log("Test1 : Checking if a number is positive");
console.log("Prediction: The number 5 is positive.");
if (num1 > 0) {
    console.log("Result: The number is positive.");
}
else if (num1 === 0) {
    console.log("Result: The number is zero.");
}
else {
    console.log("Result: The number is negative.");
}
var num = 7;
console.log("Conditional Test 2: Is the number even or odd?");
console.log("Number to test: ".concat(num));
console.log("Prediction: I predict the result will be 'Odd' since 7 is an odd number.");
if (num % 2 === 0) {
    console.log("Result: Even");
}
else {
    console.log("Result: Odd");
}
console.log("Q:23");
var car = 'buggati';
console.log("Conditional Test 1: Is car == 'buggati'? I predict True.");
console.log(car == 'buggati');
console.log("Conditional Test 2: Is car == 'toyota'? I predict False.");
console.log(car == 'toyota');
console.log("Conditional Test 3: Is car != 'ford'? I predict True.");
console.log(car != 'ford');
console.log("Conditional Test 4: Is car === 'buggati'? I predict True.");
console.log(car === 'buggati');
console.log("Conditional Test 5: Is car !== 'Buggati'? I predict True.");
console.log(car !== 'Buggati');
console.log("Conditional Test 6: Is car.length < 10? I predict True.");
console.log(car.length < 10);
console.log("Conditional Test 7: Is car.length >= 5? I predict True.");
console.log(car.length >= 5);
console.log("Conditional Test 8: Is car.length === 6? I predict False.");
console.log(car.length === 6);
console.log("Conditional Test 9: Is car.startsWith('bug')? I predict True.");
console.log(car.startsWith('bug'));
console.log("Conditional Test 10: Is car.includes('tti')? I predict True.");
console.log(car.includes('tti'));
console.log("Q:24");
var str1 = "hello";
var str2 = "world";
console.log("Equality Test 1:", str1 == str2);
console.log("Inequality Test 1:", str1 != str2);
var upperCasestr = "HELLO";
console.log("Lowercase Test:", upperCaseStr.toLowerCase() === "hello");
var n1 = 10;
var n2 = 5;
console.log("Equality Test 2:", n1 == n2);
console.log("Inequality Test 2:", n1 != n2);
console.log("Greater than Test:", n1 > n2);
console.log("Less than Test:", n1 < n2);
console.log("Greater than or Equal Test:", n1 >= n2);
console.log("Less than or Equal Test:", n1 <= n2);
var x = 15;
var y = 20;
var z = 25;
console.log("And Operator Test 1:", x < y && y < z);
console.log("And Operator Test 2:", x < y && y > z);
console.log("Or Operator Test 1:", x < y || y > z);
console.log("Or Operator Test 2:", x > y || y > z);
var mobiles = ["apple", "samsung", "oneplus"];
console.log("Array Inclusion Test:", mobiles.includes("samsung"));
console.log("Array Exclusion Test:", !mobiles.includes("oppo"));
console.log("Q:25");
var alien_color1 = 'green';
if (alien_color1 === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}
if (alien_color1 === 'yellow') {
    console.log("Congratulations! You just earned 5 points.");
}
console.log("Q:26");
if (alien_color1 === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
else {
    console.log("Congratulations! You just earned 10 points.");
}
if (alien_color1 === 'yellow') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
else {
    console.log("Congratulations! You just earned 10 points.");
}
console.log("Q:27");
if (alien_color1 === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
else if (alien_color1 === 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
}
else if (alien_color1 === 'red') {
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
}
var alien_color2 = 'yellow';
if (alien_color2 === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
else if (alien_color2 === 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
}
else if (alien_color2 === 'red') {
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
}
var alien_color3 = 'red';
if (alien_color3 === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
else if (alien_color3 === 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
}
else if (alien_color3 === 'red') {
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
}
console.log("Q:28");
var age = 25;
if (age < 2) {
    console.log("The person is a baby.");
}
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
}
else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
console.log("Q:29");
var favorite_fruits = ["apple", "banana", "orange"];
if (favorite_fruits.includes("apple")) {
    console.log("You really like apples!");
}
if (favorite_fruits.includes("banana")) {
    console.log("You really like bananas!");
}
if (favorite_fruits.includes("orange")) {
    console.log("You really like oranges!");
}
if (favorite_fruits.includes("kiwi")) {
    console.log("You really like kiwis!");
}
else {
    console.log("You don't like kiwis!");
}
if (favorite_fruits.includes("grape")) {
    console.log("You really like grapes!");
}
else {
    console.log("You don't like grapes!");
}
console.log("Q:30");
var usernames = ["admin", "anas", "hassan", "abrar", "usman"];
for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
    var username = usernames_1[_i];
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(username, ", thank you for logging in again."));
    }
}
console.log("Q:31");
usernames = [];
if (usernames.length > 0) {
    for (var _a = 0, usernames_2 = usernames; _a < usernames_2.length; _a++) {
        var username = usernames_2[_a];
        if (username === "admin") {
            console.log("Hello admin ,what would you like to today? ");
        }
        else {
            console.log("Hello ".concat(username, ", thank you for logging in again."));
        }
    }
}
else {
    console.log("We need to find some users!");
}
console.log("Q:32");
var current_users = ["anas", "hassan", "ashan", "ahmar", "shaheer"];
var new_users = ["anas", "qasim", "awais", "ANAS", "shaheer"];
for (var _b = 0, new_users_1 = new_users; _b < new_users_1.length; _b++) {
    var new_username = new_users_1[_b];
    var lowercase_new_username = new_username.toLowerCase();
    if (current_users.map(function (user) { return user.toLowerCase(); }).includes(lowercase_new_username)) {
        console.log("Sorry, the username '".concat(new_username, "' is already taken. Please enter a new username."));
    }
    else {
        console.log("Congratulations! The username '".concat(new_username, "' is available."));
    }
}
console.log("Q:33");
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _c = 0, numbers_1 = numbers; _c < numbers_1.length; _c++) {
    var number = numbers_1[_c];
    var ordinalEnding = void 0;
    if (number === 1) {
        ordinalEnding = "st";
    }
    else if (number === 2) {
        ordinalEnding = "nd";
    }
    else if (number === 3) {
        ordinalEnding = "rd";
    }
    else {
        ordinalEnding = "th";
    }
    console.log("".concat(number).concat(ordinalEnding));
}
console.log("Q:34");
var favoritePizzas = ["Pepperoni", "Margherita", "Supreme"];
for (var _d = 0, favoritePizzas_1 = favoritePizzas; _d < favoritePizzas_1.length; _d++) {
    var pizza = favoritePizzas_1[_d];
    console.log("I like ".concat(pizza, " pizza."));
}
console.log("I enjoy trying different pizza toppings.");
console.log("Pizza is one of my favorite foods.");
console.log("I could eat pizza every day!");
console.log("Q:35");
var animals = ["Dog", "Cat", "Rabbit"];
console.log("Animals:");
for (var _e = 0, animals_1 = animals; _e < animals_1.length; _e++) {
    var animal = animals_1[_e];
    console.log(animal);
}
console.log("\nStatements about each animal:");
for (var _f = 0, animals_2 = animals; _f < animals_2.length; _f++) {
    var animal = animals_2[_f];
    switch (animal) {
        case "Dog":
            console.log("A dog would make a great pet.");
            break;
        case "Cat":
            console.log("A cat can be an affectionate companion.");
            break;
        case "Rabbit":
            console.log("A rabbit is a cute and cuddly pet.");
            break;
        default:
            console.log("I don't have information about ".concat(animal, "."));
    }
}
console.log("\nAny of these animals would make a great pet!");
console.log("Q:36");
function make_shirt(size, message) {
    console.log("Shirt Size: ".concat(size));
    console.log("Message: ".concat(message));
}
make_shirt("medium", "rechrge in solitude");
console.log("Q:37");
function make1_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "i love typescript"; }
    console.log("Shirt Size: ".concat(size));
    console.log("Message: ".concat(message));
}
make1_shirt();
make_shirt("medium", "");
make_shirt("small", "i love typescript");
console.log("Q:38");
function describe_city(city, country) {
    if (country === void 0) { country = "Unknown"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
describe_city("Karachi", "Pakistan");
describe_city("Paris", "France");
describe_city("New York");
console.log("Q:39");
function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
var result1 = city_country("Lahore", "Pakistan");
var result2 = city_country("DEHLI", "India");
var result3 = city_country("muscat", "oman");
console.log(result1);
console.log(result2);
console.log(result3);
console.log("Q:40");
function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_album("Atif aslam", "Album 1");
var album2 = make_album("Nusrat fateh ali khan", "Album 2", 12);
var album3 = make_album("Abida parveen", "Album 3");
console.log(album1);
console.log(album2);
console.log(album3);
console.log("Q:41");
function show_wizards(wizards) {
    console.log("List of Wizards:");
    for (var _i = 0, wizards_1 = wizards; _i < wizards_1.length; _i++) {
        var wizard = wizards_1[_i];
        console.log(wizard);
    }
}
var wizards = ["Serverous snape ", "Gerette Grindlewald", "Albus Percival Wulfric Brian Dumbledore"];
show_wizards(wizards);
console.log("Q:42");
function make1_great(wizards) {
    for (var i = 0; i < wizards.length; i++) {
        wizards[i] = "the Great ".concat(wizards[i]);
    }
}
make_great(wizards);
show_wizards(wizards);
console.log("Q:43");
function make_great(wizards) {
    var great_wizards = [];
    for (var _i = 0, wizards_2 = wizards; _i < wizards_2.length; _i++) {
        var wizard = wizards_2[_i];
        great_wizards.push("the Great ".concat(wizard));
    }
    return great_wizards;
}
var great_wizards = make_great(__spreadArray([], wizards, true));
show_wizards(wizards);
show_wizards(great_wizards);
console.log("Q:44");
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making sandwich with the following items:");
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        console.log("- " + item);
    }
    console.log("Sandwich is ready!\n");
}
makeSandwich("Ham", "Cheese", "Lettuce", "Tomato");
makeSandwich("Turkey", "Bacon", "Avocado");
makeSandwich("Peanut Butter", "Jelly");
console.log("Q:45");
function carInfo(manufacturer, model) {
    var extras = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        extras[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    for (var _a = 0, extras_1 = extras; _a < extras_1.length; _a++) {
        var extra = extras_1[_a];
        car[extra[0]] = extra[1];
    }
    return car;
}
var myCar = carInfo("Toyota", "Camry", ["color", "blue"], ["year", 2020], ["sunroof", true]);
console.log(myCar);
console.log("assignment is ready  for submission");
