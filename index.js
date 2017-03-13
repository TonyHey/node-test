const http = require("http");
const fs = require("fs");
const resContent = {};

fs.readFile("test.json", (err, data) =>{
    if(err) {
        return console.error(err);
    }
    resContent.response = JSON.parse(data);
});

http.createServer((request, response) => {
    console.log(resContent);
    response.writeHead(200, {"Content-Type":"text/plain"});

    response.end(resContent.response.data);

}).listen(8888);

console.log("Server running at localhot:8888");