import express from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

// CREATE record
router.post("/", async (req, res) => {
  try {
    const { amount, type, category, date, notes, userId } = req.body;

    const record = await prisma.record.create({
      data: { amount, type, category, date: new Date(date), notes, userId },
    });

    res.json(record);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET all records
router.get("/", async (req, res) => {
  try {
    const records = await prisma.record.findMany();
    res.json(records);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE record
router.delete("/:id", async (req, res) => {
  try {
    await prisma.record.delete({
      where: { id: Number(req.params.id) },
    });
    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;