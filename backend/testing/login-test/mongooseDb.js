import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcrypt";

dotenv.config({ path: `${process.cwd()}/.env` });

beforeAll(async () => {
  try {
    await mongoose.connect(process.env.MONGODB_TESTURI);
    console.log("mongoDB test connection successful");
  } catch (err) {
    console.log("unable to connect to mongoDB test", err);
  }
});

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", UserSchema);

beforeEach(async () => {
  await User.deleteMany({});
  const hashedPassword = await bcrypt.hash("password123", 10);
  await User.create({ email: "test@test.com", password: hashedPassword });
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
});

export default User;