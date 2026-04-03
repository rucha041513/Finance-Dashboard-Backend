import express from "express";
import userRoutes from "./routes/userRoutes.js";
import recordRoutes from "./routes/recordRoutes.js";

const app = express();
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/records", recordRoutes);

export default app;
