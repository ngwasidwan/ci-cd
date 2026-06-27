const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") res.end("hello");
  if(req.url === "/home") res.end('this is the home page')
});

server.listen(5000, () => console.log("server listening on port 5000"));
