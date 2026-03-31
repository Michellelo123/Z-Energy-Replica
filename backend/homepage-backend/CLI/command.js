import mongoose from "mongoose"
import {Home} from "../homeSchema.js"
import {data} from "./data.js"
import connectDB from "../mongooseDB.js"


export const listZData= async()=>{
    try{
        await connectDB()
        const Zdata = await Home.find()
        console.log(Zdata.length ? Zdata : "No data found")
    }catch(err){
        console.error("error finding data", err)
    }finally{
        mongoose.connection.close()

    }
} 

export const seedData = async()=>{
     try{
        await connectDB()
        await Home.deleteMany()
        console.log("Cleared existing data")
        const insertedData = await Home.insertMany(data)
        console.log("Data has been inserted")
    }catch(err){
        console.error("Error: Unable to insert data", err)
    }finally{
        mongoose.connection.close()

    }
}