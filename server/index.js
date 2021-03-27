import express from 'express';
import bodyParse from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import Router from './routes/posts.js'
dotenv.config()
const PORT = 5000;

const app = express();

app.use(bodyParse.json());


app.use('/posts' , Router);

app.use(cors());
app.listen(PORT , ()=>{ console.log(` Server on http://localhost:${PORT}`)})
