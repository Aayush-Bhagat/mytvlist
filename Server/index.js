import mongo from "./mongo.js"
import tvShow from './models/tvShow.js'
import scraper from './scraper.js'
import { findOne } from "domutils"

const connectToMongoDB = async () => {
    await mongo().then(async (mongoose) => {
        try{
            console.log('Connected to MongoDB')
            const newShows = await scraper();

            for(let i = 0; i < newShows.length; ++i){
                const show = new tvShow(newShows[i]);
                if(findOne(show)){
                    continue;
                }
                else{
                    await show.save();
                } 
            }
        } 
        finally{
            console.log('Successfully added all the shows')
            mongoose.connection.close();
        }
    })
}

connectToMongoDB();
