const mysql = require("mysql2");

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    connectionLimit: 10,
});

const query = (queryString, parameters = []) => {
    return new Promise((resolve, reject) => {
        pool.query(queryString, parameters, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
};

module.exports = {
    query,
    pool,
};
