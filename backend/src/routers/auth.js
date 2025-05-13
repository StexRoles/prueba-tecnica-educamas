import express from 'express';
import { loginUser, registerUser } from '../controllers/authController.js';

const router = express.Router();

// Registro de usuario
router.post('/register', registerUser);

// Login
router.post('/login', loginUser);

export default router;