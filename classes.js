"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
// here a class Person is made and the parameters used are also declared with the annotations
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
exports.Person = Person;
// making an object of the class
var man = new Person("Anand", 20);
console.log(man);
// man.age = 24 // gives an error; can't be modified
