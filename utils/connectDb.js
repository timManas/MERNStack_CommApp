import mongoose from 'mongoose'
const connection = {}

async function connectDb() {

    if (connection.isConnected) {
        // Use existing DB connection 
        console.log("Already connected ...using existing connection")
        return;
    }
    
    // Connect to DB
    const db = await mongoose.connect(process.env.MONGO_SRV, {
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser:true,
        useUnifiedTopology: true
    })

    console.log("DB Connected")
    connection.isConnected = db.connections[0].readyState;
}

export default connectDb