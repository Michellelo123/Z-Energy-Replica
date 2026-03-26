import express from "express"
import Home from "./mongooseDB-test.js"
const app = express()

app.get("/home", async (req, res)=>{
    try{
        const data = await Home.findOne({})
        res.json(data)
    }catch(err){
        console.log("failed to obtain data", err);
    }
})

export default app