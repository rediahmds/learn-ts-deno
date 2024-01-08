// We can use 'any' data type if unsure what type should be given to a var.
// The problem with it is that typescript doesnt do type-checking on anything with type 'any'.

// What if we unsure and still want to obey type-safe code? Well, 'unknown' is the answer.
// 

function add(a: unknown, b: unknown) {
  // type guard: checking data type before doing any operations. it also allow typescript
  // the types of 'a' and 'b'.
  if (typeof a === "number" && typeof b === "number") { 
    return a + b;
  }
  // The reason we do the type guard thing above is that we cannot
  // operate directly on vars with type 'unknown'

  return 0;
}

// ------------------- use case example --------------------
async function getData(path: string): Promise<unknown> {
  const response = await fetch(path);
  return await response.json();
}

type Person = {
  id: string;
  name: string;
};

function isPerson(person: any): person is Person {
  return "id" in person && "name" in person;
}

async function getPerson(id: string): Promise<Person | null> {
  const person = await getData("/people/1");
	// previous code
  // if (person) {
  //   return person; // error cuz person is having 'unknown' type at this state, so we need to check the type first
  // }
  if (person && isPerson(person)) {
    return person;
  }
  return null;
}