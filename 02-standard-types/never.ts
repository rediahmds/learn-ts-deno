const keepLogging = (message: string) => {
  while (true) {
    console.log(message);
  }
};

function keepLogging2(message: string) {
  while (true) {
    console.log(message);
  }
}

// void vs. never
// void happens when a function did not return any value.
// never is happens when a function will not exit normally.
