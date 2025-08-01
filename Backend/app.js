import express from 'express';
import cors from 'cors'
import cookieParser from 'cookie-parser'; 
import userRouter from './routes/user.routes.js';

const app = express();

app.use(cors({
    origin : process.env.CORS_ORIGIN,
}))

app.use(express.json({
    limit : "16kb"
}))
app.use(express.urlencoded({
    extended : true, // object inside object
    limit : '16kb'
}))

app.use(cookieParser());

//routes :
app.use('/api/v1/users',userRouter)

export {app}