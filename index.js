const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

app.use(express.urlencoded({extended :true}));
app.use(express.json());
app.use(cors({
    origin:['http://127.0.0.1:5173', 'http://localhost:5173', ]
}));

const dataRouters = require('./Router/router');
app.use("/data" ,  dataRouters);

app.listen( 4000 , ()=> console.log("Server is started in port in 4000"));