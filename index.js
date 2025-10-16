const express = require("express");
const app = express();

//middleware


//PORT
require("dotenv").config();
const PORT = process.env.PORT || 55000;

//listening

app.listen(PORT , ()=>{
    console.log("the server is running on : " , PORT , " Port"); 
})