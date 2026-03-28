import express from "express"
import mongoose from "mongoose"

// import Home from "./mongooseDB.js"
//defining schema and model 
const router = express.Router()
const HomeSchema = new mongoose.Schema({
    title: String,
    subtitle: String,
    info: String
})

const Home = mongoose.model("Home", HomeSchema, "card-info")

router.get("/", async (req, res)=>{
    try{
        const data = await Home.find()
        res.json(data)
    }catch(err){
        console.log("failed to obtain data", err);
    }
})

export default router