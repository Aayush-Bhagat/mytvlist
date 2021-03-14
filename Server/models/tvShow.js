import mongoose from 'mongoose'

const tvShowSchema = mongoose.Schema({
    title: String,
    description: String, 
    runtime: String,
    category: String,
    network: String,
});

export default mongoose.model('shows', tvShowSchema);