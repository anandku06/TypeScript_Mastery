export const person: {firstName: string, lastName: string, age: number} = {
    firstName : "Anand",
    lastName : "Kumar",
    age : 23
}
// here the object's properties are pre-defined and if the pre-defined properties mismatch in the declaration of that object it throws an error

console.log(`Name: ${person.firstName} ${person.lastName}, Age: ${person.age}`);

function printUser(): {name: string, age: number, location: string}{
    return {
        name : "Anand",
        age : 20,
        location : "India"
    }
}
// here defined a factory function that returns an object and the return annotation is declared 

console.log(printUser());
