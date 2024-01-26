//C:\Users\User\Desktop\nfticker\app\utils\database.js
import mongoose from "mongoose"

const connectDB = async() => {
  try {
    await mongoose.connect("mongodb+srv://mikamin1025:mHitoshi1@cluster0.wfr2xpx.mongodb.net/nftickerDB?retryWrites=true&w=majority")
    console.log("Success: Connected to MongoDB");
  } catch (error) {
    console.log("Failure: Unconnected to MongoDB");
    throw new Error();
  }
}

export default connectDB;