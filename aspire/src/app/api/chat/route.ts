import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Add GEMINI_API_KEY to your .env.local file
const apiKey = process.env.GEMINI_API_KEY || '';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!apiKey) {
      return NextResponse.json(
        { text: "I'm currently offline. Please ask the admin to add the GEMINI_API_KEY to the server." },
        { status: 200 }
      );
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Format history for Gemini API
    let history = messages.slice(0, -1).map((msg: any) => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.content }],
    }));

    // Gemini strictly requires the first message in history to be from a 'user'
    while (history.length > 0 && history[0].role === 'model') {
      history.shift();
    }

    const chat = model.startChat({
      history,
      systemInstruction: "You are AspireMint AI, an advanced, professional AI assistant for AspireMint, a top-tier digital marketing agency. Keep your answers concise, persuasive, and helpful. You help clients scale on Amazon, Flipkart, and Google.",
    });

    const latestMessage = messages[messages.length - 1].content;
    const result = await chat.sendMessage(latestMessage);
    const responseText = result.response.text();

    return NextResponse.json({ text: responseText });
  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      { text: "Sorry, I encountered a temporary error. Please try again." },
      { status: 500 }
    );
  }
}
