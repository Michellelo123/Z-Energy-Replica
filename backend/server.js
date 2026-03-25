import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()
const app = express
const PORT = process.env.PORT || 5000;
app.use(cors())
app.use(express.json())


app.listen(PORT, ()=>{
    try{
        console.log(`Listening on server ${PORT}`)
    }catch(err){
        console.log("Failed to run server", err)
    };
})