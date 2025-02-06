let tech = "TypeScript"; // we don't specified the annotation here
// TS took the datatype by seeing the value of that variable

// tech = 123 // throws error as reassigning with changed datatype
let nu = 123 // here as well TS assigned the datatype without annotation

console.log(nu)
console.log(tech)
console.log(typeof tech)