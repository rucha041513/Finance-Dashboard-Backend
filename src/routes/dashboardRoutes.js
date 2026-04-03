import express from "express";
import prisma from "../utils/prisma.js";

const router = express.Router();

// GET Dashboard Summary
router.get("/", async (req, res) => {
  try {
    const records = await prisma.record.findMany();

    const totalIncome = records
      .filter(r => r.type === "income")
      .reduce((sum, r) => sum + r.amount, 0);

    const totalExpense = records
      .filter(r => r.type === "expense")
      .reduce((sum, r) => sum + r.amount, 0);

    const netBalance = totalIncome - totalExpense;

    // Category-wise totals
    const categoryTotals = {};
    records.forEach(r => {
      if (!categoryTotals[r.category]) {
        categoryTotals[r.category] = 0;
      }
      categoryTotals[r.category] += r.amount;
    });

    // Recent transactions (last 5)
    const recent = records.slice(-5);

    res.json({
      totalIncome,
      totalExpense,
      netBalance,
      categoryTotals,
      recent
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;