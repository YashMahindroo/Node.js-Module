// Using the fs module through import
const fs = require("fs");

// The following file does not exists
const file = "file.txt";

// This should throw an error
// using the Error-first callback
const ErrorFirstCallback = (err, data) => {
  if (err) {
    return console.log("Error: " + err);
  }
  console.log("Function successfully executed");
};

// Executing the function
fs.readFile(file, ErrorFirstCallback);
