// here a class Person is made and the parameters used are also declared with the annotations
export class Person{
    // now these properties can't be modified
    readonly name : string 
    readonly age : number 

    constructor(name: string, age: number){
        this.name = name
        this.age = age
    }
}

// making an object of the class
const man = new Person("Anand", 20)
console.log(man);

// man.age = 24 // gives an error; can't be modified