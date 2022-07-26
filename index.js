const express = require('express');
const productsRouter = require("./routes/products")
const mongoose = require("mongoose");
require("dotenv/config");
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.json())

const databaseName = process.env.DATABASE_NAME;
const databaseUserName=process.env.DATABASE_USER_NAME;
const databaseUserPassowrd=process.env.DATABASE_PASSWORD;

mongoose.connect(
    `mongodb+srv://${databaseUserName}:${databaseUserPassowrd}@cluster0.htfpmtw.mongodb.net/${databaseName}?retryWrites=true&w=majority`,
    (e) =>{
        if(e){
            console.log(e)
        }else{
            console.log("Connected to database");
        }
    }
)


app.use('/products',productsRouter);

app.listen(5000,() => {
    console.log("Server is running on port 5000")
})