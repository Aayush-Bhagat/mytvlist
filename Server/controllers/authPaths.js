import userModel from '../models/user.js';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config()


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

        const payload = {
            user: {
                id: user.id,
                username: user.username
            }
        };

        jwt.sign(
            payload,
            process.env.ACCESS_TOKEN_SECRET, {},
            (err, token) => {
                if (err) throw err;
                res.status(200).json({
                    token
                });
            }
        );
    } catch (error) {
        res.status(500).json({message: error.message})
        console.log(error)
    }
}

export const loginUser = async (req, res) => {
    try {
        const user = await userModel.findOne({username: req.body.username})
        !user && res.status(404).json("user not found")

        const validPassword = await bcrypt.compare(req.body.password, user.password)
        !validPassword && res.status(400).json("wrong password")

        const payload = {
            user: {
                id: user.id,
                username: user.username
            }
        };

        jwt.sign(
            payload,
            process.env.ACCESS_TOKEN_SECRET, {},
            (err, token) => {
                if (err) throw err;
                res.status(200).json({
                    token,
                    username: user.username,
                });
            }
        );
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}