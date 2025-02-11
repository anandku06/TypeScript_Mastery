type Civilian = {
    name : string,
    age : number,
    location : string
}
// here a new type is defined User

const printUserInfo = (person : Civilian) => {
    return `Name: ${person.name} & Age: ${person.age} & Location: ${person.location}`
}
// using the new User type here as args here and returning that type's attributes

console.log(printUserInfo({name : "Anand", location : "India", age : 21}))