

const colors = ["yellow", "blue", "red", "orange"]

// While loop
console.log("While loop:");
var i = 0;
while (i <= colors.length - 1) {
    console.log(colors[i]);
    i++;
}

// For loop 
console.log("For loop:");
for (let i = 0; i <= colors.length - 1; i++) {
    console.log(colors[i]);
}

// Array forEach
console.log("Array forEach:");
colors.forEach(colors => console.log(colors))

// 1. How many lines does my for loop and my while loop take?
// While loop - 5 lines
// For loop - 3 lines
// 2. How many lines does my forEach method take?
// Array forEach - 1 line
// 3. What other advantages do using an array method have over a for or a while loop? For example, which method do you find easier to read? Why?
// It's easier to read. Almost as if normal English. Less parameters to give and therefore less parameters to mess up/have a typo 
// 4. Can you use an array method on an object? The answer is no. Suppose you have an object with 45 properties. Try to find out (use Google) how you can still console.log those 45 properties with a loop: Looping through the properties of an object. Try this piece of code and use an object with 5 properties for it. Are you iterating now?
// See below.

console.log("for in:");
const color = {
    first: "yellow",
    second: "blue",
    third: "orange",
    fourth: "green",
    fifth: "brown"
}

for (const property in color) {
    console.log(property, ":", color[property])
}
