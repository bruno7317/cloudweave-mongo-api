import mongoose from "mongoose"

export const connectToMongo = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost:27017/cloudweave')
        console.log(`MongoDB connected.`)
    } catch (error) {
        console.error(`MongoDB connection error: ${error}`)
        process.exit(1)
    }
}