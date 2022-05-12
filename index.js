const express =  require('express');
require('dotenv').config();
const router  = require("./routes/userRoutes");
const connect = require('./config/db');
const bodyParser = require('body-parser');
// connect mongodb database
connect();

const app = express();
app.use(bodyParser.json());
app.use("/",router);


const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log('Your app is running'); 
});

//mongodb+srv://kirtimansingh:<password>@cluster0.wlown.mongodb.net/myFirstDatabase?retryWrites=true&w=majority