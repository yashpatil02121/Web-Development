// console.log("Hello World");

const http = require('http');

const hostname = '127.0.0.1';
const port = 30001;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>CSS Grid</title>
      <style>
          .container{
              display: grid;
              /* grid-template-columns: 300px 100px 100px; */
              grid-template-columns: 300px auto 100px;
              /* grid-template-columns: 1fr 4fr 1fr; */
          }
          .item{
              /* height: 100px; */
              /* width: 100px; */
              background-color: red;
              border: 2px solid black;
              margin: 32px;
          }
      </style>
  </head>
  <body>
      <div class="container">
      <div class="item">This is Item-1</div>
      <div class="item">This is Item-2</div>
      <div class="item">This is Item-3</div>
      <div class="item">This is Item-4</div>
      <div class="item">This is Item-5</div>
      <div class="item">This is Item-6</div>
      <div class="item">This is Item-7</div>
      <div class="item">This is Item-8</div>
      <div class="item">This is Item-9</div>
  </div>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});