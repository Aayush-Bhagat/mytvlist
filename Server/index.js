import mongo from "./mongo.js"
import tvShow from './models/tvShow.js'

const connectToMongoDB = async () => {
    await mongo().then(async (mongoose) => {
        try{
            console.log('Connected to MongoDB')

            const newShow = {
                title: 'Suits',
                description: '',
                years: '2011-2019',
                catergory: 'Legal Drama',
                network: 'USA Network'
            }

            await new tvShow(newShow).save();
        } 
        finally{
            mongoose.connection.close();
        }
    })
}

connectToMongoDB();
