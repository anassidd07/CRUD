import * as mongoose from "mongoose";
const connection = () => {
    // Set up default mongoose connection
    const mongoDB = "mongodb://localhost:27017/crud_db";
    mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

    // Get the default connection
    const db = mongoose.connection;

   
}

export default connection;

// const name = req.body.name
//     const email = req.body.email
//     const password = await bcrypt.hash(req.body.password, 10)