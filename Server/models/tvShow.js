import mongoose from 'mongoose'

const tvShowSchema = mongoose.Schema({
    title: String,
    description: String, 
    years: String,
    category: String,
    network: String,
    image: String,
});

const tvShowModel = mongoose.model('shows', tvShowSchema);
export default tvShowModel;