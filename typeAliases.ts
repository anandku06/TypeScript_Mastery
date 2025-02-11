type User = {
    name : string,
    age : number,
    location : string
}
// here a new type is defined User

const printUserInfo = (user : User) => {
    return `Name: ${user.name} & Age: ${user.age} & Location: ${user.location}`
}
// using the new User type here as args here and returning that type's attributes

console.log(printUserInfo({name : "Anand", location : "India", age : 21}))