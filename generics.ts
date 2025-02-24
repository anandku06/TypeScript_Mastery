// without generics, we have to specify each parameters datatype and return value of functions

function printNumber(item: number, defaultValue: number): [number, number]{
    return [item, defaultValue]
}

export const num = printNumber(3, 450); // only takes number values as specified in the function definition
console.log(num)