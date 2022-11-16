
const express = require("express");
const route = require("./route/route");
const app = express();
const bodyParser = require("body-parser")
const mySqlConnection = require("./dbConnection.js")

app.use(bodyParser.json());


app.use('/',route);

app.listen( 4000, ()=>{console.log("App is running on Port 4000")})