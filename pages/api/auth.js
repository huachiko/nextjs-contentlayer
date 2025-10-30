import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { method } = req;

  if (method === "POST") {
    const { action, username, displayName, email, password } = req.body;

    if (action === "signup") {
      const hashed = await bcrypt.hash(password, 10);
      const user = await prisma.user.create({
        data: { username, displayName, email, password: hashed },
      });
      return res.json(user);
    }

    if (action === "signin") {
      const user = await prisma.user.findUnique({ where: { email } });
      if (!user) return res.status(404).json({ error: "User not found" });
      const match = await bcrypt.compare(password, user.password);
      if (!match) return res.status(401).json({ error: "Wrong password" });
      return res.json(user);
    }
  }

  res.status(405).end();
}
