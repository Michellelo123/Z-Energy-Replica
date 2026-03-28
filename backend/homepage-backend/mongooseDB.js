import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()


async function connectDB(){
    try{
            await mongoose.connect(process.env.MONGODB_URI)
            console.log("mongoDB connection successful");
        }catch(err){
            console.log("unable to connect to mongoDB", err)
        }
}
    
export default connectDB
