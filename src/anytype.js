"use strict";
let color = "crimson";
console.log(color);
color = true;
color = 123;
color = {
    name: "red"
};
// here the color var can take any data despite of its type, TS not at all type checking the data
