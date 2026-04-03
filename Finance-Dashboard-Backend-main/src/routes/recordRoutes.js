import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Records route working");
});

export default router;