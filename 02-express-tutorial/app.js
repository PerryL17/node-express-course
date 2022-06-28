const express = require("express");
const path = require("path");
const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./new-public/index.html"));
});

app.get("/sample", (req, res) => {
  res.status(200).send("<h2>This is working</h2>");
});

app.all("*", (req, res) => {
  res.status(404).send("page not found");
});

app.listen(3005, () => {
  console.log("server is listening on port 3005...");
});
