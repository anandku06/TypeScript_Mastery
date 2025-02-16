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

interface Movie{
    readonly name : string
    ratings : number
    genre? : string
}

const movie1 : Movie = {
    name : "Mission Impossible 4",
    ratings : 9.1,
    genre : "action"
}

// movie1.name = "John Wick 3" // can't change bcz of readonly property

const movie2 : Movie = {
    name : "OverFlow",
    ratings : 8.9
} // due to optional property genre can be neglected

console.log(movie1)
console.log(movie2)