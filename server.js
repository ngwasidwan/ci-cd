const http = require("http");
const fs = require("fs");

fs.readFile("./README.md", (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});
const server = http.createServer((req, res) => {
  if (req.url === "/home") res.end("this is the home page");
});

server.listen(5000, () => console.log("server listening on port 5000"));
