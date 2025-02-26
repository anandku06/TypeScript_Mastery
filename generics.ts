// without generics, we have to specify each parameters datatype and return value of functions

function printNumberTrad(item: number, defaultValue: number): [number, number] {
  return [item, defaultValue];
}

export const num = printNumberTrad(3, 450); // only takes number values as specified in the function definition
console.log(num);

// or using any keyword -> not recommended
function printNumberAny(item: any, defaultValue: any): [any, any] {
  return [item, defaultValue];
}

console.log(printNumberAny("234", 65));

// with generics, we only specify the generic for all the datatypes and during defining it we specify the datatype
function printNumberGen<Type>(item: Type, defaultValue: Type): [Type, Type] {
  return [item, defaultValue];
}
// here we defined the type parameter, which will take the required datatype to be used to call this function

console.log(printNumberGen<string>("Hello", "World")); // here in place of the type parameter use your preferred type

console.log(printNumberGen<number>(23, 45)); // for number
console.log(printNumberGen<boolean>(true, false)); // for boolean

// using interface as well for it
interface Dog {
  name: string;
  breed: string;
}

console.log(
  printNumberGen<Dog>(
    { name: "Tom", breed: "Labrador" },
    { name: "Orgy", breed: "Dalmatian" }
  )
);

// one more example -> took an object and returning the keys and it's value randomly
// obj: { [key: string]: T } -> this annotation tells that the parameter obj have keys dynamic in nature and the values are of generic type T
function getRandomKeyValuePair<T>(obj: { [key: string]: T }): {
  key: string;
  value: T;
} {
  const keys = Object.keys(obj);
  const randKey = keys[Math.floor(Math.random() * keys.length)];

  return { key: randKey, value: obj[randKey] };
}

const fruits = {a : "apple", b : "banana", c : "cherry"}
console.log(getRandomKeyValuePair<string>(fruits)) // outputs the random keys and it's 

const numObj = {one : 1, two : 2, three : 3}
console.log(getRandomKeyValuePair<number>(numObj))

// using generics to make a single function of filtering for all types of array 
function filterArray<T>(array : T[], condition: (item: T) => boolean): T[] {
  return array.filter((item) => condition(item))
}

const numArray = [1,2,3,4,5,6,7,8,9,10]
const evenNumArray = filterArray<number>(numArray, (no) => no % 2 === 0)
console.log(evenNumArray)

const stringArr = ["apple", "banana", "cherry", "date"]
const stringWords = filterArray<string>(stringArr, (str) => str.length < 5)

console.log(stringWords)