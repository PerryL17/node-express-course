const sentence = require("./practice2.js");
const { writeFile } = require("fs");
const os = require("os");

const user = os.userInfo().username;
console.log(user);
writeFile(
  "./content/practice.txt",
  `Here is the answer : ${sentence}, ${user}`,
  (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(result);
  }
);
