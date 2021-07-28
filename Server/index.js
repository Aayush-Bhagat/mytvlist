import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import showRoutes from './routes/shows.js';
import userRoutes from './routes/users.js';
import authRoutes from './routes/auth.js';

const app = express();

app.use(express.json({limit: "30mb", extended: true}))
app.use(express.urlencoded({limit: "30mb", extended: true}))

app.use('/api/shows', showRoutes);
app.use('/api/user', userRoutes);
app.use('/api/register', authRoutes);

app.use(cors)

const CONNECTION_URL = 'mongodb+srv://canary:lolme123@mytvlist.jyzcv.mongodb.net/TVShows?retryWrites=true&w=majority'

const PORT = process.env.PORT || 5000;


await mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
.catch((error) => console.log(error));

await mongoose.set('useFindAndModify', false);
