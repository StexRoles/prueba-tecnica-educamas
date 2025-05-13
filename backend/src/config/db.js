import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "autenticacion_usuarios",
  password: "password",
  port: 5432,
});

export default pool;
