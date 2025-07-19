import express from 'express';
import connectDB from './config/db.js';
import router from './Routes/authrouts.js';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));


app.use('/api', router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB(); 
});