// pages/api/save-quiz.js
import { prisma } from "../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { userId, topic, correct, total } = req.body || {};
  if (!userId || !topic || typeof correct !== "number" || typeof total !== "number") {
    return res.status(400).json({ error: "Missing or invalid fields", got: req.body });
  }

  try {
    const user = await prisma.user.findUnique({ where: { id: Number(userId) } });
    if (!user) return res.status(404).json({ error: "User not found", userId });

    const saved = await prisma.quizSession.create({
      data: { userId: Number(userId), topic, correct, total },
      select: { id: true, topic: true, correct: true, total: true, createdAt: true },
    });

    res.status(200).json(saved);
  } catch (e) {
    console.error("save-quiz error:", e);
    res.status(500).json({ error: "Failed to save quiz result" });
  }
}
