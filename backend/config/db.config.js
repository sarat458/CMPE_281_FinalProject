//const mysql = require('mysql');
import mysql from 'mysql'
//CReate mysql Connection
const dbConn = mysql.createConnection({
    host:'av-db.cdtjl1suhdq3.us-east-1.rds.amazonaws.com',
    user:'admin',
    password:'12345678',
    database: 'AVCloud'
})

dbConn.connect(function(error){
    if(error) throw error;
    console.log("Database Connected Successfully")
})

//module.exports = dbConn;
export default dbConn ;