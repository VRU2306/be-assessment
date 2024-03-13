require('dotenv').config();
const express = require('express');
const cors = require("cors");
const path = require("path");

const app = express();

// Add middleware to parse json
app.use(express.json());
app.use(cors());

app.all("/");
const port = process.env.PORT || 5000;

// Starting the Server 
app.listen(port, () => {
    console.log(`server connected to ${port}`)
})