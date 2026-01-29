export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const { name, email, role, msg } = req.body || {};

    if (!name || !email || !role) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const text =
`🟡 New Partner Request

👤 Name: ${name}
📧 Email: ${email}
🧩 Role: ${role}

💬 Message:
${msg ? msg : "—"}`;

    const tgRes = await fetch(`https://api.telegram.org/bot${process.env.TG_BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: process.env.TG_CHAT_ID,
        text,
      }),
    });

    if (!tgRes.ok) {
      const errText = await tgRes.text();
      return res.status(500).json({ error: "Telegram error", details: errText });
    }

    return res.status(200).json({ ok: true });
  } catch (e) {
    return res.status(500).json({ error: "Server error" });
  }
}
