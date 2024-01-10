// Enum
// Enum (enumeration) is a type that represents named constant.

// Consider the example below:
//
// if (status === 5) {
//   // do something
// }

// if (status === JobStatus.Completed) { // EASIER TO UNDERSTAND
//   // do something
// }

// TODO - create Level enum type containing High, Medium and Low

// Numeric enum
enum Level {
  High, // 0
  Medium, // 1
  Low, // 2
  Enough = 8
}
// enum range 0 to 2

let level: Level;
level = Level.Low;
console.log(level);
console.log(Level);

// enum values are zero-based auto-incrementing numbers by default.
// numeric enum only accept numeric value with specific range based on the enum
level = 1; // works
// level = 9 // error

// String enum
enum Day {
  Monday = "Mon",
  Tuesday = "Tue",
  Wednesday = "Wed",
  Thursday = "Thu",
  Friday = "Fri",
  Saturday = "Sat",
  Sunday = "Sun",
}
console.log(Day);

let today: Day;
// today = 'Wed' // error
today = Day.Wednesday;
console.log(today);
