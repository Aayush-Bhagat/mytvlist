import userModel from '../models/user.js';
import bcrypt from 'bcrypt';

export const registerUser = async(req, res) => {
    try {
        //generating password
        const salt = await bcrypt.genSalt(10);
        const hashPass = await bcrypt.hash(req.body.password, salt);

        //creating new user
        const newUser = new userModel({
            username: req.body.username,
            email: req.body.email,
            password: hashPass,
        })

        const user = await newUser.save()
        res.status(200).json(user)
    } catch (error) {
        res.status(409).json({message: error.message})
        console.log(error)
    }
}