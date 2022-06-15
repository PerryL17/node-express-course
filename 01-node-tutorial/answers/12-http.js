const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to the homepage");
  }
  if (req.url === "/about") {
    res.end("This is our history");
  }
  res.end(`
  <h1>"Nope!"</h1>
  <p>"page not found"</p>
  <a href="/">back home</a>`);
});
server.listen(3000);
