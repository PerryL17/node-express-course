const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Homepage");
});

app.get("/about", (req, res) => {
  res.status(200).send("about page");
});

app.all("*", (req, res) => {
  res.status(404).send("<h1>Resource Not Found</h1>");
});

app.listen(3000, () => {
  console.log("server is listening on port 3000...");
});
//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.listen
