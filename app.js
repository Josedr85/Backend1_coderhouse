import express from "express";

import homeRouter from "./routes/home.router.js";
import userRouter from "./routes/user.router.js";

import { connectMongoDB } from "./config/db/connect.config.js";

const app = express();
const PORT = 5000;
app.use(express.json());

app.use("/", homeRouter);
app.use("/user", userRouter);

app.use((req, res) => {
  res.status(404).json({ title: "404 - Página no encontrada!" });
});

const startServer = async () => {
  await connectMongoDB();
  app.listen(PORT, () =>
    console.log(`Servidor escuchando en http://localhost:${PORT}`),
  );
};

startServer();
