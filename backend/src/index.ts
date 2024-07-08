import express from 'express';
import 'dotenv/config.js';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

mongoose.connect(process.env.MONGO_URI as string)
.then(() => {
    console.log("connected to Mongodb")
}).catch((err) => {
    console.log("unable to connect to Mongodb" + err.message);
})

app.use(cors());

app.listen('7000', ()=> {
    console.log('server listening on port 7000')
})
