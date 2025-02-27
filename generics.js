"use strict";
// without generics, we have to specify each parameters datatype and return value of functions
Object.defineProperty(exports, "__esModule", { value: true });
exports.num = void 0;
function printNumberTrad(item, defaultValue) {
    return [item, defaultValue];
}
exports.num = printNumberTrad(3, 450); // only takes number values as specified in the function definition
console.log(exports.num);
// or using any keyword -> not recommended
function printNumberAny(item, defaultValue) {
    return [item, defaultValue];
}
console.log(printNumberAny("234", 65));
// with generics, we only specify the generic for all the datatypes and during defining it we specify the datatype
function printNumberGen(item, defaultValue) {
    return [item, defaultValue];
}
// here we defined the type parameter, which will take the required datatype to be used to call this function
console.log(printNumberGen("Hello", "World")); // here in place of the type parameter use your preferred type
console.log(printNumberGen(23, 45)); // for number
console.log(printNumberGen(true, false)); // for boolean
console.log(printNumberGen({ name: "Tom", breed: "Labrador" }, { name: "Orgy", breed: "Dalmatian" }));
// one more example -> took an object and returning the keys and it's value randomly
// obj: { [key: string]: T } -> this annotation tells that the parameter obj have keys dynamic in nature and the values are of generic type T
function getRandomKeyValuePair(obj) {
    var keys = Object.keys(obj);
    var randKey = keys[Math.floor(Math.random() * keys.length)];
    return { key: randKey, value: obj[randKey] };
}
var fruits = { a: "apple", b: "banana", c: "cherry" };
console.log(getRandomKeyValuePair(fruits)); // outputs the random keys and it's 
var numObj = { one: 1, two: 2, three: 3 };
console.log(getRandomKeyValuePair(numObj));
// using generics to make a single function of filtering for all types of array 
function filterArray(array, condition) {
    return array.filter(function (item) { return condition(item); });
}
var numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var evenNumArray = filterArray(numArray, function (no) { return no % 2 === 0; });
console.log(evenNumArray);
var stringArr = ["apple", "banana", "cherry", "date"];
var stringWords = filterArray(stringArr, function (str) { return str.length < 5; });
console.log(stringWords);
var fruitArray = [
    { name: "apple", color: "red" },
    { name: "banana", color: "yellow" },
    { name: "cherry", color: "red" },
];
var redFruits = filterArray(fruitArray, function (item) { return item.color === "red"; });
console.log(redFruits);
// now two types of generics together
function reversePair(value1, value2) {
    return [value2, value1];
}
var revPairs = reversePair(234, "Hello");
console.log(revPairs);
// Generic classes
var Box = /** @class */ (function () {
    function Box(initalContent) {
        this.content = initalContent;
    }
    Box.prototype.getContent = function () {
        return this.content;
    };
    Box.prototype.setContent = function (newContent) {
        this.content = newContent;
    };
    return Box;
}());
var stringBox = new Box("Hello, TypeScript");
console.log(stringBox.getContent());
stringBox.setContent("NO TypeScript!!");
console.log(stringBox.getContent());
