module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, role, msg, page } = req.body || {};

  if (!name || !email) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const text =
`🟡 NEW PARTNER REQUEST

👤 Name: ${name}
📧 Email: ${email}
💼 Role: ${role || "—"}
💬 Message: ${msg || "—"}
🌐 Page: ${page || "—"}`;

  try {
    const tgRes = await fetch(
      `https://api.telegram.org/bot${process.env.TG_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: process.env.TG_CHAT_ID,
          text,
        }),
      }
    );

    const tgData = await tgRes.json();

    if (!tgData.ok) {
      console.error("Telegram API error:", tgData);
      return res.status(500).json({ error: "Telegram API failed", detail: tgData });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Server error:", err);
    return res.status(500).json({ error: "Server error" });
  }
};
