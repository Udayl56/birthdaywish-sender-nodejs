
require('dotenv').config();
const mysql = require('mysql');

// create mysql connection
const conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    
});

// Function to perform the query and return a Promise
function runQuery() {
    return new Promise((resolve, reject) => {
        conn.connect((err) => {
            if (err) {
                console.error('Error connecting to MySQL:', err);
                reject(err);
                return;
            }
            console.log('Connected to MySQL database\n');

            conn.query("SELECT name, email FROM myfrienddateofdirth WHERE DATE_FORMAT(dateofbirth, '%m-%d') = DATE_FORMAT(CURDATE(), '%m-%d')", function (err, result, fields) {
                if (err) {
                    console.error('Error fetching data from database:\n', err);
                    reject(err);
                    return;
                }
                console.log("List of people whose birthday is today.\n",result);
                conn.end();
                console.log("Database connection closed !");
                
                
                resolve(result); // Resolve with the result
            });
            
            

        });
    });
}



module.exports=runQuery;



