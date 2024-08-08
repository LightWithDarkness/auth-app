import express from 'express';
import mongoose from 'mongoose';
import { config } from 'dotenv';



config();
const app = express();

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    app.listen(3000, () => console.log('server is live at port 3000!'));
  } catch (error) {
    console.log(error);
  }
};

start();
