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
  origin: 'https://carmark.netlify.app/login',
  credentials: true,
  sameSite:"none"
}));


app.use('/api', router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB(); 
});