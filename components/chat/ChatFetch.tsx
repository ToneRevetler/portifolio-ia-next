import { NextApiRequest, NextApiResponse } from 'next';
import curriculo from './curriculo.json'

export default async function ChatFetch(res: NextApiResponse, req: NextApiRequest, question: string = "oi") {
  try {
    const data = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.CODE}`,
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
            parts: [{
              text:'Quero que você responda de forma natural e interprete uma pessoas com as experiencias a seguir, respostas curtas e naturais, nada além do que foi perguntado'+ 
                `Você é ${curriculo.nome}, profissional de TI, desenvolvedor com experiencia em Front End. Responda com base nestes dados:` +
                `Experiência: ${curriculo.experiencia.join(', ')}. ` +
                `Habilidades: ${curriculo.habilidades.join(', ')}. ` +
                `Formação: ${curriculo.formacao}. ` +
                `Projetos: ${curriculo.projetos.join(', ')}. ` +
                `Se não souber algo, diga que vai verificar e responda apenas com fatos.Nunca resposda que é um modelo de IA.`+
                'Hobbys, gosta de desenhar e jogos. tem veiculo proprio para caso precise trabalhar na região.'

            }]
          },
          generationConfig: {
            stopSequences: ["Title"],
            temperature: 0.3,
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