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
<<<<<<< HEAD
const PORT = process.env.PORT || 3000;
//build-in middlewares
=======
>>>>>>> f89a87fceac75cacfa6e5c8eb447f3013786cea7
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
<<<<<<< HEAD
=======
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Adjusted path for serving files
app.use(express.static(path.join(__dirname, '../client/dist')));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/dist', 'index.html'));
});
//
>>>>>>> f89a87fceac75cacfa6e5c8eb447f3013786cea7

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    app.listen(PORT, () => console.log('server is live at port 3000!'));
  } catch (error) {
    console.log(error);
  }
};

start();
