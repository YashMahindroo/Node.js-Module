function heavyComputation() {
  let sum = 0;
  for (let i = 0; i < 1e9; i++) {
    sum += i;
  }
  console.log("Sum:", sum);
}

// Call the function
heavyComputation();

// Demonstrate the event loop is blocked by setting an interval
setInterval(() => {
  console.log("Event loop is blocked");
}, 1000);
