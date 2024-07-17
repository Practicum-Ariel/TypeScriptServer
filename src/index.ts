import cors from 'cors';
import express from 'express';
import 'dotenv/config';
import {connect} from './config/db'
connect()

const app = express()
app.use(cors())
app.use(express.json())

import ItemRouter from './routes/ItemRouter'
app.use('/item',ItemRouter)

import UserRouter from './routes/userRouter'
app.use('/user',UserRouter)

app.listen(3355,()=>console.log("### Server Is UP #####"));