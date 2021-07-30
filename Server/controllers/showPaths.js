import tvShowModel from '../models/tvShow.js'

export const getAllShows = async (req, res) => {
    try {
        const allShows = await tvShowModel.find()
        res.header("Access-Control-Allow-Origin", "*");
        res.status(200).json(allShows)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const getShow = async (req, res) => {
    try {
        const show = await tvShowModel.findById(req.params.id)
        res.status(200).json(show)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}