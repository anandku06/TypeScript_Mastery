// interface for any variable
interface Computer {
  name: string;
  RAM: number;
  HDD: number;
}

// this variable implements this interface and now it should have the three parameters the Computer has
const compEx: Computer = {
  name: "i9",
  RAM: 16,
  HDD: 100,
};

console.log(compEx);

interface Movie {
  readonly name: string;
  ratings: number;
  genre?: string;
}

const movie1: Movie = {
  name: "Mission Impossible 4",
  ratings: 9.1,
  genre: "action",
};

// movie1.name = "John Wick 3" // can't change bcz of readonly property

const movie2: Movie = {
  name: "OverFlow",
  ratings: 8.9,
}; // due to optional property genre can be neglected

console.log(movie1);
console.log(movie2);

// interfaces regarding functions
interface MathOperation {
  (x: number, y: number): number;
}

const add: MathOperation = (a, b) => a + b;
const subtract: MathOperation = (a, b) => a - b;

// console.log(add("12", "34")) // if given params other than number then error is thrown
console.log(add(12, 34));
console.log(subtract(12, 34));

// interfaces for methods
export interface Person {
  fName: string;
  lName: string;
  age: number;
  sayHello(): void;
}

function greet(person: Person) {
  console.log(`Hello, ${person.fName} ${person.lName}`);
  person.sayHello();
}

const John: Person = {
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

interface MovieDetails {
  readonly name: string;
  ratings: number;
  printMovieInfo(
    name: string,
    price: number,
    ratings?: number
  ): string | number;
}

interface MovieGenre extends MovieDetails {
  genre: string;
}
// here the MovieGenre inherits the properties of the MovieDetails interface

const movie3: MovieGenre = {
  name: "Final Destination 2",
  ratings: 9.1,
  printMovieInfo(name, price, ratings) {
    return `Movie Name : ${name}, Price : ${price}, Ratings : ${ratings}`;
  },
  // these properties for the parent interface and then the inheriting interface
  genre: "Thriller",
};
// here both the interfaces are satisfied

const res = movie3.printMovieInfo("John Wick 2", 129.99)

console.log(res)