
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export interface BlessingResponse {
  blessing: string;
  poeticNote: string;
}

export const generateBlessingResponse = async (userName: string, message: string): Promise<BlessingResponse | null> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `User ${userName} says to the couple Ayush and Ekanshi: "${message}". Generate a sweet, traditional, and warm response blessing the couple for their wedding in 2026. Return as JSON.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            blessing: { type: Type.STRING, description: "A warm thank you and acknowledgement" },
            poeticNote: { type: Type.STRING, description: "A short 2-line poetic blessing in Hindi or English" }
          },
          required: ["blessing", "poeticNote"]
        }
      }
    });

    return JSON.parse(response.text.trim());
  } catch (error) {
    console.error("Gemini Error:", error);
    return null;
  }
};
