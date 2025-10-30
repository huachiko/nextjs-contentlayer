import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { userId, topic, score, total, questions } = req.body;

    const quiz = await prisma.quiz.create({
      data: {
        userId,
        topic,
        score,
        total,
        questions: {
          create: questions.map((q) => ({
            text: q.text,
            isCorrect: q.isCorrect,
          })),
        },
      },
      include: { questions: true },
    });

    return res.json(quiz);
  }

  if (req.method === "GET") {
    const quizzes = await prisma.quiz.findMany({
      include: { user: true },
      orderBy: { score: "desc" },
    });
    return res.json(quizzes);
  }

  res.status(405).end();
}
