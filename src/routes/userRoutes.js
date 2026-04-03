import express from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

// CREATE user
router.post("/", async (req, res) => {
  const { name, email, role } = req.body;

  const user = await prisma.user.create({
    data: { name, email, role },
  });

  res.json(user);
});

// GET users
router.get("/", async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

export default router;