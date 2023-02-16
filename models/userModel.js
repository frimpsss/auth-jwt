
import mongoose from "mongoose";

const userModel = new mongoose.Schema({
    email: {
        type: String, 
        required: true
    }, 
    password: {
        type: String, 
        required: true
    }, 
    createdOn: {
        type: Date, 
        required: true
    },
    tokens: {
        type: Array, 
        default: []
    },
    uid:{
        type: String,
        required: true
    }
})

export default mongoose.model("user-model", userModel)