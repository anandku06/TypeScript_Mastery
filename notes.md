# TypeScript

- JS with powers. TS is like a more powerful version of JS.
- lets you to do everything that JS does,
- but it does add some extra feats to make your life easier when writing larger and more complex programs.  
    To install TypeScript globally:
    ```bash
        npm i -g typescript
        npm i -g ts-node
    ```
- files for typescript are saved with .ts extension.

## Annotations
- used to specify the datatype of a variable, parameter, function return value and other types of values.
- help developers catch errors early in developement by allowing them to specify what types of values can be assigned toa given variable or passed argument to a function
- syntax : 
    ```typescript
        // let varName: datatype = value;
        let name: string = "Anand";
    ```

## Type Inference
- a feature in TS that allows the compiler to automatically determine the type of variable based on its value. In other words, if you declare a variable without explicitly specifying its type
- TS will try to infer the type based on the value assign to it.

## anyType
- a special **any** type that can be used to represent any type. (default if not provided any type)
- a variable is annotated with any type, TS will allow it to have **any** value and disable all type checking for that variable and its properties.
    - while the *any* type can be useful in certain situations, it should be used sparingly.
    - overuse of this can lead to *untyped code* and make it harder to catch type-related bugs during developement
    - it's generally better to use more specific types whenever possible to get the benefits of TS's type checking.

## Function Parameters Annotations
- are used to specify the expected types of the parameters that a function takes
- TS will give you warning if you provide more or less args than you specify in your params area
- ```typescript
    function name(param : type) {
        // body
    }
    ```
    ### Default Params ###
    - if args are not specified then params can be defaulted during function declaration

    ### Return annotation
    - specifying the type of data the function is supposed to be return

## VOID in TypeScript
- a type that represents the absence of any value
- often used as the return type for functions that don't return a value
- default return type is void for the function without return statement

## NEVER in TypeScript
- used to indicate that a function will not return anything, or a variable can never have a value
- useful for indicating that certain code paths should never be reached
- help catch errors at compile-time instead of run-time
    - Applications:
        * a function that always throws error
        * a function that has an infinite loop
        * a variable that can never have a value

## Arrays in TS
- a type of object that can store multiple values of the same datatype.
- arrays in TS are **typed**, which means you can specify the type of values that array can hold
    - 2 ways to initialise an array:
        * using the square brackets[] to indicate an array of a specific type
        * using the generic ```Array<type>``` notation to indicate an array of a specific type

## Multi-Dimensional Arrays
- an array that contains other arrays as its elements. 
- defined using the same notation as one-dimensional arrays, but with nested square brackets

## Objects in TS
- a structured data type that represents a collection of properties, each with a key and an associated value
- properties of an object can have specific types, and the object itself can be annoted with a type, often defined using an interface or a type alias.
- uses structural typing, meaning that the shape of an object (its structure or properties) is what matters for type compatibility
- Syntax -> 'type varName (annotation/types) = {property : value}'
```typescript
    // this is how a object looks like
    const person: {firstName: string, lastName: string, age: number} = {
        firstName : "Anand",
        lastName : "Kumar",
        age : 20
    }

```

## TypeAliases in TypeScript
- a way to create a new name for an existing type.
- allows you to define a custom type that refers to another type and give it a more meaningful or descriptive name
- defined using the type keyword followed by the name of the alias, an equal sign(=), and the type it refers to
```typescript
    type Person = {
        name : string,
        age : number
    }
```

## Optional Properties
- make a certain property optional in an object type by adding a question mark(?) after the property name.
```typescript
    type Person = {
        name : string,
        age : number,
        email? : string
    }
```
- ### readonly Property : 
    makes any object's property readonly i.e it can't be modified

## Intersection Types
- a way to combine multiple types into a single type that includes all the properties and methods of each constituent type.
- is denoted by the *&* symbol.

## Unions
- used to declare a type that can have one of several possible types.
- useful when we want to allow a variable or parameter to accept **multiple type**
- syntax for defining a union type in TS uses the pipe symbol **(|)**
- Applications
    - in variables
     ```typescript
        let myVar: number | string; 
     ```

    - with function parameters as well
     ```typescript
        function foo(param: string | string[]){}
     ```

    - with interfaces as well
     ```typescript
        interface MyInterface{
            myProp: string | number;
        }
     ```

## Literal Types
- allows you to specify a value that can only be **one specific literal value**
- means that a variable with a literal type can only have one specific value and no other
```typescript
    let varName: "value1" | "value2" | "value3";
    // no value other than these is accepted
```

## Tuples in TS
- a type that represents an array with a **fixed number of elements**, where each element can have a different type
- order of the types in the tuple definition corresponds to the order of the values in the actual array
- similar to arrays, but they have a specific structure and can be used to model sequences with known lengths
```typescript
    let arr: [string, number] = ["string", 123]
```