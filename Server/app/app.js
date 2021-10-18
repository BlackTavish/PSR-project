import express from 'express';
import 'dotenv/config'; 
import bodyParser from 'body-parser';
import cors from 'cors';
import dbConnection from './config/db.js';
import routes from './api/routes.js';

const app = express();
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());
app.use(cors());
dbConnection();

const port = process.env.PORT || 3001;

routes(app);

app.get('/',(req,res) => {
    res.send("Hello");
    
})

app.listen(port,() => {
    console.log(`Serwer uruchomił się pomyślnie. http://localhost:${port}`);
})

