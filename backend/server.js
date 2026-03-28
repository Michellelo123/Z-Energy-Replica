import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

import connectDB from "./homepage-backend/mongooseDB.js"
import homeRouter from "./homepage-backend/home.js"

const app = express()
const PORT = process.env.PORT || 5000;


connectDB()
app.use(express.json())
app.use(cors())
app.use("/api/home", homeRouter)
app.listen(PORT, ()=>{
    try{
        console.log(`Listening on server ${PORT}`)
    }catch(err){
        console.log("Failed to run server", err)
    };
})