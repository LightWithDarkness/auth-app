import express from 'express';
import mongoose from 'mongoose';
import { config } from 'dotenv';
import authRoutes from './routes/auth.route.js'
import { errorHandler } from './utils/middlewares/errror.handler.js';


config();
const app = express();
app.use(express.json())
app.use('/api/v1/auth',authRoutes)
// middlewares
app.use(errorHandler)


const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI_LOCAL);
    app.listen(3000, () => console.log('server is live at port 3000!'));
  } catch (error) {
    console.log(error);
  }
};

start();
