const mysql = require("mysql");
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "test"
});

connection.connect();

const query = (queryArg, cb) => {
    const queryExec = () =>{
        const promise = new Promise((resolve, reject) =>{
            let sql = "SELECT tcd.tour_city_id, tcd.name tour_city_name, tc.country_id, cd.name country_name FROM tour_city_description tcd" +
                        " INNER JOIN tour_city tc ON tc.tour_city_id = tcd.tour_city_id INNER JOIN country c ON c.country_id = tc.country_id" +
                        " INNER JOIN country_description cd ON cd.country_id = c.country_id" + " WHERE cd.country_id LIKE '" + queryArg + "_'";

            connection.query(sql, (err, result) => {
                if(err) {
                    console.log(err);
                    reject(false);
                } else {
                    // console.log("--------------------select--------------------");
                    // console.log(result);
                    // console.log("------------------------------------------");
                    resolve(result);
                }
            });
        });
        return promise;
    }
    queryExec().then((result) => {cb(result);});

}

exports.query = query;