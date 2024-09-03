import express from 'express';
import mongoose from 'mongoose';
import { config } from 'dotenv';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.route.js';
import userRoutes from './routes/user.route.js';
import { errorHandler } from './utils/middlewares/errror.handler.js';
import path from 'path';

config();
const __dirname = path.resolve();
const app = express();
app.use(express.static(path.join(__dirname, 'client/dist')));
app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, 'client/dist/index.html'));
})
app.use(express.json());
app.use(cookieParser());
//Routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/user', userRoutes);

// middlewares
app.use(errorHandler);

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    app.listen(3000, () => console.log('server is live at port 3000!'));
  } catch (error) {
    console.log(error);
  }
};

start();
