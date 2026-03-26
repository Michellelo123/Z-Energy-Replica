import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()



beforeAll(async()=>{
    try{
            await mongoose.connect(process.env.MONGODB_URI)
            console.log("mongoDB test connection successful");
        }catch(err){
            console.log("unable to connect to mongoDB test", err)
        }
}) 
    
// connectDB()

//defining schema and model 
const HomeSchema = new mongoose.Schema({
    description: String
})

const Home = mongoose.model("Home", HomeSchema)

beforeEach(async()=>{
    await Home.deleteMany({})
    await Home.create({description: "Here is data"})
})

afterAll(async()=>{
    await mongoose.connection.dropDatabase()
    await mongoose.connection.close()
})

export default Home