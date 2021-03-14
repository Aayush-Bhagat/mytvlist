import mongo from "./mongo.js"
import tvShow from './models/tvShow.js'
import scraper from './scraper.js'

const connectToMongoDB = async () => {
    await mongo().then(async (mongoose) => {
        try{
            console.log('Connected to MongoDB')
            const newShows = await scraper();

            for(let i = 0; i < newShows.length; ++i){
                await new tvShow(newShows[i]).save();
            }
        } 
        finally{
            mongoose.connection.close();
        }
    })
}

connectToMongoDB();
