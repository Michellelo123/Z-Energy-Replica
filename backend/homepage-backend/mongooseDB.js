import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()


export default async function connectDB(){
    try{
            await mongoose.connect(process.env.MONGODB_URI)
            console.log("mongoDB connection successful");
        }catch(err){
            console.log("unable to connect to mongoDB", err)
        }
}
    

