const url = require("url"), query = require("querystring"), queryDB = require("./databaseTest");

const getPost = (request, response) => {
    //definne httpHeader
    response.writeHead(200, {"Content-Type": "text/json"});

    const queryStr = "1";
    queryDB.query(queryStr, function(queryData) {
        if (queryData) {
            //estimate the GET/POST request
            if(request.method === "GET") {
                let params = [];
                params = url.parse(request.url, true).query;
                response.write(JSON.stringify(queryData));
            } else {
                let postData = "";
                console.log("post method");
                request.addListener("data", postChunk => postData += postChunk);
                request.addListener("end", () => {
                    let params = query.parse(postData);
                    response.write(JSON.stringify(params));
                });
            }
        } else {
            response.write("retrive data failed");
        }

        response.end();
    });
}

exports.getPost = getPost;