// normal function -> param : type => that's how the annotations are given
function addOne(num : number) {
    return num + 1
}

console.log(addOne(5))

// arrow function

const multiplyTwo = (num : number) => num * 2

console.log(multiplyTwo(32))

// default params

function greet(name : string = "World"){
    console.log(`Hello ${name}!!`)
}
// the param name has a default value, if name not given as args then the default value is taken

greet()
greet("Ayush") // here given args then the default param is overwritten


// return annotation

function sum(x: number, y: number): number{
    return x + y
}
// just after the parenthesis, specified the return type
console.log(sum(123, 75))

const addTwoNums = (x: number, y: number): number => x + y
// just after the parenthesis, specified the return type

console.log(addTwoNums(1234, 98))