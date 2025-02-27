export class Person{
    public firstName: string // made this properties public easy access
    private lastName: string // made this property private to limit its access
    protected age: number // made this protected to inherit it to another class

    constructor(first: string, last: string, age: number){
        this.firstName = first
        this.lastName = last
        this.age = age
    }
    // private or protected vars can only be accessed using methods
    getName(): string{
        return `${this.firstName} ${this.lastName} is ${this.age} years old.`
    }
}

// here the class Info inheritated properties from Person class and the protected var as well, but the private vars can't be inherited
class Info extends Person{
    email: string
    constructor(first: string, last: string, age: number, email: string){
        super(first, last, age)
        this.email = email
    }

    getInfo(): string{
        return `Name: ${this.firstName}, Age: ${this.age}`
    }
}

let p1 = new Person("Anand", "Kumar", 20)
let info1 = new Info("Anand", "Kumar", 20, "example.com")
console.log(p1);
console.log(p1.firstName) // this is allowed as the property are marked public
// console.log(p1.latsName) // this isn't allowed as this property are marked private; throws an error

console.log(p1.getName()); // private elements can be accessed using methods defined 

console.log(`${info1.getName()} and its email is: ${info1.email}`);
console.log(info1.getInfo()); 
// here as well age is not accessible bcz its protected but the derived class can accessed it 

