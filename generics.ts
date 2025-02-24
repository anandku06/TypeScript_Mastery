// without generics, we have to specify each parameters datatype and return value of functions

function printNumberTrad(item: number, defaultValue: number): [number, number]{
    return [item, defaultValue]
}

export const num = printNumberTrad(3, 450); // only takes number values as specified in the function definition
console.log(num)

// or using any keyword -> not recommended
function printNumberAny(item: any, defaultValue: any) : [any, any]{
    return [item, defaultValue];
}

console.log(printNumberAny("234", 65))


// with generics, we only specify the generic for all the datatypes and during defining it we specify the datatype
function printNumberGen<Type>(item: Type, defaultValue: Type): [Type, Type]{
    return [item, defaultValue]
}
// here we defined the type parameter, which will take the required datatype to be used to call this function

console.log(printNumberGen<string>("Hello", "World")) // here in place of the type parameter use your preferred type