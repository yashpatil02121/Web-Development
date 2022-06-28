const http = require('http');
const fs = require('fs');
const fileContent = fs.readFileSync('66_html.html');

//creating a server
const server = http.createServer((req,res) =>{
    res.write(200, {'Content-type':'text/html'});
    res.end(fileContent);
})


server.listen(80, '127.0.0.1', ()=>{
    console.log("Listening on port 80")
})