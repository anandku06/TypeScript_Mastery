// Type Guards
// define a union type
type myType = string | number;

// example function with type guard
function exampleFunction(value: myType): void {
  // type guard using typeOf
  if (typeof value === "string") {
    // within this block, TS knows its string
    console.log(value.toUpperCase());
  } else {
    // within this block, TS knows that 'value' is a number
    console.log(value.toFixed(2));
  }
}

exampleFunction("hello");
exampleFunction(234);

// instanceof operator

// declared two classes here, One is Dog and another is Cat
class Dog {
  bark(): void {
    console.log("Woof WOOF");
  }
}

class Cat {
  meow(): void {
    console.log("MEOW MEOW");
  }
}

// here using the instanceof operator to check the animal object is which class instance and according to that calling thier respective functions
function animalSound(animal: Dog | Cat) : void{
    if(animal instanceof Dog){
        animal.bark()
    }
    else{
        animal.meow()
    }
}
