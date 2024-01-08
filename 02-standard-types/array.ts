// Array (empty) without type - it can result to type error or not cuz the elements type are unknown
// if no error occured, the array type is `any`
// else, the array type is `never`
const items = [];
items.push(1);
items.push("two");
items.push(false);

console.log(items);

// The solution is to use type annotation, but there are two ways to do this, generic type and bracket notation (simpler)
// These solutions are used to determine the type of array elements and is equivalent. Explanation below:
// https://stackoverflow.com/questions/36842158/arraytype-vs-type-in-typescript

// Using GENERIC TYPE
const numbersGeneric: Array<number> = []
numbersGeneric.push(1)
numbersGeneric.push(2)
// numbersGeneric.push(true) // type error
console.log(numbersGeneric)

// Using BRACKET NOTATION
const numbersBracket: number[] = []
numbersBracket.push(1)
numbersBracket.push(15)
// numbersBracket.push(true) // type error
console.log(numbersBracket)

// The other way around is to fill the array first and let typescript infer the elements type of the array