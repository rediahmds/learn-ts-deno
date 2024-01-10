// Type alias

// Why do we need it?

const tomScore: { name: string; score: number } = {
  name: "Tom",
  score: 70,
};
const bobScore: { name: string; score: number } = {
  name: "Bob",
  score: 80,
};
const janeScore: { name: string; score: number } = {
  name: "Jane",
  score: 90,
};

// too many repetitive codes, right?
// Wouldnt it be more beautiful if the above code rewriten like:
// const tomScore: Score = { name: "Tom", score: 70 };
// const bobScore: Score = { name: "Bob", score: 80 };
// const janeScore: Score = { name: "Jane", score: 90 };

// Type alias is a name that refers to another type.
// Syntax: type TypeAliasName = ExistingType;

// == Type Alias for primitive type - useless, better directly use the primitive type
// Create a type alias for a string called FirstName.
type FirstName = string;
const myName: FirstName = "Redi";
// const haha: FirstName = true // error

// Create a type alias for a number called PersonScore
type PersonScore = number;
const myScore: PersonScore = 90;
// const yourScore: PersonScore = '99' // error

// == Type Alias for functions
// Syntax: type TypeAliasName = (paramName1: paramType1, ...) => ReturnType;

type Log = (message: string, date?: Date) => void;

const log: Log = (message: string) => {
  console.log(`${message}`);
};

log("Halo!");

// Type Alias for objects
type Score = {
  name: string;
  score: number;
  pass?: boolean;
  log: Log
};

const abiScore: Score = {
  name: "Tom",
  score: 70,
  log
};
const benScore: Score = {
  name: "Bob",
  score: 80,
  pass: true,
  log
};
const seanScore: Score = {
  name: "Jane",
  score: 90,
  pass: true,
  log
};

seanScore.log(seanScore.name)