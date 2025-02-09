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
        a function that always throws error
        a function that has an infinite loop
        a variable that can never have a value