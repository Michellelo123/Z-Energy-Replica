import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()


console.log("uri:", process.env.MONGODB_URI);
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
    title: String,
    subtitle: String,
    info: String
})
const Home = mongoose.model("Home", HomeSchema, "card-info")

beforeEach(async()=>{
    await Home.deleteMany({})
    await Home.create({
        title: "Title 1",
        subtitle: "Subtitle 1",
        info: "Info 1"
    })
})

afterAll(async()=>{
    await mongoose.connection.dropDatabase()
    await mongoose.connection.close()
})

export default Home