import { prisma } from "../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  const { email, password } = req.body || {};
  if (!email || !password) return res.status(400).json({ error: "Email and password required" });

  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || user.password !== password) return res.status(401).json({ error: "Invalid credentials" });

    const safeUser = {
      id: user.id,
      username: user.username,
      displayName: user.displayName,
      email: user.email,
      createdAt: user.createdAt,
    };
    res.status(200).json({ user: safeUser });
  } catch (e) {
    console.error("signin error:", e);
    res.status(500).json({ error: "Server error" });
  }
}
