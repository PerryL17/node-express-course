const { readFile, writeFile } = require("fs");

readFile("./content/subfolder/first.txt", "ut8f", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
});
