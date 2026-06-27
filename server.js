const http = require("http");
const fs = require("fs");

fs.readFile("./README.md", (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});
const server = http.createServer((req, res) => {
  if (req.url === "/") res.end("hello");
  if (req.url === "/login") res.end("login route");
});

server.listen(5000, () => console.log("server listening on port 5000"));
