import express from 'express';
import 'dotenv/config.js';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(cors());

app.listen('7000', ()=> {
    console.log('server listening on port 7000')
})
