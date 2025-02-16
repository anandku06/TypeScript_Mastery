// interface for any variable
interface Computer{
    name : string
    RAM : number
    HDD : number
}

// this variable implements this interface and now it should have the three parameters the Computer has
const compEx: Computer = {
    name : "i9",
    RAM : 16,
    HDD : 100
}

console.log(compEx)