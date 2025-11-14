import { prisma } from "../../lib/prisma"; 

function toYMD(d) {
  const yy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yy}-${mm}-${dd}`;
}

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const userIdParam = req.query.userId;
  const userId = Number(userIdParam);
  if (!userId) {
    return res.status(400).json({ error: "Missing userId" });
  }

  try {
    
    // 1) HISTORY 
    const recent = await prisma.quizSession.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
      take: 4,
      select: { id: true, topic: true, correct: true, total: true, createdAt: true },
    });

    const history = recent.map((r) => ({
      id: r.id,
      topic: r.topic,
      correct: r.correct,
      total: r.total,
      rate: r.total > 0 ? Math.round((r.correct / r.total) * 100) : 0,
      date: toYMD(new Date(r.createdAt)),
    }));

    
    // 2) LEADERBOARD 
    const grouped = await prisma.quizSession.groupBy({
      by: ["userId"],
      _sum: { correct: true, total: true },
    });

    // fetch user names
    const uids = grouped.map((g) => g.userId);
    const users = uids.length
      ? await prisma.user.findMany({
          where: { id: { in: uids } },
          select: { id: true, displayName: true, username: true },
        })
      : [];
    const userById = new Map(users.map((u) => [u.id, u]));

    const leaderboard = grouped
      .map((g) => {
        const sumCorrect = g._sum.correct ?? 0;
        const sumTotal = g._sum.total ?? 0;
        const avg = sumTotal > 0 ? sumCorrect / sumTotal : 0;
        const u = userById.get(g.userId);
        const name = u?.displayName || u?.username || `User ${g.userId}`;
        return {
          userId: g.userId,
          name,
          sumCorrect,
          sumTotal,
          avgPercent: Math.round(avg * 100),
        };
      })
      .sort((a, b) => b.avgPercent - a.avgPercent)
      .slice(0, 3)
      .map((e, i) => ({
        rank: i + 1,
        userId: e.userId,
        name: e.name,
        avgPercent: e.avgPercent,
        sumCorrect: e.sumCorrect,
        sumTotal: e.sumTotal,
      }));

    
    // 3) STATS (last 3 days for THIS user: total questions generated per day)
    const today = new Date();
    const start = new Date(today);
    start.setDate(today.getDate() - 2); // include today; 3-day window

    const sessionsLast3 = await prisma.quizSession.findMany({
      where: { userId, createdAt: { gte: start } },
      select: { createdAt: true, total: true },
      orderBy: { createdAt: "asc" },
    });

    // init each day with 0 totalQuestions
    const days = [];
    for (let i = 0; i < 3; i++) {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      days.push({ label: toYMD(d), totalQuestions: 0 });
    }
    const idxByKey = new Map(days.map((d, i) => [d.label, i]));

    sessionsLast3.forEach((s) => {
      const key = toYMD(new Date(s.createdAt));
      const idx = idxByKey.get(key);
      if (idx !== undefined) {
        days[idx].totalQuestions += Number(s.total || 0);
      }
    });

    // RESPONSE
    return res.status(200).json({
      history,        // [{ id, topic, correct, total, rate, date }]
      leaderboard,    // [{ rank, userId, name, avgPercent, sumCorrect, sumTotal }]
      stats: days,    // [{ label: 'YYYY-MM-DD', totalQuestions }]
    });
  } catch (e) {
    console.error("activity-stats error:", e);
    return res.status(500).json({ error: "Failed to load activity stats" });
  }
}
