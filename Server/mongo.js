import tvShowModel from './models/tvShow.js'
import scraper from './scraper.js'
import { findOne } from "domutils"
import mongoConnect from "./index.js"

const connectToMongoDB = async () => {
    await mongoConnect().then(async (mongoose) => {
        try{
            console.log('Connected to MongoDB')
            const newShows = await scraper();

            for(let i = 0; i < newShows.length; ++i){
                const show = await tvShowModel.findOne({title: newShows[i].title})
                console.log(show)
                show.description = newShows[i].image
                await show.save()
            }
        } 
        finally{
            console.log('Successfully added all the shows')
            mongoose.connection.close();
        }
    })
}

connectToMongoDB();
