const express = require("express");
const app = express();

const consoleLog = (req, res, next) => {
  console.log("Hey World!");
  next();
};

module.exports = consoleLog;
