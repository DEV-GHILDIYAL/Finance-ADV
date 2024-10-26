const mongoose = require('mongoose')

const connectDB = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URL)
        console.log("Connected to Database")
    } catch (error) {
        console.log("Error connecting to database")
    }
}
module.exports = connectDB;