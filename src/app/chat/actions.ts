'use server'
import { headers } from 'next/headers';

import ChatFetch from "../../../components/chat/ChatFetch"
import { normalizeHistory, type ChatTurn } from '../../../components/chat/history';

const MAX_MESSAGE_LENGTH = 500;
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_REQUESTS = 5;

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

type ChatActionResult =
  | { ok: true; text: string }
  | { ok: false; error: string };

const globalRateLimit = globalThis as typeof globalThis & {
  toneChatRateLimit?: Map<string, RateLimitEntry>;
};

const rateLimit = globalRateLimit.toneChatRateLimit ?? new Map<string, RateLimitEntry>();
globalRateLimit.toneChatRateLimit = rateLimit;

function canMakeRequest(clientId: string) {
  const now = Date.now();

  if (rateLimit.size > 1_000) {
    for (const [key, entry] of rateLimit) {
      if (entry.resetAt <= now) rateLimit.delete(key);
    }
  }

  const current = rateLimit.get(clientId);

  if (!current || current.resetAt <= now) {
    rateLimit.set(clientId, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }

  if (current.count >= RATE_LIMIT_REQUESTS) return false;

  current.count += 1;
  return true;
}

export async function handleSubmit(message: string, history: unknown = []): Promise<ChatActionResult> {
  if (typeof message !== 'string') {
    return { ok: false, error: 'Envie uma pergunta válida.' };
  }

  const normalizedMessage = message.trim();

  if (!normalizedMessage || normalizedMessage.length > MAX_MESSAGE_LENGTH) {
    return {
      ok: false,
      error: `A pergunta deve ter entre 1 e ${MAX_MESSAGE_LENGTH} caracteres.`,
    };
  }

  let conversation: ChatTurn[];
  try {
    conversation = normalizeHistory(history);
  } catch {
    return { ok: false, error: 'Não consegui recuperar o contexto. Atualize a página para iniciar uma nova conversa.' };
  }

  const requestHeaders = await headers();
  const forwardedFor = requestHeaders.get('x-forwarded-for')?.split(',')[0]?.trim();
  const clientId = forwardedFor ?? requestHeaders.get('x-real-ip') ?? 'unknown';

  if (!canMakeRequest(clientId)) {
    return {
      ok: false,
      error: 'Muitas perguntas em pouco tempo. Tente novamente em um minuto.',
    };
  }

  try {
    const responseText = await ChatFetch(normalizedMessage, conversation);
    return { ok: true, text: responseText };
  } catch (error) {
    console.error('Erro ao responder no chat:', error);
    return {
      ok: false,
      error: 'O assistente está indisponível agora. Você pode entrar em contato pelo LinkedIn ou e-mail.',
    };
  }

}
