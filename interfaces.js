"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// this variable implements this interface and now it should have the three parameters the Computer has
const compEx = {
    name: "i9",
    RAM: 16,
    HDD: 100,
};
console.log(compEx);
const movie1 = {
    name: "Mission Impossible 4",
    ratings: 9.1,
    genre: "action",
};
// movie1.name = "John Wick 3" // can't change bcz of readonly property
const movie2 = {
    name: "OverFlow",
    ratings: 8.9,
}; // due to optional property genre can be neglected
console.log(movie1);
console.log(movie2);
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
// console.log(add("12", "34")) // if given params other than number then error is thrown
console.log(add(12, 34));
console.log(subtract(12, 34));
function greet(person) {
    console.log(`Hello, ${person.fName} ${person.lName}`);
    person.sayHello();
}
const John = {
    fName: "John",
    lName: "Wick",
    age: 30,
    sayHello() {
        console.log("Hi there!!");
    },
};
greet(John);
console.log(John);
John.sayHello();
// here the MovieGenre inherits the properties of the MovieDetails interface
const movie3 = {
    name: "Final Destination 2",
    ratings: 9.1,
    printMovieInfo(name, price, ratings) {
        return `Movie Name : ${name}, Price : ${price}, Ratings : ${ratings}`;
    },
    // these properties for the parent interface and then the inheriting interface
    genre: "Thriller",
};
// here both the interfaces are satisfied
const res = movie3.printMovieInfo("John Wick 2", 129.99);
console.log(res);
class Car {
    constructor(name) {
        this.name = name;
    }
    start() {
        console.log(`${this.name} is starting!!`);
    }
    stop() {
        console.log(`${this.name} is stopped now!!`);
    }
}
const car1 = new Car("BMW");
car1.start();
car1.stop();
// now the Car1 interface takes all the properties that are defined two times in it
const myCar = {
    brand: "BMW",
    model: "M4 Competition",
    start() {
        console.log(`${this.model} is starting!!`);
    },
    stop() {
        console.log(`${this.model} is stopped!!`);
    }
};
myCar.start();
myCar.stop();
