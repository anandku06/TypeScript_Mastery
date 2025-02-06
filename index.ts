type Person = {
    name : string;
};

const person: Person = {
    name : "John"
}; // here the annotation is Person class

console.log(person.name);

let num: number = 12; // annotation for numbers
let fName: string = "Anand"; // annotation for string
let isLoggedIn: boolean = true // annotation for boolean

// isLoggedIn = 12 // throws an error bcz assigning any other datatype

console.log(num)
console.log(fName)
console.log(isLoggedIn)