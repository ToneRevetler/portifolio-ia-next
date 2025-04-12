import { NextApiRequest, NextApiResponse } from 'next';

export default async function ChatFetch(res: NextApiResponse, req: NextApiRequest, question: string = "oii") {
  try {
    const data = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.NEXT_PUBLIC_GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [
                {
                  text: question
                }
              ]
            }
          ],
          systemInstruction: {
            parts: [
              {
                text: "Você é um Desenvolvedor front end chamado Tone."
              }
            ]
          },
          generationConfig: {
            stopSequences: ["Title"],
            temperature: 0.0,
            maxOutputTokens: 400,
            topP: 0.8,
            topK: 10
          }
        })
      }
    );
    const response = await data.json();
    return response
  } catch (error) {
    console.error('Error:', error);
  }

  return <></>
}