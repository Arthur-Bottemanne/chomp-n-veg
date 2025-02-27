require("module-alias/register");
require("dotenv").config();

const fs = require("fs");
const path = require("path");
const mysql = require("mysql2/promise");

async function runSQL() {
    const database = await mysql.createConnection({
        host: process.env.MYSQL_HOST,
        port: process.env.MYSQL_PORT,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        multipleStatements: true,
    });

    try {
        const sqlPath = path.join(
            __dirname,
            "../database/sql/initialize_database.sql"
        );
        const sql = fs.readFileSync(sqlPath, "utf-8");
        await database.query(sql);
        console.log("Database initialized successfully!");
    } catch (err) {
        console.error("Error initializing database:", err);
    } finally {
        process.exit();
    }
}

runSQL();
