type User = {
    name : string,
    readonly age : number, // making this property readonly, so that it can't be modified 
    location? : string // now this property is optional, user can choose whether he wants to give this detail or not
}

const newUser : User = {
    name : "Anand",
    age : 21,
} // here location is not given

const newUser1 : User = {
    name : "Ayush",
    age : 22,
    location : "Azamgarh, UP"
} // here location is given 

console.log(`Name : ${newUser.name} <=> Location : ${newUser.location}`) // here this will give undefined but not throws error

newUser1.age = 25; // error is thrown as trying to modify the read-only property

console.log(`Name : ${newUser1.name} <=> Location : ${newUser1.location}`)