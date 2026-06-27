const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") res.end("hello");
});

server.listen(5000, () => console.log("server listening on port 5000"));
