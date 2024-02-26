console.log("Q:2");
let massage = "Hello Eric, would you like to learn some Python today?";
console.log(massage);


console.log("Q:3");
let str: string = "shaheer";

let upperCaseStr: string = str.toUpperCase();
console.log(upperCaseStr);

let lowerCaseStr: string = str.toLowerCase();
console.log(lowerCaseStr);

let titleCaseStr: string = toTitleCase(str);
console.log(titleCaseStr);

function toTitleCase(str: string): string {
    return str.replace(/\b\w/g, function (char) {
        return char.toUpperCase();
    });
}
console.log("Q:4");
const quote : string = "The source of all humour is not laughter, but sorrow.";
const author : string = "Mark Twain";
console.log(`"${quote}"\n- ${author}`);
console.log("Q:5");
const quote1 : string = "The source of all humour is not laughter, but sorrow.";
const Famous_person : string = "Mark Twain";
const message : string = (`"${quote1}"\n- ${Famous_person}`);
console.log(message);
console.log("Q:6");
const personNameWithWhitespace: string = "\t shaheer\nHassan   ";
console.log("Name with whitespace:", personNameWithWhitespace);

const trimmedName: string = personNameWithWhitespace.trim();
console.log("Trimmed name:", trimmedName);

console.log("Q:7");

const a : number = 5;
const b : number = 3;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);

console.log("Q:8");
//written by shaheer hassan 
// date 2\17\2024
// this program perform arthimatic operations

console.log(5+3);
console.log(8-2);
console.log(4*2);
console.log(16/2)

console.log("Q:9")
//written by shaheer hassan 
// date 2\17\2024
// this program print favoutite num as  output
const favourite : number = 7;
const massage1 : string = `My favourite number is ${favourite}`;
console.log(massage1);

console.log("Q:11")
let names : string[] = ["hassan", "usman", "anas"];

for (let index = 0; index < names.length; index++) {
    const element = names[index];
    console.log(element);
    
}

console.log("Q:12")
 let names1 : string[] = ["hassan", "usman", "anas"];

for (let index = 0; index < names1.length; index++) {
    const element = names1[index];
    console.log("hi! " , element);
    
}
console.log("Q:13")
let motorcycles : string[] = ["harley davidson", "kawasaki ninja", "honda 125"];

for (let index = 0; index < motorcycles.length; index++) {
    const element = motorcycles[index];
    console.log( "ma to honda hi la saan",element);
    
}

console.log("Q:14")

const invitees: string[] = [
    "Anas Qadri",
    "hassan khanzada",
    "Ahmar chaudhary"
];

function sendInvitations(invitees: string[]) {
    invitees.forEach(invitee => {
        console.log(`hey ${invitee} lets go for a dinner tonight `);
    } );

}

sendInvitations(invitees);

console.log("Q:15")
    
const GuestWhoCantMakeIt = invitees.shift();

console.log(`${GuestWhoCantMakeIt} cant make to dinner`);

const NewInvitee : string = "muhammad ashan";

invitees.push(NewInvitee);

sendInvitations(invitees);

console.log("Q:16");

let orginalinvitees : string[] = [
    "Anas Qadri",
    "hassan khanzada",
    "Ahmar chaudhary"
];

const newInvitees : string[] = [
    "usman rajput",
    "abrar arain",
    "saad khanzada"
];

orginalinvitees = orginalinvitees.concat(newInvitees);

sendInvitations(orginalinvitees);

console.log("Q:17");

const trimmedinvitees: string[] = orginalinvitees.slice(0, 2);

sendInvitations(trimmedinvitees);
console.log("Unfortunately, the new dinner table won't arrive in time, so I can only invite two people for dinner.\n");

while (orginalinvitees.length > 2){
    const removedinvitees : string | undefined = orginalinvitees.pop();
    if (removedinvitees !== undefined) {
        console.log(`Sorry ${removedinvitees}, I'm unable to invite you to dinner.`);
    }
}
console.log("Q:18");

let dreamdestination : string[] = [
    "mashad",
    "karbala",
    "najaf",
    "madina",
    "makkah"

];


console.log("Original order:", dreamdestination);


console.log("Alphabetical order:", [...dreamdestination].sort());


console.log("Original order (still intact):", dreamdestination);


console.log("Reverse alphabetical order:", [...dreamdestination].sort().reverse());

console.log("Original order (still intact):", dreamdestination);

dreamdestination.reverse();
console.log("Reversed order:", dreamdestination);


dreamdestination.reverse();
console.log("Back to original order:", dreamdestination);


dreamdestination.sort();
console.log("Sorted in alphabetical order:", dreamdestination);


dreamdestination.sort((a, b) => b.localeCompare(a));
console.log("Sorted in reverse alphabetical order:", dreamdestination);
 
console.log("Q:19");
function NumberOfPeopleInvited(invitees: string[]) {
    const numberOfInvitees: number = invitees.length;
    console.log(`You are inviting ${numberOfInvitees} people to dinner.`);
}

NumberOfPeopleInvited(invitees);

console.log("Q:20");
let favouriteplaces: string[] = [
    "mashad",
    "khum",
    "gadeer",
    "karbala",
    "najaf",
    "madina"
];

console.log("List of Fvourite places:");
favouriteplaces.forEach(favouriteplaces => {
    console.log(favouriteplaces);
});

console.log("Q:21");
type bikes = {
    make: string;
    model: string;
    year: number;
    engineSizeCC: number;
    color: string;
};


let bike1: bikes = {
    make: "Honda",
    model: "CBR600RR",
    year: 2022,
    engineSizeCC: 599,
    color: "Red"
};

let bike2: bikes = {
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
console.log("Engine Size (cc):",bike2.engineSizeCC);
console.log("Color:", bike2.color);

console.log("Q:22");
let shoes : string[] = ["loafers","joggers","sneakers"];
console.log(shoes[2]);
console.log(shoes[3]);

console.log("Q:23");
let num1: number = 5;
console.log("Test1 : Checking if a number is positive");
console.log("Prediction: The number 5 is positive.");

if (num1 > 0) {
    console.log("Result: The number is positive.");
} else if (num1 === 0) {
    console.log("Result: The number is zero.");
} else {
    console.log("Result: The number is negative.");
}
let num: number = 7;
console.log("Conditional Test 2: Is the number even or odd?");
console.log(`Number to test: ${num}`);
console.log("Prediction: I predict the result will be 'Odd' since 7 is an odd number.");

if (num % 2 === 0) {
    console.log("Result: Even");
} else {
    console.log("Result: Odd");
}
console.log("Q:23");
let car: string = 'buggati';

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

let str1: string = "hello";
let str2: string = "world";

console.log("Equality Test 1:", str1 == str2);  
console.log("Inequality Test 1:", str1 != str2);  

let upperCasestr: string = "HELLO";
console.log("Lowercase Test:", upperCaseStr.toLowerCase() === "hello"); 


let n1: number = 10;
let n2: number = 5;

console.log("Equality Test 2:", n1 == n2);  
console.log("Inequality Test 2:", n1 != n2); 
console.log("Greater than Test:", n1 > n2);  
console.log("Less than Test:", n1 < n2);  
console.log("Greater than or Equal Test:", n1 >= n2);  
console.log("Less than or Equal Test:", n1 <= n2);  


let x: number = 15;
let y: number = 20;
let z: number = 25;

console.log("And Operator Test 1:", x < y && y < z);  
console.log("And Operator Test 2:", x < y && y > z); 
console.log("Or Operator Test 1:", x < y || y > z);  
console.log("Or Operator Test 2:", x > y || y > z);  


let mobiles: string[] = [ "apple", "samsung", "oneplus"];

console.log("Array Inclusion Test:", mobiles.includes("samsung"));  


console.log("Array Exclusion Test:", !mobiles.includes("oppo"));  

console.log("Q:25");
let alien_color1: string = 'green';

if (alien_color1 === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}

if (alien_color1 === 'yellow') {
    console.log("Congratulations! You just earned 5 points.");

}
console.log("Q:26")
if (alien_color1 === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
} else {
    console.log("Congratulations! You just earned 10 points.");
}
if (alien_color1 === 'yellow') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
} else {
    console.log("Congratulations! You just earned 10 points.");
}
console.log("Q:27");
if (alien_color1 === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
} else if (alien_color1 === 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
} else if (alien_color1 === 'red') {
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
}
let alien_color2: string = 'yellow';

if (alien_color2 === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
} else if (alien_color2 === 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
} else if (alien_color2 === 'red') {
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
}
let alien_color3: string = 'red';

if (alien_color3 === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
} else if (alien_color3 === 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
} else if (alien_color3 === 'red') {
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
}
console.log("Q:28");
let age: number = 25;

if (age < 2) {
    console.log("The person is a baby.");
} else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
} else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
} else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
} else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
} else {
    console.log("The person is an elder.");
}
console.log("Q:29");
let favorite_fruits: string[] = ["apple", "banana", "orange"];

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
} else {
    console.log("You don't like kiwis!");
}

if (favorite_fruits.includes("grape")) {
    console.log("You really like grapes!");
} else {
    console.log("You don't like grapes!");
}
console.log("Q:30");
let usernames: string[] = ["admin", "anas", "hassan", "abrar", "usman"];

for (let username of usernames) {
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}
console.log("Q:31");
usernames = [];
if (usernames.length > 0) {
    for (let username of usernames) {
        if (username === "admin") {
            console.log("Hello admin ,what would you like to today? ");
        } else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
} else {
    console.log("We need to find some users!");
}
console.log("Q:32");
let current_users: string[] = ["anas", "hassan", "ashan", "ahmar", "shaheer"];
let new_users: string[] = ["anas", "qasim", "awais", "ANAS", "shaheer"];

for (let new_username of new_users) {
    
    let lowercase_new_username: string = new_username.toLowerCase();

    if (current_users.map(user => user.toLowerCase()).includes(lowercase_new_username)) {
        console.log(`Sorry, the username '${new_username}' is already taken. Please enter a new username.`);
    } else {
        console.log(`Congratulations! The username '${new_username}' is available.`);
    }
}
console.log("Q:33");
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let number of numbers) {
    let ordinalEnding: string;
    if (number === 1) {
        ordinalEnding = "st";
    } else if (number === 2) {
        ordinalEnding = "nd";
    } else if (number === 3) {
        ordinalEnding = "rd";
    } else {
        ordinalEnding = "th";
    }
    console.log(`${number}${ordinalEnding}`);
}
console.log("Q:34")

let favoritePizzas: string[] = ["Pepperoni", "Margherita", "Supreme"];


for (let pizza of favoritePizzas) {
    console.log(`I like ${pizza} pizza.`);
}


console.log("I enjoy trying different pizza toppings.");
console.log("Pizza is one of my favorite foods.");
console.log("I could eat pizza every day!");

console.log("Q:35");

let animals: string[] = ["Dog", "Cat", "Rabbit"];


console.log("Animals:");
for (let animal of animals) {
    console.log(animal);
}

console.log("\nStatements about each animal:");
for (let animal of animals) {
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
            console.log(`I don't have information about ${animal}.`);
    }
}

console.log("\nAny of these animals would make a great pet!");

console.log("Q:36")

function make_shirt(size: string, message: string): void {
    console.log(`Shirt Size: ${size}`);
    console.log(`Message: ${message}`);
}


make_shirt("medium", "rechrge in solitude");

 console.log("Q:37");
 function make1_shirt(size: string = "Large" , message : string = "i love typescript" ): void {
    console.log(`Shirt Size: ${size}`);
    console.log(`Message: ${message}`);
}
make1_shirt();

make_shirt("medium","");
 
make_shirt("small","i love typescript");

console.log("Q:38");
function describe_city(city: string, country: string = "Unknown"): void {
    console.log(`${city} is in ${country}.`);
}


describe_city("Karachi", "Pakistan");
describe_city("Paris", "France");
describe_city("New York");

console.log("Q:39");
function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}


let result1 = city_country("Lahore", "Pakistan");
let result2 = city_country("DEHLI", "India");
let result3 = city_country("muscat", "oman");


console.log(result1);
console.log(result2);
console.log(result3);

console.log("Q:40");

function make_album(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
    let album: { artist: string, title: string, tracks?: number } = {
        artist: artist,
        title: title
    };

    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    return album;
}


let album1 = make_album("Atif aslam", "Album 1");
let album2 = make_album("Nusrat fateh ali khan", "Album 2", 12); 
let album3 = make_album("Abida parveen", "Album 3");

console.log(album1);
console.log(album2);
console.log(album3);

console.log("Q:41");
function show_wizards(wizards: string[]): void {
    console.log("List of Wizards:");
    for (let wizard of wizards) {
        console.log(wizard);
    }
}

let wizards: string[] = ["Serverous snape ","Gerette Grindlewald", "Albus Percival Wulfric Brian Dumbledore"];

show_wizards(wizards);

console.log("Q:42");

function make1_great(wizards: string[]): void {
    for (let i = 0; i < wizards.length; i++) {
        wizards[i] = `the Great ${wizards[i]}`;
    }
}
make_great(wizards);
show_wizards(wizards);

console.log("Q:43");

function make_great(wizards: string[]): string[] {
    let great_wizards: string[] = [];

    for (let wizard of wizards) {
        great_wizards.push(`the Great ${wizard}`);
    }

    return great_wizards;
}
let great_wizards: string[] = make_great([...wizards]);

show_wizards(wizards);

show_wizards(great_wizards);

console.log("Q:44");

function makeSandwich(...items: string[]): void {
    console.log("Making sandwich with the following items:");
    for (let item of items) {
        console.log("- " + item);
    }
    console.log("Sandwich is ready!\n");
}

makeSandwich("Ham", "Cheese", "Lettuce", "Tomato");
makeSandwich("Turkey", "Bacon", "Avocado");
makeSandwich("Peanut Butter", "Jelly");

console.log("Q:45");

function carInfo(manufacturer: string, model: string, ...extras: [string, any][]): { [key: string]: any } {
    let car: { [key: string]: any } = {
        manufacturer: manufacturer,
        model: model
    };

    for (let extra of extras) {
        car[extra[0]] = extra[1];
    }

    return car;
}

let myCar = carInfo("Toyota", "Camry", ["color", "blue"], ["year", 2020], ["sunroof", true]);


console.log(myCar);

console.log("assignment is ready  for submission");
