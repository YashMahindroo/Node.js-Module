const fs = require("fs");

const filepath = "text.txt";

fs.readFile(filepath, { encoding: "utf8" }, (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum = sum + i;
}

console.log("Sum: ", sum);
