import userModel from '../models/user.js';
import tvShowModel from '../models/tvShow.js'

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

export const addShow = async (req, res) => {
    try {
        const user = await userModel.findOne({username: req.user.username})
        user.Shows.push({
            showId: req.params.id,
        })
        user.save()
        res.status(200).json(user)
    } catch (error){
        res.status(404).json({message: error.message})
    }
}