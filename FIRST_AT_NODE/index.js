const port = 1000;
let http = require("http");
let server = http.createServer((req, res) => {
  res.end("Hello World");
});

server.listen(port, () => {
  console.log(`Server Is Running On Port : ${port} \nTo See OutPut Please Open http://localhost:1000/
    `);
});
