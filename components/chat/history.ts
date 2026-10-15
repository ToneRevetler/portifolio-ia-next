export type ChatTurn = { role: 'user' | 'model'; text: string };

export const MAX_HISTORY_MESSAGES = 12;
const MAX_HISTORY_CHARACTERS = 12_000;

// Keep complete, recent exchanges. Never send application errors as model replies.
export function normalizeHistory(value: unknown): ChatTurn[] {
  if (!Array.isArray(value) || value.length > MAX_HISTORY_MESSAGES || value.length % 2 !== 0) {
    throw new Error('Histórico inválido.');
  }
  const turns: ChatTurn[] = value.map((turn, index) => {
    const role = index % 2 === 0 ? 'user' : 'model';
    if (!turn || typeof turn !== 'object' || turn.role !== role ||
        typeof turn.text !== 'string' || !turn.text.trim() ||
        turn.text.length > (role === 'user' ? 500 : 6000)) {
      throw new Error('Histórico inválido.');
    }
    return { role, text: turn.text.trim() };
  });
  let size = turns.reduce((total, turn) => total + turn.text.length, 0);
  while (size > MAX_HISTORY_CHARACTERS && turns.length) {
    size -= turns[0].text.length + turns[1].text.length;
    turns.splice(0, 2);
  }
  return turns;
}
