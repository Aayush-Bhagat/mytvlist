import userModel from '../models/user.js';

export const getUser = async (req, res) => {
    try {
        const user = await userModel.findOne({username: req.params.user})
        const userData = {
            "username": user.username,
            "_id": user._id,
            "Shows": user.Shows, 
        }
        res.status(200).json(userData) 
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const getCurUser = async (req, res) => {
    try {
        const user = await userModel.findOne({username: req.user.username})
        const userData = {
            "username": user.username,
            "_id": user._id,
            "Shows": user.Shows, 
        }
        res.status(200).json(userData)
    } catch (error) {
        res.status(404).json({message: error.message})
    }

}