let score: number; // Variable type annotation
score = 10;
// score = 'ten'; // Type error
console.log(score);

// FUNCTION TYPE ANNOTATION - args and return value annotation
function add(a: number, b?: number): number {
  return a + (b || 0);
}

add(34)

// How to annotate types in anonymous function?
const minus = function (a: number, b: number): number {
  return a - b;
};

// How to annotate types in arrow function?
const multiply = (a: number, b: number): number => a * b;


