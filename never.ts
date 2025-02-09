function throwError(msg: string): never{
    throw new Error(msg)
}
// here this function will always throw an error and ncver return a thing, so used 'never' keyword

function infiniteLoop(): never{
    while(true){}
}
// here also this function will stuck in this loop forever never returning a thing, so used 'never' keyword

let x: never;

x = infiniteLoop();
// here as well the var 'x' has the datatype of never so gave a function that never returns a value

