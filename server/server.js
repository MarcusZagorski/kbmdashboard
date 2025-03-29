import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.json({ success: "/ endpoint working" });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
