import express from 'express';
import bodyParse from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose'
import Router from './routes/posts.js'
dotenv.config()
const PORT = process.env.PORT || 5000;

const app = express();

app.use(bodyParse.json({limit:"30mb" , extended : true}));
app.use(bodyParse.urlencoded({limit:"30mb" , extended : true}));
app.use(cors());

app.use('/posts' , Router);

mongoose.connect(process.env.DATABASE, 
    { useNewUrlParser: true, useUnifiedTopology: true  } ,
    ()=>{ console.log('DB connected')}
)


app.listen(PORT , ()=>{ console.log(` Server on http://localhost:${PORT}`)})
