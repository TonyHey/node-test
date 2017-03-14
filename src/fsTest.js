const resContent = {},
      fs = require("fs");

const getData = () => {
    fs.readFile("./test/test.json", (err, data) =>{
        if(err) {
            return console.error(err);
        }
        resContent.response = JSON.parse(data);
    });
    return resContent;
}

exports.getData = getData;