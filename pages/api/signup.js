import { prisma } from "../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  const { username, displayName, email, password } = req.body || {};
  if (!username || !displayName || !email || !password) return res.status(400).json({ error: "All fields are required" });

  try {
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) return res.status(409).json({ error: "Email already in use" });

    const created = await prisma.user.create({ data: { username, displayName, email, password } });
    const safeUser = {
      id: created.id,
      username: created.username,
      displayName: created.displayName,
      email: created.email,
      createdAt: created.createdAt,
    };
    res.status(201).json({ user: safeUser });
  } catch (e) {
    console.error("signup error:", e);
    res.status(500).json({ error: "Server error" });
  }
}
