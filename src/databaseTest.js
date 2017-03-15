const mysql = require("mysql");
const connection = mysql.createConnection({
    host: "host",
    user: "user",
    password: "password",
    database: "database"
});

connection.connect();

let sql = "select * from form";
connection.query(sql, (err, result) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log("--------------------select--------------------");
    console.log(result);
    console.log("------------------------------------------");
});

connection.end();