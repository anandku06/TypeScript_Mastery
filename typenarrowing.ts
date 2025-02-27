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

animalSound(new Dog())
animalSound(new Cat())

// intersection type guard

// made two type aliases
type Employee = {
    id : number
    name : string,
}

type Manager = {
    department : string,
    role : string
}

// combined the two to make a new type that has all the properties of the two types
type ManagerWithEmployeeInfo = Employee & Manager

// now the new type has all the properties of the two types
const manager : ManagerWithEmployeeInfo = {
    id : 1213,
    name : "John Doe",
    department : "IT",
    role : "Senior Tech Lead"
}

console.log(manager)
console.log(manager.id)
console.log(manager.name)
console.log(manager.department)
console.log(manager.role)