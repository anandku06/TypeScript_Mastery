// Type Guards
// define a union type
type myType = string | number
        
// example function with type guard
function exampleFunction(value : myType): void{
    // type guard using typeOf
    if(typeof value === "string"){
        // within this block, TS knows its string
        console.log(value.toUpperCase())
    }
    else{
        // within this block, TS knows that 'value' is a number
         console.log(value.toFixed(2))
    }
}

exampleFunction("hello")
exampleFunction(234)