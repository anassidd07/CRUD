import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";

//userschema
const userschema = mongoose.Schema({
    
    name: String,
    email: String,
    password: String,
})

//auto increment
autoIncrement.initialize(mongoose.connection);
userschema.plugin(autoIncrement.plugin,'user');


const user = mongoose.model('user',userschema);

export default user;
