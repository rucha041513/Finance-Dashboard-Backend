import express from "express";
import userRoutes from "./routes/userRoutes.js";
import recordRoutes from "./routes/recordRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";

const app = express();

// ✅ Middleware (VERY IMPORTANT)
app.use(express.json());

// ✅ Root route (optional)
app.get("/", (req, res) => {
  res.send("Finance Dashboard Backend Running ");
});

// ✅ Routes
app.use("/api/users", userRoutes);
app.use("/api/records", recordRoutes);
app.use("/api/dashboard", dashboardRoutes);

// ✅ 404 Handler (optional but good)
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// ✅ Error Handler (important)
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({
    error: "Internal Server Error",
    details: err.message,
  });
});

export default app;