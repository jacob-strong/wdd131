let age = 33;
let name = "jacob";

// log prints to console
console.log(age);

age = 34;

console.log(age);

const eyeColor = "brown";
let favoriteColor = "blue";

// scope is where variables can be referenced
if (age == 34) {
    console.log(name);

    // inner scope variable
    favoriteColor = "red";
}

// favoriteColor is not accessible outside of the if statement
// unless it is declared outside
console.log(favoriteColor);

document.querySelector("h1").style.color = favoriteColor;