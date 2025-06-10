import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const URI_DB = process.env.URI_DB || "";
const PORT = process.env.PORT;

export const connectDB = async() =>{
    try{
        await mongoose.connect(URI_DB)
        console.log("Conectado a MongoDB")

    }catch(err){
        console.log("Error al conectar a MongoDB",err)
    }
}