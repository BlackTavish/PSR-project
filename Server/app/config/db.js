import mongoose from "mongoose";

const urldb = process.env.DB_URL;

const dbConnection = () => {
    mongoose.connect(urldb,(err) => {
        if(err){
            console.log("Nie udało się połączyć.",err);
        }else{
            console.log("Udało się połączyć.");
        }
    });
} 
export default dbConnection;