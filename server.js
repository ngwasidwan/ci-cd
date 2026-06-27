const http = require("http");
const fs = require("fs");
const crypto = require("crypto");

fs.readFile("./README.md", (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});
const server = http.createServer((req, res) => {
  if (req.url === "/login") res.end("this is the login page");
  if (req.url === "/") res.end("this is the home page");
  if (req.url === "/logout") res.end("this is the logout page");
});

server.listen(5000, () => console.log("server listening on port 5000"));
