import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';

dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
  console.log('connected to mongodb');
})
.catch((err) => {
  console.log(err);
})

const app = express() ;

app.use(express.json());

app.listen(3000, () => {
  console.log('Server listening to port 3000');
});

// api route

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

//middleware

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});