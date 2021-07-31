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
    Shows: [{
        showId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'shows'
        },
        Watched: {
            type: String, 
            enum: ["Watched", "Watching", "Plan to Watch", "On Hold", "Dropped"],
            default: "Watching"
        },
        userScore: {
            type: Number, 
            min: 0,
            max: 10, 
            default: null
        }
    }],
}, {timestamps: true}
);

userSchema.plugin(uniqueValidator, {message: 'is already taken.'});

const userModel = mongoose.model('User', userSchema);
export default userModel;