import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();

app.use("/health", (req, res) => {
  res.status(200).json({ message: "OK" });
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});
