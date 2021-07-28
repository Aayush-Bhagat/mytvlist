import mongoose from 'mongoose'
import uniqueValidator from "mongoose-unique-validator"

const userSchema = new mongoose.Schema({
    username: {
        type: String, 
        unique: true, 
        required: [true, "can't be blank"], 
        match: [/^[a-zA-Z0-9]+$/, 'is invalid'], 
        index: true,
        min: 3,
        max: 25
    },
    email: {
        type: String,  
        unique: true, 
        required: [true, "can't be blank"], 
        match: [/\S+@\S+\.\S+/, 'is invalid'], 
        index: true
    },
    password: {
        type: String, 
        required: true, 
        min: 6
    },
    profilePic: {
        type: String,
        default: ""
    },
    watched: {
        type: Array, 
        default: []
    },
    watching: {
        type: Array, 
        default: []
    },
    watchlist: {
        type: Array, 
        default: []
    }
}, {timestamps: true}
);

userSchema.plugin(uniqueValidator, {message: 'is already taken.'});

const userModel = mongoose.model('User', userSchema);
export default userModel;