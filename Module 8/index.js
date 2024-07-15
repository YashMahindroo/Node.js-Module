// Node.js program to demonstrate the
// Process 'uncaughtException' Event

// Importing the modules
const process = require("process");
var fs = require("fs");

// Independent Block which will execute
setTimeout(() => {
  console.log("\n");
  console.log("Greetings from GeeksforGeeks");
}, 1000);

// Event 'uncaughtException'
process.on("uncaughtException", (error, source) => {
  fs.writeSync(process.stderr.fd, error, source);
});

// Throwing an exception
nonexistentFunc();

console.log("This Block of code will not run");
