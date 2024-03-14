// used express js and mongoose
// used MongoDB
// added Controller,model,routes to write function and defined schema
// need env to connect the db 
require('dotenv').config();
const express = require('express');
const cors = require("cors");
const path = require("path");
const routers = require("./routes/data.router")
const app = express();
const mongoose = require("mongoose")


// Added middleware to parse json
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
const username = process.env.DATABASE_USERNAME;
const password = process.env.DATABASE_PASSWORD;
const uri = process.env.DB_URI
    .replace("<username>", username)
    .replace("<password>", password);
mongoose.connect(uri);
mongoose.connection.once('open', () => {
    console.log('Connected to the database');
});

app.all("/");
app.use("/api", routers)
const port = process.env.PORT || 5000;

// Starting the Server 
app.listen(port, () => {
    console.log(`server connected to ${port}`)
})