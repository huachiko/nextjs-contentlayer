import { prisma } from "../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { userId, displayName } = req.body;
    if (!userId || !displayName) {
      return res.status(400).json({ error: "Missing userId or displayName" });
    }

    const updated = await prisma.user.update({
      where: { id: Number(userId) },
      data: { displayName },
    });

    return res.status(200).json({ success: true, updated });
  } catch (e) {
    console.error("Failed to update display name:", e);
    return res.status(500).json({ error: "Failed to update display name" });
  }
}
