import userModel from '../models/user.js';

export const getUser = async (req, res) => {
    try {
        const user = await userModel.find({username: req.params.user})
        res.status(200).json(user) 
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const getCurUser = async (req, res) => {
    try {
        const user = await userModel.find({username: req.user.username})
        res.status(200).json(user) 
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}