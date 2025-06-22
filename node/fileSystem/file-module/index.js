const fs = require("node:fs");

console.log("first");

const fileContent = fs.readFileSync("./sample.txt", "utf8");
console.log(fileContent);

console.log("second");

fs.readFile("./sample.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log(data);
});
console.log("third");
fs.writeFile("./sample.txt", "This is a new content. ", { flag: "a" }, (err) => {
  if (err) {
    console.error("Error writing file:", err);
    return;
  }
  console.log("File written successfully");
  fs.readFile("./sample.txt", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file after write:", err);
      return;
    }
    console.log("Updated file content:", data);
  });
});

