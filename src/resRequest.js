const url = require("url"), query = require("querystring");

const getPost = (request, response) => {
    //definne httpHeader
    response.writeHead(200, {"Content-Type": "text/json"});

    //estimate the GET/POST request
    if(request.method === "GET") {
        let params = [];
        params = url.parse(request.url, true).query;
        response.write(JSON.stringify(params));
    } else {
        let postData = "";
        console.log("post method");
        request.addListener("data", postChunk => postData += postChunk);
        request.addListener("end", () => {
            let params = query.parse(postData);
            response.write(JSON.stringify(params));
        });
    }
    response.end();
}

exports.getPost = getPost;