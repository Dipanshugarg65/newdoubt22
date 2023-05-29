import express from 'express';
import dotenv from 'dotenv'
import Connection from './database/db.js';
import Router from './routes/route.js'
dotenv.config();
import cors from 'cors'
import bodyParser from 'body-parser';
const app = express();
 
app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));

app.use('/',Router); 



const PORT = 7000;

app.listen(PORT, () => console.log(`Server is Running on PORT ${PORT}`));

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;


Connection();
