import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import postRoutes from './routes/posts.js';
const app = express();
app.use('/posts', postRoutes);
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());
const CONNECTION_URL = 'mongodb+srv://spraja13_db_user:Sujal2005@cluster0.ujux8nl.mongodb.net/?appName=Cluster0';
const PORT = process.env.PORT || 5001;
mongoose.connect(CONNECTION_URL)
.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
.catch((error) => console.log(error.message));
