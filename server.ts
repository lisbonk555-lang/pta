import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for Peace Resolution Chat
  app.post("/api/chat", async (req, res) => {
    const { messages } = req.body;
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Invalid messages format" });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.json({
        text: "Greetings! The 24/7 African Peace & Conflict Resolution Assistant is currently in demo Mode. To enable live AI-powered traditional conflict resolution and restorative counseling, please configure your **GEMINI_API_KEY** in the Secrets panel in the AI Studio UI (Settings > Secrets).\n\nHere are some time-tested traditional African resolution steps you can take:\n\n1. **Amanbode (Opening the Forum):** Call for a calm, private, and mutually respected neutral ground where all parties can speak without fear.\n2. **Begwa (Enlisting the Elders):** Invite highly respected local elders, chiefs, or neutral third parties to moderate the dialogue, ensuring customary respect.\n3. **Kasasie (Truth-Speaking):** Allow each side to fully voice their grievances and pain without interruption. Acknowledging emotional hurt is vital for healing.\n4. **Mpata (Restorative Pacification):** Focus on restoring mutual relationships and repairing the social fabric of the community, rather than purely assigning blame or punishment.\n5. **Peace Tower Covenant:** Pledge to uphold collective peace for the sake of your family, town, nation, or continent. Peace is the foundation of all African progress!"
      });
    }

    try {
      const ai = new GoogleGenAI({
        apiKey: apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });

      // Format conversation history for gemini-3.5-flash
      const formattedHistory = messages.map(msg => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.content }]
      }));

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: formattedHistory,
        config: {
          systemInstruction: `You are the "Peace Tower of Africa AI Resolution Helper" (also known as the "24/7 African Peace & Conflict Resolution Assistant").
Your mission is to provide wise, peaceful, diplomatically balanced, and restorative counsel for conflict resolution related issues at all levels:
1. Family disputes (marital misunderstandings, property, inheritance, parent-child harmony).
2. Town & Chieftaincy grievances (reconciliation, custom alignment, communal land, unity).
3. National stability questions (democracy, rule of law, patriotic unity, non-violent elections, constitutional respect).
4. Continental integration & Pan-Africanism (preventing borders/regional polarization, promoting collaboration, cross-border commerce safety).

You must also act as a guide on the "Peace Tower of Africa" platform itself—which is dedicated to verbal mediation, bilateral trade, and honoring premium peace heroes (such as Ghana Thank You Awards nominees: Prof. Naana Opoku-Agyemang, H.E. Lordina Mahama, HRM Lady Julia Osei Tutu, JSC Sophia A. B. Akuffo, Togbe Afede XIV, H.E. John Agyekum Kufuor, Sir Sam Jonah, and more).

Adopt a deeply respectful, warm, traditional, objective African tribal-council elder or senior diplomat tone. Offer practical, verbal verbal-restorative actions. If queried about things totally unrelated to peace, counseling, or conflict resolution, elegantly steer back to reconciliation and community harmony.`
        }
      });

      res.json({ text: response.text });
    } catch (error: any) {
      console.error("Gemini API Error:", error);
      res.status(500).json({ error: error.message || "Something went wrong in the African Conflict Resolution engine." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
