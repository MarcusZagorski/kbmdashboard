import express from "express";
import dotenv from "dotenv";
import pg from "pg";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());
const PORT = process.env.PORT;
const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DB_STRING,
});

app.get("/", async (req, res) => {
  const result = await pool.query("SELECT * FROM expenses;");
  res.json(result.rows);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
