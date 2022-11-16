
const mysql = require("mysql");
let mySqlConnection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "Priyacomputer1*",
    database : "studentdb",
    multipleStatements : true,

});

mySqlConnection.connect((err)=> {
    if(!err){
        console.log("Connected");
    }
    else{
        console.log("Connection error");
    }
})

module.exports = mySqlConnection;
