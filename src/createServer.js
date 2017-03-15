const http = require("http"),
      fileReder = require("./fsTest"),
      reqHandlers = require("./resRequest"),
      resContent = fileReder.getData();

const startServer = () => {
    http.createServer((request, response) => {
        // response.writeHead(200, {"Content-Type":"text/plain"});
        reqHandlers.getPost(request, response);

    }).listen(8888);
}

exports.startServer = startServer;
