const mongoose = require("mongoose");


const URI = process.env.MONGODB_URI;

const connectDb = async () =>{
    try {
        await mongoose.connect(URI);  
        console.log(`connection Successfully to mongoDB`); 
    } catch (error) {
        console.log("MongoDB error");
        process.exit(0);
    }
}

module.exports = connectDb;