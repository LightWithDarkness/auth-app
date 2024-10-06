import express from 'express';
import mongoose from 'mongoose';
import { config } from 'dotenv';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.route.js';
import userRoutes from './routes/user.route.js';
import { errorHandler } from './utils/middlewares/errror.handler.js';
import cors from 'cors';

config();
const app = express();
const PORT = process.env.PORT || 3000;
//build-in middlewares

app.use(express.json());
app.use(cookieParser());
//middlewares for cors
app.use(
  cors({
    origin: 'https://auth-app-frontend-theta.vercel.app',
    credentials: true,
  })
);
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

//Routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/user', userRoutes);

// middlewares
app.use(errorHandler);
//


const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    app.listen(PORT, () => console.log('server is live at port 3000!'));
  } catch (error) {
    console.log(error);
  }
};

start();
