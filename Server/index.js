import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import showRoutes from './routes/shows.js';
import userRoutes from './routes/users.js';
import authRoutes from './routes/auth.js';

const app = express();
app.use(express.json({limit: "30mb", extended: true}))
app.use(express.urlencoded({limit: "30mb", extended: true}))

app.use('/api/shows', showRoutes);
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

app.use(cors())

dotenv.config()

const CONNECTION_URL = process.env.Mongo_URL

const PORT = process.env.PORT || 5001;

const mongoConnect = async() => { 
    await mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error));
    await mongoose.set('useFindAndModify', false);

    return mongoose
}

mongoConnect()

export default mongoConnect
