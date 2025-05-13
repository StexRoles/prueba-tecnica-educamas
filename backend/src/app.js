import express from 'express';
import authRoutes from './routers/auth.js';
import dotenv from 'dotenv';

import cors from "cors";

// Configurar CORS

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});