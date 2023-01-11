// Iteration 1: Names and Input

const hacker1 = "Istvan";
const hacker2 = "insert random name";
console.log("The driver's name is " + hacker1);
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  } else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
  }

// Iteration 3: Loops

let hacker1print = "";

for (let i = 0; i < hacker1.length; i++) {
  hacker1print += hacker1[i].toUpperCase() + " ";
}

console.log(hacker1print);

let hacker2print = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  hacker2print += (hacker2[i] + " ");
}

console.log(hacker2print);