const hacker1 = "Istvan";
const hacker2 = "Zsofia";
console.log("The driver's name is " + hacker1);
console.log("The navigator's name is " + hacker2);

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

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

function compare(hacker1, hacker2) {
  if (hacker1 === hacker2) {
    return "What?! You both have the same name?";
  }

  if (hacker1 > hacker2) {
    return "Yo, the navigator goes first definitely.";
  }

  return "The driver's name goes first.";
}

console.log(compare(hacker1, hacker2));

//