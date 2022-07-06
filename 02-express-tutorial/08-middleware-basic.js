const express = require("express");
const app = express();
//req => middleware => res

const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  //next has to happen to pass on or we can create a res.send
  next();
};

app.get("/", logger, (req, res) => {
  res.send("Home");
});

app.get("/about", logger, (req, res) => {
  res.send("About");
});

app.listen(3000, () => {
  console.log("server is listening on port 3000...");
});
