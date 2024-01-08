// Tuple is an array with a fixed number of elements. So, the length cannot be changed
// but the value could. Tuples are nice for small and obvious data structures.

// To define a tuple, we should use type annotation
const tomScore: [string, number] = ['Tom', 87];

// Labelling elements - The reason we do this is to ease what kind of data
// should be placed in tuple elements
const jackScore: [name: string, score: number] = ['Nick Jackson', 85];

// Open-ended tuple - is a tuple where its items have some structure,
// but the number of elements isn't fixed.
const benScores: [name: string, ...scores: number[]] = ['Ben 10', 8, 7, 8, 9];
