import mongoose from "mongoose";

export default async function connectDB() {
    let isConnected = false
    if (isConnected) {
        return "DB Is Already Connected"
    }
    try {
        let connected = mongoose.connect(process.env.MONGODB_URI);
        console.log("DB Connected Succefully")
        if (connected.connection.readyState == 1) {
            return isConnected = true
        }
    } catch (error) {
        console.error(error);
    }
}