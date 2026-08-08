// package imports
import express from "express";
import dotenv from 'dotenv';
import colors from 'colors';
import cors from 'cors';
import morgan from 'morgan';
// files imports
import connectDB from "./config/db.js";
// routes imports
import testRoutes from './routes/testRoutes.js';
import authRoutes from './routes/authRoutes.js'
import erroMiddleware from "./middlewares/erroMiddleware.js";

// Dot ENV config
dotenv.config();

// mongodb connection
connectDB();

// rest object
const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// routes 
app.use('/api/v1/test', testRoutes);
app.use('/api/v1/auth', authRoutes);

//validation middleware
app.use(erroMiddleware);

//port
const PORT = process.env.PORT || 3000;

// listen
app.listen(3000, () => {
  console.log(`Node Server Running In ${process.env.DEV_MODE} Mode on port on ${PORT}`
  );
});