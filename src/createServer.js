const http = require("http"),
      fileReder = require("./fsTest"),
      resContent = fileReder.getData();

const startServer = () => {
    http.createServer((request, response) => {
        console.log(resContent);

        response.writeHead(200, {"Content-Type":"text/plain"});
        response.end(resContent.response.data);

    }).listen(8888);
}

exports.startServer = startServer;
